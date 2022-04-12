import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as API from '../../Api/Api';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReportTemplateEngine from '../../components/TemplateEngine';

class ViewReports extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trafficReportResponse: [],
            modal: false,
            reports: [],
            showResponseData: ''
        }
        this.openTrafficReports = this.openTrafficReports.bind();
        this.toggle = this.toggle.bind();
        this.downloadPDF = this.downloadPDF.bind();

    }

    componentDidMount() {
        API.getTrafficReport().then(resp => {
            const trafficListGroupResponse = resp;
            this.setState(() => ({
                trafficReportResponse: trafficListGroupResponse.reportList || [],
                showResponseData: resp.statusMessage,
            }))
        }).catch(error => {
            this.updateStoreToast(true, error.message, 'error');
        })
    }

    openTrafficReports = (trafficId) => {
        API.getTrafficReport(trafficId).then(response => {
            const getTrafficReports = response
            this.setState(() => ({
                modal: true,
                reports: getTrafficReports.finalReport,
                showResponseData: response.statusMessage,
            }));
        }).catch(error => {
            console.log('Dashboard Error', error)
        });
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
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

    downloadPDF = (data) => {
        const reportData = data.encodedPDF
        const reportName = data.report.reportName

        var byteCharacters = window.atob(reportData);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var file = new Blob([byteArray], { type: 'application/pdf;base64' });
        // To download the PDF when we click on the record
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        var url = window.URL.createObjectURL(file);
        a.href = url;
        a.download = reportName;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    render() {
        let { trafficReportResponse, modal, reports } = this.state;

        return (
            <div className='viewReportsSection contentArea col-lg-9'>
                {trafficReportResponse.length === 0 ? <p className='center'>No Reports Available</p> : (<table>
                    <thead>
                        <tr>
                            <th>Report Id</th>
                            <th>Report Name</th>
                            <th>timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trafficReportResponse.map((eachTableData, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td className='ClickHereForReport' onClick={() => this.openTrafficReports(eachTableData.reportId)}>{eachTableData.reportName}</td>
                                    <td>
                                        {new Date(eachTableData.timestamp).toLocaleDateString() + ' ' + new Date(eachTableData.timestamp).toLocaleTimeString()}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>)}

                {/* PopupShowing of Reports  */}
                <div>
                    <Modal isOpen={modal}
                        toggle={this.toggle}>
                        <ModalHeader>
                            <span>Traffic Report</span>
                            <span className='CloseBtn' onClick={() => this.toggle()}> X</span>
                        </ModalHeader>
                        <ModalBody>
                            <ReportTemplateEngine {...reports} />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={() => this.downloadPDF(reports)}>Download PDF</Button>
                            <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>

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
export default connect(mapStateToProps, mapDispatchToProps)(ViewReports)