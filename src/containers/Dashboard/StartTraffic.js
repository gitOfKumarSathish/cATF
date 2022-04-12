import React, { Component } from 'react'
import * as API from '../../Api/Api';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';

class StartTraffic extends Component {
    handleLiveStatus;
    constructor(props) {
        super(props);
        this.state = {
            startTrafficResponse: [],
            trafficStatus: []
        }
        this.enableTrafficBtn = this.enableTrafficBtn.bind();
    }
    componentWillUnmount() {
        clearInterval(this.handleLiveStatus);
    }
    componentDidMount() {
        let combineTrafficList = []
        API.getConfiguredGroups().then(resp => {
            const trafficListResponse = resp;
            (trafficListResponse.groups || []).map(eachGroup => {
                if (eachGroup !== 'unknown') {
                    this.handleLiveStatus = setInterval(async () => {
                        API.liveStatus().then(resp => {
                            if (resp && resp.Traffics && resp.Traffics.length > 0) {
                                this.setState(() => ({
                                    trafficStatus: resp.Traffics,
                                }));
                            }
                        }).catch(error => {
                            console.log('ATF Error', error)
                        });
                    }, 2000);
                    API.getConfiguredTraffics(eachGroup).then(res => {
                        if (!isEmpty(res) && (res.Traffics).length > 0) {
                            combineTrafficList.push(res)
                        }
                        this.setState(() => ({
                            startTrafficResponse: combineTrafficList || [],
                            showResponseData: resp.statusMessage,
                        }));
                    }).catch(error => {
                        this.updateStoreToast(true, error.message, 'error');
                    });
                }
                return true
            });
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
    enableTrafficBtn = (groupId, index, trafficStatus) => {
        if (trafficStatus === 'finished' || trafficStatus === 'not_started' || trafficStatus === 'aborted') {
            API.startTraffic(groupId).then(response => {
                this.updateStoreToast(true, response.statusMessage, 'success');
            }).catch(error => {
                console.log('Dashboard Error', error);
                this.updateStoreToast(true, 'Unable to Start Traffic', 'error');
            })
        } else {
            API.stopTraffic(groupId).then(response => {
                this.updateStoreToast(true, response.statusMessage, 'success');
            }).catch(error => {
                console.log('Dashboard Error', error);
                this.updateStoreToast(true, 'Unable to Abort Traffic', 'error');
            })
        }
    }

    render() {
        let { startTrafficResponse, trafficStatus } = this.state;
        return (
            <div className={'contentArea col-lg-9'} >
                {startTrafficResponse.length === 0 ? <p className='failMsg'>No traffics configured</p> :
                    (
                        <table className='startTrafficSection'>
                            <thead>
                                <tr>
                                    <th>GroupId</th>
                                    <th>Traffic</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    startTrafficResponse.map((eachTableData, index) => {
                                        let updateTrafficStatus = {
                                            ...eachTableData,
                                            ...trafficStatus[index]
                                        };
                                        let currentTrafficStatus = updateTrafficStatus.trafficStatus;
                                        return (
                                            <tr>
                                                <td>{eachTableData.groupId}</td>
                                                <td>
                                                    {(eachTableData.Traffics || []).map(function (TrafficHandler, index) {
                                                        return (<span className='eachSingleTraffic'>{(index ? ', ' : '') + TrafficHandler.traffic}</span>)
                                                    })}
                                                </td>
                                                <td>
                                                    {
                                                        <button
                                                            className={`btn btn-primary ${index}`}
                                                            id={index}
                                                            onClick={() => this.enableTrafficBtn(eachTableData.groupId, index, currentTrafficStatus)}
                                                        >{(currentTrafficStatus === 'aborted' || currentTrafficStatus === 'not_started' || currentTrafficStatus === 'finished' || currentTrafficStatus === '') ? 'Start' : 'Abort'}
                                                        </button>
                                                    }
                                                </td>
                                            </tr>
                                        )

                                    })
                                }
                            </tbody>
                        </table>)
                }
            </div>)
    }
}


const mapStateToProps = state => {
    return {
        showSuccess: state.showSuccess,
        successMsg: state.successMsg,
        responseType: state.responseType,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        successMsgHandler: (msg) => dispatch({ type: 'successMsgHandler', value: msg }),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(StartTraffic)