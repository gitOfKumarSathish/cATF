import { Component } from "react";
import stringResource from "../../Resource/en-us";
import { isEmpty } from 'lodash';
import * as API from '../../Api/Api';
import { connect } from "react-redux";

class CardSection extends Component {
    cardApi = [
        {
            cardTitle: stringResource.dashboardPanel.connectionTitle,
            titleIcon: stringResource.dashboardPanel.connectIcon,
            subText: stringResource.dashboardPanel.connectSubText,
            leftAction: stringResource.dashboardPanel.connectLeftAction,
            cardColor: stringResource.dashboardPanel.connectCardColor,
        },
        {
            cardTitle: stringResource.dashboardPanel.startTrafficTitle,
            titleIcon: stringResource.dashboardPanel.startTrafficIcon,
            subText: stringResource.dashboardPanel.startTrafficSubText,
            leftAction: stringResource.dashboardPanel.startTrafficLeftAction,
            cardColor: stringResource.dashboardPanel.startTrafficCardColor
        },

        {
            cardTitle: stringResource.dashboardPanel.liveReportTitle,
            titleIcon: stringResource.dashboardPanel.liveReportIcon,
            subText: stringResource.dashboardPanel.liveReportSubText,
            leftAction: stringResource.dashboardPanel.liveReportLeftAction,
            cardColor: stringResource.dashboardPanel.liveReportCardColor
        },
        {
            cardTitle: stringResource.dashboardPanel.viewReportsTitle,
            titleIcon: stringResource.dashboardPanel.viewReportsIcon,
            subText: stringResource.dashboardPanel.viewReportsSubText,
            leftAction: stringResource.dashboardPanel.viewReportsLeftAction,
            cardColor: stringResource.dashboardPanel.viewReportsCardColor
        },

    ]

    constructor(props) {
        super(props);
        this.state = {
            trafficCount: '',
            reportListCount: 0,
            trafficListCount: 0,
            deviceListsCount: '',
            currentTab: ''
        };
    }

    async componentDidMount() {
        // dashboard total Card Counts Handler 
        this.dashboardCardCounts();
    }

    dashboardCardCounts() {
        // Count for total Report starts here
        API.getTrafficReport().then(resp => {
            if (!isEmpty(resp) && resp.hasOwnProperty('reportList')) {
                this.setState({
                    reportListCount: resp.reportList.length || 0
                });
            }
        }).catch(error => {
            console.log('ATF Error', error)
            this.updateStoreToast(true, error.message, 'error');
        });
        // Count for total Report ends here

        // Count for Total Device Connected starts here
        API.getDevices().then(resp => {
            this.setState(() => ({
                deviceListsCount: resp.deviceList.length || [],
            }));
        }).catch(error => {
            console.log(typeof error, error)
            this.updateStoreToast(true, error.message, 'error');
        });
        // Count for Total Device Connected ends here

        // Count for Start Traffic starts here
        API.getConfiguredGroups().then(resp => {
            const trafficListResponse = resp;
            (trafficListResponse.groups || []).map(eachGroup => {
                if (eachGroup !== 'unknown') {
                    API.getConfiguredTraffics(eachGroup).then(res => {
                        if ((res.Traffics).length > 0) {
                            this.setState({
                                trafficListCount: res.Traffics.length,
                            });
                        }
                    }).catch(error => {
                        this.updateStoreToast(true, error.message, 'error');
                    });
                }
                return true
            });
        })
        // Count for Start Traffic Ends here
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

        let { reportListCount, trafficListCount, deviceListsCount } = this.state;
        return (
            <div className='cardPanel'>
                {this.cardApi.map((item, index) => {
                    let count;

                    switch (item.cardTitle) {
                        case 'startTraffics':
                            count = trafficListCount;
                            break;

                        case 'Device List':
                            count = deviceListsCount;
                            break;

                        case 'liveReport':
                            count = 0;
                            break;

                        case 'viewReport':
                            count = reportListCount;
                            break;

                        default:
                            console.log('Error In APIs');
                            break;
                    }

                    return <div className='row eachCardOutline' style={{
                        borderColor: item.cardColor
                    }} key={index}>
                        <div className='eachTopSection'>
                            <div className='sectionArea' style={{
                                backgroundColor: item.cardColor,
                                borderColor: item.cardColor
                            }}>
                                <div className='headSection'>
                                    <i className={'fa ' + item.titleIcon + ' fa-2x'} id=""></i>
                                    <p className='count'>{count}</p>
                                </div>
                                <p>{item.subText}</p>
                            </div>
                            <div className='footerPanel' style={{
                                color: item.cardColor
                            }}>
                                <p key='cardClickHandler' onClick={() => this.props.cardsClickHandler(item.leftAction)}>{item.leftAction}</p>
                            </div>
                        </div>
                    </div>;
                })}
            </div>
        );
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
export default connect(mapStateToProps, mapDispatchToProps)(CardSection)