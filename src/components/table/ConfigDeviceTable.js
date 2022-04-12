import React, { Component } from 'react'
import $ from 'jquery';
import * as API from '../../Api/Api';
import { connect } from 'react-redux'
import stringResource from '../../Resource/en-us';


let DataTable = require('datatables.net');

let ConfigATFDeviceListData, table
let textValidation = true;
class ConfigATFTable extends Component {
    constructor(props) {
        super(props);
        this.hide = ''
        this.ConfigATFTableHandler = this.ConfigATFTableHandler.bind()
        this.submitTableForm = this.submitTableForm.bind()
        ConfigATFDeviceListData = props.tableData;
        this.userName = ''
    }
    componentDidMount() {
        this.ConfigATFTableHandler();
    }
    ConfigATFTableHandler = () => {
        this.userName = localStorage.getItem('userName')
        table = $('#dataTableConfigATF').DataTable({
            scrollY: 200,
            scrollCollapse: true,
            data: ConfigATFDeviceListData,
            searching: false,
            // lengthChange: false,
            // bInfo: false,
            "fnDrawCallback": function (oSettings) {
                if ($('#dataTableConfigATF tr').length < 11) {
                    $('.dataTables_paginate').hide();
                }
            },
            initComplete: function () {
                this.hide = $(this).find('.dataTables_empty').length !== 0;
                if ($(this).find('.dataTables_empty').length !== 0) {
                    $('.dataTables_info').hide();
                    $('.dataTables_length').hide();
                    $('.saveButton').hide();
                }
            },
            columns: [
                // TODO: Dynamic Select Dropdown Connection Control, as of now Static so commenting this


                {
                    'data': 'deviceId',
                    render: function (deviceId) {
                        return deviceId = `<input type="text" autoComplete = 'off' class='deviceId NonEditable'name="deviceId" value=${deviceId} readonly />`
                    }
                },
                {
                    'data': 'deviceName',
                    render: function (deviceName) {
                        return deviceName = `<input type="text" autoComplete = 'off' class='deviceName NonEditable'name="deviceName" value=${deviceName} readonly />`
                    }
                },
                {
                    'data': 'deviceType',
                    render: function (deviceType) {
                        return deviceType = `<input type="text" autoComplete = 'off' class='deviceType NonEditable'name="deviceType" value=${deviceType} readonly />`
                    }
                },
                {
                    'data': 'groupId',
                    render: function (groupId) {
                        return groupId = `<input type="text" autoComplete = 'off' class='groupId' name="groupId" value=${groupId.split('__')[0]} /> __${localStorage.getItem('userName')}`
                    }
                },


                {
                    'data': 'connectionControl',
                    render: function (connectionControl) {
                        let elementToSetDefaultDropdownValue = document.getElementsByClassName('connectionControl');
                        if (elementToSetDefaultDropdownValue.value !== null) {
                            elementToSetDefaultDropdownValue.value = connectionControl;
                        }
                        return connectionControl = `<select name="connectionControl" class='connectionControl' id='connectionControl'>
                        <option value="User" ${connectionControl === 'User' ? 'selected' : null}>User</option>
                        <option value="ATF" ${connectionControl === 'ATF' ? 'selected' : null}>ATF</option>
                      </select>`
                    }
                },

                // {
                //     'data': 'connectionControl',
                //     render: function (connectionControl) {
                //         return connectionControl = `<input type="text" autoComplete = 'off' class='connectionControl NonEditable'name="connectionControl" value=${connectionControl} readonly />`
                //     }
                // },
                {
                    'data': 'version',
                    render: function (version) {
                        return version = `<input type="text" autoComplete = 'off' class='version NonEditable' name="version" value=${version} readonly />`
                    }
                },
                {
                    'data': 'ipAddress',
                    render: function (ipAddress) {
                        return ipAddress = `<input type="text" autoComplete = 'off' class='ipAddress NonEditable' name="ipAddress" value=${ipAddress} readonly />`
                    }
                },
                {
                    'data': 'ssid',
                    render: function (ssid) {
                        return ssid = `<input type="text" autoComplete = 'off' class='ssid NonEditable' name="ssid" value=${ssid} readonly />`
                    },
                    visible: false
                },
                {
                    'data': 'connectionStatus',
                    render: function (connectionStatus) {
                        return connectionStatus = `<input type="text" autoComplete = 'off' class='connectionStatus NonEditable' name="connectionStatus" value=${connectionStatus} readonly />`
                    },
                },
            ],
            columnDefs: [{
                orderable: true,
                targets: [1, 2, 3, 4, 5]
            }]
        });
    }

    submitTableForm = () => {
        let deviceGroupData = [];
        const formDataForDeviceList = JSON.parse(JSON.stringify(table.$('input,select').serializeArray())) // store json object
        let i, j, slicingDeviceList, slicingDeviceByIndex = 8;
        for (i = 0, j = formDataForDeviceList.length; i < j; i += slicingDeviceByIndex) {
            slicingDeviceList = formDataForDeviceList.slice(i, i + slicingDeviceByIndex);
            let combineDeviceListObject = {};
            const letterNumber = /^[0-9a-zA-Z]+$/;
            // eslint-disable-next-line no-loop-func
            slicingDeviceList.map(combineKeyValue => {
                if (combineKeyValue.name === "groupId") {
                    if (!(combineKeyValue.value.match(letterNumber))) {
                        textValidation = false;
                    }
                    combineDeviceListObject[combineKeyValue.name] = combineKeyValue.value + '__' + this.userName;
                } else {
                    combineDeviceListObject[combineKeyValue.name] = combineKeyValue.value;
                }
                return false
            })
            deviceGroupData.push(combineDeviceListObject)
        }
        // return
        if (textValidation) {
            API.configureDevices(deviceGroupData).then(response => {
                let storeUpdation = {
                    showSuccessMsg: true,
                    successMsg: response.statusMessage,
                    responseType: 'success'
                }
                this.props.successMsgHandler(storeUpdation);
            }).catch(error => {
                console.log('ATF Error', error)
            })
        } else {
            let storeUpdation = {
                showSuccessMsg: true,
                successMsg: 'Please use valid characters',
                responseType: 'error'
            }
            this.props.successMsgHandler(storeUpdation);
        }

    }

    render() {
        const resourceFileNaming = stringResource.configDevice;

        return (
            <div>
                <table id="dataTableConfigATF" className="display">
                    <thead>
                        <tr>
                            <th>{resourceFileNaming.configDeviceThDeviceId}</th>
                            <th>{resourceFileNaming.configDeviceThDeviceName}</th>
                            <th>{resourceFileNaming.configDeviceThDeviceType}</th>
                            <th>{resourceFileNaming.configDeviceThGroupId}</th>
                            <th style={{ display: 'none' }} >{resourceFileNaming.configDeviceThVersion}</th>
                            <th style={{ display: 'none' }} >{resourceFileNaming.configDeviceThIpAddress}</th>
                            <th style={{ display: 'none' }}>{resourceFileNaming.configDeviceThSsid}</th>
                            <th style={{ display: 'none' }} >{resourceFileNaming.configDeviceThConnectionStatus}</th>
                            <th style={{ display: 'none' }}>{resourceFileNaming.configDeviceThConnectionControl}</th>
                        </tr>
                    </thead>
                </table>
                <button type="submit" className="btn btn-primary saveButton" onClick={() => this.submitTableForm()}>Save</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(ConfigATFTable)
