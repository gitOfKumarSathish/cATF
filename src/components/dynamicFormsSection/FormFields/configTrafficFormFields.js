import stringResource from '../../../Resource/en-us';
const urlValidation = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$"
const resourceFileNaming = stringResource.configTraffic;
const trafficObject = {
    external: {
        traffic: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'iperfServer', displayValue: resourceFileNaming.iperfServer },
                    { value: 'iperfClient', displayValue: resourceFileNaming.iperfClient },
                    { value: 'ping', displayValue: resourceFileNaming.ping },
                    { value: 'ftpUl', displayValue: resourceFileNaming.fTPUpload },
                    { value: 'ftpDl', displayValue: resourceFileNaming.fTPDownload },
                    { value: 'youtube', displayValue: resourceFileNaming.youtube },
                    { value: 'browsing', displayValue: resourceFileNaming.browsing },
                    // { value: 'atf_multiBrowsing', displayValue: resourceFileNaming.atf_multiBrowsing },
                    // { value: 'atf_captivePortal', displayValue: resourceFileNaming.atf_captivePortal },
                ],
                label: resourceFileNaming.traffic + ':',
            },
            value: 'iperfServer',
            validation: {},
            valid: true,
            touched: false,
        },
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        port: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.portNumber}`,
                label: resourceFileNaming.portNumber + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
    },
    internal: {
        traffic: {
            elementType: 'select',
            elementConfig: {
                options: [
                    // { value: 'atf_internal_ftp', displayValue: resourceFileNaming.atf_internal_ftp },
                    // { value: 'iperfServerInternal', displayValue: resourceFileNaming.iperfServer },
                    { value: 'iperfClientInternal', displayValue: resourceFileNaming.iperfClient },
                    // { value: 'atf_internal_tcp', displayValue: resourceFileNaming.atf_internal_tcp },
                    //{ value: 'atf_video_streaming', displayValue: resourceFileNaming.atf_video_streaming },
                    //{ value: 'vlc_multicast', displayValue: resourceFileNaming.vlc_multicast },
                ],
                label: resourceFileNaming.traffic + ':',
            },
            value: 'iperfClient',
            validation: {},
            valid: true,
            touched: false,
        },
        
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        
        port: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.portNumber}`,
                label: resourceFileNaming.portNumber + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        options: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.options} (Optional)`,
                label: `client ${resourceFileNaming.options}:`,
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: true,
            touched: false,
            validation: {
                required: false
            }
        },
    },
    p2p: {
        traffic: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'iperfTcpServerp2p', displayValue: resourceFileNaming.iperfServer },
                    { value: 'iperfTcpClientp2p', displayValue: resourceFileNaming.iperfClient },
                    { value: 'p2p_ping', displayValue: resourceFileNaming.ping },
                    { value: 'atf_voip', displayValue: resourceFileNaming.atf_voip },
                ],
                label: resourceFileNaming.traffic + ':',
            },
            value: 'iperfTcpServerp2p',
            validation: {},
            valid: true,
            touched: false,
        },
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        calleeGroup: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.calleeGroup}`,
                label: resourceFileNaming.calleeGroup + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
    },
    atf_captivePortal: {
        username: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.userName}`,
                label: resourceFileNaming.userName + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.password}`,
                label: resourceFileNaming.password + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        TimeoutDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.timeoutDuration}`,
                label: resourceFileNaming.timeoutDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
    },
    atf_multiBrowsing: {
        url: {
            elementType: 'input',
            elementConfig: {
                type: 'url',
                placeholder: `Enter comma , separated ${resourceFileNaming.url}'s`,
                label: resourceFileNaming.url + `'s:`,
                disabled: false,
                pattern: urlValidation,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        TimeoutDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.timeoutDuration}`,
                label: resourceFileNaming.timeoutDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
    },
    browsing: {
        url: {
            elementType: 'input',
            elementConfig: {
                type: 'url',
                placeholder: `Enter ${resourceFileNaming.url}`,
                label: resourceFileNaming.url + ':',
                disabled: false,
                pattern: urlValidation,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 4,
            }
        },
    },
    youtube: {
        url: {
            elementType: 'input',
            elementConfig: {
                type: 'url',
                placeholder: `Enter ${resourceFileNaming.url}`,
                label: resourceFileNaming.url + ':',
                disabled: false,
                pattern: urlValidation,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 4,
            }
        },
    },
    ftpUl: {
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        url: {
            elementType: 'input',
            elementConfig: {
                type: 'url',
                placeholder: `Enter ${resourceFileNaming.url}`,
                label: resourceFileNaming.url + ':',
                disabled: false,
                pattern: urlValidation,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        fileName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.fileName}`,
                label: resourceFileNaming.fileName + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        username: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.userName}`,
                label: resourceFileNaming.userName + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.password}`,
                label: resourceFileNaming.password + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        port: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.portNumber} (${resourceFileNaming.optional})`,
                label: resourceFileNaming.portNumber + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: true,
            touched: false,
            validation: {
                required: false
            }
        },
    },
    ftpDl: {
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        url: {
            elementType: 'input',
            elementConfig: {
                type: 'url',
                placeholder: `Enter ${resourceFileNaming.url}`,
                label: resourceFileNaming.url + ':',
                disabled: false,
                pattern: urlValidation,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        username: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.userName}`,
                label: resourceFileNaming.userName + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.password}`,
                label: resourceFileNaming.password + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        port: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.portNumber} (${resourceFileNaming.optional})`,
                label: resourceFileNaming.portNumber + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: true,
            touched: false,
            validation: {
                required: false
            }
        },
    },
    ping: {
        destination: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.destinationIp}`,
                label: resourceFileNaming.destinationIp + ':',
                disabled: false,
                autoComplete: 'off',
                pattern: urlValidation,
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true,
            }
        },
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        packetSize: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.packetSize} (${resourceFileNaming.optional})`,
                label: resourceFileNaming.packetSize + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: true,
            touched: false,
            validation: {
                required: false
            }
        },
    },
    iperfServer: {
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        port: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter Port ${resourceFileNaming.portIpAddress}`,
                label: resourceFileNaming.portNumber + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
    },
    iperfClient: {
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        server: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter Server ${resourceFileNaming.portIpAddress}`,
                label: `Server ${resourceFileNaming.portIpAddress}:`,
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        port: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.portNumber}`,
                label: resourceFileNaming.portNumber + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        options: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.options} (Optional)`,
                label: `client ${resourceFileNaming.options}:`,
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: true,
            touched: false,
            validation: {
                required: false
            }
        },
    },
    atf_internal_ftp: {
        direction: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'atf_ftpint_ul', displayValue: resourceFileNaming.atf_ftpint_ul },
                    { value: 'atf_ftpint_dl', displayValue: resourceFileNaming.atf_ftpint_dl },
                ],
                label: resourceFileNaming.direction + ':',
            },
            value: '1',
            validation: {},
            valid: true,
            touched: false,
        },
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        fileName: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: '1', displayValue: '1MB' },
                    { value: '10', displayValue: '10MB' },
                    { value: '100', displayValue: '100Mb' },
                ],
                label: resourceFileNaming.fileName + ':',
            },
            value: '1',
            validation: {},
            valid: true,
            touched: false,
        },
    },
    iperfClientInternal: {
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        server: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter Server ${resourceFileNaming.portIpAddress}`,
                label: `Server ${resourceFileNaming.portIpAddress}:`,
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        port: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.portNumber}`,
                label: resourceFileNaming.portNumber + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        options: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.options} (Optional)`,
                label: `Client ${resourceFileNaming.options}:`,
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: true,
            touched: false,
            validation: {
                required: false
            }
        },
    },
    iperfServerInternal: {
        timeOutDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.timeoutDuration}`,
                label: resourceFileNaming.timeoutDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        port: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.portNumber}`,
                label: resourceFileNaming.portNumber + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        // options: {
        //     elementType: 'input',
        //     elementConfig: {
        //         type: 'text',
        //         placeholder: `Enter ${resourceFileNaming.options} (Optional)`,
        //         label: `Client ${resourceFileNaming.options}:`,
        //         disabled: false,
        //         autoComplete: 'off'
        //     },
        //     value: '',
        //     valid: true,
        //     touched: false,
        //     validation: {
        //         required: false
        //     }
        // },
    },
    p2p_ping: {
        destinationIp: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.destinationIPAddress}`,
                label: resourceFileNaming.destinationIPAddress + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        packetSize: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.packetSize} (${resourceFileNaming.optional})`,
                label: resourceFileNaming.packetSize + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: true,
            touched: false,
            validation: {
                required: false
            }
        },
    },
    iperfTcpClientp2p: {
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        serverGroupId: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.serverGroupId}`,
                label: resourceFileNaming.serverGroupId + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        port: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.portNumber}`,
                label: resourceFileNaming.portNumber + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        options: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.options} (Optional)`,
                label: `client ${resourceFileNaming.options}:`,
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: true,
            touched: false,
            validation: {
                required: false
            }
        },
    },
    iperfTcpServerp2p: {
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        port: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.portNumber}`,
                label: resourceFileNaming.portNumber + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
    },
    atf_voip: {
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        calleeGroup: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.calleeGroup}`,
                label: resourceFileNaming.calleeGroup + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
    },
    vlc_multicast: {
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        video: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: "video_500kbps_5min", displayValue: 'video_500kbps_5min' },
                    { value: "video_1mbps_5min", displayValue: 'video_1mbps_5min' },
                    { value: "video_1.5mbps_5min", displayValue: 'video_1.5mbps_5min' },
                    { value: "video_2mbps_5min", displayValue: 'video_2mbps_5min' },
                    { value: "video_5mbps_5min", displayValue: 'video_5mbps_5min' },
                    { value: "video_6mbps_5min", displayValue: 'video_6mbps_5min' },
                    { value: "video_7mbps_5min", displayValue: 'video_7mbps_5min' },
                    { value: "video_8mbps_5min", displayValue: 'video_8mbps_5min' },
                    { value: "video_12mbps_5min", displayValue: 'video_12mbps_5min' },
                    { value: "video_15mbps_5min", displayValue: 'video_15mbps_5min' },
                    { value: "video_20mbps_5min", displayValue: 'video_20mbps_5min' }
                ],
                label: resourceFileNaming.video + ':',
            },
            value: 'video_500kbps_5min',
            validation: {},
            valid: true,
            touched: false,
        },
    },
    atf_video_streaming: {
        trafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.trafficDuration}`,
                label: resourceFileNaming.trafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        video: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: "video_500kbps_5min", displayValue: 'video_500kbps_5min' },
                    { value: "video_1mbps_5min", displayValue: 'video_1mbps_5min' },
                    { value: "video_1.5mbps_5min", displayValue: 'video_1.5mbps_5min' },
                    { value: "video_2mbps_5min", displayValue: 'video_2mbps_5min' },
                    { value: "video_5mbps_5min", displayValue: 'video_5mbps_5min' },
                    { value: "video_6mbps_5min", displayValue: 'video_6mbps_5min' },
                    { value: "video_7mbps_5min", displayValue: 'video_7mbps_5min' },
                    { value: "video_8mbps_5min", displayValue: 'video_8mbps_5min' },
                    { value: "video_12mbps_5min", displayValue: 'video_12mbps_5min' },
                    { value: "video_15mbps_5min", displayValue: 'video_15mbps_5min' },
                    { value: "video_20mbps_5min", displayValue: 'video_20mbps_5min' }
                ],
                label: resourceFileNaming.video + ':',
            },
            value: 'video_500kbps_5min',
            validation: {},
            valid: true,
            touched: false,
        },
        extraTrafficDuration: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: `Enter ${resourceFileNaming.extraTrafficDuration}`,
                label: resourceFileNaming.extraTrafficDuration + ':',
                disabled: false,
                autoComplete: 'off'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
    }
}

export default trafficObject