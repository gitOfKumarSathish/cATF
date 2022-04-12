import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class LiveLogs extends Component {
    render() {
        return (
            <div className='col-lg-3 liveLogs'>
                <Breadcrumb>
                    <BreadcrumbItem><i className="fa fa-bell fa-fw"></i>Live Status<span className='clearResponse' onClick={() => this.props.clearResponse()}>Clear</span></BreadcrumbItem>
                </Breadcrumb>
                <div className='statusMessage'>
                    <pre>
                        <code>
                            {(this.props.logsGrouping || []).map((eachStatus, index) => {
                                return <div key={index}>
                                    <p>--------------------------------------</p>
                                    <p> {new Date(eachStatus.timeStamp).toLocaleDateString() + ' ' + new Date(eachStatus.timeStamp).toLocaleTimeString()}  : [{eachStatus.deviceName || ''}:{eachStatus.deviceType || ''}] : {eachStatus.msg}</p>
                                </div>;
                            })}

                        </code>
                    </pre>
                </div>
            </div>
        );
    }
}