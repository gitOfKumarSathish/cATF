import { createStore } from "redux";
const initialState = {
    showSuccess: false,
    successMsg: '',
    responseType: '',
    trafficCount: 0,
    reportCount: 0,
    clearLiveLogs: false,
    liveLogs: []
};
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'successMsgHandler':
            return {
                successMsg: action.value.successMsg,
                showSuccess: action.value.showSuccessMsg,
                responseType: action.value.responseType,
            }
        case 'ResetSuccess':
            return {
                successMsg: '',
                showSuccess: false,
                responseType: ''
            }
        case 'TrafficCount':
            return {
                trafficCount: action.value
            }
        case 'ReportCount':
            return {
                reportCount: action.value
            }
        case 'UpdateLiveLogs':
            return {
                liveLogs: action.value
            }
        case 'ClearLogs':
            return {
                clearLiveLogs: action.value
            }

        default:
            return state;
    }
}

const store = createStore(counterReducer);
export default store;