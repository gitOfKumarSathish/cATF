import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import stringResource from '../../Resource/en-us';
import classnames from 'classnames';
import Map from '../../components/Map';
import * as API from '../../Api/Api';
import { connect } from 'react-redux';
import ReactTables from '../../components/table/ReactTable';


class DeviceLists extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'ATF1',
            activeInnerTab: 'grid',
            deviceLists: [],
            dashboardConfigResponse: [],
            activeDeviceConfig: {},
            showResponseData: '',
            loader: false,
            tableDataAPI: 'getDevices',
        }
        this.navTabToggleHandler = this.navTabToggleHandler.bind();
        this.deviceListHandler = this.deviceListHandler.bind();
    }
    componentDidMount() {
        API.getDevices().then(resp => {
            this.setState(() => ({
                dashboardConfigResponse: resp.deviceList || [],
                deviceLists: resp.deviceList || [],
                activeDeviceConfig: resp.deviceList[0] || [],
                showResponseData: resp.statusMessage || '',
            }));
        }).catch(error => {
            console.log(typeof error, error)
            this.updateStoreToast(true, error.message, 'error');
        })
    }

    navTabToggleHandler = tab => {
        this.setState({
            activeInnerTab: tab,
        })
    }


    deviceListHandler = (deviceList) => {
        this.setState({
            activeDeviceConfig: deviceList
        })
    }


    rebuildDeviceHandler = () => {
        API.rebuildDeviceList().then(response => {
            this.updateStoreToast(true, response.statusMessage, 'success');
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
        const resourceFileNaming = stringResource.dashboardPanel;
        let { activeTab, activeInnerTab, activeDeviceConfig, deviceLists, dashboardConfigResponse, tableDataAPI } = this.state;
        return (
            <div className='contentArea col-lg-9' >
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeInnerTab === 'grid' })}
                            onClick={() => { this.navTabToggleHandler('grid'); }}
                        >
                            {resourceFileNaming.dashboardGridView}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeInnerTab === 'table' })}
                            onClick={() => { this.navTabToggleHandler('table'); }}
                        >
                            {resourceFileNaming.dashboardTableView}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeInnerTab === 'maps' })}
                            onClick={() => { this.navTabToggleHandler('maps'); }}
                        >
                            {resourceFileNaming.dashboardMapView}
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab}>
                    <TabPane tabId='ATF1'>
                        <TabContent activeTab={activeInnerTab}>
                            <TabPane tabId="maps" className='mapSection'>
                                <Row>
                                    <Col>
                                        <Map mapData={deviceLists} />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="grid" className='gridSection'>
                                <Row>
                                    <Col>
                                        <div className='deviceList'>
                                            {(deviceLists || []).map((deviceList, index) => {
                                                return <section key={index}>
                                                    <div key={index} className='EachChartSection' onClick={() => this.deviceListHandler(deviceList)}>
                                                        {index + 1}
                                                    </div>
                                                </section>;
                                            })}
                                            <div className='deviceConfigDetails'>
                                                <button type="button" className="btn btn-primary reBuildDevice" onClick={event => this.rebuildDeviceHandler(event)}>{resourceFileNaming.dashboardRebuildButton}</button>
                                                {activeDeviceConfig && <div>
                                                    {['deviceId', 'deviceName', 'deviceType', 'version', 'ipAddress', 'groupId', 'connectionStatus', 'connectionControl'].map(hoverDetails => {
                                                        return <p><span className='deviceLabel'>{hoverDetails}:</span> {activeDeviceConfig[hoverDetails]}</p>;
                                                    })}
                                                </div>}
                                            </div>
                                        </div>

                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="table" className='TableSection'>
                                <Row>
                                    <Col>
                                        {dashboardConfigResponse.length === 0 ? <p className='center'>No Device Connected</p> : <ReactTables tableListAPIHandler={tableDataAPI} tableData={dashboardConfigResponse} />}
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </TabPane>
                </TabContent>
            </div>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(DeviceLists)