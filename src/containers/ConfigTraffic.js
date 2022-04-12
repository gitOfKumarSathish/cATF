import React, { Component } from 'react'

import DynamicForms from '../components/dynamicFormsSection/DynamicForms'
import * as API from '../Api/Api';
import { TabContent, TabPane } from 'reactstrap';
import stringResource from '../Resource/en-us';
import { connect } from 'react-redux';

let totalTrafficsConfigured;
export class ConfigTraffic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'ATF1',
            msgType: 'configureTraffic',
            trafficId: 0,
            trafficTypeHandler: false,
            addTrafficEnable: false,
            groupTrafficHandler: false,
            trafficResponseHandler: false,
            groupId: '',
            trafficType: '',
            trafficConfigResponse: '',
            addTraffic: [],
            formArea: {
                postEndpoint: 'ValueSocket',
                formValid: false
            },
            groupList: []
        };
        this.trafficHandler = this.trafficHandler.bind()
        this.groupIdHandler = this.groupIdHandler.bind()
        this.addTrafficHandler = this.addTrafficHandler.bind()
        this.deleteTrafficHandler = this.deleteTrafficHandler.bind()
        this.userName = localStorage.getItem('userName')
    }

    componentDidMount() {
        this.trafficConfiguration();
    }
    trafficConfiguration() {
        let groupIdCollection = []
        API.getConfiguredGroups().then(resp => {
            if (resp.groups.length > 0) {
                (resp.groups).map((eachGroup) => {
                    if (eachGroup !== 'unknown' && eachGroup !== 'unknown__alethea') {
                        return groupIdCollection.push(eachGroup)
                    } else if (resp.groups.length === 1 && (eachGroup === 'unknown' || eachGroup === 'unknown__alethea')) {
                        this.updateStoreToast(true, 'Please Configure Groups', 'error');
                    }
                    return true
                });
                this.setState({
                    groupList: groupIdCollection || [],
                })
            } else {
                this.setState({
                    groupList: [],
                })
            }
        }).catch(error => {
            this.updateStoreToast(true, error.message, 'error');
        });
    }

    addTrafficHandler = () => {
        this.setState({
            addTraffic: [...this.state.addTraffic, ''],
            groupId: this.state.groupId,
            trafficId: this.state.trafficId + 1,
            addTrafficEnable: false,

        }, () => {
            this.handleAddTrafficEnableAsync()
        })
        API.getConfiguredTraffics(this.state.groupId).then(response => {
            const configTrafficList = response
            if (configTrafficList.hasOwnProperty('Traffics')) {
                totalTrafficsConfigured = configTrafficList.Traffics.length
            }
            if (response.hasOwnProperty('Traffics')) {
                this.setState({
                    trafficConfigResponse: configTrafficList.Traffics,
                    trafficResponseHandler: true
                });
            } else {
                this.setState({
                    trafficResponseHandler: false
                });
            }

        }).catch(error => {
            this.updateStoreToast(true, error.message, 'error');
        });
    }

    handleAddTrafficEnableAsync = async () => {
        this.setState({
            addTrafficEnable: true,
            // trafficType: 'internal'
        })
    }

    trafficHandler = (event, index) => {
        totalTrafficsConfigured = this.state.trafficConfigResponse.length
        this.setState({
            trafficId: ''
        })
        if ((event.target.value).length > 0) {
            this.setState({
                trafficTypeHandler: false,
                trafficType: event.target.value,
            }, () => {
                this.trafficHandlerLoadDataAsync(index, totalTrafficsConfigured);
            });
        }
    }
    deleteTrafficHandler = (event, trafficId) => {
        let data = {
            groupId: this.state.groupId,
            trafficId: trafficId.toString(),
        }
        API.deleteTraffic(data).then(response => {
            this.updateStoreToast(true, response.statusMessage, 'success');
            // TODO: container should be reloaded not the page.
            API.getConfiguredTraffics(this.state.groupId).then(response => {
                const configTrafficList = response
                if (configTrafficList.hasOwnProperty('Traffics')) {
                    totalTrafficsConfigured = configTrafficList.Traffics.length
                }
                if (response.hasOwnProperty('Traffics')) {
                    this.setState({
                        trafficConfigResponse: configTrafficList.Traffics,
                        trafficResponseHandler: true
                    });
                } else {
                    this.setState({
                        trafficResponseHandler: false
                    });
                }

            }).catch(error => {
                this.updateStoreToast(true, error.message, 'error');
            });
        }).catch(error => {
            this.updateStoreToast(true, error.message, 'error');
        });
    }
    trafficHandlerLoadDataAsync = async (index, totalTrafficsConfigured) => {
        this.setState({
            trafficTypeHandler: true,
            trafficId: index + totalTrafficsConfigured
        })
    }

    groupIdHandler = groupId => {
        this.props.HoldGroupIdFromTraffic(groupId)
        setTimeout(() => {
            this.setState({
                groupTrafficHandler: true,
            })
        }, 500);
        this.setState({
            groupTrafficHandler: false,
            addTrafficEnable: false,
            groupId: groupId
        })
        API.getConfiguredTraffics(groupId).then(response => {
            const configTrafficList = response
            if (configTrafficList.hasOwnProperty('Traffics')) {
                totalTrafficsConfigured = configTrafficList.Traffics.length
            }
            if (response.hasOwnProperty('Traffics')) {
                this.setState({
                    trafficConfigResponse: configTrafficList.Traffics,
                    trafficResponseHandler: true
                });
            } else {
                this.setState({
                    trafficResponseHandler: false
                });
            }

        }).catch(error => {
            this.updateStoreToast(true, error.message, 'error');
        });
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
        const { trafficConfigResponse, addTrafficEnable, trafficId, activeTab, groupList, trafficResponseHandler, addTraffic, trafficTypeHandler, groupTrafficHandler } = this.state;
        const resourceFileNaming = stringResource.configTraffic;
        return (
            <div className='Main-wrapper configTraffic'>
                <h2 className='page-header'>{resourceFileNaming.configTrafficPanelName} {this.props.storeGroupIdFromTraffic}</h2>
                <div className='col-lg-12 mainContentSection'>
                    <div className='col-lg-12 contentArea'>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId='ATF1' className='GroupBtn'>
                                {(groupList.length === 0) ? 'No groups configured' : (groupList).map((eachGroup, index) => {
                                    return (
                                        <button type="button" className="btn btn-primary" onClick={() => this.groupIdHandler(eachGroup)} key={index}>{eachGroup}</button>
                                    )
                                })}
                            </TabPane>
                            {trafficResponseHandler && Object.keys(trafficConfigResponse).map((key, index) => {
                                return <div className='eachTraffic'><p className='close' title='Delete this traffic' onClick={(event) => this.deleteTrafficHandler(event, trafficConfigResponse[key]['trafficId'])}>X</p><p className='trafficIndex'>Traffic {index}</p>
                                    {
                                        Object.keys(trafficConfigResponse[key]).map((eachTraffic, eachIndex) => {
                                            if (eachTraffic === 'traffic' || eachTraffic === 'trafficType' || eachTraffic === 'trafficDuration' || eachTraffic === 'url' || eachTraffic === 'port' || eachTraffic === 'options' || eachTraffic === 'server' || eachTraffic === 'destination' || eachTraffic === 'packetSize' || eachTraffic === 'ftpServer' || eachTraffic === 'username' || eachTraffic === 'password' || eachTraffic === 'fileName') {
                                                return (<div className='eachFormData' key={eachIndex}>
                                                    <strong className='labelName control-label'><label>{eachTraffic}:</label></strong>
                                                    <input defaultValue={trafficConfigResponse[key][eachTraffic]} disabled key={eachIndex} />
                                                </div>)
                                            } else {
                                                return (false)
                                            }

                                        }
                                        )
                                    }
                                </div>
                            }
                            )}
                            {addTrafficEnable && addTraffic.map((eachReport, index) => {
                                return (
                                    <div className='EachTrafficSection' key={index}>
                                        <p>Traffic {(totalTrafficsConfigured ? totalTrafficsConfigured + index : index)}</p>
                                        <div className='applicationSelector'>
                                            <p>Mode:</p>
                                            <select onClick={(event) => this.trafficHandler(event, index)} className='trafficSelector'>
                                                <option value="">{resourceFileNaming.configSelectTraffic}</option>
                                                <option value="external">{resourceFileNaming.configExternalTraffic}</option>
                                                 <option value="internal">{resourceFileNaming.configInternalTraffic}</option>
                                                {/* <option value="p2p">{resourceFileNaming.configP2PTraffic}</option>*/}
                                            </select>
                                        </div>
                                        {trafficTypeHandler && ((totalTrafficsConfigured ? totalTrafficsConfigured + index : index) === trafficId) && <DynamicForms {...this.state} />}
                                    </div>
                                )
                            })}
                            {groupTrafficHandler && <button type="button" className="btn btn-primary AddTrafficBtn" onClick={() => this.addTrafficHandler()}> <i className="fa fa-plus" aria-hidden="true"></i> {' '}{resourceFileNaming.configTrafficAddButton}</button>}
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
        responseType: state.responseType,
        storeGroupIdFromTraffic: state.storeGroupIdFromTraffic
    };
}
const mapDispatchToProps = dispatch => {
    return {
        successMsgHandler: (msg) => dispatch({ type: 'successMsgHandler', value: msg }),
        HoldGroupIdFromTraffic: (groupId) => dispatch({ type: 'HoldGroupIdFromTraffic', value: groupId }),

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ConfigTraffic)