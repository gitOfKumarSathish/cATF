import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as API from '../../Api/Api';
import { isEmpty } from 'lodash';

class LiveStatistics extends Component {
    kibanaDashBoardLinks = {};

    constructor(props) {
        super(props);

        this.state = {
            allTrafficsConfigured: []
        };
        let userName = window.localStorage.getItem('userName');
        /******* Initializing Kibana Dashboards ***********/
        this.kibanaDashBoardLinks = {
            'browsing': `/s/test_space/app/dashboards#/view/eccb7600-1cfe-11eb-a02e-1f18c75848b6?embed=true&_g=(filters:!())&_a=(description:'',filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:atf_results,key:measType,negate:!f,params:(query:browsing),type:phrase),query:(match:(measType:(query:browsing,type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:atf_results,key:userName,negate:!f,params:(query:${userName}),type:phrase),query:(match_phrase:(userName:${userName})))),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),query:(language:kuery,query:''),tags:!(),timeRestore:!t,title:Browsing,viewMode:view)&show-time-filter=true&hide-filter-bar=true`,

            'ftpDl': `/s/test_space/app/dashboards#/view/37640170-1e06-11eb-a02e-1f18c75848b6?embed=true&_g=(filters:!())&_a=(description:'',filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:atf_results,key:measType,negate:!f,params:(query:ftpDl),type:phrase),query:(match:(measType:(query:ftpDl,type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:atf_results,key:userName,negate:!f,params:(query:${userName}),type:phrase),query:(match_phrase:(userName:${userName})))),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:()),gridData:(h:15,i:'6959a1d6-d98e-4c12-94ca-83b99e385016',w:24,x:0,y:0),id:'42cbdfb0-1e01-11eb-a02e-1f18c75848b6',panelIndex:'6959a1d6-d98e-4c12-94ca-83b99e385016',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:'5a410f10-1805-432e-94d2-bdf0ca95ce90',w:24,x:24,y:0),id:bc630910-1cfe-11eb-a02e-1f18c75848b6,panelIndex:'5a410f10-1805-432e-94d2-bdf0ca95ce90',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:'91b5d518-748f-4523-87d9-713b02173eac',w:24,x:0,y:15),id:c9d2c110-1d00-11eb-a02e-1f18c75848b6,panelIndex:'91b5d518-748f-4523-87d9-713b02173eac',title:'(FTP)%20Pass%20Count',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:'6939ca83-ddeb-430a-9fba-d351391f58cc',w:24,x:24,y:15),id:'07b049f0-1d13-11eb-a02e-1f18c75848b6',panelIndex:'6939ca83-ddeb-430a-9fba-d351391f58cc',title:'(FTP)%20Pass%20Count%20per%20OS',type:visualization,version:'7.13.4')),query:(language:kuery,query:''),tags:!(),timeRestore:!t,title:'FTP%20DL',viewMode:view)&show-time-filter=true&hide-filter-bar=true`,

            'ftpUl': `/s/test_space/app/dashboards#/view/d5e9a120-1e05-11eb-a02e-1f18c75848b6?embed=true&_g=(filters:!())&_a=(description:'',filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:atf_results,key:measType,negate:!f,params:(query:ftpUl),type:phrase),query:(match:(measType:(query:ftpUl,type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:atf_results,key:userName,negate:!f,params:(query:${userName}),type:phrase),query:(match_phrase:(userName:${userName})))),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:()),gridData:(h:15,i:'0d212a13-e4aa-4c16-b91d-cb857fbb2171',w:24,x:0,y:0),id:'42cbdfb0-1e01-11eb-a02e-1f18c75848b6',panelIndex:'0d212a13-e4aa-4c16-b91d-cb857fbb2171',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:'567b01cb-faf1-44b0-a321-f239b23242d6',w:24,x:24,y:0),id:bc630910-1cfe-11eb-a02e-1f18c75848b6,panelIndex:'567b01cb-faf1-44b0-a321-f239b23242d6',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:faeb53fb-61ef-4335-a1e9-5b3ebaddcbf8,w:24,x:0,y:15),id:c9d2c110-1d00-11eb-a02e-1f18c75848b6,panelIndex:faeb53fb-61ef-4335-a1e9-5b3ebaddcbf8,title:'(FTP)%20Pass%20Count',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:e625f821-a248-4a6e-92dd-089c6c16988e,w:24,x:24,y:15),id:'07b049f0-1d13-11eb-a02e-1f18c75848b6',panelIndex:e625f821-a248-4a6e-92dd-089c6c16988e,title:'(FTP)%20Pass%20Count%20per%20OS',type:visualization,version:'7.13.4')),query:(language:kuery,query:''),tags:!(),timeRestore:!t,title:'FTP%20UL',viewMode:view)&show-time-filter=true&hide-filter-bar=true`,

            'iperf3': `/s/test_space/app/dashboards#/view/2c5635b0-fd80-11ea-9b66-d98e471ac64c?embed=true&_g=(filters:!())&_a=(description:'',filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:atf_results,key:measType,negate:!f,params:(query:iperf3),type:phrase),query:(match:(measType:(query:iperf3,type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:atf_results,key:userName,negate:!f,params:(query:${userName}),type:phrase),query:(match_phrase:(userName:${userName})))),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:()),gridData:(h:15,i:'364d3692-55ed-4574-9e4b-e32633d0156a',w:24,x:24,y:0),id:'0d5a79b0-781d-11eb-bf6a-a590a5e470a8',panelIndex:'364d3692-55ed-4574-9e4b-e32633d0156a',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:d4e7c038-b7f0-438b-a989-711f361dfe23,w:24,x:0,y:0),id:'5b98c4a0-976d-11eb-b48a-af0406adf0e7',panelIndex:d4e7c038-b7f0-438b-a989-711f361dfe23,type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:'6e7ebde9-6679-4634-a153-c9ea3061749a',w:24,x:24,y:15),id:a9f6fc20-781e-11eb-bf6a-a590a5e470a8,panelIndex:'6e7ebde9-6679-4634-a153-c9ea3061749a',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:e347ede0-7e8a-44ad-bc94-4afc4525f1a0,w:24,x:0,y:15),id:'93542fc0-97a8-11eb-988e-1395016da115',panelIndex:e347ede0-7e8a-44ad-bc94-4afc4525f1a0,type:visualization,version:'7.13.4')),query:(language:kuery,query:''),tags:!(),timeRestore:!t,title:Iperf3,viewMode:view)&show-time-filter=true&hide-filter-bar=true`,

            'ping': `/s/test_space/app/dashboards#/view/299f3500-1cda-11eb-a02e-1f18c75848b6?embed=true&_g=(filters:!())&_a=(description:'',filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:atf_results,key:measType,negate:!f,params:(query:ping),type:phrase),query:(match:(measType:(query:ping,type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:atf_results,key:userName,negate:!f,params:(query:${userName}),type:phrase),query:(match_phrase:(userName:${userName})))),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:()),gridData:(h:15,i:'53a95dfb-ae3c-48e0-939e-b8bc503df93a',w:24,x:0,y:0),id:d6d69150-1cd5-11eb-a02e-1f18c75848b6,panelIndex:'53a95dfb-ae3c-48e0-939e-b8bc503df93a',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:a1a90a2c-676a-412c-b4e3-b8412b053639,w:24,x:24,y:0),id:'13eb49c0-1cd9-11eb-a02e-1f18c75848b6',panelIndex:a1a90a2c-676a-412c-b4e3-b8412b053639,type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:'3cdcc828-2462-4bf4-9f17-832fdf100ce6',w:24,x:0,y:15),id:'8c6d8c90-1cda-11eb-a02e-1f18c75848b6',panelIndex:'3cdcc828-2462-4bf4-9f17-832fdf100ce6',type:visualization,version:'7.13.4'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:b0e11c0e-c1af-4ff8-8ab5-d3bf4680a757,w:24,x:24,y:15),id:dec4cda0-1cda-11eb-a02e-1f18c75848b6,panelIndex:b0e11c0e-c1af-4ff8-8ab5-d3bf4680a757,type:visualization,version:'7.13.4')),query:(language:kuery,query:''),tags:!(),timeRestore:!t,title:Ping,viewMode:view)&show-time-filter=true&hide-filter-bar=true`
        }
    }

    componentDidMount() {
        let allTrafficsConfigured = []
        API.getConfiguredGroups().then(trafficListResponse => {
            if (trafficListResponse.length === 0) {
                this.setState(() => ({
                    loader: false,
                }));
            }
            (trafficListResponse.groups || []).forEach(eachGroup => {
                if (eachGroup !== 'unknown') {
                    API.getConfiguredTraffics(eachGroup).then(res => {
                        if (!isEmpty(res) && (res.Traffics).length > 0) {
                            res.Traffics.forEach(trafficDet => {
                                allTrafficsConfigured.push(trafficDet.traffic);
                            })
                            allTrafficsConfigured = Array.from(new Set(allTrafficsConfigured))
                            this.setState(() => ({
                                loader: false,
                                allTrafficsConfigured
                            }));
                        }
                    }).catch(error => {
                        this.updateStoreToast(true, error.message, 'error');
                    });
                }
                return true
            });
        }).catch(error => {
            this.updateStoreToast(true, error.message, 'error');
        }).finally(() => {
            if (allTrafficsConfigured.length === 0) {
                this.setState(() => ({
                    loader: false,
                }));
            }
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
        let { allTrafficsConfigured } = this.state;

        return (
            <p className='center liveStatistics'>
                {allTrafficsConfigured.length === 0 && <p className='failMsg'>No traffics configured</p>}
                {allTrafficsConfigured.includes('browsing') && <div>
                    Browsing
                    <iframe src={process.env.REACT_APP_KIBANA_DOMAIN + this.kibanaDashBoardLinks.browsing} height="600" width="100%" title="browsing"></iframe>
                </div>}
                {allTrafficsConfigured.includes('ftpdl') && <div>
                    FTP DL
                    <iframe src={process.env.REACT_APP_KIBANA_DOMAIN + this.kibanaDashBoardLinks.ftpDl} height="600" width="100%" title="FTP DL"></iframe>
                </div>}
                {allTrafficsConfigured.includes('ftpul') && <div>
                    FTP UL
                    <iframe src={process.env.REACT_APP_KIBANA_DOMAIN + this.kibanaDashBoardLinks.ftpUl} height="600" width="100%" title="FTP UL"></iframe>
                </div>}
                {(allTrafficsConfigured.includes('iperfServer') || allTrafficsConfigured.includes('iperfClient')) && <div>
                    IPerf3
                    <iframe src={process.env.REACT_APP_KIBANA_DOMAIN + this.kibanaDashBoardLinks.iperf3} height="600" width="100%" title="Iperf3"></iframe>
                </div>}
                {allTrafficsConfigured.includes('ping') && <div>
                    Ping
                    <iframe src={process.env.REACT_APP_KIBANA_DOMAIN + this.kibanaDashBoardLinks.ping} height="600" width="100%" title="Ping"></iframe>
                </div>}
            </p>
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
export default connect(mapStateToProps, mapDispatchToProps)(LiveStatistics)