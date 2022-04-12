import axios from "axios";
import { isEmpty } from 'lodash';
let refreshTimeout
const ApiUrl = {
    'login': 'auth/login',
    'logout': 'auth/logout',
    'getDevices': 'devices',
    'getDeviceInfo': 'devices/',
    'configureDevices': 'devices/configure',
    'getConfiguredTraffics': 'traffic/configuredlist/',
    'configureTraffic': 'traffic/',
    'trafficReport': 'reports/',
    'configureGroups': 'devices/getConfiguredGroups',
    'startTraffic': 'traffic/start', // Not yet configured in Dashbaord
    'stopTraffic': 'traffic/stop', // Not yet configured in Dashbaord
    'deleteTraffic': 'traffic/delete',
    'liveStatus': 'traffic/livestatus',
    'rebuildDeviceList': 'rebuildDeviceList/',
    'configureSSID': 'group/configureSSID',
    'getConfiguredSSID': 'group/getSSID',
    'connectAP': 'connectAP/',
    'disconnectAP': 'disconnectAP/',
    'setConnectButtonState': 'setConnectButtonState/',
    'getConnectButtonState': 'getConnectButtonState',
    'liveStatusLogs': 'liveStatusLogs/'

}

function HEADER() {
    let header = {
        "Content-Type": "application/json",
        'token': localStorage.getItem('token') || ''
    };
    return header;
}

// GET API Handler 
function GET(url, data = {}) {
    const header = HEADER();
    return axios(url, {
        method: 'GET',
        url: url,
        headers: header,
    }).then(res => {
        if (res.status === 200 || res.status === 201) {
            return res.data;
        }
    }).catch(error => {
        console.log('error :', error)
        errorHandling(error, GET, url, data);

    })
}

// POST API Handler 

function POST(url, data) {
    const header = HEADER();
    return axios(url, {
        method: 'POST',
        url: url,
        data: data,
        headers: header,
    }).then(res => {
        if (res.status === 200 || res.status === 201) {
            return res.data;
        }
    }).catch(error => {
        console.log('error :', error)
        errorHandling(error, POST, url, data = {});
    })
}

// DELETE API Handler 

function DELETE(url, data) {
    const header = HEADER();
    return axios(url, {
        method: 'DELETE',
        url: url,
        data: data,
        headers: header,
    }).then(res => {
        if (res.status === 200 || res.status === 201) {
            return res.data;
        }
    }).catch(error => {
        console.log('error :', error)
        errorHandling(error, POST, url, data = {});
    })
}


export function errorHandling(error, callback, url, data = {}) {
    const refreshToken = localStorage.getItem('refresh_token');
    const token = localStorage.getItem('token');
    if (refreshToken !== 'undefined' && !isEmpty(refreshToken)) {
        if (isEmpty(token)) {
            RefreshTokenHandler(refreshToken, callback, url, data);
        } else if (error.response.status === 500) {
            RefreshTokenHandler(refreshToken, callback, url, data)
        } else if (error.response.status === 403) {
            if (error.response.data.jwt_expired) {
                RefreshTokenHandler(refreshToken, callback, url, data)
            }
        } else {
            console.log('error occured', error)
        }
    } else {
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('token')
        window.location = "/login";
    }
    console.log('servererror', error.response)
}

const RefreshTokenHandler = (refreshToken, callback, url, data = {}) => {

    if (refreshTimeout !== null) {
        refreshTimeout = setTimeout(() => {
            POST('auth/refresh', JSON.parse(JSON.stringify({ refresh_token: refreshToken }))).then(resp => {
                if (!isEmpty(resp)) {
                    localStorage.setItem('token', resp.data.token)
                    localStorage.setItem('refresh_token', resp.data.refredisconnectAPsh_token)
                }
            });
            refreshTimeout = null;
        }, 2000);
    }
}
export function logout(data) {
    let url = ApiUrl.logout;
    return POST(url, data);
}


export function login(data) {
    let url = ApiUrl.login;
    return POST(url, data);
}

export function getDevices() {
    let url = ApiUrl.getDevices;
    return GET(url);
}

export function getDeviceInfo(deviceId) {
    let url = ApiUrl.getDeviceInfo + deviceId
    return GET(url);
}


export function configureDevices(deviceValueHandler) {
    let url = ApiUrl.configureDevices;
    let data = { deviceList: deviceValueHandler }
    return POST(url, data);
}

export function configureTraffic(configUrl, data) {
    let url = ApiUrl.configureTraffic + configUrl + '/config';
    return POST(url, data);
}

export function getConfiguredTraffics(groupId) {
    let url
    // if (groupId !== 'unknown') {
    url = ApiUrl.getConfiguredTraffics + groupId;
    // } 
    return GET(url);
}

export function startTraffic(groupId) {
    let url = ApiUrl.startTraffic;
    const data = { groupId: groupId }
    return POST(url, data);
}

export function stopTraffic(groupId) {
    let url = ApiUrl.stopTraffic;
    const data = { groupId: groupId }
    return POST(url, data);
}

export function getConfiguredGroups() {
    let url = ApiUrl.configureGroups;
    return GET(url);
}
export function getTrafficReport(groupId) {
    let url
    if (groupId !== undefined && groupId.toString().length > 0) {
        url = ApiUrl.trafficReport + groupId;
    } else {
        url = ApiUrl.trafficReport + 'user'
    }
    return GET(url);
}
export function deleteTraffic(data) {
    let url = ApiUrl.deleteTraffic
    return DELETE(url, data);
}

export function rebuildDeviceList() {
    let url = ApiUrl.rebuildDeviceList
    return POST(url);
}
export function configureSSID(data) {
    let url = ApiUrl.configureSSID
    return POST(url, data);
}
export function getConfiguredSSID() {
    let url = ApiUrl.getConfiguredSSID
    return GET(url)
}
export function connectAP(data) {
    let url = ApiUrl.connectAP
    return POST(url, data)
}
export function disconnectAP(data) {
    let url = ApiUrl.disconnectAP
    return POST(url, data)
}
export function getConnectButtonState() {
    let url = ApiUrl.getConnectButtonState
    return GET(url)
}
export function liveStatus() {
    let url = ApiUrl.liveStatus
    return GET(url)
}
export function liveStatusLogs() {
    let url = ApiUrl.liveStatusLogs
    return GET(url)
}
export function setConnectButtonState(data) {
    let url = ApiUrl.setConnectButtonState
    return POST(url, data)
}