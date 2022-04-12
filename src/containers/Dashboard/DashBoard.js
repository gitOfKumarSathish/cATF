import React, { Component } from 'react'
import stringResource from '../../Resource/en-us'
import { connect } from 'react-redux';
import LiveLogs from './LiveLogs';
import CardSection from './CardSection';
import StartTraffic from './StartTraffic';
import ViewReports from './ViewReports';
import DeviceLists from './DeviceLists';
import LiveStatistics from './LiveStatistics';
export class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'Device List',
            logsGrouping: this.props.liveLogs,
        };
        this.dashboardViewer = this.dashboardViewer.bind();
        this.cardsClickHandler = this.cardsClickHandler.bind();
    }

    componentWillReceiveProps() {
        if (this.props.liveLogs !== undefined) {
            this.setState({
                logsGrouping: this.props.liveLogs
            });
        }
    }

    cardsClickHandler = (activeTab) => {
        this.setState({
            currentTab: activeTab
        })
    }

    dashboardViewer = (activeTab) => {
        switch (activeTab) {
            case 'Device List':
                return (<DeviceLists />)
            case 'Start Traffic':
                return (<StartTraffic />)
            case 'View Reports':
                return (<ViewReports />)
            case 'Live Statistics':
                return (<LiveStatistics />)
            default:
                return true
        }
    }

    clearResponse = () => {
        this.props.updateLiveLogs([]);
        this.props.triggerClearHandler(true)
        this.setState({
            logsGrouping: []
        });
    }

    render() {
        let { currentTab, logsGrouping } = this.state;
        const resourceFileNaming = stringResource.dashboardPanel;
        return (
            <div className='Main-wrapper'>
                <h2 className='page-header'>{resourceFileNaming.dashboardPanelName}</h2>
                {/* Top Card Section Starts here */}
                <CardSection cardsClickHandler={this.cardsClickHandler}></CardSection>
                {/* Top Card Section Ends here */}
                <div className='col-lg-12 secondPartDashboard'>
                    {this.dashboardViewer(currentTab)}
                    {currentTab !== 'Live Statistics' && <LiveLogs clearResponse={this.clearResponse} logsGrouping={logsGrouping}></LiveLogs>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        liveLogs: state.liveLogs
    };
}
const mapDispatchToProps = dispatch => {
    return {
        updateLiveLogs: (msg) => dispatch({ type: 'UpdateLiveLogs', value: msg }),
        triggerClearHandler: (msg) => dispatch({ type: 'ClearLogs', value: msg }),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
