import * as ServerApi from './Server/ServerApi';


//TODO: To introduce the MockAPI Uncomment the line all the below lines also if Condition too to access MockAPI

// import * as MockApi from './Stubs/MockApi'

// mark it false if you want to disable server API
// let AccessServerApi = false
// let AccessServerApi = true;

// if (process.env.hasOwnProperty('REACT_APP_API_ACCESS')) {
//     AccessServerApi = (process.env.REACT_APP_API_ACCESS).toLocaleLowerCase() === 'server' ? true : false;
// }
// let login = MockApi.login
// let logout = MockApi.logout
// let getDevices = MockApi.getDevices
// let getConfiguredTraffics = MockApi.getConfiguredTraffics
// let getTrafficReport = MockApi.getTrafficReport;
// let getConfiguredGroups = MockApi.getConfiguredGroups;
// let stopTraffic = MockApi.stopTraffic;
// let startTraffic = MockApi.startTraffic;
// let configureTraffic = MockApi.configureTraffic;
// let configureDevices = MockApi.configureDevices;
// let getDeviceInfo = MockApi.getDeviceInfo;
// let deleteTraffic = MockApi.deleteTraffic;
// let rebuildDeviceList = MockApi.rebuildDeviceList;
// let configureSSID = MockApi.configureSSID;
// let getConfiguredSSID = MockApi.getConfiguredSSID;
// let connectAP = MockApi.connectAP;
// let disconnectAP = MockApi.disconnectAP;
// let getConnectButtonState = MockApi.getConnectButtonState;
// let setConnectButtonState = MockApi.setConnectButtonState;
// let liveStatus = MockApi.liveStatus;
// let liveStatusLogs = MockApi.liveStatusLogs;



// if (AccessServerApi) {
let login = ServerApi.login
let logout = ServerApi.logout
let getDevices = ServerApi.getDevices
let getConfiguredTraffics = ServerApi.getConfiguredTraffics
let getTrafficReport = ServerApi.getTrafficReport;
let getConfiguredGroups = ServerApi.getConfiguredGroups;
let stopTraffic = ServerApi.stopTraffic;
let startTraffic = ServerApi.startTraffic;
let configureTraffic = ServerApi.configureTraffic;
let configureDevices = ServerApi.configureDevices;
let getDeviceInfo = ServerApi.getDeviceInfo;
let deleteTraffic = ServerApi.deleteTraffic;
let rebuildDeviceList = ServerApi.rebuildDeviceList;
let configureSSID = ServerApi.configureSSID;
let getConfiguredSSID = ServerApi.getConfiguredSSID;
let connectAP = ServerApi.connectAP;
let disconnectAP = ServerApi.disconnectAP;
let getConnectButtonState = ServerApi.getConnectButtonState;
let setConnectButtonState = ServerApi.setConnectButtonState;
let liveStatus = ServerApi.liveStatus;
let liveStatusLogs = ServerApi.liveStatusLogs;

// };

export {
    getDevices,
    getConfiguredTraffics,
    getTrafficReport,
    getConfiguredGroups,
    stopTraffic,
    startTraffic,
    configureTraffic,
    configureDevices,
    getDeviceInfo,
    login,
    logout,
    deleteTraffic,
    rebuildDeviceList,
    configureSSID,
    getConfiguredSSID,
    connectAP,
    disconnectAP,
    getConnectButtonState,
    setConnectButtonState,
    liveStatus,
    liveStatusLogs
};


