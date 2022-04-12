import React, { Component } from "react";
import Input from "./Input";
import trafficDropdown from "./FormFields/configTrafficFormFields";
import * as API from "../../Api/Api";
import { connect } from "react-redux";

export class DynamicForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msgType: props.msgType,
      buttonName: props.formArea.buttonName,
      groupId: props.groupId,
      postEndpoint: props.postEndpoint,
      formStructure: props.formArea.formStructure,
      formValid: props.formArea.formValid,
      showResponse: false,
      showResponseData: "",
    };
    this.inputEventHandler = this.inputEventHandler.bind();
  }

  componentDidMount() {
    let { trafficType } = this.props;
    if (this.state.msgType === "configureTraffic") {
      if (trafficType === "external") {
        this.setState({
          formStructure: trafficDropdown.external,
        });
      }
      if (trafficType === "internal") {
        this.setState({
          formStructure: trafficDropdown.internal,
        });
      }
      if (trafficType === "p2p") {
        this.setState({
          formStructure: trafficDropdown.p2p,
        });
      }
    }
  }

  OrderHandler = (event) => {
    event.preventDefault();
    const finalFormData = {};
    let { formStructure, msgType, groupId } = this.state;
    let { trafficId, trafficType } = this.props;
    for (const key in formStructure) {
      if (Object.hasOwnProperty.call(formStructure, key)) {
        finalFormData[key] = formStructure[key].value;
      }
    }
    // return
    let url = "";
    if (msgType === "configureTraffic") {
      finalFormData["groupId"] = groupId;
      finalFormData["trafficId"] = trafficId;
      finalFormData["trafficType"] = trafficType;
      url = `${finalFormData["trafficType"]}/${finalFormData["traffic"]}`;
      API.configureTraffic(url, finalFormData)
        .then((response) => {
          this.updateStoreToast(true, response.statusMessage, "success");
        })
        .catch((error) => {
          console.log("Error in Dynamic Form", error);
          this.updateStoreToast(true, "Unable to Configure Traffic", "error");
        });
    } else if (msgType === "login") {
      API.login(finalFormData)
        .then((response) => {
          localStorage.setItem("userName", finalFormData.userName);
          localStorage.setItem("token", response.token);
          localStorage.setItem("refresh_token", response.refresh_token);
          if (response.hasOwnProperty("userDetails")) {
            window.location.href = "/dashboard";
          }
        })
        .catch((error) => {
          this.updateStoreToast(true, "Invalid UserName and Password", "error");
          console.log("Error in Dynamic Form", error);
        });
    } else if (msgType === "configureGroup") {
      finalFormData["groupId"] = groupId;
      API.configureSSID(finalFormData)
        .then((response) => {
          this.updateStoreToast(true, response.statusMessage, "success");
        })
        .catch((error) => {
          console.log("Error in Dynamic Form", error);
          this.updateStoreToast(true, "Unable to Configure Group", "error");
        });
    }
    // API[msgType](url, finalFormData).then(response => {
    //     this.setState({
    //         showResponse: true,
    //         showResponseData: response.statusMessage
    //     })
    // }).catch(error => {
    //     console.log('Error in Dynamic Form', error)
    // })
  };

  updateStoreToast(showSuccessMsg, successMsg, responseType) {
    let storeUpdating = {
      showSuccessMsg,
      successMsg,
      responseType,
    };
    this.props.successMsgHandler(storeUpdating);
  }
  checkValidity(value, rules) {
    let isValid = true;
    isValid = (rules.required ? value.trim() !== "" : true) && isValid;
    isValid = rules.minLength
      ? value.length <= rules.minLength && isValid
      : isValid;
    isValid = rules.maxLength
      ? value.length >= rules.maxLength && isValid
      : isValid;
    return isValid;
  }
  inputEventHandler = (event, InputIdentifier) => {
    let updateFormStructure = { ...this.state.formStructure };
    let updatedFormEachElement = { ...updateFormStructure[InputIdentifier] };
    updatedFormEachElement.value = event.target.value;

    if (this.state.msgType === "configureTraffic") {
      const formFieldUpdate = [
        "youtube",
        "browsing",
        "ping",
        "ftpUl",
        "ftpDl",
        "atf_captivePortal",
        "iperfServerInternal",
        "iperfClient",
        "iperfServer",
        "vlc_multicast",
        "atf_internal_tcp",
        "atf_multiBrowsing",
        "atf_voip",
        "iperfTcpServerp2p",
        "iperfTcpClientp2p",
        "p2p_ping",
        "atf_internal_ftp",
        "atf_video_streaming",
      ].includes(updatedFormEachElement.value);
      if (formFieldUpdate) {
        updateFormStructure = {
          ...trafficDropdown[updatedFormEachElement.value],
        };
      }
    }
    updatedFormEachElement.valid = this.checkValidity(
      updatedFormEachElement.value,
      updatedFormEachElement.validation
    );
    updatedFormEachElement.touched = true;
    let formValidation = true;
    for (const key in updateFormStructure) {
      if (Object.hasOwnProperty.call(updateFormStructure, key)) {
        const element = updateFormStructure[key];
        if (
          element.elementConfig.label ===
          updatedFormEachElement.elementConfig.label
        ) {
          updateFormStructure[key] = updatedFormEachElement;
        }
        formValidation = updateFormStructure[key].valid && formValidation;
      }
    }
    updateFormStructure[InputIdentifier] = updatedFormEachElement;
    this.setState({
      formStructure: updateFormStructure,
      formValid: formValidation,
    });
  };
  render() {
    const formElementArray = [];
    let { formStructure, formValid, buttonName } = this.state;
    for (const key in formStructure) {
      if (Object.hasOwnProperty.call(formStructure, key)) {
        if (key === "traffic") {
          formElementArray.unshift({
            id: key,
            config: formStructure[key],
          });
        } else {
          formElementArray.push({
            id: key,
            config: formStructure[key],
          });
        }
      }
    }
    return (
      <div>
        <form onSubmit={this.OrderHandler} autoComplete="off">
          {formElementArray.map((formElement) => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              onchange={(event) =>
                this.inputEventHandler(event, formElement.id)
              }
            />
          ))}

          <button
            type="submit"
            disabled={!formValid}
            className={
              "submitButton " +
              (formValid ? "text-success-clr " : "text-muted ")
            }
          >
            {" "}
            {buttonName || "Save"}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showSuccess: state.showSuccess,
    successMsg: state.successMsg,
    responseType: state.responseType,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    successMsgHandler: (msg) =>
      dispatch({ type: "successMsgHandler", value: msg }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DynamicForms);
