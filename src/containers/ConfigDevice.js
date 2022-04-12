import React, { Component } from 'react'
import Loader from '../components/Loader'
import { TabContent } from 'reactstrap';
import * as API from '../Api/Api';
import stringResource from '../Resource/en-us'
import ConfigATFTable from '../components/table/ConfigDeviceTable';
import { connect } from 'react-redux';
export class ConfigDevice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            configATFResponse: [],
            configATFResponseHandler: false,
            loader: false,
            tableDataAPI: 'getDevices',
        };
    }

    componentDidMount() {
        this.ATFConfiguration();
    }
    ATFConfiguration() {
        this.setState({
            loader: true
        })
        API.getDevices().then(resp => {
            this.setState({
                configATFResponse: resp.deviceList || [],
                configATFResponseHandler: true,
                loader: false,
                tableDataAPI: 'getDevices',
            });
        }).catch(error => {
            this.updateStoreToast(true, error.message, 'error');
        })

    }
    updateStoreToast(showSuccessMsg, successMsg, responseType) {
        let storeToastMsgUpdate = {
            showSuccessMsg,
            successMsg,
            responseType
        }
        this.props.successMsgHandler(storeToastMsgUpdate);
    }
    render() {
        let { loader, configATFResponseHandler, tableDataAPI, configATFResponse } = this.state;
        const resourceFileNaming = stringResource.configDevice;

        return (
            <div className='Main-wrapper'>
                <h2 className='page-header'>{resourceFileNaming.configDevicePanelName}</h2>
                <div className='col-lg-12 mainContentSection'>
                    <div className='contentArea'>
                        <TabContent>
                            {loader && <Loader />}
                            {configATFResponseHandler && <ConfigATFTable tableListAPIHandler={tableDataAPI} tableData={configATFResponse} />}
                        </TabContent>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        showSuccess: state.showSuccess,
        successMsg: state.successMsg,
        responseType: state.responseType
    };
}
const mapDispatchToProps = dispatch => {
    return {
        successMsgHandler: (msg) => dispatch({ type: 'successMsgHandler', value: msg }),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ConfigDevice)
