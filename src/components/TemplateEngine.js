import React from 'react'

const ReportTemplateEngine = (props) => {
    const dataHandlerForReports = props
    const srcData = 'data:application/pdf;filename=' + dataHandlerForReports.report.reportName + ';base64,' + dataHandlerForReports.encodedPDF

    if (dataHandlerForReports.report.report.hasOwnProperty('testConfig') || dataHandlerForReports.report.report.hasOwnProperty('testInfo') || dataHandlerForReports.report.report.hasOwnProperty('results')) {
        return (
                <iframe title={dataHandlerForReports.report.reportName} type="application/pdf" src={srcData} width="100%" height="100%"></iframe> 
        )
    } else {
        return (<p>Data Missing</p>)
    }

}

export default ReportTemplateEngine