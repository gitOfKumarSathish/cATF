export const login = () => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            'status': 0,
            'statusMessage': 'Request Received',
        })
    })
}
export const logout = () => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            'status': 0,
            'statusMessage': 'Request Received',
        })
    })
}
export const deleteTraffic = () => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            'status': 0,
            'statusMessage': 'Request Received',
        })
    })
}
export const rebuildDeviceList = () => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            'status': 0,
            'statusMessage': 'Request Received',
        })
    })
}
export const connectAP = () => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            'status': 0,
            'statusMessage': 'Request Received',
        })
    })
}
export const setConnectButtonState = () => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            'status': 0,
            'statusMessage': 'Request Received',
        })
    })
}
export const getConnectButtonState = () => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            'status': 200,
            'statusMessage': 'Successfully retreived ConnectButtonState.',
            'msgType': 'getConnectButtonStateResponse',
            'groupsState': {
                'group_1': 'disconnect'
            }
        })
    })
}
export const disconnectAP = () => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            'status': 0,
            'statusMessage': 'Request Received',
        })
    })
}
export const configureSSID = () => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            'status': 0,
            'statusMessage': 'Request Received',
        })
    })
}
export const getConfiguredSSID = () => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            "status": 200,
            "statusMessage": "Successfully retreived SSID.",
            "msgType": "getSSID",
            "SSID": {
                "1": {
                    "ssid": "qwqw",
                    "password": "qwqw",
                    "groupsState": "disconnect"
                },
                "2": {
                    "ssid": "wweW",
                    "password": "WWEw",
                    "groupsState": "disconnect"
                }
            }
        });
    });
}
export const getDevices = () => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            'status': 0,
            'statusMessage': 'Request Received',
            'deviceList': [{
                'connectionControl': "ATF",
                'connectionStatus': "connected",
                'deviceId': "68:fe:f7:02:c2:16",
                'deviceName': "device_1",
                'deviceType': "mac",
                'groupId': "1",
                'ipAddress': "192.168.0.100",
                'ssid': "ATF5G",
                'version': "5.0.0",
                'networkParams':
                {
                    'ci': 'string',
                    'eNb': 'string',
                    'cid': 'string',
                    'tac': 'string',
                    'pci': 'string',
                    'earfcn': 'string',
                    'rssi': 'string',
                    'rsrp': 'string',
                    'rsrq': 'string',
                    'PLMN_mcc': 'string',
                    'PLMN_mnc': 'string',
                    'PLMN_id': 'string',
                }
            },
            {
                'connectionControl': "ATF",
                'connectionStatus': "connected",
                'deviceId': "dc:a2:66:66:64:67",
                'deviceName': "device_3",
                'deviceType': "windows",
                'groupId': "1",
                'ipAddress': "192.168.0.102",
                'ssid': "ATF5G",
                'version': "5.0.0",
                'networkParams':
                {
                    'ci': 'string',
                    'eNb': 'string',
                    'cid': 'string',
                    'tac': 'string',
                    'pci': 'string',
                    'earfcn': 'string',
                    'rssi': 'string',
                    'rsrp': 'string',
                    'rsrq': 'string',
                    'PLMN_mcc': 'string',
                    'PLMN_mnc': 'string',
                    'PLMN_id': 'string',
                }
            },]
        });
    });
}
export const getDeviceInfo = (deviceId) => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            'status': 0,
            'statusMessage': 'Request Received',
            'deviceInformation': {
                'deviceId': 'string',
                'deviceName': 'string',
                'deviceType': 'string',
                'version': 'string',
                'ipAddress': 'string',
                'connectionStatus': 'string',
                'ssid': 'string',
                'groupId': 'string',
                'connectionControl': 'string',
                'networkParams':
                {
                    'ci': 'string',
                    'eNb': 'string',
                    'cid': 'string',
                    'tac': 'string',
                    'pci': 'string',
                    'earfcn': 'string',
                    'rssi': 'string',
                    'rsrp': 'string',
                    'rsrq': 'string',
                    'PLMN_mcc': 'string',
                    'PLMN_mnc': 'string',
                    'PLMN_id': 'string',
                }
            }
        });
    });
}


export function configureDevices() {
    return {
        'status': 0,
        'statusMessage': 'Request Received',
    }
}

export function configureTraffic(configUrl, data) {
    return {
        'status': 0,
        'statusMessage': 'Request Received',
    }
}

export const getConfiguredTraffics = (groupId) => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            'status': 0,
            'statusMessage': 'Request Received',
            'groupId': '1',
            'trafficStatus': 'string',
            'connectButtonState': 'string',
            'startTime': 'string',
            'Traffics': [
                {
                    'measId': "1_1_1620030643410",
                    'traffic': "browsing",
                    'trafficDuration': "5",
                    'trafficId': "1",
                    'trafficType': "external",
                    'url': "rediff.com",
                },
                {
                    'measId': "1_1_1620030643410",
                    'traffic': "browsing",
                    'trafficDuration': "5",
                    'trafficId': "1",
                    'trafficType': "external",
                    'url': "rediff.com",
                }
            ]
        });
    });
}

export function startTraffic(groupId) {
    return {
        'status': 0,
        'statusMessage': 'Request Received',
    }

}

export function stopTraffic(data) {
    return {
        'status': 0,
        'statusMessage': 'Request Received',
    }
}

export function liveStatus(data) {
    return {
        'status': 0,
        'statusMessage': 'Request Received',
    }
}



export const getTrafficReport = (data) => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            "status": 200,
            "statusMessage": "Successfully retrieved report.",
            "msgType": "reportResponse",
            "finalReport": {
                "report": {
                    "id": 137,
                    "timestamp": "2021-07-19T05:17:06.415Z",
                    "reportName": "2_ping.pdf",
                    "groupId": "2",
                    "report": {
                        "msgType": "report",
                        "testConfig": {
                            "APBSSID": "-",
                            "APSSID": "-",
                            "SecurityType": "-",
                            "groupId": "2",
                            "NoOfDevices": 1
                        },
                        "testInfo": {
                            "StartTime": "2021-07-19T05:16:23.402",
                            "EndTime": "2021-07-19T05:17:06.397"
                        },
                        "results": [
                            {
                                "trafficId": "0",
                                "trafficType": "external",
                                "traffic": "ping",
                                "trafficConfig": {
                                    "destination": "www.google.com",
                                    "packetSize": "",
                                    "trafficDuration": "30"
                                },
                                "resultPerDevice": [
                                    {
                                        "deviceName": "device_1",
                                        "deviceType": "android",
                                        "deviceIpAddress": "100.85.171.35",
                                        "latency": 246.868,
                                        "packetLoss": 23.333
                                    }
                                ],
                                "resultPerDeviceType": [
                                    {
                                        "deviceType": "windows",
                                        "latency": 0,
                                        "packetLoss": 0,
                                        "devicesParticipated": 0
                                    },
                                    {
                                        "deviceType": "mac",
                                        "latency": 0,
                                        "packetLoss": 0,
                                        "devicesParticipated": 0
                                    },
                                    {
                                        "deviceType": "linux",
                                        "latency": 0,
                                        "packetLoss": 0,
                                        "devicesParticipated": 0
                                    },
                                    {
                                        "deviceType": "android",
                                        "latency": 246.868,
                                        "packetLoss": 23.333,
                                        "devicesParticipated": 1
                                    },
                                    {
                                        "deviceType": "ios",
                                        "latency": 0,
                                        "packetLoss": 0,
                                        "devicesParticipated": 0
                                    }
                                ],
                                "overAllResult": {
                                    "latency": 246.868,
                                    "packetLoss": 23.333,
                                    "devicesParticipated": 1
                                }
                            }
                        ]
                    },
                    "uid": 1,
                    "createdAt": "2021-07-19T05:17:06.399Z",
                    "updatedAt": "2021-07-19T05:17:06.399Z",
                    "pdfReport": {
                        "id": 7,
                        "reportData": "JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PC9DcmVhdG9yIChDaHJvbWl1bSkKL1Byb2R1Y2VyIChTa2lhL1BERiBtOTIpCi9DcmVhdGlvbkRhdGUgKEQ6MjAyMTA3MTkwNTE3MDcrMDAnMDAnKQovTW9kRGF0ZSAoRDoyMDIxMDcxOTA1MTcwNyswMCcwMCcpPj4KZW5kb2JqCjMgMCBvYmoKPDwvY2EgMQovQk0gL05vcm1hbD4+CmVuZG9iago1IDAgb2JqCjw8L1R5cGUgL1hPYmplY3QKL1N1YnR5cGUgL0ltYWdlCi9XaWR0aCAxODkKL0hlaWdodCA0NwovQ29sb3JTcGFjZSAvRGV2aWNlUkdCCi9TTWFzayA2IDAgUgovQml0c1BlckNvbXBvbmVudCA4Ci9GaWx0ZXIgL0ZsYXRlRGVjb2RlCi9MZW5ndGggNDI1MD4+IHN0cmVhbQp4nO1ce2wcxRlfx/GTxgmOHftuH+c4QNtQCiWoNLRJ7vZ1foWGR4RAedi3j3MSXoF/gVycFqmUv0pLpVZKVaEiVFFUgVAL+J22wD+FSq1QW0ErWgS0JLENbf9sv29m1z7vzK5v785xQ270yVrf7e7MfPOb7z0nCLVWa9VpzRNzzRPngVqAxi8ctU7MXTY5t2FqYa0ZUGuxGwUMIKeFwgYuVhswtC+EzXnATNP4WeGlD9aaDbUWr3lyZvK8D5tVpFb2k/HzgJn1L3+01myotXitefXRsgKNzzW+cnat2VBr8RrRGmtLqBbXmg21Fq/59sYaSptzQGvNhlqL19YeNhPnWibn1poNtRavrRlsJudapudbZj9umfmk+cUPqzup5F43MWgl+61kNifqtqRam/ffvWn4fqFQqG5HbOtJD8sZR9Zs0XAotWv3tWnHhfSqd30hWzPoiOUL2rrKXlUrRcvUfPMv/9n47LuNT/254cd/qu6k2q/TADnd/SNS1gJKpl1YTcDMZ0aOV7cjtimZHPQlasdo1/QCMLNBe3C1u76QDWAD1DoBNLcqNEliiRSc0wstk/PNL37Q8JO367/3Rt1jr9aNzQqFqXWPv1bNKaXT8EfSHSTNkcmFrNsJ1Wq/457KX08Ame/ud7r6LKBE1r58cLjt5gPC/v3wraJasuZIBu0UBwAXYjbfrt9Xedf/P62ZWKQtiJzzqwEbQEvjC+81TXzY8ot/NDz9Tv0Tv6375hmhMA1oITQtnCQXVWzbt4Ng8WBTRCndBoVV+evFPheQ02WOgjQDgguUJ/v3bxg6CN8iULVg17KZF02n8q4vqbbu+28Kj/+m7luvCicmhUcoVGaEMZ/g+uR0NfsD2AiCbATXLmm6YGlU/nox60q6S4WJ7L3cFTXn8v7DAoENg1g3aViiUQXEXlrt1Kzw0IxwYmoJKmMB2MxUvU8ubIAqfzPAQDbc4Mt1MGNsYVE5LiMbYANUedeXVivMCKcIfTpgo7lIxS83iMDRUZTVYFO1durTDhuiiYCEGmyq2C4N2FxSSqp1cilu0zoZk6bnm6fmGp/7W/2Tb9aBAUNt3cJssI/KYLNjh/v5Xe6Ve1xFJ06KZosacWzR+LTEdF7cc0TaGQzIlAibK/rv6ekbVUxXMixYXyB4eVK3e3fbV33Ngq4Xb+vVXUopIy/rAdi4yUxOzNjduy1RtZlvl2CTyroy9oUfwkQwKqhaUiYnZUYwshTZSCAxJ6lk+uja2+jaa/a2Xc5ndzqLQw1rXebBbvNwwhghZpjPQPIqWXM7+oc3DRymMYRSWsvkOUTO+FxszFD69b8aX/mo/tuvCY9MIAYAMywGyoUNMEpRLVhB4AkwXNHyCvBZp8gBuxRRlDRHADNJ1ek2h4Ezi8+uCJtk2hUz4ArlARIYmtNt2YAVx4UQtTy8FjoVrx1q27ZDSKc777wfAZYeBtjABdwZ1FCa3fHVHHwLf6Vg1wQ28JdYQTARyUTRJOsIG6CEaiEkEA/5ED4clTOjcsYhgURHNPI0HgUvwVelkT/Jawc39H6J+/hWzU7hjsgBf2BeGLvW/IgWXuRlEwZwFDDT3n+4xBgFSQmVmx0483HzSx/VP/k79KBPFsGgGrBRMo5C+Wkgk4koYOW/v9lNC3mi56iBsSJsMJACkEu7bIxlKdhC4i1wc1vmVqFQkMnulolEkkMeEYmcEZl3AqphCkk0m20GVBR1MMe8bORT5hGA5TI+aLaiurCsIkcz+vrRcKg023yNKhu54scRFZoDyCmCOoeTIpJNCHoZFbVjK8GmbMx80vT8++sef114eAJhE4GB+LCRQHSrNiCH2dfRhPGTxk2JaNjgOw2ERCQUl8AD27l7aJRAt/SRLCOYCM5ohdtwyQAznYO5RWUhEdEKyOGFg4LrjqM1clTPLts7Wr70ocooi45J5qgyeCQKNuXlMacXGp99t+7RM8JDRZipkrQBYwO3s2qVsqwBSqjuxu27ImBDDRiCxtJfbuOQVlq4qLXQvGVdmQwHMLNx7wGYAt3+dACl94VSlCg+2YdBGWwEzEh9UcZSORnw6fmGZ/5S941ZjPoGMRDXtpllYbP5izoskxS1u6P4gJH/m24PgQ19NuzxKCyJQUO3fBL1KBQppt2WzW9QjxfBJh4BZq7QRq7UR8KUqeQNIHyysK2AV9lQ7y8ebEA3Tc03PP22gJjhRX1jwyYobdq23oAbjbe1wUNBzaKi5kVpbIJl4vLuJDooJLkA5h+HUWA2qKiMwNpBiaR56YMgM8EOx5dzviIGKtpgIsd0KYalSxyZY5idN10ueGBSQrqwad/9cKc3DK14DCBMUBmBQEiFWVmaC0by9v37+cPQkA8wAJys7qIGZCerIWbk8KBBPMzMLjQ+8w7xmEIyBRUrqfYv6AAM3pLRC3AiRomyRnWz5cu3KJz1JWqIMSDRB+HsL5t6FuBViWm0XZPAVVxcHjZINBgpgBxMeaONTcjmWkEiTWgSdCUMKvpsYu1zEIh2RaEQtGcMJNoFiAIFCTYOWD45LkTFbNCkQYxlLRE9OzuhI4mqn6NnOKOgrxcOmzh+U+NP/1o3Fp5dqgZs6G5iN6BEFiXw4o29O+Bv0DcxyNoxfJBVl+xfhpOZfCDFiS4PET48kXIMPRquN0ScuFDLmUCdumaLjfpNwTuJk87zm2wqSIvfAJiBxU2ZQQeNONfsxgGYWazqkUwbA0rByWKIIBw2iw74XCgBZmYWmp77O9Y8PMzYM1VVUikSOhCX8wo80839nGjYpitu6LrxlmB4TePDBgWIxvB253FpN8fZBMwgclh9pDrdO++ImVxYQk6gFxICykuMtxgmQCTeOgJmFFJGuAwhnmxc+hwm25Me3ny1yr4BB5BlNpThrACb8XOt43PNJHzXHEoL9d99U3j4lSghA/bt2HSFsOkdOgBKGdQuVb60Qg+ci7a9h/DrnnTL5/Z17HoQ1hqkBKyU53atDBt05wNGIEj4nuzIVTdjjyyl+odhAEWPuFTuEWzEhI0RWurjh0oC4+dgZuvgIe44geQBu5cdEnGl0YBJY3UQDQdt6rkO1F/izge7vn5Pz01W1x4rSXhFelzOHGIfhsIGa7Q8qzgcM3ONP3+v/ge/r3v0V3yr5qRP+C9TPBMHNsCE3oGDysChhGa3336085Yjl9/qbMkOdwBdP4h3pAsgInrSR8HX5jvFIdKG1Sygs8IWglJn+igj/DEazIsmrZTKDIWNw/iMNscmz64wVGTL8n5JKNiFzSWbOaXPTuy6revG2zp3DHXeejcgB2xmmAj4XGDOcYNj0bC5EK2sKPHGbde3qRiexWLgTA4kvB8rdllztxRpw/U3/QA7j3wJE8AeRlzjSRsbLe0Q81LUWefLZd3AxamFEu8RFEGmleo7DLgCgYOOpAdI6oJFefcXHWzAj9h8rYEXpi3GixKHwgaXpoJ4XTFsaFonHmxQ2oTDhlm+qsSIRBrCMg8qHs7jcfLigg2o4FT2CCBHDgmesMwpFTZREZUYBCYoz80ps96GBxu3WqFF1nMMJ8ZtvKhgA5hBnzQ8bUexJGJkxiGppZJM4qpIGxLddUMSoFWFDYvw8sYf/ghhCFH3mo0RTkaqX0SwATNGMXlMQysRk7z08BEpM7BopA5drQDbQ2wbRlC7GCrMWuhrl0bgwkN3Aq3UWk3YsIkVACoaJ6WNUzZyizmpwEiAYwmMX2HOFKzi3j1epoPIzxie1GXjZ1vRAUd/qpX85kzr5FzTix+s/9FbdY+9KpyYRrf6VAk0Rg4gFHinV4phczIKNmgKZi3W4pUNXJGOHQOiCdzIKZpX1CSaDiekzMDGr2sK6imR1EqJaihypLQjgduesWlGHryhjq/s69x5+6rCRtQcdsXBKUiqdoIEISNIAlKRZJXhoU5C2TrNTYxemR69evcRWtzl9xjPAQfkeGVaFDlTQAv1T/1ReGgcy65KwQwlChv29ErJ0gbj6myW33C23LivjQSEAw2QgFVPpUgbssvYLYzPhiTsUBll8lgiBc6IjpVOsFVxy+thtcTllKCzsMFYNBtm1JyO7HBY9R2IDkXPA2yUDB4HYzGDwDMt1EQGpxJM8iLz8WAT/ImbqXn4sP47b2BRRGhkLyJQXAFsVM7ZNKp2uYPv2DGYYOtYuLDBUk+XCVAgZsSQBUWvOe05+4vxNyxH0Zm4Pc2QGhQ2nLRXTCVFQMhoaox5Dh3gvqSHk6QIKj4YoWhyYkc0XcI5EkgGwO1OwFOZ51uWfoHNq4vAWhp6cDICHqUHYUq3bTSLU2aDucVglBUm234NOuk8D90mRyODO07RcqyHQt6cS+ojxQWlQrrQpj6wRT3KMZA0uyfDccrErJfY8ot5KoNN1uJsH81ODBzatvfg9mKZg6dBD3T3cS2Z4mk6EqlhTurLqmiwBFoldVnsIyQcFAabYOHEJJ7arn/iDdRQcTEzVmlOCpebV9jg8dbwicRRcbKhYTFORA74gLUEfGsTC0oxFU466lSPAnJ4MTcsSNia5ohErJrQ/YruymAD41RMjEWz84IhYdajbxgjn7C/NLuTaK5SKg9lkpVbKvWhGStwozI5fiBUo5a5BSuyMmym5puef9/TNWXCJubJhSK9JoGC5iGf+KQY2CQBQLrrI/kDPhdb0JvJyeaIElLV4GEmm4flEDVWYhBSrW27HPA++GFqw6ZnYRhPMDZs4JMtvOoRiY4TLB+CGa/QlD8YLnNskqjCESInvdxueIxItYjy5ai2QL1N6/RCw+m3vGMIF0jaTC/CBlNvOjeYFs2NkojUX9k9fSPsUdxSCIUPXalsSK1XKCFsQlOZbIgJbbM8lXjlxZq8QtDoZ0vlpMtNu7cU/77N5Fzzy2fXffv1cqyaYqUTaGPTkaJmBg9Y+S1BzIxS4sMxyU0RNUdtgxWyWuxC0PQ3sV7Efju5t6QI9iIpIcz3YMMMBqzxDvXuduNe7CgecnxZx6uFiKaQOlW+P9L4zCeti8iZ+bjpZ+9627+KsDkZaV3TnyvxG2BGzNqYXChhO8gkpJM0uXVTwc2FIsLMAWa2DR3syY7gAZbSDiOAA0KRQ0eIS5nFFEOcRQktefKq9ZjRSgb+HEr7EJoubAg3oiOqcOnJLzz6sWIqyiDGWBTGOCNvOP1vofDf1nFiDE8vrP/hH0iIr2zM8JQUOmWzzM3kzhNn8IcFlkcIMZV5131CoeCX+QWS197eRBWfRbcXLvDEWbCWxvU8cQ9RpIAn650hwnNt5PCRTM+aMfWBNNUOj2MNf9YNuK6AGTnr4leaFx+QjKW0l+xZIPQTMJMQY3LID5Xg/QZ6YbLu+vix6UFR/BoLjQ509B/GU4T+Tlk2U8Mr5IP5YvSG8MFjY8ZJaSQJznU2STacntvqSQ93EdNaNmxG5vBrwwAzDaf/AzIHYNP0wvvrT7+FP0RTpj1MiTGJC/7xhKBumkUC5HBGVdgw8kD7Hff6xRLBsgeyp2yUAxh4yfsOgn+PX05ALQcMjRp20rRoaoA2wIyi5mlkjMcr78yjRODBDhDlIdjP/gka36guHh6p/0fY2Iphp3gxEwQwVve59Acr6IBltFex/GzxHpJzB+vIKtpEwahUyhjtYY7m4dFjVJHLkbb8cVmzFDW3aeAuwGf7wGGJKa0MU6+1Vmu1VmtVb/8Dv7eR8QplbmRzdHJlYW0KZW5kb2JqCjYgMCBvYmoKPDwvVHlwZSAvWE9iamVjdAovU3VidHlwZSAvSW1hZ2UKL1dpZHRoIDE4OQovSGVpZ2h0IDQ3Ci9Db2xvclNwYWNlIC9EZXZpY2VHcmF5Ci9CaXRzUGVyQ29tcG9uZW50IDgKL0ZpbHRlciAvRmxhdGVEZWNvZGUKL0xlbmd0aCAyMTY3Pj4gc3RyZWFtCnic7Zl7WBNXFsAnCFRhAcmDgkLwQQUkKkgFfNRHK0pXqqhQcZFCoeKD+qjddbcq6+eu1VpFRdldcdcq1HfRbamsqBSsImgtDxHbWjCCYEISaAh51kCyc+88MpPMCBW+j8/v8/yR3HPuOWd+uXPn3nMnCPJCBlZeP98klfQg0tbqv/MHGpRBkh+ZeydHnAca1Vbqe8lu7o4daFRbaestvHnnQKPaiqTX8J8ONKqt9B7+k4FGtZXnGr6zf+CdBFwuf6hdz9cbzONyeVz7/oFftmr50yQtcdPjXsBz1lTXVN4769vz9eJvVVfWlE7oH/geZfSdXsDb7QYe9wPZ+p08BAIP7iC0tQE4aqb3PyejBNztzcjvMKEetQFs/X+4U1lZe24M2lpjQB3bpvY/J6ME9gf8hyBBQwjyXMKvBQnqxiHPL/y9F/C/SfoFfhVIcNcftPoTfl7sAiZZ+Pb4p8E7eI2NfDs1af4knyFM8K5+M5emxE72cQDKS0PdXNMh/HgXN5d1egLeKzz23SWv+Q6m0gwd80ZCSmy4twPV6OwTHJ2QkhAl8hxkBS/WdDLKr1ns8IPn7ClvUWoMOpWsOuctZ2t4fvzJeqVGp1ZU753OQeyW5J89UQkSqArzTud934W22qcgwvU35Gqdpv1u9mQyr2dSvlip1asVVZlTOYTx5aVHqqUqrV7b8fj69gg6fDtbNXCIFT7oWAfFT31yHB1++kUj2Snf643ssc0tDwqrIBXpBy9heSO/6SaNrbuHYcaokieUQMkOHhX+sZlFWEc+7LaV53cTqfBLpbTO4hEbbHNLNvxA0fTr4HRYTj9aFIItDUm2Pm8cd6fAs1aVB1jgR3yLX1IhlWtNsPm1E0LCL8IqPX2bVImNY9Fn6u4urNll7DLClgHcOnVrqxZL1RiK5n0HUwwKSQeWtQitlOZieKbOVmm7AXPe1Ad4zkcwtWzf9OG8YeEZD4GiWkTCi34Ghs7P3/TmB6ytgnG1K9597zhotGxJSks8js8p6achPEH4P3RQ+dgeCYFnadXR2cPcA/94D1qzHRzzYePHjcECvjAyRwWUGr9nnzbDr4K2PBrvndYI1K3IxxB+DJIHwRKxTuGX0Hc+grwHL/sKakvTw2Q/4KXZR78C7Yq73Xnw3bwQs466BDT1zAly8F1G4K4HP1UbaYFnPcP+ixl+thoOFRHO2QXUXch2CD86BKTvTCF6veFjeYWHrAPflk3KrIjCPVyhR53XLA36pVtEBI6sA+ZcuLeZZxFWrzJU61pggX/0RM8kBvM/meEjviq5VHzxVTJ+M9YF4e8I9wPtzBCyNw78GN2b1jusOY/0yILzYtRBuhVZCdaY1kMXLheV5g4ljNwi1Gicb/GKX5HCJKkrieXXCt6RL+ALuORuMaKMAn87CCxEmiWW7Hy4MmVw3qfDa5eRHh+AZ6AmuhT97J5pCXRrABF/5fH5Hq7kkh8ttYLvUdjKA479EM+J8RdMFPhrC8ET0BLiSMrv/gO6z7qk0+Ep5UEqeAZub3yAfsr8LIH2hSDiKOFl5+DiOyUdPsd9hbfj+kelbc0puFZvJLogfPGfFGBYi86cxyX/3H3QfePlVVbwU8hciWBiVR1SgltWmE8Env+iCUSUuKG32iM45v2duRdv4uti3+A5oZuK7sup+x4Bf/kTlZlJ6nxWso78OwC++rSeMfC6k3PkvnLxL90UW5/g3TMobzdl12VU+F3M8C0jVzwdvuq0gTHwWshhSiXyY7m2j/Cu2V1Q01edO7x99QwR9YHFRt5QcamEJtc/46/uAf4UGHnDjW/ogZcKa7BLK66dys5IDfi9rI/wifAGS7dN9eOCYlZQToEv3gx2jUfTuN40EQo47IcRDP7f4FdLJnnQ4ob55sIL3145UegKiuRZbX2D5xbAeTCHWL6GV1DgryY0g6kUYZukB/jvt4Dns8PfKmq0GIRdeYXQ51rDR8UuiGGSOBEj/FhYu+wiw72oI39rInjHY9xAub6nKDAw2KMn+Mo4OAYJlEDvoMDRa8C2a3iLtM22hqeW5jTJYYSfBBYso2WP8RVT4GuEx4BWzCW7+QUtD8XKZPztgYgN/udxcD8ospyUXEubxA1tIOlPItIYr7eCl5pZJJsRPgz4d68lojmb4Ca1Ey/MRs0Di5p+PZl9Pehtew2rbRrAS750Jvgmv3hQoBlTSfMWkqM1nLDxvga6MZp0+q0lsQhu29X4tOb9WQO7diObsarSERb7v6zG/gKyT4ZVYY4DAlcb3Qo2+IehLjeBhyLZERoHpYEHuEsMF9BcIebpfwIOlCnmWeB3Q9wLsP3gb3NDg2euvopvVWVT90N4fyQSnkUMXyVGTAiLPQZ/Wn0YgsRAN0nWxo2Xu5ngI5DFMFB7Ki5sfNjiz+GS9t1C+IB1l6+bFRw6b9tPOMeRMHIisZbENvDYPyNJ+HZibBZrLc5yUBfAk9SHWMVgam+QYQciVTK4YfTdywZ+MmK/DdtGTfJ6BRaomI/sx/114mbLudgsqyKCm9jgycNILaabsLXAOYfm1VhKUe4GoqVIhpLmIFkFopzoUe3TSPgkAN+I1jpOVrXFI/RE41dBM93ET75tRHC6jAWeWG1E+P+FZ/Cy2n2HZaZ1XpkTUGcJaYb3c8m3lr2+s/B1LGrkf3WU3CZL8ZsG9I4ZYKIvq7AMr/JL6BJ01pKr+ZjfYiyJlgi2iylV6bU2ojMR02Zs7RONztCYLSQjZh8ol+r0qgclB+PQRfGNi3KDur5g/57MA38RQAfP5KO3JFqdprk8J5Y867snZJ383+UvDu/NzMzM2jGShH81c9+eg1tHwLbP8rxKqVavaS7LjnHFut2WHa9t1+na6gq2zxiMDEq/qTS03zmBvJAX8gzyf27OXb8KZW5kc3RyZWFtCmVuZG9iago5IDAgb2JqCjw8L0ZpbHRlciAvRmxhdGVEZWNvZGUKL0xlbmd0aCAxNTUxPj4gc3RyZWFtCnic5VpJbxs3FL7rV/BcoGPuC2AYkLzk1ENbAe01SJMARZy2aQr055fkcETyfZqhYtgtisiJPHp5+04qk1QhvxiPP99OzUevxRRECJ69edz9sUv/LrXnTBke2Ke3u5++YR8jXE/CRlQ3c+g/RULB0s8Pr9j88On97uqVYu//zPxcUEwIKRO7dxnCE+r8EFEPx93Vg2aOHd9FRllDwQznk+BBeSYFOz7urjlX/IYdf93ZiHD8hUWAkRmgK0AQAH/IAFkBigCEJiTilvKgJPKOAIwnJHos1lCxigIAg2qKTIEHVUxQ1dH8/ZAEpIQMuD8OIxlKJOUsxJxYQGiVIzx9z1N65iVfEkMRdlpTABWoPQEUZ64KNKIRWLy2jmwb5MJZ0bRtlAkEY6SM460ydkH+PhZq8rYUUcOCLORktJOxVG18klZaz4QzE3fKmFS6pVCvfjbs7rfMYlDrhUAEHhVhUvFU8KmyJxVfbNKBSzZZFWSqcgQuFe+Y6M2KHCeurfcxvEtk57hJXn11SzJFzuaL6j19AMgcbVGTWBcqUSH3FKdEAZJSVG3MXKSBZt7Vj7+//nh9fbV/8/mv1x+Ob//+zK4f7h8eOLe2/I0xv7lhh7vbKlKow1wH99/ddjaDsqjarIjQGzYbRf1SMrHFoQaZUyGuNm7RRVGn5ArKmfhUomhlzdCUYEFMNr00Uyk9Uw7FqROcn4Q0zdBR+XPiOz9RuuHgUTZOD8tLelquAmvfU3oCMLKIvYU5WfM65BRu3hMhACNhrDMW2GP+HZ36IT74+uDj7y9VI/qzKCG8jpIUj5N6fk9kAIxkIavgQYGkWlYg4uY/icHyHOmUTdUsmbJisTzbEZIWyswQX1BOzvEEIXE5D6F8re74zigt3w4hczkLoXxzQ2r4ZpSWb4eQuQAk2JbtgkMkRaRWUKYhcjpAh1+k9ADlDRWijOikzCgN1x4hc0GIcNSehERFRaxOVKYionpAR7FI6iEWHWeI5yz1lAHPnIdQvlZ2fA0NSY+QuSBEeuqrhERFyb4qZioiqgdIWhQI8Q7iH0dvJ2hGafj2CJnLWQjly/tgzygtX04jiRDnFPVVQiKiElYraqYiojpAT7FIqpCVURSbk+1mUUqtZZNwawOy7mHGwjiEiQ+Td9k/4FjSMhaXbAXNRnAiFfvb00YQS4vss60ItMZQ3cty0vgA7Sv7lRtbs2ynqdP1e1xME3Fa9TVZKMqy7qlH61aiLFEBAJKe0aTbVkk52+gk+NgAo/qzSqB+NdRDnsai8eHQ5qdZdFKyHBY3LfLLOqYEtYgagCGRkCfh/AFKUQua3RjcEgigJF+zuFtSbciDYoxdW/LXbZA8X8y3A3iKCTlRngugrBchtB7AK+A3VI9aBL4vvaGxmR69ME0clUJJoBKK6ptuqpZD5ULDl16/eMeHFiko31Id7UkR2yj0ZzNbJ5tj6r/WsZXma9kFiVC02kgmIBmnCuYfhyP6BblS7Sg9sUooF1cNADCoYSXf4JquwdgPSYApDRj4AqXQ8i23cmpDCm2uSALm08gLQUnGmo4nkXJLiUroSrQ1azccTS+VSCctv/ZEAsWABKRA7kEiQapRW4rYjVavlVtt9avL75fdzJ0Yiv18pZ9v5mDObl0afrXnAxyzW7EMpr/MFxvztiywou5nkiYLdp10g1+6Dl1ML1iOYOLBTISuAxsirJ0HUuC4y96O+1S1C2tqsIImr3iz5pXxqn2BE6CfP58jt71yssvsYc26AAINq1SU31CLAoCkfC0IC+lGn8RFHsSOD7P2dPKFwzfEA09c9xQD8mK87MGBBYJ8R8XSEY1XO16+9Ka/fKsCam0zBpwSeHBZm4LDFunqhv5CLdIFu3Zrg0d1mtwYdEMwYDsBAHZEWN2e1COrYbipwco03l0OQ5LD0Nde8Wf0tYQEgzYBjWR4ccIv2JKrGU85TQDGCmDTkVav3mtBp8KTAE1S7G50F1j7Pr/h8b+5GxvPg/HR/gLFoNuPxYIUuOK64IK05gbcr0F7DdKR9grCN5dnHB5zWjTf45cxKOC/8PzHEyd9K/8PAj8KcQplbmRzdHJlYW0KZW5kb2JqCjExIDAgb2JqCjw8L0ZpbHRlciAvRmxhdGVEZWNvZGUKL0xlbmd0aCAxMjY0Pj4gc3RyZWFtCnic7VlNbxs3EL3rV/BcICsOh5+AYSCSrZx6aCugvQZpEqDIR5umQH9+ySV3Sc6svFvAB0OQnATSy+MbDvk4nLUGhWF8CRl/Xg3NR69hCBCCF+8+7/7apf9X2kuBRgbx7f3u1x/El4jrAWykuqzQf4oDQaSfn9+I/Obbx93+DYqPf496LqAAUCrJfRgRmaj5TaQezrv9SQsnzh+i0DhDEEbKAWRALxSI8+fdnZQo78X5j52NhPPvIgJGjYCuABBAnkZAVQAJAJoMgSPVoEPUAwGMJ0P0elhDwyIFGIPOlIsyDToxoFPn6b9eHcKihBF4PK/uZCg7qXIQM0uwrUVHNH2vqbzwSk7GQCKnNQVoQO0JUBbzYkADTcCyN5fJtiEXZaS2bSYTCGNtMk62k7ET+ad4UNNqK4j7WsigBqOdikfVxnfKKusFODNIh8ako1sO6v43Ix6+jhIrZ70MgCDjRIRCmQ58OtkDxpcYdJBKDBaDSqecg9OJdwL6tKLiILX1Pm7vtLN535Ssa3UkTlE5fairpw8MybsN1cS6jIKKPFJO2QVmSqizMdkIgTpv/8ufb7/c3e1fv/v+z9tP5/f/fhd3p8fTSUpry9+45/f34vBwrCEBD/kcPP547HJmk+VTyxMB/UTOBum6FCe2HJqQmQ/ixcIN3S7qZK6AzsR3ZRetqg5NBgsw2PTSApM9k4firROcH0CZ5tLB8XPSze/quFfKWjNYZdYvH7TxBrGyWNSL/Cc5c3ofB6CNbgQHAi1Mdo6HJmIY/4mXYYb8RJo97yklKy1DTFwiER9JnXhHyUocim5qxWcaDZh4XcA8kAbskX7QHI9AaDwLh0r34TKpFe8pWWkZouIqSCI+klrxnjIqLUGxWtPFSzQWMPK6gHkgDUiQbtAcj0BGGxbOAPThMqkV7ylZaRmi4toRW2dSK95TRqUlSCNbvERjATWxeh5IAxJEM6cvQA4VC2djP9uFy6RWvKeMShcgJm6JrTOpE7fMw0sQSrZ4Y1WkAZFYPQ+kAQmCzOkLUJCWhUtYFy6TWvGeMisRyHtua2+IrTOpFe8pWWkBAscWL9FYQCBWzwNpQIIAc3oPXbgMY49ru9vQi3it9W0qNL1LbmZcvcbzAwzU+7e0ylMruBAgVmxbIphL7VKNUB6RoOk+HUWmtqBBmLCxZF6xreiauXRNhKmPU5q2FYHMq3TonrY4tVkpLU5llHbMXQbkgT4gStpJlTzqnsjj04mhs21mgOvrAMo+4zqoE91SRYawnHiSVFT6DVnXPDZlbefnM6BZe5oC2xdNd1uzMWb5EY61t41GWBuiHG3oWVi2Y0eioelqc43V/Si1opm6Xku/dOrm/0yMMsx6WBaFJqfdFivN5mBW4gVOKZwKXPaJUnSC7YPPhsqUnoevszLVzLacUQS8ispU89iU9fxkeqtMt8pErTSbY0Nl0jCVMU29v6HzKmZrkcO6e7V9zm7iJdWumtmWU2ykvIraVfPYlDXqW+261a4LVprNsaF2mTAVOt5DbXpKLL9yltQZwBZrexrJ4tY8Z1Pykgpczax8g1RjAp0E0FQBSGZwWB2y4Tqx3l1FGa158LW1q0vJGBeAJ5fS1a+qb7X5Vpt7f1ZzlO/cn6rNzk+FnLeR/JdzG6zp9XM2Sy+pptbMtrRP3umrqHY1j5p1+nL1P+mzhKsKZW5kc3RyZWFtCmVuZG9iagoxNCAwIG9iago8PC9GaWx0ZXIgL0ZsYXRlRGVjb2RlCi9MZW5ndGggOTQ3Pj4gc3RyZWFtCnictVdLbxMxEL7nV/iM1I1n/JaiSk3a9MQBiATXCtpKiBYoReLnY6+9sT2TzYoDSSttvszjG8/LGVCF8SVkfF8MzUevYQgQghefn1Y/V+l71F4KZWQQL/erj2/Ec8T1ADaKumyh/xQVQaT3+1uRH14eV+tbJR5/jfZcUAIAMZl7GBGZRPNDFN0eVuu9Fk4cHqKhkSEII+UAMigvEMThabWRUslLcfi6slHg8EVEwOAI6AoAAeR+BLACigCgiQrsqA2qgtcEMJ6o6GW3hrpVFGASlCk3ymxQYkCp8/CvFlWYlzACN4fFTIaSScxOzNEES61yxKbvbaIXHuVUGIqY05oC1KH2BCiHOevQQOMQ7IKwbYSLZUXLtiETiMQSGSdPknkXGzWdNkLMaxEGHIx2GFvVxie0aL0AZwbplDGpdUujrj8Zcf19NLHQ60UBgoxEBCqZGj519qDiSww6SBSDVQFTl3Nw6ngnoA8rWhyktt7H9E6ZzXlDWc9qRyoFc/hQT09vGZKzDbWIddGCitxQmZIFVpRQ2ZjcpIFW3vrDj7vnzWZ99fn19923w/2fV7HZ3+z3Ulpb/mPOLy/F9npXXYLa5j64ebvrYmZkObVMBPSZmI2i51IqsZWhAZljI84ObuiyqFNxBeVMfCpZtFgrNBVYgMGmlxYqlWeqobh1gvMDoGmWjho/J7v5qepdGKvV4Mzy7lE2LhArS4V6kf9SYU7PUUFZl6rPCmVhquaMadlisY+yHMT9mCE/KR7bwE9qHdIpHf1VSPvYSxCnDOrOHQK4Rgw1F8uqnZifhBoOJy110GhIenXSOOWV5Ig1onr0QM31qn5SpFx7ZMZfhWbqMx6+6sdMOvvjKlJACz73jauAZKMiN4mnveZoG7H1wlqvsRGWVNDRYcPcBgKUadlMQksGB7dBJRiPsm4b6nop/DJFzL8QoxJm2S3zQoPT/bWC1YZyti0OUEQcbSeeGjtgfwsB5r5BysE0G4RN8mmfNSexP51Vd84RMIQtr9klwqqjNcOinJbIuSi5c2OXjhZj55GjbU6JHkHpY6jdUS6Zk4eYaT4I4k3JTndSRrEEXwturr2apWtPZ8bTQ1eMeOOX1TWfQH4hNjS2C07TKcdCuVokSq8G5Trk5wG5pXOARcLHzW4hNB360Gh3sMnKXHCflKdklydC69RWQdBTwWp6Ev9lVGskEuXX3CzJXBVHluUnZjUIjgKUJQBhCdtFle15UjmfZ0jRnuIcmMQMUG6gfwEGc5NpCmVuZHN0cmVhbQplbmRvYmoKMiAwIG9iago8PC9UeXBlIC9QYWdlCi9SZXNvdXJjZXMgPDwvUHJvY1NldCBbL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSV0KL0V4dEdTdGF0ZSA8PC9HMyAzIDAgUj4+Ci9YT2JqZWN0IDw8L1g1IDUgMCBSPj4KL0ZvbnQgPDwvRjQgNCAwIFIKL0Y3IDcgMCBSCi9GOCA4IDAgUj4+Pj4KL01lZGlhQm94IFswIDAgNTk0Ljk1OTk2IDg0MS45MTk5OF0KL0NvbnRlbnRzIDkgMCBSCi9TdHJ1Y3RQYXJlbnRzIDAKL1BhcmVudCAxNSAwIFI+PgplbmRvYmoKMTAgMCBvYmoKPDwvVHlwZSAvUGFnZQovUmVzb3VyY2VzIDw8L1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUldCi9FeHRHU3RhdGUgPDwvRzMgMyAwIFI+PgovWE9iamVjdCA8PC9YNSA1IDAgUj4+Ci9Gb250IDw8L0Y0IDQgMCBSCi9GNyA3IDAgUgovRjggOCAwIFI+Pj4+Ci9NZWRpYUJveCBbMCAwIDU5NC45NTk5NiA4NDEuOTE5OThdCi9Db250ZW50cyAxMSAwIFIKL1N0cnVjdFBhcmVudHMgMQovUGFyZW50IDE1IDAgUj4+CmVuZG9iagoxMiAwIG9iago8PC9UeXBlIC9QYWdlCi9SZXNvdXJjZXMgPDwvUHJvY1NldCBbL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSV0KL0V4dEdTdGF0ZSA8PC9HMyAzIDAgUj4+Ci9YT2JqZWN0IDw8L1g1IDUgMCBSPj4KL0ZvbnQgPDwvRjQgNCAwIFIKL0Y3IDcgMCBSCi9GOCA4IDAgUgovRjEzIDEzIDAgUj4+Pj4KL01lZGlhQm94IFswIDAgNTk0Ljk1OTk2IDg0MS45MTk5OF0KL0NvbnRlbnRzIDE0IDAgUgovU3RydWN0UGFyZW50cyAyCi9QYXJlbnQgMTUgMCBSPj4KZW5kb2JqCjE1IDAgb2JqCjw8L1R5cGUgL1BhZ2VzCi9Db3VudCAzCi9LaWRzIFsyIDAgUiAxMCAwIFIgMTIgMCBSXT4+CmVuZG9iagoxNiAwIG9iago8PC9UeXBlIC9DYXRhbG9nCi9QYWdlcyAxNSAwIFI+PgplbmRvYmoKMTcgMCBvYmoKPDwvTGVuZ3RoMSA5NDQ0Ci9GaWx0ZXIgL0ZsYXRlRGVjb2RlCi9MZW5ndGggNjE3Nz4+IHN0cmVhbQp4nNVZeVwUR/Z/1a977oGeYQZBBmYAB29BEBXjMSFqvINKCB4oCOItKGpi0OCx3ho0BozG6MSoMcQYYoyCVzyIR5Bcanbz2xzrkZuoyZpjEYvf66Yxms1md//6fX5dvOlvVb2qeu/Vq1fVBTAAkOlHBOjbN3VwwfGbNwCYhUpdg+9P7fdifNf5lG8FoOv50PDY+Cl1r5YB6CdSfVr2tKx88S+OS5Q/Rjx/yp4zywOTwpMAjL0pz3PzJ0yb0WnOZAAz5eHlCVkF+aCnBGYaAywTps7NdV9r9QTBeoCAwxPHZ+VYHQ9WU76K6jtPpALrVv17AGEVlG8xcdqsx2aBZSvlP6b+V0/Ny856842qR6g/ag9npmU9li++p5sBEK7I55meNW18ZEaPbyi/nPgv5OcVzGpYCCMB3KOV+vyZ4/Pv039P0D0PQFLaKNaAcz22vau8z59oLd95KzUm+Bt8BSnQ3QL6T5QaYREZLpPaXgT1UfDdT1OeTdTww/BvHxZA/c7593yKHgqv8r6D7+rjnvKRd+Vn/oqFrgC3igl3v9O0lVgndYM4sMAiWAor4Ul4CkphE2yBbbAHDsIp+AA+hW/gJyawANacxbB41pMNYGlsHMtlk9l0NpM9wVayUraN7WEH2Sn2AfuUfcN+EgQhQGguxAjxQk9hgJAmjBNyhcnCdGGm8ISwUigVtgl7hIPCKSGF5MonWktUTkTzj+Sd2JxoiCqjYNmkHxjS35Si4mcJD9DwZsIDTSnoI7xffyJkkOkXtfwA4cEariA8RMOVhB/S8EHCKRo+RHiohg8THqbhI4SHa/go4dRGbB1I4z7cKIN1EOE0DQ8m/IiGhxBON6UIZyjzKdFN0sfUqI8tT78uZITpdRXnEx6p4RmER2l4Jo03unE8WwHhDA3PIjxGw7MJj9XwHMKZGn6UcJaGHyM8TsNzCWdr+HHCORouJDxew/MI52p4PuEJGn6C8EQNFxGepOEFhCdreKHhlZAplt4qXkR4qqWPEEeZvkS0BoWZ2nyGSR/LQ01+FYcTHqZht/SdPNz0mopjqfwRrbwj4XQNjyKcquEMwg9reCy1TVPbkqGtbyi+bZwNYN0HrQitAWZ9nRAYSzXPR2vFHZ4Dd3j2/4bn0B2eg3d4KlWeGXd4jqo8ucRzROV5gngO38MjWY+rPKS/9YTK8wzxHFPRynvK3lTbLdbaCTBWaWdQ8FilxqDFLOrxrd/psep3ejx5b4+mfzT1SOjuHtG6Xe0xj1qfUluvIPSC2npqU2uyAvyuFQTSHX5Xd+E3NgSltVZzr+VAaa3p7VFqJIF+PUoNoaaaZKVGpDJC9EuoqUYZsZWQRr8zlBpCf1QjUHw3g7Lz9aQkgI8SwhjIBNH0D7KN3rLJshkMlv2Wo2C2DrQOAYd1vbUUQmx5tkXgoh4sJFsyzDBHWsIs4Ra3JdbS0TLKkmFR5oyJAWwtSCR5grSRshGNb/wz5Ap2ksCsQzSIgiAqloe7npTcPjkkiQf8Ogd3sE36aexKJrCGzxqa/E2jWvpl2luJKy5VF4D3ND5ZtV0jKfztNAokojUJCURBRIlEXYhCiGgvh25qXwAPatSGaIBG7YkGa6T0kaKR0leqRkpfWRopkWA80QSifkRTNXqIaDoR+RoMJZqtUTqRX6NxdEZ5ht5RpIGoekQ7GqcLyfcgyTKYxk2lMSZQf3nU1t/QoOrajuRKJD3u5hlPPNMbeRqu/GE6oXnMHz4sESqgmtJxKIPNbCflclXPqga/sBeW0EgVcJJVsxVCeyrbCTfgPHEug2osE4ENIC3ozAMfkU/fZKmwj/pIYg6WpNeJIA4R94nDxArxS7EGuogFYo2YKRawBNwmpUk7iZLwLfKfs+CGCvYZFMBB/BoT8LDYWwyAz7AGy+BzGkXxqmoohu1QSLI4WB4UCYXCMCo5LdXQ7r6JbFYNNWwLO0/SHWSL4SI8g6LQD7awi6RXNfwEizFVKCLXSRBySf7T1FcNtd8EBSKdf5gJuNCWykh6da6U33BsL11U0w0oopFTYbuuQufQR9MoisV2spOsVreeZvc8jsYZ+Fe2RIwWd4n9oLjRApgJxdT3JqWNLpfNJd2VVKj0LjwqZrIy+FrM1I+jvt9SNKIx9wnDSKNcOEz0qE4mne5jS3AFSarUhkONfoAYS+2pB/181d/yMBEmEyqk881eaI+lUEw9qfrqukg/UcvN4iXSuZitEX6CGuwNrSFXvEa2BgfQ2QgO6HWSiAKDdh65XPD2zyn3DU33nBkR2b7db7IeWe8ph5Ry61xPRUNDSroYJo0ol1zl6DWUi97oS/+q8lL7dgNT0j3lt/v01nrtk9mbyoanE1RyVEzlfXqrdcqg5ZKX/vpnlnuyJ3pWyiuju62Ux3dr3xj9DCDQ6kB1Lf1R6qmlBXCAdWZlrEwwCrOESqESozH5X6YSNZ1TkthfTSu0dPxfJekRLR3XWXUz7qRiStV6111pzO8ldY0KYyr+PLp58tjA7j+CW90f4fxHQ35uev/8Yf2ggBFG+m4Aw52FK0AuLxVzpe1kCz0091nEW6C7xQxSEYXh2KoLtR1BvlB7oTYuyBZp80baInNFqC/AsPrPeak+4JcfZupa09hbGuzsJHCK7aE+C26BxToUWSiE6OT62gvnqIv62rguCU6MDrpxfvvCYXw3P8bofArLGq6IxbQyzNAMon1BOr8d/JZ19tUhRldgBLqcYSHU8qYiw9WbtfK1OBYl2GR7QrzdJgst48EmQ3SU8ius2vzcc/T33HO3mJH/fOsW/5kZpRRew88R1bAESp1Ygp8X8KV8GS9ga9hc9jhbo+zz9O0mjqSvFxP4fM5k9IuCX1qoB7/R4Na5ENzMLF8YWB6Yml5JzL6uI2qr6kmg2Nr4m4pZyP9GRLF9gRgoChldIm1SojfBFumM5GwA38jGv80G1G8vEwv6VfSru1hGHdBaEQeQxi7Y4msZ2jwMQ1w2SQSbJInJ8vO2p61+xzqRYibIJoGZXM1k1IXL9QPLnakDy4NTRw0sd6SOIkmw4VjXETQ7x47Z7EmaNDdVafSy9J1e+o6Vu2RbsySSzRf/sJgmpekfFx+X5oQtC9VTRA0Vm9PScs2CObrZzQvCZrnoQyd0UfNFYYtcu2BXmC0DMrykRGJn6NKTJXaKiY7S6RN7soR40enQ6XVAYfx4/SAyY0LW4BeXjj3/2OMX0r9ijj6jQvnNsrKyR9m6btM29H+0NPmBcx3jvzoxekd+OP+WtN9M811A2reCfF8HcAaZlhrdSz1BfqfVb1yvc/k966PX6VY7X2gd7AoCdIS6YjyyCx1uo661YoTg1Cb9jar+ZICbtaQlWUCuvXrzaq38xTVZTWSVOOYz5kRkubM8OZEiZLAI5nSIkVExLRMjSJHOpFVbltgI7lEPe617gb/HvxpzenLqmWlHT1fu2LO/ZMsLzww/OrPg7IgvmOVJ9Lqr1n7yg9d7smN8afGfSnY+ml9Q2CJmn8fz/t55L4O6Hq6IOeRT4TDGFy0219uWyuHN/XqHX15hFfyw0Lpavz2imYuZ0AUmWRch17O7tZMV7TSfkxWfI0XlqmvKMlDWASnJqxp1DKJZsimSg9MB9yin6PQJht72t0tvV8da8Av8+piTE0cem/LK22+/MvT5VOliGX8qMJBf++Z7/qPHU90xbv/mzftbxNCqLCbpS9VV2QLSfS2CdGBdagF/sM7vCt4h+y0rota5VnstUUZXaESQCyPdYV5apjQVV9WFerX+6q+T4HPQqYDVCDVYI1ZL1TrSe2+EkMEyWJTO6QhulJU5O7DoKAGbFIn2KIs6Mj5Y2L5869blRMw46NlBZ84H3rd3yiUm8RuX+W1+jaWwsEHP4n0Htz1/6NDz2w4KcytaxPAf+PVHMvj1b7/g36jLfBzbEaHMyS5aeRNpTnSQ7QuRbAIKaBNp1Uk0HyghExno9HL9uSqb4k+xd60mIlpHygSlH6Eg6aPO9KCnObJ16TrCZ08XmA6bS0lSP2kClkO5Tk/LhyaGRbPIXXjs9uXzjN9OkC6m1S2U2ioRdyHZdxnZN0S1b7TeHcqWQqjftEP0w4pgt19eF7zaq3e5IoMiICrKZVXNSxPfFAe/4D82WTe4KvRE82Nhx1zHwk9EVLn1ZfbD9q/tSPbtonqCPSiALAuJnSCh0aZRMazJPcj8lwZtHkhW7bZ36t/4LSZfZshs/DX++aDNrKdmeTfZlFmZPW00C/z2CxashtCtfFSEsKHJ7opOyo3ZSTFa3UVcvgDdYnEnLBYkhiKEGOT67rXxSpS6qW4D0TaiG+fp4VyM5mTOgoYr0iqySDgk+TwghbESDCsx2J+37XGWBKwzrI4QwGXrJCaEhJplWiy19VfrqxqNQebgF67RlMV5bZGJkTad2OQ8YjPFq7RMZ/Ek3y/YZ/Mv/Hwbn81WsTFPMX1efv0qfo1/x4KYfcqui2zdzttFwx9mG9k0Np1t7Nf3z2Mz+Tv8ff4Bf8dLnxulPJetJw8yQ7IvyCyAvkQqh4UWyaBLYi4QLUqIkpU1C+o+cVWNS1fraxXpmM8aZ/VZU6yZ1mLrVqsuIyjBJuu0CHT27Zorg3stnS5drFvPf7hZVqqcuc8C6Nw0mgXe9HVCm96gF2xMMCgvFIwmI7OZTMZkk15AA8KrBrNkNNABTDLpXGJPE4ljVeykREcyfPeq2nhCv3q0QSPFs/fmBzCW4UtDfaAh0CiYnIJDH2SKEWL0Hn2MyWPqpE80TRLmCYX6uaYFwiL9ItNaIVhkZgxiYRjN2mFLQytjJ9Yd0wwjjOMNk41zDHONC9kaLGHPokNdC0YWaYu20YKwRZ9l7dl8VsTav8WLqnlRlXSx3oC/1LWV3PX0SVN3iXyJNBfXkOYG+hbr5gthJTKUGBfaZZOBziRSqLWXDVxG0UH6xTcpqO7FPnOg0+3s5RzrfNUpUYSxaZHQG6kEdrEtjc7W8zWbNq3hXdmZW4zxhlv8bSn29rtPLVv61M4rf/3k8u1dNM91NP7XNL4eBpAnCyWwUGQ+itQ+ySBfoOimjhcfRxHBpEQEgxoRDGBoighBYHSDzGTBrZeNPmO+cavRmIFKpI62RerE67evVd++RvG37mJjPCikeNCeTvQm8MJhOhW4zc2MAfBSM11lgM2z1H3QVRldYVvdzALNMMRqNJjdaHD0iSH1z12ojY9vDFdVV2/W01o4pQSGJFuSEhumx4XHRcS54zxxkXFRvVr6wn0RPrfP44v0RaWEp0SkuFM8KZEpUSkt81suCV8Wscy9zLMscknU2pb+ljdaRjQ1bWrU1CAzItOd6cmMzI/Id+d78iMXRCxwL/AsiAy5O6b3YF1s0YlK6IlJ7NQ5IfLuPTZYOPrZ7oV5GysrKnodXr67+vYtJry4IXN/6vijI/9+Q0jILRxX8NG+1oNuLyzLzTq+7cgxe9GqDh3KWrasV28tyFZFZCsHhNEZogU4mXGpYbnkfIlJlRZ2KKTSXmFZ7QpzCganAQYK9sA+LvUIWaWek5SI0bg53WyMn617heeH+8PfC78RLvWCXqyX0MvZK0xqp481xBrbmfIgj+UJec68MGPGDNLPGalur12cAVpkof1Kr+xdOr1YVL/XUnNg8ulx2e9N4Tf5ada6/jLTVwg7lm+qDBDGjDx6ulOnPW3asa7MRPHmAf5J1YZ9e7YoO1MsKfaLzkHePsLnkmRmMbykY8tgQ4DusEkIoq3GKBmsgeZBDiXAmJQAY1YCzMDyABUrh4XuVfXdq6rsqitcpVUhX4u3K1Fnv8+Z4vQ7aUNwkpDhrNEJoxMTlGkRfinPHsxi+fuV5eV7jugcG1MmZhfXx+L7xUMOvazYmqeJI8nWZjqvDfBFh1rCjfalQcGVgVgZE13R8rCxMvBI8/CYUDBYHtTZ7Z4+dEirIlvHx6sOSVtWFUXni4qlk+L2Z7ZZ0MbfBsmKTbsPWbKZLPx6aunBFI9pPOEHN0ukD/wdJU/v2PF0yY4Kzuuydg8dumXYG/uS9s57p77+nXl7kyqEHmc+/vjM6Y8//pZf5l+HR7zers2RN0dlj2PdmLKfdxuXXabY9zj9zCX7IkQdgA0CM0BfUW48xMf5rLLkk1KkTClfuiHpmBKXo49X0Cf6P2qVtrS5iTlkgyDo7AtFI2AA0y0LsFVYDpsoGMMQZT32VUOR8pkS213R2WanULsv0/muU1CiULStUWGbsu+pK0DMqZg3r2R3ZWXy67OPnxK23x4tbNm65ej228vEzD3jc65rfj5btX0zsn2QrtIOlZYK5cvIHjgU7c4+v/ky8kX3Ci2EQl2RvshQZCwyFZkLLUXWooCiwCK5yFZo94feCLXde+q65wOq4OndL5es3717/Q1m59dufM+vMxt+9uXZs19+deb015v5GV7LvyOnTiLfdbCuJOEekjBdtYwD7vO5frXNahM77KiwkGUc5iFko75ORdQk9QRw9Wr8HQPlOY8pBgqyJdgaRSKgBQ22RzHQKxUVD7w2+/gZ9i47KOy8nbV169HtQuEt/+7c7Bu4S72j1U/j4QAB/OcP64YGjPinm6pssUa9h2r81F317++x7n6If8vdeakZLCO6RFRKtFkr20JUTLRLyy8U9iqnof/u0SUodynauKMbSu+Uf6nsho2PeP5XrOavKDvVf/eIX6p3QL/ma2GG8D7ESg6Y8VteIUlZOaSTHQ6Kn/9zvVa35z8ZV7W9MjvZmAptYSKdaugTFzYqNxGiUwimt3I/p4eRyg2uaCTmOBigYQbB0EnDys1NOw3jXeXiXViik7VDwzrlggp6w3iYDFmQBrNhOL2nk7XTqGwmvSdBHuU9EA8d1LvUZMrnwZR72njutHqA6vJhLrWcBBNIj1nqXXw2tFZ7iKOUQGgccSj34JOovoBoJvWVBdNIcg/0p36yaSwP3A9TKXlg2J2+CtTceHorss2h3xziNP0Ho3a+M6pyuzuHxpqs6jVBlSOL2vx3I96rfTbxZqm9jVdbZKkaeagXxXL5xDOO+p1EfB5qn0ejZ6l1pqZ7/IYn1P+3/tNTISzw0SEM6xz4Dy/+Eo8/l+JPAfgjx5sc/+7FHwLw+1K84cXrK++XrnO8VorflWJtHX5bh99w/LobfpWMX3L8Ih4/vzpc+rwUrxLj1eF45XKsdKUOL8fiJY5/4/hZPH7qwE9K8WOOf7Xj/8zHjw7hXzh+SOwfzseLFx6ULs7HCw/i+Q/CpPMcPwjD9zm+x/Fdju9wrCnFc9UR0jmO1RH4djye5XhqiU065cK3grGK40mOJzge53iM45scj3I8wvEwx0McD9qwcqlXquRYceCQVMHxwP4M6cAhPLBA3P+GV9qf4WvA/T7xDS/u4/h6Ke7l+BrHco6vctyTg68E4O6XvdLuHHy5zC697MUyO75EQr9Uh7s4vshxJ8cddtzO8YVtAdIL8bgtAJ/PQT+x+EtxK8ctz1mkLRyfs+DmZ0OlzTn47CZZejYUN8m40YTPcNxQapU2cCy1Ygk1KinFp9cHSE+3wvUB+FQdrlt7SFrHcW1xhrT2EK5dIBY/6ZWKM7DYJz7pxTUcV6/qIK3muKoDriQ1V96PK5abpRUOXG7GZVSwLAeXkqWWenGJDf/EcfEim7SY4yIbLuS4gGMRR1/DE/PnS09wnD8f5+VgYapTKvTi4xzncnwsAB+14BwTzuY4qw4L6nBmHc6ow3yOeRync5waiVM4TrYlS5OH4ySOE+fjBMrkchzPMYdjNsdxHLO6YWYdjrFgBsdRHEdyHJFukkbUYboJHwkOlR6JxzSOD9PIDydjqhOHM1kaHoLDHDh0QJA0lGOKGR/iOGSwLA3hOFjGQRwHUs1AjgP6y9KAIOwfbpX6y9jPig9y7FuKfUqxN8cHhPbSA3WYfAjvH4g+jr049uxhl3o6sEf3QKmHHbvfZ5W6+xoC8T4rduOYxLFrF4fUtQ67dJalLg7snGiWOsuYaMZOEZhgxfiOZimeY0czxsWapTgrxpqxQ3uj1EHG9kZsF49t23iltjnYprVdauPF1nZs1dIrtbofW3oxxmuWYgLRa8YWHKM5RgViJOkZaUdPDrrrMIJUiMjBcCu6yIIujmF12DwZQykTyjEkB5uRpZpxDKZGwaHo5OjgGMTRTgx2jjbS1ZaM8nwMzMEAjlZLsGTlaCFuSzCaOZpkNHI0EJuBo96BuhwUqVIkD3AilSKnD1hZEtojkxE4sgqWs2QNa/v/4YH/awH+8An/XwG0+vMKZW5kc3RyZWFtCmVuZG9iagoxOCAwIG9iago8PC9UeXBlIC9Gb250RGVzY3JpcHRvcgovRm9udE5hbWUgL0RlamFWdVNhbnMKL0ZsYWdzIDQKL0FzY2VudCA5MjguMjIyNjYKL0Rlc2NlbnQgLTIzNS44Mzk4NAovU3RlbVYgNDUuODk4NDM4Ci9DYXBIZWlnaHQgMzU4LjM5ODQ0Ci9JdGFsaWNBbmdsZSAwCi9Gb250QkJveCBbLTEwMjAuNTA3ODEgLTQ2Mi44OTA2MyAxNzkzLjQ1NyAxMjMyLjQyMTg4XQovRm9udEZpbGUyIDE3IDAgUj4+CmVuZG9iagoxOSAwIG9iago8PC9UeXBlIC9Gb250Ci9Gb250RGVzY3JpcHRvciAxOCAwIFIKL0Jhc2VGb250IC9EZWphVnVTYW5zCi9TdWJ0eXBlIC9DSURGb250VHlwZTIKL0NJRFRvR0lETWFwIC9JZGVudGl0eQovQ0lEU3lzdGVtSW5mbyA8PC9SZWdpc3RyeSAoQWRvYmUpCi9PcmRlcmluZyAoSWRlbnRpdHkpCi9TdXBwbGVtZW50IDA+PgovVyBbMCBbNjAwLjA5NzY2XSAzIDE1IDMxNy44NzEwOSAxOSAyOCA2MzYuMjMwNDcgMjkgWzMzNi45MTQwNl0gNDIgWzc3NC45MDIzNCAwIDAgMjk0LjkyMTg4IDAgMCA4NjIuNzkyOTcgMCAwIDYwMy4wMjczNCAwIDAgMCA2MTAuODM5ODRdIDY4IFs2MTIuNzkyOTcgMCAwIDAgNjE1LjIzNDM4IDM1Mi4wNTA3OCA2MzQuNzY1NjNdIDc5IFsyNzcuODMyMDMgMCA2MzMuNzg5MDYgNjExLjgxNjQxXSA4OCBbNjMzLjc4OTA2XSA5OCBbMzE3Ljg3MTA5XV0KL0RXIDA+PgplbmRvYmoKMjAgMCBvYmoKPDwvRmlsdGVyIC9GbGF0ZURlY29kZQovTGVuZ3RoIDMyND4+IHN0cmVhbQp4nF2Sy2qEMBSG9z5FltPFYOJtWhBBnA646IXaPoCTHKeBGkPMLHz7xnOcKTSg4fPc/vgnbtpja7Rn8bubZAeeDdooB/N0dRLYGS7aRCJhSku/Eb7l2NsoDsXdMnsYWzNMUVkyFn+E6Ozdwna1ms7wEMVvToHT5sJ2X00XuLta+wMjGM94VFVMwRA6vfT2tR+BxVi2b1WIa7/sQ81fxudigSXIgtTIScFsewmuNxeISh5WxcpTWFUERv2Li63sPMjv3mF6GtI5T3iFdCJqkJIaKTsQHYlqpJQTHYmoS05d0gNRhpRlSIUgogkFTcgfkQ45UpEg1Rylbxrzm+L7CQUNEwVuKc0U1EmQ5JQaioY+kvL0iRQ83s6BQigzFySZFBTPmwKauf7H1e+7SfLqXPAHLwUas1qiDdzvjZ3sWrU+vzRRqJgKZW5kc3RyZWFtCmVuZG9iago0IDAgb2JqCjw8L1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUwCi9CYXNlRm9udCAvRGVqYVZ1U2FucwovRW5jb2RpbmcgL0lkZW50aXR5LUgKL0Rlc2NlbmRhbnRGb250cyBbMTkgMCBSXQovVG9Vbmljb2RlIDIwIDAgUj4+CmVuZG9iagoyMSAwIG9iago8PC9MZW5ndGgxIDM3MTc2Ci9GaWx0ZXIgL0ZsYXRlRGVjb2RlCi9MZW5ndGggNTE0MT4+IHN0cmVhbQp4nO1ceXhURbY/dc+t3tLd6U66O+ksne6EJiJLQkISwtpAECEIEQOGJZhAEjZDAmGRh2EZh8EFRx0UMaAQZNAZWULgaZRlQFFZBQZwGWUcn7jMGBmfj2GwCZV37k2Dy5uZb+b73pv3ffPV75dT66lTp86tqtt/dAcYAETDMkCoveWW4tvqDl76ilraSJJG35GRVd3JOg+AxVN93NTq8tpvLubeR/VakklTF8zzD3i5pwlAOU5SXFU7rXqiMovGcz/pb51WXlcLRiJw6gfrtLsXVSUdTtsA0J1sWr6eXlleYQ8OW0v1ftSfO50a7DsSUwF6T6d6p+nV8+6ZmGY4QfVVAKMO3V0ztfx37ReWkb13AdIrqsvvqfVeNnQHWFlE+v7Z5dWVwa2DllBd80/U1tTNa18OEwAeqNX6a+dW1t5bvukzqj8KYHyO2rTVw/H+m05q+ZlXuzhu5Ex9QtkLnObK5k+Roq8jx3egSomh1UaZEA2qoqialRB8i6KqoRXgB/9VNLiEizUYq9nHZcDa29sjChiRs5SySG7R4g1Wvb8lomfXfI6Ipj8kIp1JxkQkh6Q4Inkkd0akD0l5RApIpkbkFpLKiNxKosV5BkkhyayIjCKpIamNzDE3ImNJ5kWE5riKHRLbBCrcT20+cJCfdvJ3CI0rJp1ymrOS7M8iW3Nh3lXUY/DD/unUX3O9v/3jv8b4bR1P66+DVbFsVgV74fdU7g+bIIwpoBCrqFXLt7JiaKX+KaS5XF3BiimvVjeDQv1LVdpnVMqGKTCHSkF1M9sLr8AnNHo5e5jfyido2vpEmq3L/DX2Fc9X8qFErVb7q83qcrWZNOarVepyaKI0XzmtrlcXqyfVxVCiecZGaqL5AQ1sBEuDBqWBFTAvK1BOwEHd/4GsgfXlx/gxOAfnWBFpboWFioW9yb5mGayENdOoy3CZpVAtR8lhF9ln5PFaOI0l3AIN8AiLodpeOEF+fwJfQ51KVuERfk7pys/Ba/ARvEPtADOZQmkydufniF/B8zCTIvMRU/g5g8sYUKuUK9DK7lO2KFdYGlOIMSyFojkZT6hl6pvqA9RL0WEKZmMKDqZ0kqbBz7EG8uIjQxVbRHoaF9M8rcprSgutcT+cp3XR7MokZbHSAOfZdvYKeQywgm1Xy4xT1ERoMDSoJXBRiw2cVk5QPIr0eDwEDxl6wmXVAF/hSFamPq9FDIL8IAMWMI4wxMAaNsJ4H60EMA8Wg4t6jzDgBztIWiZDMqxR0/EZ8l1R6q/HjS2CE0o+ToH1OlezFlhNZ7AOyAR2fslo4CoqDLr5HU1KcHhFU+j2Ev/h8YHu3X5Q9TuM/iYoarIt8re0txeVqIl8fBNPasKgqUkNpn301zo/6t6tsKjE38JuGloQMTu0rIAa7yiholajZmofWqD3abM28SD9DS9r8k+d7n/Q8WBanwcdlX266zvTBAqdMu2+CP4vsvZvkvYaPX2NX/xPKvOI+5R9GKNzLC4h/q6DalCtI+5Qd3CTpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpOQ/hYv076Mqk1vmvLv1J3dF9/sTpJj0r4eeeW/U59fzP89t2x59wlxJuqYbX1RVoEqsUav4ZkAwQspeUJn2pV4D6/wiM/EHFBUyDp1t7QmOs61nWzNjnQFnMOAMVKnQVoeJbZ+INUb7la/nGrpo31+uav+YT+JfgRf6hhKsDjN40ObwerajY7t5Pa5NiO1uBUPXBEfboSzN4oVLrQ5xyPG6Myaf/jJ3ZyTelaiw0qCdpfnB6YBAlifO2YOlpSpuV0x2Vm4enzTz03rxkBjJdrP59Z/OnHWq7q3W1rfqTs0ak9ebNbJKVsUae+eJY8MLxJXPPxNXCobT+vbSaoCfozUnwcpQVmKCkuRN9sR54pPj4jxBr8cSC9vNhu3Wh+Msnth4dCR5DaDajOiJc5iNnihMdrS1Zp091OrMj8t3xuX3hIx+lygW+TH5+ZmFd5QYHfxLTahrfGpzfBJjpaGUxPhEb0JCYmJCUq471zPUPdQzzj3OU+SrdFd6ynzRpSwrN6dX567Mq1Aw/arbZTD6WFxsAGm5yoeLZsxYtEksVUaydBb7yKOj60OnRdWLeXMm48AJ06pKxHJx+doxfu6Ntx/f3z1m6XJRwupqx1D8LQB8Jq3UCNkhu0E5AA+rrDd6oDc3Oc4WNlmKC5vsxRNLXgYOod7jW9voIWRcas3KZM0hMyuNJVc0WniZcIqlwsHPifNXR6nNZLk/gGk1Wbay6tAIQ7LRZOTJKjeZjJbcKIvKVXMu52pUroKKJddsQVSUZFSspJ4MYA1auIIGhINRJmuUxWzq+BZrlBFsmlfmYs2ziYVNUVpi1f0Dzb/jHbFuzcqK+06gTRHhX/6wPj6VhY6jxa04FBd3cIclaPET+ygDlT58IM+2ZBJDOicrk3m5pUXZaWkiJnDFws0ms5lHGaweJR7jVC93m1zmhKgEa7pyE6arN/Gg6WZrhj1XycUsNYtnGjKNmaYscy9a/0D7cLxFvZUPNY+IKoVSNkGZgGPVsXyMYYxxjGmCeWxUqbUGaliNMhunq9ONlabp5lmW2VEzrDXWhbjQdI95QdQ91vuNK0wPWF9SXsEX1Ra+07TfWkjGYgNmpv3pSX82hykMWB2JwmaLjaJA/Ke4JAr4uauvqf01CXdVa64+pp3qkvaP1dfVxbQngvB06GazAbwpUfDruJOGDfZTTv/xlGNJG9KOOtdaIS0O421mW1T/FLS5+nam3X6INkWWMz9fi/+FS210TD+9ePlifscxDY3MSO/v7x8YmH6b/7ZAqb80MNs/O7DEvyRQm77KvyrwtP/pwDb/tsA+/76AO8uXmTLEF0q5w1eUMtVXlrLCtyxlte/RlE2+jSnNvqYURykrZakGt8tD57s/CzoDOXT6Uzvn9OoUyKYTkpZqMDoHsGy/qmyqnTPx9soH2Qzx5K27l29/j0Wz1DM/+WndG2PrPp/HMpiNXRk5ouC2x6q7rLy2fEtV6bFNr7ckjR3dowdzJiX/kfawFpEciogX8kIJcJydVe3HbWctjU61MY4CkWAcbANX3+/fTpcuOv50MXP3XYlLtZuJ6bdRxNs853fuKTVn+OrRa557bk3xk6HibXeK0+KXbBzLKHlB7S8+yMrc8fTTO7J6ivdTUlgecxPzUiLPiFtU7fvhiTAkFAD3u8x83HSWb7Cyd+I3xBy1rk1KdCsmtw0KFFt03yR6NJdaD9FD6HDvgu7fRe3mTB6YrPnnDvjY913zA++IIre07bGtXzXny/qldLZPiR2skKUyE+svHl1YNv1HDiW7asmSIQWiNbMny2FxLIb1Ea+urqqfP1u72bfSzRJjcEEc5ITibSowy/sxp9xHHc/amWKDYU6bLdoRr92Tl1r1M3vpQqu2fzJ3l3mXefXIBXKcvTqnd8RPv2foqWZ5eIxYa3O4b+1Ru0w0sKrbX5z96hHll9fG1bCnVs9OSEvf9tS19wyua89PKb2o/1YBFM0L7U3VhW6487BLfVbhjBxymBxtdFXQ5BSizJC5yFxmrjUvM6vf3mtbWZU2h2hQy65uNLjEB5F1LSKLFlgVcpnomsJd8KzZwJlqMDEbOKI67n5nx010gS6iUJkXvXQ/eA19jcNxuHEClhpKjHcZa3AaX4oL1AWGxcb7cYW6kj9k3IBP8DWGdcaXMcGjeHgfU4EyjI8wjVNKTdOUMqWSL1RqlQX8XtNK5X7+kOlnypN8ncldqrvccex1r9l6tvHaeWWUGCUKRYPB1baTrbsmrm1iZ0T3yC5Kp10URU+neyjW0BgDjdajMWvjzYOjR+Jgd1/twbRd39IXM1/Mix3oHRaL3zl5dNLw+n6hVDm4sL5+4fx7751PLgwVe8SH4rfiZTYMF7/Q2PiCJgzEYdFKPMx6Mxext7aft4pxfDJ54qA3bd9QclwjnLI7G/kp01H7WvZb3JWcMDgq5FLBpjj0l6q+WxwXLlyg7eK4QOdstK/Mp30C0B6XW9sgmjd0HcR+x1ElRnuKI3bPP8ks4vLJ+bs31y1eXFe3aNGma7sNls1TSsVLgqIjXirFvF9s2PCL5zdufL7jSWMr+eak0+9x2s0GI+CBqMftR827jBaDDUyOGEdbYVNsMb1+TO0Heo8/pO8mcq2NHr928bFvN6/umycOWzNKMx58QvNn6K76mJtvwgyPe+fPr7WpZS2zK5FrJyeR5t3Mn4FYqA4l2LkpGhudbJepESymKLNipmA4YuzFLm3uaHoTOrSXoFNLYvQ3oV17E/Y71Nbv0KEY/T4+1HqJ9jkdrkwWih8IA2O1HwBhtCPaWaQUYZG7TClDs/Ya0je9y9OXCnSfOtOc2U4lm80RjwyY1CJOnN3Z3MyfEa+2gwiOymuHnWfZ+/RaGUDG0uldH6IzcTP0gHEhr93b1Zbp8HRbCj6zLcG1NMVg6zQ0tXNxhnbg6MD3a+t3nFyitCeE3AkpaY09zndyKBu62m5+1m3stCs+OZDRr98Fetj9yHEHDaEPHO60VKMhmQVyeuXlZgeu13SX0yKZM1vv7EL+48NvjPT5WENV1dss5o3C5GRFiCfFLBQNgo5zczO1q5O0F4PB9UViUsGoUS/dWaIXrm7EsraIMNCa6dTrv7QzVgv6aOII/HnuN1nRJ374a67YneoJqLrxEfnI3/6t1z8T/MNv/fpHQR/S9+o25uu/8dNhOqN9tvs75q2CEi1X93fkvLoj18vNsFXZr50wKo/pyG/0LYUS/kpHG34dyc9op0JCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkLiXwOmVkjX/qtd7E4cBV3hHrCCAg4Iaf/5mX+pBChXSc0IEwCBqWYAlgnzImUGHpgcKSukOS5SRvBDbqSsfqfMIR58kbKBSgAFUAkzoZxGzoc7KJ8NddAdBkMN3A0V1FoJc6llBtVnk50s6AHZkPe9Uf4b4/w3xl3P/7LeEOqthUVkeQZMg+m0Gj/cBFOhiz5DJjGbSlNIQ7M4g/rrSOaSrXKohm7UOpzsTCVf/DCI5rmb8jE3bNXptUrKNd8XUFpBmpa/Y9bcG7MW00wLaK6Z+rqn6X6U05h/bMbvr34q6Zbr1ir1EeX6ivxkRYtsLelMIbszSM9P42to9nK9T/sPgNixV9qX0C74Cxj0Y2UZ6wwCkAXBSWknFoA+wFknCFMtjXYJstRIW6qup5WR+fX+FNhDqY9mRZas9yaBl9JEba+wBL3Fq6fxehqnpx49dTMX2MmqW69pZWSxejlGT6OZHeqpP1qvaWVkNmaFVdRm09tscABUZmVRMJ7atB6kdBm1RTELdKY2rQcpDVGb1oLMrI806amRToyWaiMMzU/24INimUFfF9dTVddCfUWK3sL0FELt9dg+AIXAtqvdeJvAq90wLPCbK8P4N/V4ZRj+OYyXBf5J4CWB/7UHvxb4nwK/EvhHH14U+GWrhX8psNWCrSH1iz9Y+BdZ+AcL/j6Mnz/m4Z8L/CyMn4bxE6p8IvCCwI8F/ofAjwT+TuCHAn8bxvMfxPPzFfhBPL6/0cffr8DfvBfkvwnje0F893SQvxvGd9528Xc8+PY5B3/bheccePZMFD/rxzNR+GvS+HUYT5P900E89biVn0rDk2+5+MnO+NaJGP6WC0/E4HHqPp6Mx1x49MgeflTgkcOl/MgePLJMPRxqfzPID5fi4ZD6ZhDfEPh6BR561MEPCXwtCV8VeFDggV/14QfC+KttifxXfXD/vgS+Pwv37XXyfQm4d0803+vEPa9Y+Z5ofMWKL9NkLwtsEfiSG1+MwX8XuFvgLoHNcbjTi00e3EF2doRxO2Xbw7iN9Lcl4lbKttbjCwJ/2Rl/IfB5gc8J3CLw5xbcLPDZTXb+rMBNdtwUUhspUI1h3EhDNvpwA2UbwvgMLf6ZJHxa4Pp1e/h6gesaSvm6PbhumdrwSJA3lGJDSH1K4FraHWsFPtkD19DANb5QOz5BQ5/w4+NWXE1NqwvxZ5T9TOBjFIfHPPioAx8J4k8FPixwlcCHBD4o8AGB968M8vsFrgziTwSuEPjjLLxvDf5I4HKBy7y41IJLBNYLvFfg4jD+WxgXCVy4YAtfKHDBFpw/L5HPD+O8RKwL49x6nCOwtqYbr+mGs8NYHca7wzhL4EyBMwROn2rl07NwmsCqLKyssPBKgRUWrAipU6dY+FQrTrFgeZmbl6/BMubkZW68y4KTBZYKnET1SQInTkjkEwVOoNqERBwvsCSMdwocR/VQ+ziBYwUW+/AOF4653cvHhPF26rjdi0WjvbwojKNHOfloL45y4m0+HFno4iPdWDjCyQtdOGK4nY9w4nA73hrGYbe4+DA33uLCoWEsGGLnBdE4xI6DBwX54DAOIpuDghgaGM1DAgcOsPOB0TjAjv372Xh/D/azYd8K7CMw34W9BebFYm5OAs8NYk4vF89JwJwDai+LjfdyYa9lanaWlWe7MDukZlmxZ+YW3lNgJtnP3IIZVuwRi9279eHdw9jNHeTd+mDXCry5ArsIvMmN6XFOnu7Dzn4M+rBTGgWgaycfpjkxFWw8NYyBaAyEVL8LUyzo82FykpcnBzEpOpYneTGphe6Mx9REGyZ4C3lCPXppUm8hxguMc6KHZvOE0U1t7iC6KjDWiTECnVR3CnRUYLTdwaNjMfqAanegfZlqox5bGK1ZGEVLi/Jg1DLVYkNLSDULNAk0CjRwCzcI5BbkIVUNI1agQqMUQbeXjTMngg1ZC6tY8TDr+q8B+P924P8QyfDf/THkzQplbmRzdHJlYW0KZW5kb2JqCjIyIDAgb2JqCjw8L1R5cGUgL0ZvbnREZXNjcmlwdG9yCi9Gb250TmFtZSAvRGVqYVZ1U2Fucy1Cb2xkCi9GbGFncyA0Ci9Bc2NlbnQgOTI4LjIyMjY2Ci9EZXNjZW50IC0yMzUuODM5ODQKL1N0ZW1WIDkxLjc5Njg3NQovQ2FwSGVpZ2h0IDM1OC4zOTg0NAovSXRhbGljQW5nbGUgMAovRm9udEJCb3ggWy0xMDY5LjMzNTk0IC00MTUuMDM5MDYgMTk3NS4wOTc3IDExNzQuMzE2NDFdCi9Gb250RmlsZTIgMjEgMCBSPj4KZW5kb2JqCjIzIDAgb2JqCjw8L1R5cGUgL0ZvbnQKL0ZvbnREZXNjcmlwdG9yIDIyIDAgUgovQmFzZUZvbnQgL0RlamFWdVNhbnMtQm9sZAovU3VidHlwZSAvQ0lERm9udFR5cGUyCi9DSURUb0dJRE1hcCAvSWRlbnRpdHkKL0NJRFN5c3RlbUluZm8gPDwvUmVnaXN0cnkgKEFkb2JlKQovT3JkZXJpbmcgKElkZW50aXR5KQovU3VwcGxlbWVudCAwPj4KL1cgWzAgWzYwMC4wOTc2NiAwIDAgMzQ4LjE0NDUzXSAzOCBbNzMzLjg4NjcyXSA1MyBbNzcwLjAxOTUzIDAgNjgyLjEyODkxIDAgMCAxMTAzLjAyNzM0XSA2OCBbNjc0LjgwNDY5IDAgNTkyLjc3MzQ0IDAgNjc4LjIyMjY2IDAgMCA3MTEuOTE0MDYgMzQyLjc3MzQ0IDAgNjY1LjAzOTA2IDAgMCAwIDY4Ny4wMTE3MiA3MTUuODIwMzEgMCA0OTMuMTY0MDYgMCA0NzguMDI3MzRdIDUwNDAgWzExMTUuMjM0MzhdXQovRFcgMD4+CmVuZG9iagoyNCAwIG9iago8PC9GaWx0ZXIgL0ZsYXRlRGVjb2RlCi9MZW5ndGggMzExPj4gc3RyZWFtCnicXZJNa8MwDIbv/hU+doeS76SHEGi6FXLYB8v6A1Jb6QyLYxz3kH8/WyoZzODAg6RXr+REp+6508rx6MPOogfHR6WlhWW+WwH8CjelWZJyqYR7EH7FNBgW+eJ+XRxMnR5nVtecR58+uji78t1Rzld4YtG7lWCVvvHd5dR77u/G/MAE2vGYNQ2XMHql18G8DRPwCMv2nfRx5da9r/nL+FoN8BQ5ITdilrCYQYAd9A1YHfvT8PrsT8NAy39xPwmWXUfxPVhMz3x6HKdxEygtkfIMKSuQipSoIsqJjkQVUp4jlQkRqZSkkh+ICqIXohapoA4VdSioQxU6JFmLg7TeYBjk4Xjzv82bt2T5RLoHUkrJHQ1Xnh8SVBTWEp5v27m4W+vXjW+Mew4bVhq238DMJlSF+wvNE579CmVuZHN0cmVhbQplbmRvYmoKNyAwIG9iago8PC9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMAovQmFzZUZvbnQgL0RlamFWdVNhbnMtQm9sZAovRW5jb2RpbmcgL0lkZW50aXR5LUgKL0Rlc2NlbmRhbnRGb250cyBbMjMgMCBSXQovVG9Vbmljb2RlIDI0IDAgUj4+CmVuZG9iagoyNSAwIG9iago8PC9MZW5ndGgxIDM4MTc2Ci9GaWx0ZXIgL0ZsYXRlRGVjb2RlCi9MZW5ndGggMTU1Mjc+PiBzdHJlYW0KeJztvQl0HMW5L/5V98x0z96z9KzSTI9m0TIeSZ7R4kWWRqsl27Il27Jlm7El7wa8IWMw2Ig4GAljbEISlpAEkhAWO4CMWexAgkOMQ3JPuOQl4ebmJoSXvMvNpsTkhiWL1f+vanpkmXDzz0nyDu9wXDP96+rq6uqqb6vvq26NgACAhKADWLSkKr3hLePDAMSCpQPL2rr7f/uDd17E4ysBPK+u2zq4A14gJwF8bXj+zLrdu5RULGYA8IsAnHvjjk1bd3+l7QxAsAjAEN00OLQD/GAEiGTpXTZduWfj9tq2GQCxXwPUSpvXb702/atv3Aew4s8AVSc3bxhcL1zx3Tfx/JNYv24zFkhP2rDtW+hxbPPWXddeF7Z8GY9/gO2fvnL7ukFPuxnrR3oA+LVbB6/dISwXvwNw+91YX9k2uHWD99/Sc/AY+0wW79g+tEsdhUUAd9DxKTuu2rCjueOF/8Ljadj/N4HnVpLbQY/557iDWONQfk9+jNf8EUvNeh1v4HgOaQWEDqmQ2pq7myELyp94XlTnwgz+AfiKAnDfMiQsJ3JP0bsBDwTb1hOa9AYD0fM8y9MGYrrHjDOsLzgXwNfEl0AEs3oe6UbRBBZEM1gRLQytYEO0gR3RDhKiBA5EBzgRnQxd4Fb/DG6QEWXwIHoYesGn/gl8DP3gV/8IAYZBCCIWMSyGIsQQFCOGIYSogKL+ASIQQSxhGIUSxBjEEOMQR0wwLIWE+i6UQSliOZQjVkCF+g4kGU6DJGIKpiFWQgqxCioRq6EKcTpUI6Zhuvo2ZBjWQBqxFjKIdVCjvgX1UIc4A+oRZ8IMxFkwE3E2zFJ/Dw0wG3EONCA2MmyCRsQsNCEihxBboEX9b2hl2AatiO3QhtgB7ervYC7DTpiL2MVwHnQizocu9U1YAPMQu2E+4kLEcygX3Yg9DHthEeJi6EFcwnAp9CL2wWL1t7AMliAuhz7EfliGuILhSliOuAr61d/AZbACMQcrEVfDKsQ1cJk6DgOwGnGQ4VpYg7gOBhDXw6D6a9jAcCOsRdwE6xA3w0bELQwvh03qr+AK2Ix4JWxB3AqXq7+EbXAF4naGO+BKxJ2wFfEq2Kb+AoZgO+Iu2IF4NexE3A1XIV4DQ4jXwi7EPXA14nVwjfpzuB6uRdwLexD3If4X3ADXIQ7D9Yg3wl7Ej8A+xP0MPwo3IN4EN6pvwAGGN8N+xBH4KOIo3IR4C8ODcADxVrgZ8RCMqP8Jt8EtiIcRfwZH4CDi7XAr4scY3gG3IX4cDiN+Ao4gfhJuR7wTPoZ4F9yBeDd8HPEe+ATip+CTiPfCnYifhrvUn8Jn4G7EzzK8D+5R/zfcD/cifg4+rb4On2f4BfgM4gPwWcQvwn2ID8L9iA/B5xEfhi8gPsLwKDyAeAy+qP4EvgQPIj4KDyE+Bg8jPg6PqD+GMTiKeByOIT4BX0I8AY8iPgmPIT4FjyM+DWOIz8BxxJPwBOIpeBLxywyfhafUH8Fz8DTiVxh+FZ5BfB5OIp6GU+p/wNfgy4gvwLOIX4fn1B/CGfgK4ovwPOJZht+A04gvwQuIeUskqhOXLNElS3TJEl2yRB+wJbrkE12yRJcs0SVL9MFbIqrtRqbbJqbDZqa3FqafVqaTNqaBdqZpEtMrB9MiJ9MZF9MNN9MHmUm8h0m5l0mzj8mun0lqgElnkElhEZO5YiZhISZPYSY3CpOVCJOJEiYBUcbvGONunPEywThXyjhUxvhRzqhfwWidZJSdxuiYYpSqZNSpYrSoZiOfDi+q/46W6JvqD9ASfVv9N7RE30Gshe+rr6Il+nf1e2iJfow4A/63+l20RG8gzoJfqt9BS/QbxAZ4U30FLdFbiI3wrvqvaInOq9+GLOEQm4kesYUY1X+BVmJFbCMO9VvQTjyIHSSgfgPmkmLEThJRz0IXiSPOI+WI80mlegYWkOmI3aRO/TosJLPUr8EiMgexhzQj9pIO9TQsJvPUr8IS0o24lCxWvwJ9ZBniMrJCfQ6Wk5z6LPSTQfXLsIJsQFxJLldPwiqyVX0GLiM7EXNkN+Jqskd9EtaQfYgDZD/iIDmAuJbcop6AdeSwehzWkzsQN5BPqmOwkdyjPgabyGcQN5PPqY/CFvIg4uXkqHoMriCPIl5JnlCPwlbyNOI2ckp9BLaTr6oPwQ7yAuJOchbxKvJN9YswRF5G3EW+oz4AV5N/Q9xNfqh+Hq4hryFeS36mfg72kP9EvI78Qr0frie/UT8Le8nvEPeRtxBvIH9U74VhMoF4I0cQP8IZ1E/Bfs6k3g0f5WyIN3FO9S44wHkQb+YCiCNcSP0kjHIl6ifgFq4U8SBXod4Bt3KV6sfgEJdGvI2rQzzMzVKPwBGuEfF2rhnxY9xc9TDcwXWpt8HHuYXqIfgEt1i9FT7JLUO8k1upjsJd3GrEu7m1iPdwG9UR+BR3hXoA7uW2IX6aG0L8DLdbvQk+y12HeB93g7of7uc+ivg57mb1I/B57qA6DF/gDiM+wN2B+EXuLvUGeJC7V90LD3H3IT7MfV69Hh7hHkQ8yj2iXgfHuMfVa+FL3AnER7mnER/jvqzuhse5r6pXwxj3AuJx7huIT3DfUq+CE9zLiE9y/wvxKe5VdSc8zf0Q8RnuNXU7nOR+qm6DU9wbiF/mfqleCc9yv0V8jvsd4le4t9Ur4Kvcn9Qt8DynIp7mOXUzfI03IL7Am9RN8HXepm6EM7xL3QAv8l7Es3xAXQff4EPqWniJL0G85BNd8oku+USXfKIP3ieiicONx83NVrnpXoe9BdRwBXMiYhz1vBK1sBn1aC7qzALUhqUot5tQ/nbAdX8if+JVla2Tx/GqFOp6M2pfvuZC1JY1KNdbUD6vytdUf/b/9zEcM3yJ9eVvTe34+QATfUqgzuV+ipb6TXWCn8uJ9Fjdzv2UJyCgRX9LnVAnuEdoTbQrkjqXt7MnC2vhTdJJ3uIWYv3/xm0TeNFSSGjZW7k2bjP3Gi+S2dxXQEQrO4iy24U2YCFyZxGxID+WIpW3oS05g1ZuAGk9hlR4DUt7kNZz0NIMoI1dgDbrarRDaTzXiXWfQnvWiPrYglfejJL4aWJCC30VcukMlm7D6yrQdjXgcS3qwRt4tx74OrkJr238ICn8V9JaHNUAHTVSHSnNKA7Zpv6+pUsW9/YsWti9YP68rs65He1trS3N2abGOQ2zZ82cUV9XW1WZmlaWiMeiJWGf2yHZrWaTURQMeh3PEZjWHu0YUMYSA2O6RLSzM0WPo4NYMDilYGBMwaKOi+uMKQOsmnJxzSzW3Piemtl8zexkTSIpDdCQmqa0R5Wxb7dFlZNkZW8/5m9ri65QxsZZvpvldQl2YMWDSASvUNp9m9uUMTKgtI917N58sH2gDds7bja1Rls3mFIYIZjMmDVjbqwsuuM4KWskLMOVtc86zoFopbcd4+Ptg+vHenr729uCkcgKVgatrK0xQ+uYwNpSttA+w63K8WmnDx46KcHagaRlfXT94GX9Y/wgXnSQbz94cGTMkRwrj7aNlV/3f3w45A1j06Jt7WPJKDY2f/HkDciYPi5FlYNvAXY+Ov7ri0sGtRJDXHoLaJYOcZJMeL6QB+wb9hDHF4nQvtx6Mgtr8WDsxt7+/LECa4NPQLYquWKMG6BnThfOyH30zI2FM5OXD0QjlFXtA9p392bf2I1rldQ0pD77xvGL55UxPjGwdt1muh/ccDDa1pan29L+sWwbZrKD2ljbj1dXYf3BARzEFkqG3v6xquiOMXe0JV8BCxTKgy1L+tkl2mVj7tYxGFinXTVW1d5G+6W0Hxxoy3eQthXt7T+FftTrx2uU4IkMelYraD/GPK3IlET7wf71G8fCA8H1KJ8blf5gZCy7Asm3Itq/YQXlUlQaK38dbxdhd2RX4djeU7tQmY5ciItKPxfkV1BuYYHSgRBtacATErKLHVKOtjQo/SQIhWp4F60GzV3UDh7w8dZOeoqnl7Z2BiMrIvn0V7oU1Pqkj4+JU9qSsGCyT/n7/I9dy9emHSpX2je0TengRY3qtQ5qrb1/PzlKC+3GeIVI2dlZOMXHUXOxjMNmWBHlok8Zgx6lP7ohuiKKMpTt6adjo7Rm/J2/JDq/d2U/47YmJUsvOsqfnzF5TsuNca0ogB3JYIGn7HguO5487HzP6a7CaeWgGJ2/5CBtOao1CMrBrjFAkc2ics5w1mj624HmLdoxGFUkpePg4En1xrUHj2ezB3e0D2yeRduJdq0/GF3S3xBk3Vvcvy94Hb2dE2P/+UtbUtPQ+LQcj5LR3uNZMrpkZf8pCV2J0aX9xznSsoJKv28zDhCNXbuynhJn74rNBwdWUNEGDxISv2SMRBsx2Is2HiecwTJmim5oGTNHW2h5Ey1vypcbaLmAbCEekqJzB4/+DYfxFEH/hfpAkfd8XqYfEiAbtc8t2OIYt4i7nW/lf6dboPt3/Wb9Jw3DQrnQdNHnB8IPxAPiO8Yy/PwLfn5JPyYBP0PmavOIecQiWH5kNb/vJ4afH9v6bD+zb5OKpDUOH3668fOOM+UCV871sjuLnyF5sfyQ/N+eId8dfpv/K/7zlz6XPv9vfgK7AnvZZxQ1jHn137v+j6/MfHeNveEt8PM/pyXfPPh0P91/5+v6jLpCbbXezb+Ah0YWndDEoQcL5AXuN6inAgSyJh1nFIgo8AYOqr5d9W0ivfZt/E6vzjgijlLc0uT29MT3uN+cd6a5g+d3A+ghrb7Jl3FnwAVh9Iyb0Hv+ZHZja3O2+bGWVndLa0u2JQsVRsWvlCu88tisLxlr/DXlNXzNY00VxFDhqUhU8BXtBpPHlDDxpsfcXzIEPIFEgA88ZgQ/hki8CG2tzS0tzS3Z5vi++kfn7KvqsO8rftS7T98OTecnxtmGCfu6Onc+NzGek17N5TMO58yZVVUjyZF9Z6ZXu2oauUw6xMluGxctqeTqaxLREoPs9mTSdX/tHE+iJO1LziopmZX0FfbnKkpLK+j20v94pmFizyoywllSbVU+X1VbqrCvmzOnDreJ7/4PJ7iW8/NpGENgoTqXzOHtYIXBbIsuYKowcUYTucf0C9MfTPytJmISeDCTc2bypJncbyaHzaTYvNW8z8zbzcS8HBvYD4IkcILNbFrP69ZCU6YpQ5A453NncyztTEsvIu5MI3XcHq9QSWpr6uq9NnJsXmfLwjVrFrZ0ziPJG3+YS6155/Dhd9akcj+k/RLUufB2oV8mWRfXcQYduVP3hu5tHX+TjugEs50nKk+e5cnjPLmRJ05+LX8VzwNP+H7aL7sQxn7Zzaa1vG79X+9XTaK0PkRkt0EobST3/NV+BQgQB1mOspzKBkEv6TlRn+VuBN3jGM7/KxZnlVgn3IWiPZ7MobgEfhx4eXr16pwrI0cD77xDli+nrczAmPGrsAfMUHJCweOT6umsxSJ3gsGiGImRXwdN395JFSO5c3p1vdsQLUkg1TJpz1dj4XCMbnXBsrIgbky/1Dc5jnsRWwvDj58qluzQ7T+pnjuBexfus0bM2Gmp6aT6etaGGVFB0FHgsIhWLNb2flqlgl5Jz9opWA4ZssWkGwG6DZLDCQsMksWGGPEcoj0/gSfze6D7c0/SKjTzNK0FShCzT9mgO3jESHvjwqxxuUPCneMIT3fIr6bkeJJuOOYkpnHpVbabXg10T5JacjEiyIwg8ZpK1CMb6lMI9aqRS1+/dev1dCPbrOGaRKImbC3syarHnnvuMbrN3LgglVqwcaa2p7zIIexEZbBAT7aW190qhLHQbggbONFgsFlvEz4jcGuE7cKwwAtwWLIolmpLj2XAssNisFh4fR+/DJqanDOrcuOZXI6gOahanXs5lxmfiYLVSOozjqjDxgu5mVemWnKWaHlK5hKe9hrUvxqzz+MWqDRgD36J/JsG/5mt4gWXl/e6bhV4t8C7BK/glQKHLJCVkLhZ0YgErYzFrzBdb+JMh6RUjPLZCd0xyj4H27+U9WHdWFjEw7Bkl2BB+IigINcXeE+qP2fMoZmnkbOC1xLHC5+UsAwz7z5phO54RYGFmPn5CWyqgp0xswIUJhFL+k2HLX3QNN5EmZJJJtEGUnYlk2nKLem18Z1n05SFZ8aZdYSvjeiTEsV9ElpJghZQsPFyRI4kamrRLNY38rUaN1EDeWQx+W5xdUPIkSoLkqaJy0g43Rjyp6KyS0n6iqsTAaHSGEs3xrZu5XSx1uamkKMyXelYZLDoq3o7syFfVVW6KFRRZJVkr6HFVBxwbkAq16tvkl8glWfA17OhhyLkzggZiRCbiHTQ+xDqqIbUiHmdOJddi5kV0haJkw4did4XfTzKe6Mkmrw+QXKJrQkOZ5JE7eU86eJX8Bx/aCRJwkliSxIxOcvnr6udmUiYDotiqA6O1NJ2a6tFSuTq5T75iD8kWlExQlTqM+NphOR4GsVmfOacKuKTXktT2q1GEzWeyzHy5XLS9+hRXhtQGfBcfbqOkixJaqns56lnyBOPTjEGIcQXJhpq2366olupaY/5Iv7aaUXuSNJX3eqNWeKVtcX1PTWBxmnBdNwbbl7bGqivjolOx6K2jtlUcRaYAqmSorKAucg+V3RJ5uD01tK6brcYqmyIp7pnKKLFousVA2iDqCEyoRbZQIYrsk1lHBEdxCYn9aRMP0PPGfXErtdbbxVMRq/dTWavcW93D7t5960ANg+4D1utwmGjUW/usx/W6fSoURlpnCrVeKZqPE2kl9PS+FWrcdL9cXo8jfqVo2YbVudIDkUHVQyNqxytRW7yQqbM1bJkTfWKxYtXTnyL1IXmzMq4f3Ru2tV7r62e6Fxw/Di5U1m0bGWSan4zSsSvsM+l8GBW8lNTRyj4KLipDMzGjI2yr+RyD/EcsvNhnhP5cohGb1WCbiUYVGzWsmjJYQUOB5lhDIqoL0Fq04LUjoas9MiCEBSVZTbHEStt2ioyWRCXQ571dJzJvNWjY30t/erMkSQqCsoCisF47swk3110krrA1EnOIw0ictTGf+Ou28JNAy2BukrKxO4ZqTkJR6Bl21KDYNBxZOF5otPpyFHDtZsqF07yzl2S8idml8nTly3uTS2yZ+prkJtNOKMQ7iQEIAV3P5WiShHTZpQAWgO6R1v+bnYmmh6eKs9ynuirDcRuIAYDrMC+HhJc17g4V1XoZvOdZs4cOTQXlmPDlWbbkVAwqE9Q8pqpUUoc8S03HNFTo4Nk07OpoGkcLUpVhlEjN57OoT4gHaiNzWWQGDmiTQZoObzI8kZywa9K1KMa2EhhUqitSTTN2PTxy4TZgwtqrIHm6OzFNd5A7eIZV13zerQhRIglXFMWqQxZm4lnw72X15OFxFezZI5Fis3urkj0tFR8+hWr1ew1T1s4O1o0LeNr60S5aUDheYvJejzrtKEIC/pbRUmw2/qM+sMCCi/yFGVWenWcSjA6tpQ/tREZu/oFQ6plUWLicXIq0jM3Y+g5/tCRVG934sAXn83RmJbaqPNooyLo5bYT2ymc2n9OiZ1mlhfpU0ml0aqxgqeGmRr4dlqAZ7N0pqVW7FCQcifCRBJam5Xm6VX2Knpplb1ZqVKab7VXue1VzXYqpPVY3GMnChXNNQrBKV8xTTu0G4gdhzq38ZBDpM04Sg6ZJBRuU4fdrij6mUc8dIKn85Gnv1S7bSll47vIVuSjRE/pqYjnZ3bnTH9Vhpm35Pj36PyOBi1v3JK55NdGdEmJIKLUQ3LEdkbCDet+T/MA8vyOa6LPZoxE7RR3WvDoJ/mNqmEjrim+gbeRkPPFM5fNaF5e43GFy71rQ/ULq2f0ZLyO4rh798SnrEo6UZJRJF+qqSw1/Y/WommKksLJo6Q+UZF+smJubXF8RmuouLYybpuxNdFeEy6pzYaKM9NKrDOGnaURjztcJivVMb/RP49U22Nh2R2OOz3TEiGjvxVFPqNOoLS8yHTp5aw5NmliCq4Xp3GPo5qFsyvR2Evo/Gtj+3ez5Tg1h4wRNnNEDoHuXv4Yz13Dk0Xo7vKOzZRbYeBEqEpqVyfpVQ68PIkcRMY5KkPogFmop+kzoVNn4RMink0c8fTrjvA0yy+/oHvJvPLRKV06i/bWQXUvh0Y5mUbLW3DHCPWYker1NlJgDGWJkK6rr6upneSBh7z17W/xTRsWZCyBlkkNnLl8duj1aGPxFBW8/+XvkoW+2qVzLPYo6l8c9a9swdZbUANlc3IRamASNXCuqub9Z07kEuBAXRQYHgEpaybgsOihh4i2RclkDYs+6V/JHEFtdYAPfnQK7EiWGrTLkt1mtTgsgmg0mQ1mnc/rkfWyXrE4yQIzZoYMZrfBrDcQjne63DLOalQFWy2k24L5IYfF7bCAQ5YNjgDGBNnAjsD9gVcCOnuAaK6jn9ft8a2Rt8vDMu+UnbLF0WJpNjcbWoAGknnRZ0Sm5M3tlM46UEOYj+SjsSRJUh04oz9zBvH9itl+codOVTJSSUojAp0MMiHey+ORjQhc3BGSJs42bSjraG2JrYi1tHaUvag0lUSbwqnlqePbnn34nvnz73n42W2ELP/C/PlfoCHdLLT+S1BiS+GNbLQ8a3F2buZJSERbPxK8K8hxNMfROUGy20ui5QEqcab8zJCVUE4Du/W0ip65Vlj4NDUIj5RJKM9ZtxVtviSL1PTLSHvEvXZqx6iRsdMaflrDbqLuq4mKpam9xEeLSsK0Gr2OZrIuem14b5SdiwIVcWAVcN9BzU467482MQeVZYk0kfdSpbPpdFWGmZZckuSS+inCixEqfyGsoJEqRpdd1y6rql15bVuyPaMYiowlyUygvr8xUjxr+azWfo9fiNV12qsvG1m+fOSyaosk6XoMNpsx0bkp27ixq6zI3KO320xUFpepf0RZfA4kKIb92WK3RIfjlpB4brSX3W4J1d+9G7JGFlG9Sz17JndBWg+L8fCRcGBIfDgU8Ip4lXcv1WhGYEt70EHpYsVix15RT0mn72AuZjKdRyK9PS69nczTIJnMO+I4ZZY68jMooT4lXZQQHCHCHZmx8XBfxYby8g0VfYc3zpgYOTg6erA8ZTSmyKqVB5YnBRN3v0lILj8w8anbhodv48j53xAOpWcZDtSD+maG2myxwNtNYRMnmqw6cQgetuj3CAIx7jG38HtIMw0g2BSJjBlP06WVsy+zZSC58FlGHpr4MimZeI2s4Z5a8nLvuSXA5PN33Gomn995ik1KVICy06hTQn0Rr6d0iGRF0o2A58gRwpGHy8uzSJDyrBlJWE6oBFHTGqbEpeQP77bQKyxUZClFsxZKUnq95ZEyL6uFBd4ArRvY6yBE8FBZtVHh8zgorR3tpTGtVeoqPYMVY3s5ATmQocJHXT0cKjWgKIcFJuRQFt9GGD+b1iY6ksFoMXqxPJKp8kjOD1pSsztieZHc017VVRMxhIsH0rXL55QUz14+u2K2lfRNPKczmYTqy26eFMlel78gkEYd5PkEzyCfeIidAj1OCw4kAOiJ/mEyxD+s41oAGYR+zNvn38ihrLgwkF02OMg9dX6+djV5B6/WQzBrBUE3xD1s4Jv1e0gL5SqTtLPTq+NyxJFxkHcm1gwuXYqX3qfJx3680gV3ZpURG1F4co2Z8GYQYEgyuyWzNOTEQJcscD4sy3S6akVt0Mk3yZwoDBkfdrtabhXuFbjrBHKFQFYKpEsgN0mfkLi10lUSx2WlHolzSzUSJ0iiAw2uqVlsgbzRpVY3l1uTX//JsU6uziEDkufZ8h1ZQyOsXC5SqS/FoJ0aUew8N90zs2VuR0vRmu6qK7bklDXxy9ZtXLNUOf8z7qn0gdtGa1Hw51PdplbzFZRKF5QS4SmnIjFJep1G0CL1s4oxw9FSBzWODpFFAphjMido2i5o3jWvHdN9VsaCEJWxEBW/0G4TtQ8mrQbdZ+10cYeaB9Mj5efKiVsTRBbEFJvyNoVyl94P6P2AijY8UubXarK9Kb9ulA1gQ/699o4ovWeU2pkoNevRvXQ1lJoOBlOkeDKnrddMrtn8xZrnFDeNCvWs2lV72lqvWVlbu/Ka1rY9q2o3KrP7amuXzlaU2Utra/tmK2TVitFVlZWrRlcU9k2bOktLOzc1aXtqVZH8c9Cq2qAIFlNZPncCJ3gddZ+seffqKdz7djNi+qkp5UNGx5D54WLnHlEEU4vDvtcCOLZ0Phgbp5JB1y/GmatD6IqTDUNtFIpG4i0RHIUhENsdn0n27urqHizfkG6MdKV76kPh2g7uue3bGvpqfRMqd8wk9PET56zhuoqymrAFtN6uw94GMGY+kHWJlCd3i+QWkSzniDm2G3yaDPgKTr9PsrKj09lpJjMs8OkNQ5t0IzoOI+WKgQpiLx5yPFxeHNwrh/aYwWaTnHK71KJnMp+hcVQmH1jimHI481XltNU1HO30alSEJEFJj1bypYYSbYz5NTZ+6kgfkabXZJyXu6uqq1zWoG05jrjijnu6ftgYaaejDmXaSYm7edGyssTCuY1eMvEmHfq2re1rSYqf+JOpKFNRWhOyUMsRwRiH+sPVJJydqS9FV42IVmJKkLtKiD5MXA87yT1OMuokzjhEKFkiIVEf0YtDoYg7FBFDIX2Q2x2n8aK2bHX6SYw4aOZcdhDFdEecxNPB3RaJ6pYPvQgLnSIsVIItlamsaOtMTb9bT/boyRx9t54z64m4K0RaQkQf0ofscytJ5Sbs5V4W9PanSKqs4xrXXS5umYu4PHud9C4OPHOz804nd42TLMN+2lF0MpSQSOAc5pLjuXRh5YY6dzmCBE+/qi1s5ujOMXOmdFHUg5V80hmsm2Y2KEfYGg8LZyr5/Nrv1JnAS5d3DIWFgHfuDlbOjiTa0sV7tzZt8oXlJfVF1THZU1arpObXhw7sKW+vKzUXe1e3b1ZSEZ/FGkk1Tlu1MSgtsvotvri/KFHsszhj6fbpq9aa7Q5Dj1WhnJJQUuNoqQWYlY0Zh+lECoQQfmhYd0THgY7oNF9X5FuIYQ+dL86fRrP66uocfTqCG04BRI6iTEVrufgPB3/IPbX0/H3c4FJsXf2zOpecU+/E+ceXNRGip38NP8LNRwtDHJkq/E6vFtAH0JHfT1guX0Q1J6m+RU5zMup5Lfwga45QyzSN+okl1M6iQXNSO+sVqeOIpXw5Va3yYTebTdwsHqK2cAYNTd1H68P1JJ2hWmUzWQBjk/1hVjFM7YZT8w0CdBG1h7ma1GKG68pjozoh6yTUUp/OmtCoClnqurJDJ1YRBDsPo3KgN101mrH30Ok/TTdtkYe5/K/ml3vOJNN503k+eXpypTuOc3xtgdEeFzWe7/UILqz2EVSnjMOUUuSq0kC2akZ3lduSrGsKT5tXF4o29EyzhYJunSmQilW2O8zOpa287l69YHBFgulS8r+Ka7umTTzLCQa9szSbSjYmnLxeRwLeVFS2Ct0o/hz0qL/nArwITojA6FNBJW+HXs8mMeOns4N/P13L6hZpXpTMVlggHoti7WHpaIlzocszKlkLzr1Vewxg7Y1gE8/QokhoFGhzFvbEIB+E9mirYsxxZwspaLfSjEzj+fnFddF6T6mj3kGXwuoKVHnU0Z6asbwhHG8baGher+RsmcT8lVJsZlki6yBvmn1lnesbmjZ0JJxG7hfS+S6dsG5VWUemOGBDic+ovydfQQmLwDOnwJufR6jK072g7XkqFyY6sdCYw1pMGS9ZPJ3F0abooigXzdo9nUzYLFjHvV/PhIqub2Wj1CVna/j6YyU2h4jnHXR10DFqzUc6PUVsHrbm5+Gn8ZR/tHgyqulFyqQ1X5LuiEYUnH9fTZ7VovILoYxmLwxTA5l005pmJZrNzYx2KLJcH164xFWerYw3OKxiKJG0lHWua2hY31VusS4yWdauruhIB23iQr1R0LN1jN+T8ygLNqTOo5PUQffjB9r+3SfNqEd6ylAPlthQCNjYJTZk6WhUpESgjrW438/O+AuPGpjbYaXyxOr6j5VAQUaAH6XykjXmBabHZmb0R6EzjzrcvdJCnOZYiMOEZtIpofvzp/NEIZPqROmA8jJ1ucLjJfc7somymTFp5fxExpZT1jc3DLTFww3LZ6TaHeRTtkBxpqNs1TpBxz0knReMzkTHhqaG9Z1lPrNGlT+gxAQgCr8+hZPbuQL7TmjKQvc2jUpC4QmKT8o7fafZ+p2h4OU517i2uzhXcL94LL4ovj3ORfEMVZro/gtRyX5gxAPNdWMBos0y+XjoWMxpZ7fB+9lHPdERM5VQo8sNC8xmvcvDgme8ztOr+ZRYLzSq72GuHYoWNVTj0nhBvpCW49TDGz+TS08uRE+6dh65iAgRpn/0mS4la7wuwR7kZMpalqW27CATnzYsXj691WF19NW1rcuGyQbSPFOZXuLiCd++qa3kozcbXGLvUoe40Ogu71y3ranXX1YTpPNPD8KtKHEuaMtGdC4iCk5i4WWTDa2L2z7POmJG7RUpAYVRnqkJWmtYlFeTtBaGoB93lk6pq3NkUiWKSYbNSjV1JFg+2+KwTFOaa156KbeWFy36HoN5bkNq4UQHV79+K+NwG/kd54IQpOCXp6Asz9FSjcNRjbPMSkhs/3M6FZlPTurHuawfMxBKvUcfqnzeuMZD6rycsLA9Mhlj1Ph+kdUVCxoi0nBTprpD3XyxE28hHqv0BUe9zMmPsIWExeESNLg9KYVekaoYBZYBO09EHqpW5/J2Nf/MabzAX7YYcIZZ2PNnLizuxS9WEgd75pp/6lBXy19kWcidlvbKqiWNsZLm1bObByN7b5i+XHEU9U5b0kVsVWXze72lmWC80Vkj+kNNq5tnrmkvdYkT1ddeKZl7zY6WTnK3Tljbm8pWuHGASPEWjEy/zL2OnoEdMlkJHJKDEx1HrfywQI5KOirOZouzU3eLaQnXBfOon0ufHL+dPp9+YzXGcBkM3koLT8zRTXo0l6vyR6N+3DhxdaSoKEK3goT9GSUsAGpWlkWZriAgEw2iDzlIVZQZG5+FHpmpW4FglHx0wiss3PqxOn2G6vaRBSyDLoFBpnofJN0yW7xxy2SBTHUNFCwDxYNVQaKlbPYLYlMyeGBYkt2SDJJHwiY8eorUmFJfRE/HXGKVOvVFkmXYdjTo6ZIkam0lySB32Rda51nmGebp5+XDXPZAiUXup5mrcTb/7DW/fphP6amxGi0sxACoF/UOuoSIs4Ul1No8y71Vrm9oLMrlfLNmpJ1bvXWzZpOQt21RbzTa1TrD9UfuXWki4ZvVUC/7G+bMYW+UvA1/QJqaYU7WRRRqmCTRSRYQBam3wMqskSRaOs036of5oxb9QvMondqYtp4PvEZnMqBd8laSWuwLdXZ/vawzJzpDHhPXMY/bIZ0/4g05jXyefzzaS0iRSNYRpe5JgD2Hk5W80c3rjk0Lw3H/ygnt+UnBJWFPuK1UifMnmB9poWxzS5TXSHwjdSZFiUYbBi00o3xhLei1FvRa0zrtuIqadqrANJOtR5WtOupE/S+ib2IQyaAMBxeFiD1ExFByOHW0ctq88DzHvGQiEaTBStA3agaeN9B+YncMZjoLUCfUnPeOMlUZjOiS6aoMeyfp7fEfrc7tTJ+f+SMMPd64KAqfkpjb5PFqT4ip9cv7SyEyeYBW2xHtUba0p9u8QmhaXbhhQdKeM/qTJVVzzKKYM/mTEZtS7NPlyB9EZzCgdzqs0Wx/zcSPiFTZMk32mwKNJYUDjteRia6Clv0eueSFbafAQGcrHJSNuj9WyieDZjqnEPfn2TB91jRsF8MiJ4pH/c/7iTzsPerzzDPOk6VRyD/6KriLaNAYGXCaWp0rvDSCMlTwFN8zvsvbGxdPd+esoXTcrhR79Ww00ab+Wtr16rYKl9Z1avv/mwvi7E7fO/vIKQjnbX0QxSUbpNN8GYJMwU2XB9374VhkOEICBWcvsN/ErLiJWXzTMcVLIxIvNQXeUXtPsbaEU6wt4RaP6nvzs/C4trySn3kLDCVTHoCx5yxT3iDjgrFmuozSHCvsBxe1tS2iG9E1rqdLJesb52yg+w1z+jdt6scNmIc/lwsgb6hXd12230q9AQvlCuejq/zVdOaS6LTqo/YLGeKiEoyn7HQUdmaE7MeiBu+w/2iJgR8NFPf45gts3hFMo16W8bpxWPm5pymjrURMWTJiQ5tcd6YrDvWaay9HCyvTp1bOr6iyaX7aoOab5SLrmKtG+FVrDbqJk9RTay+bzVyzV7jjogs9tYL8XYtjdNDntQa9i1pQJ5pMg3HUrsezTek0hhjaoiXOgGRy2RV7RLtAJEs45DdI5kxZICPmIms5F6/Xc706s5mbmE9+Z5HxLmXoCd6FspIis05BHCXFyObzl7IualGqjdp6spHSlT6ky9qRlAkfjT3jlJYlmjSUaK/y0GP26lZEdCNoL/pEtIct1HQxf9vK3ukyUVtFzRR9tsfcyRYXncecFKiHlH8Yw9gl6iMhMRQZ1otuvRjRh/QBfvg+F3HFjlU1VZHAsLmiMkSnwhAVS2rbQjb2UFHWHiq6sTtJGK0o7XV7R102KhG2ghripr0NRKTXXqUKeSb3F4sd72uf8jMTe60lUVjymGTD1CUP5oR8c2Z9XWOovsy3sd8zLVEsOuzZVOksa7CsKD6r3HPFuvaFNofU0RqKlJT5Lf6S6mh7r14Q+R7REY44ArLTZAvGMvHOeV5Dj8FHZWSe+ha5kXuE/hpA1h72V/mb/LxLoZzjrGzGsvo6rf5FfsJ7h+WjPgt7/cFPpds4apVEui4n0SUmqdfLjUAXqvG3WQCbLCy8YYiWQVlnLwJeCMnyPpaj/qEXX7T4Yr6KjMlp60jVtlc4cpy48Fxpptji0nULcrBuUQ15RSr09DecCDL0ZCMGH3ZxqYW4hu1yWOZE+aj3eS8xDYtHPe4uY5fLxgSNPjS2odFkb4PxvYWHQhfbzByZ9PkcGQc1KqiIjgz5Dc4HDYvTnlzDXLtShNbSjsYyu7yWxCbOrVnM8TxHntFWi8gbHF0rePZpO5M5c35pmgY4dKnGQOlDH2Y/Q6ey262EEvZEQ0sn2ydSnUyU57k8nVanVXQOA+/G6d0qCjqrThwWdG4Bt/vgcfpmsYSAUqt7nK5DSTpOx972FAWXs0vsErp08/h5lAlN+Zd2X12d+34udx63syPS5ItoIz4pKbI3DpLJq+gDVCaGBk6IJrhSuvqPbhB5o3TL9KXTt5Sut0TiCYcjEY9YOPGOid9ffjmx3DF9+9aNZWUbt26fjuN3ojl9B8cf47+VNWYTpJguD3jY3MYcQabclCQnvPnHoppjdy7rQsXVl9En/9TTiPq09zezRvrowFd498ZI2P5JlwwLYlT7KVdpJmtCumZjpCZGYoySFZ0xZhSUeOdVMZKN9cQGYjwrsru8nTElqAxHYu5ILBGh1W2EGpXTNMqMBIG9c0DyQeU8K/VWTQgSvSnQlxaAPoJYhcNVypKd54H8Csi/A3kWyKcwVgOyD8ga2A7cPFr2L/AfwHskJ2FkyNrsmCnDxj0+q1Zkx8Y9iscLCzzo+dKyd0+481TDiBUz1FhqF2NGoWGrz6oV3Yw9qfMQnYe87SH/x0Pu8jzj4XZ7yHoPWewhHR7yBw952kPAE/QM8+DmoSm4KMgNB38b5IK8IGJHBB8SVWCDE+gELtC2sRC6FwlktkCELNJSUJCO+wSySKBvgfKCgjQUMBwYNgluk0kwaBRjRteI7Rl8hZBA9jCP8dyTTjfLvE5DPVr/abzNUgOhRVlnabLzVQO5yUB2G0ibYb2BY8UuvItMSSdL2LgsWvPBxAkT27+efRBvIvs8CAoSTpZoeC9T+sgKdr9OJmaZ/EEmT8pnZO5OmWySyTKZzGNl/yL/h/wrmT8lE4MsycO8wc0bmvhF/Br+ef5feXTKj/C/5Xk+K70icQPSOYmTsiaiPcaNx+ZFupQuT1dQiklkvbRL4pI8+TRPbuPJFfz1PCfxGJCYu0xdAgYkcCEgmUlfcsjtdGQmNXKn//u5nT7c8g/f6HmWrrpqyqxAC5KFAqqwLIbBsmShmk968UITO9+nCUyF8gtt+aXv46VnR97b3tQVDnr7SP4tiikWobBDO0H+UNQUCDQW9Vb2l643FYVL7I5IKGjqNgZCEYc9ohSZBkr7KztPrV9/qnMTEe+p2rZtY6JqyxWbUqlNV2ypSmzctq3qnol3NxWs5zhaDy88ko11uInbZZK8DqdZ8nbZiM1ptoPRZdK7THYwSfQdFfYgwk1zJqfZOewy4QUuL7ED09xqekJiFUHySsN2cNvt4PXb7eawmRPNPu88V5ezS+qyd5nnmS7wSWPNWYnayXy4mH8T61WNUkk7HtvJTrt95/TqCMaLNl6INpL60oy3PoOhhJeMmJVEmctVFlfMA9HB6i9t2btv3cPVG6Keupkz/P6ZM+vkttuy7zz99JvNH2vHcXNqG/kJR/9W/a1T4M8HAH6qIijKOh+hdjM7SrXSTgRqUAUalRsFoqfhAyhGjO9dXpfk9Lqceq8eCeHF4xIXW5N3ZbGOS8QI1EUXTVwWq91kFwWD0aAkUE+V0opOg8luGjYa3EaD3m43ho2caIy8Yn/dfs7O2w163gn8qBJcTGllwuk0TyW6mO+duZNRyv9iesR3gVL513GI//tMMlG8CnONZNPe1EFaUheTPvmnb74lvfm1s4J8ESZY+fX+UpcZg/FGf9PW2HpzODHNl5jhH4j1Z9zJmuZyZKFLN6g3Tq+/llgPpjZv25bZ8vLWj0+8uTvVXOHm9QaOSlUM4ThS1wHN2bjeZrQNg94N+vzr7QYXuIhoNzptYB+Ruox6w4iAgnD+ay82nX/xa+i/nV2dk17Lvar9bQt9uTYiR2rzLzOSR+T2RRjChiaGfB3dXcEJlVxDXvAu3bgjs7Bx2uVbcspC4KnnzWXZCp4XojCcne5zkWvEEZHbKBKdi1h1N/KED8rDEe/R+EB8R/z+OG+Ph+NVcV5kq3wx9tQzbHF2+m4JLfF0uedpy36bhWsFThjlR3CQi6Aplx7P0QW/wkrQeHp1LscWhF7NpdnyH7Uv77sA+J61IhKMps1WcyKYXxAkH7mwdsSLRl2PznhhcfDP705ZTlLVwmg5AzkGkD/mz+LoE+iKAAjkGLmZ/UVUEXLlSbPZkP/1BvpTzTr648Z6HgyTic//8ZQAgmgAkVbEnREPDfoLf0Cvxwv0BoPOgOcNvBEvA51eb9CjNE+pdSn9w0kQAMwAFkuBZ6YLPBMm0yTPKKM0nhlp1iBcaMoABlpXLzCemTELyEKB8szwAYzsw5tEERkGYLUKGs/Mf4VnRsYoI62IO5MIonARzwRREEU95amgM2OW8UwwCsIlnv0zE+WZFcAuiRrP8ICZMoMOzxWSLl/ZCCYzbrSiCGaLEWsYLzRFtVA0Gg2Up6LOajQaUfEMRsF6EWcvpX84IWGp9yo5RPb/DABsF3hmnEwaz8xgRp6ZCzwzgck4hWfie3hmusAz8QMY2Yc3mXD+cuDXadR4hnGDgZoy5JlpMk3yzIKMMtN/0WAEixWzF/MM2YRxMNVDo86Ol1FjaTKixl3i2T8zmXH+cgK43CaNZ5LGM0GP5wpJ8/usYLGZEQ3UVbHZLWChLC8kajlNZrNgxoZMegkvQ56JZoyFpnL2UvqHk8VCf5UN3LKJOuvAlO5v45ldsoDVPIVnaCotJosZo1kDmAxOCzaNxtJyiWf/7GRFn0PGr8es8cyZ9/8pzyyTaZJnVlQuG+WZGXmGh2bLhabQVFrMFgvjmVmYwjPzVG28lP7hZEOfwwPg9Vk0nrk1nmHwbJ1Mmq9uBxsyyk55ZsEp0AY2yxSemakW2qxGqocWwW3FpnGCs5ocFpP5AxjZhzfZ0efw4ddvoQEWMKWj/j/lmW0yTfLM7rDhjKfxDA+tU3iGppLxjOqhVfDYKM/MJpvFZTFf4tk/M1Ge+fEbsP4NPHOAhMrloBWt4HTZQXoPz+wWu81U4Bk2bWI8s07VxkvpH04S+okB+t/hbBrPvPmYDYwC8rOQtJjYCQ5klJNWtKHbIoGDmtZCslLLKdlNVA9tgk/CptElkSyyzWL9AEb24U0OB1slLiou8Mx3gWfSZNJ45gKHW0IUqJl0exzgpGpaSDbqlkiSWcLzdtEvOSTqlEhW2Wa7xLN/ZnKin1iM35CdLj4BM5R/hWdO2YFopDyTvc6/4JnD6pDMjjzPHCgOZqvFYffb7bb3ufOl9PcmlwsghN9wgWeB/NoI5ZljMmk8c4MLeeYGtt7lQZ65JMeFpux0tnM6LJRnEvIMxcFyiWf/FxLlWRhAiUgaz4Iaz0wi6mAhaWtPMriRUR7KMwd4/S5wO1wXmpLobOdyWqgeOkzFTmzaYrM6HX5Jsr/PnS+lvzfJMv2FVoiUOOiCIbDJjbnmyDPXZNJ45gG3z1XgmS/gBtn5lzyzajzDy9CRtLocQYdT+gBG9uFNlGclANGYU+NZSOOZ2QjuyaStPXnB43ejl2KkLqQ/KIPHJV9oCl0SWZLdNmo7naawG5u2STa3q9h5iWf/1ORF3z4GEE+42GsF9B87sDVIyjN5Mmk884M3IOf/VbQLgsVe8Lqn8AynN4/DI9tkPO8yRWSPB2wOu+xCjXO8z50vpb83+dC3T+C3tMCzyF/lmS/oQS/FRN2RopAXfG7PhaZwevM4PbLdg+fdZsWDPLM77B532OV2fgAj+/AmyrNSgLJyt8azkvy6MVhMqIOFpK3xBsGPyhWkLyPIUBz2gV/2XWgKpzefy+exe5FnsrnEi03bnZLXE3a7Xe9z50vp700B9O3LASqSMnt9hxlKtriBPPNNJo1nRRAI+RAt1B0JRwIQ8EzhmUxnO79X8mFDHnPM5/eD5HL4PGgl3R/AyD68KYi+fRKgstrLXt9hSscCZasZ+VlI2hpvGIqRUWHKMx9EYkVQ7AtcaApNZVAOBpxUD33WsgA27ZSdAV/M5/W8z50vpb83hdBPrAZI1/jZ+1eMgXQNEmwWKJpM2hpvBMKxYrSeVhp6x0pDEA4WX2jKD4Fib3GRqxjPB2zJ4lAxOiXu4mBpwO97nztfSn9vUtBPrAGomxHUeFaZX88CuxX5WUjaemEMIqVhRDs1k6UVESgpDl9oKghFil8JyWHkWZGtKoxNyz5POFheFPR/ACP78KZoFOgvh89qKGavyQH9Nwt0bQScNohMJm3tKQGx8ghaT4mGcRWpKMTCJReaKoZQSbBE8ZQgT0NSJlJSAp6AN1KcChUHP4CRfXhTPA7014Nb20vYK1cAM9G/oNOPLEFiMmkx8TSoqE5ACr16iML0mnKoiJVeaCoC0dJwaTxQipFa1NWQKCtFlyWYKKkpiSgfwMg+vCmZBPY/CgkA/4DaCkXWZ9QVas5693v/zyEZI7+nSqil//rLpviVF86TNliI20XvopIkzoJvU60G4GogjVsOtxm41eNWhlszbk24NWhlmUL990vcXfmVG+5KmMV9E5Zxs9mvPgJ3P8xi97Pmj1mZoJ37ASzjTVh/QDu+Gq9zQ4Srhb95rYb8Wv0zu9YESa4besh3IIP7DFcFGbIfergW7DdN59lvfdB6PcQBC/kcnmvEbSGr38Pawvrkq1BG7oB5eG4eeRsk3ghOooJE3gSO/Bt15C+lS+lSupQupb81cR9FO/vRvI2lSWfEPGGzGAc2eABMwKHFr4IVAHrF8AfQs/lOgJX0vw3r6KrXHbBRyxOMGgrl9OoFWp6HNvaHUDSvm1JHz+alfN7Ayqsx5JiBs0IbDMKVsAu2wzboxvwgbMLWdsF6nLEU6IO1cDWe2YWowGLYgGevxvqDcBUeF9q4uHzqNa3Y7g7Yg6VbsMZmLFNwRq6G6fhR8Owg1qN33gLrWD8U7d6V9L+sY56Wb8DzQ4jrsYS2ux7z9O67sL0Nf9HHDtberouuXsfqTcdWq0H7OxcA9QAsej8+nSI84Z5YH5aarcgYBbdq3HicFDkYwI1TT+P5upkdJ3HHucKnCCHwxINh5cuUmZglrnCzl4hwOxGgjxhwb8S9Hvc67GsVof+B6HnM/wQ3FTdePX1CDZR10L+8DKiSr+MnJ357Qj3BP/7E809w2bHbx+4f4x9/jNDTTzwqWjqkL93/JS57rOfYwDF+4Ci5/yh56AEx/CBuX3xADj/ACeEvcHz48581hD/3WXP4ftzfR7jwZ4k+/BmiC3/6npfC994jhz91977wPVj3bm5u+C4uHb7zY4HwJz+2L/yJjz8Y/jgh4TtIIPwx4g/ffrgzfOTw+vCiw2T74eHD3OOHSfbwjNkdhzkufNutnvChW/eFb8UhHzzQGL5lpCQ8OoKkG1FGqkf4npGBEY52+1sjSK4RpNXN2LHHDzx/4F8P8Ac4Er7pRn/4ox/5Znj/8IPhj5CXwjcSPqwMk2Fs7oY9mfC+6+vDe/esD1/PpcLX4e3W7Nm+h9vDOcPX7vKHr7n6hvDuofXhq8m+8C4c28DQjiFOGlKGTg/xQ9jAVTds79t5w46+zatW9W1ataZv46pc3/pVK/vWrbqsb+2qFX39rcv6lrf29S25vbtv8e3z+3pvn9fXc3tX36LbF/ZVLSTPd/2kS+3i565q7etY1dLXvqq5b3szWbrkJIETHqInJ8nt80/y/7V4/pjYs2qMjI7Fl1DM9q4cM4yOQd/KVf3HCTm84sBtt0FL8fyx4iX9Y/cXr5g/1omZLM3ciBkoPu6BlhXo8Q4lk8mhob/4iZZdV7MMJHcVCrRjWpWdJOwwOUQPtD+jh6k/8KIdDe3aNYQ3oLdgt6EtAWuCLuz8f4KEkLkKZW5kc3RyZWFtCmVuZG9iagoyNiAwIG9iago8PC9UeXBlIC9Gb250RGVzY3JpcHRvcgovRm9udE5hbWUgL1VidW50dQovRmxhZ3MgNAovQXNjZW50IDkzMgovRGVzY2VudCAtMTg5Ci9TdGVtViAxMDkKL0NhcEhlaWdodCA2OTMKL0l0YWxpY0FuZ2xlIDAKL0ZvbnRCQm94IFstMTY3IC0xODkgMzQ4MCA5NjJdCi9Gb250RmlsZTIgMjUgMCBSPj4KZW5kb2JqCjI3IDAgb2JqCjw8L1R5cGUgL0ZvbnQKL0ZvbnREZXNjcmlwdG9yIDI2IDAgUgovQmFzZUZvbnQgL1VidW50dQovU3VidHlwZSAvQ0lERm9udFR5cGUyCi9DSURUb0dJRE1hcCAvSWRlbnRpdHkKL0NJRFN5c3RlbUluZm8gPDwvUmVnaXN0cnkgKEFkb2JlKQovT3JkZXJpbmcgKElkZW50aXR5KQovU3VwcGxlbWVudCAwPj4KL1cgWzAgWzUwMCAwIDAgMjMxXSA4IFs4NTggMCAwIDMyNCAzMjQgMCAwIDAgMjk5IDI0Nl0gMTkgMjggNTY0IDI5IFsyNDZdIDM2IFs2NjMgMCA2MjAgNzEzIDU3MSAwIDY3MiAwIDI2OSAwIDAgNTE5IDAgNzI4IDc3OCA2MDggMCA2MjkgNTMyIDU2NV0gNjYgWzQ5MiAwIDUyMiA1ODkgNDY1IDU4OSA1NTkgMzg2IDU3OCAwIDI1MyAwIDUyMiAyNzMgODYxIDU3NCA1OTAgNTg5IDAgMzg2IDQ0NiA0MDIgNTc0IDUwMiA3NzcgNTExIDQ5NyA0NzFdIDQyOCBbNjQzIDAgMCAxMDMzXV0KL0RXIDA+PgplbmRvYmoKMjggMCBvYmoKPDwvRmlsdGVyIC9GbGF0ZURlY29kZQovTGVuZ3RoIDM1MT4+IHN0cmVhbQp4nF2Sy26DMBBF93yFl+0iwjaPJBJCSkiRWPSh0n4AsYcUqRjLkAV/XzNDEqmWAJ3x3GGux2FRnSrTTSz8cIOqYWJtZ7SDcbg6BewMl84EQjLdqWklfKu+sUHoxfU8TtBXph2CLGMs/PS74+Rm9nTQwxmeg/DdaXCdubCn76L2XF+t/YUezMR4kOdMQ+srvTb2remBhSjbVNrvd9O88ZpHxtdsgUlkQd2oQcNoGwWuMRcIMu5XzrLSrzwAo//tC06yc6t+GofpkU/nXPIcaUeUIMkYKRZEB6ItUUG0JyqJCqRYIiUlEWWmmCkOC5VHLohKogibXbva33p8eDpiCU6V5A7rCo4kBAVPFCQ74oSfiFzJ9KbDJiMMRqSLSBC/UDCh4JYMSDKwHgP5T+k0vABTSJ4eMZiQPKG/b+Xqinws01huzX3U6uqcnzJeLRzvMtjOwP322cEuquX5A5RCtrUKZW5kc3RyZWFtCmVuZG9iago4IDAgb2JqCjw8L1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUwCi9CYXNlRm9udCAvVWJ1bnR1Ci9FbmNvZGluZyAvSWRlbnRpdHktSAovRGVzY2VuZGFudEZvbnRzIFsyNyAwIFJdCi9Ub1VuaWNvZGUgMjggMCBSPj4KZW5kb2JqCjI5IDAgb2JqCjw8L0xlbmd0aDEgMTU4NzYKL0ZpbHRlciAvRmxhdGVEZWNvZGUKL0xlbmd0aCA3MzA4Pj4gc3RyZWFtCnic7XsJfFPHue83c7Ra+2bJkmVJlmXZllcJgyHEFrZsjG3AxhhkQMYGG0zDYsAQ1kAWlpiQ0CRkpaRN0iTNKshGuCQhCZC0fTRJm3JvmzSvy21vb2+hvblN+tpXPPebkeyY9eb+3nu/+977MaPzP3Nm5vxnvmW+M0eWgQCAEUEGMLO9LLzU88N2AKLF2u45senx33x07qd4vRwg88ziFT0D8l750wCOGLYfW7x+0Gv7i/YfALLwklqXDCxdsf712AkAlxVA4V/as3YAzKAG8FXxUZYu37jEnBd7HyAXr7Wf9feu2PC9R8MOgLJigAxHf19Pr7L3Rx9iO3aH8f1YYXxWi+NN5OPl9a8Y3FB8TLoVr/txTv3LVy3uWXnn8ueQvxHbX1nRs2FAQVSvAUz6AK+9K3tW9LkU4z7G6z9i/zUDq9YOst2wAWByL28fWNM3sPfhDA9e34bt20Cit9JjIEdZjtEh7HFH6kx+hvf8FWs1KpmkoBJFXQHX22iKTZk+BbyY10sqNhWqpMfhdS/AI3OwF9XTl/loIOE9cpATnuQKBZFLkihzgjzZ8+oq3dvmFnhL9R6oQMPOo944ZoAWUQM6RK1AHegR9WBANICR/Q2MYEI0CTSDBdECVvY/wQo2RBtkImYKtIOd/RUckIWYBU5EJ7gQXZCNmA1uRDfiXyAHchA94EFEydj/AB/4EHPBj+gXmAd5iAEIIOZDPmIQCtmfoQCK2BdQKLAIQoghKGafQ7HAEihBLIUyxDKoQCwXWAFhxDBE2J8gInAcjEOshPHs32C8wAlQhVgFExEnwiTESQKvg8mIk6GafQbXC6yGGvavUANRxKjAKTAFsRbqEOsExiCGWA/17I/QAA2IU2EqYiM0Ik6DJvYHaIJmxGZoQWyB6YjTBc6AGewczMTyOWiFmYhtAmdBK2I7tCHORjwLHTCL/R7mwGzEuTAHMS6wE+YizoM44nyBC2AeYgLms3+BLliAuBAS7HfQjfjP0ANdiIugG3ExLETshR7EPliEuAQWIy6FXvZb6Ic+xGWwBPFrsBTxBsR/guWwDHEF3IC4Epaz38AqgQOwAnE1rERcI3AtDCAOwmr2a1gHaxDXw1r2j3AjDCJuELgR1iNughsRN8MGxC2wEXErbGK/gpsEboMtiNthK+LNAm+BmxBvhW3sl3AbbEfcATcj7oRbEHfBrYi74Tb2C7gddiAOCdwDuxHvELgXbmc/hzthCPEu2IO4D/G/w9fhDsS7YS/iPXAX4r0C98M+xPvgbvYp3A/3ID6A+DN4EO5FfAj2Iz4M9yEegAcQvwEPIh6EhxAfgYcRv4n4CXwLDiA+Ct9gH8NjcBDxcXgE8dvwTcQn4Fvsp/CkwKfgMcTvwOOITwt8Bp5AfBaeZD+B5+ApxOfhO4gvIP4DJOFpxEPwDOJheBbxRXgO8SV4AfFlxL+HVyCJ+CocQjwChxFfE3gUXmJn4O/gFcRj8Cri6wLfQPwxvAlHEI/DUcS3BL4NxxDfgdfZR3AC3kA8KfAUHGc/gnfhLcT3BKYikYoNX4tE1yLRtUh0LRL9F0ciHa7n/x8jUcm1SHQtEl2LRP8PRSK+5tVibWeIlawR61Yr1qdOrEm9WIEGscaMYl2ZxCoyizVjESvEKtaDTfh9pvByu/Bph/DgLOGvTuGdLuF/2cLn3MLDcoQneYT3eIWv+IRP5AoP8At75wnrBoQt84XlgsJCBcIehUL7RULXIaHZYqHHEqGpUqGXMqGFciF5BZxCDMN32YcYid5nH2Ak+iFiJZxhP8BI9BPECfApO42R6Jfsv2Ek+g37Pkai37HvYSQ6x76Lkegz9h5Gos/ZuxiJ/spOYSRi7CRECWEnYAqRI9YSDXsH6oiOvQ0xYmJvQT3JZG9CA3EhTiU57A1oJLnsdZhG8tkxaCKFiM2khB2FFhJGnE7GsyMwg0xCnEmuZ69AK6lFbCMN7GWYRZrYS9BOZrAXYTaZxQ5DB5nDDsEcMo8lYS5ZyF6AOFnEnodOshRxHvkaew7mkxXsWVhAVrNnIEHWs6ehi2xi34GF5Cb2FHSTW9iT0EN2sidgERli34bF5E72OPSSu9lj0EfuQ1xCHmLfgqXkIGI/eZQ9AsvIk4hfI8+wg3ADeZ59A5aTw+wArCAvI64kR9lDsIq8yR6EAfI2ewBWk1PsflhDvo+4lvyA3QeD5IdsP6wjZ9i9sJ58zO6BG8mn7G7YQH7F9sFG8k+Im8jv2F2wmfyB3QlbyGdsL2wlf0a8ifyV7YFtZBhxO6VsCG6mCnY73EIzGMYbakC8jVrYTthBM9kO2Emz2G2wi3rYrbCb5rJb4Haaz26GIVqEuIeWsm1wBw0j7qUT2E1wJ72ObYW7aDXbAvtoLdsMX6cNbBPcTZvZRriHzmQ3wr20HXE/ncvWw310PlsH99MuxAfoIjYID9KlbC08RG9ga+BhupINwAG6FvEbdD1bBQfpZrYSHqHb2Ar4Jr2VLYdv0V3sBniUDiE+Ru9ky+Bxejfrh2/TBxCfoA+zJfAkfQTxKfoY64Pv0CdZLzxNn2aL4Rn6AlsEz9IXWQ88R19l3fA8PcoWwgv0TdYFSfoOS8AheootgMP0+4gv0vfZfHiJ/oh1wsv0DOIr9GMWh1fpz9lcOEJ/yebAa/Q3rAOO0n9hs+Hv6DnEY/QzNgtep39GfIP+jbXCm3QY8bgksZnwlqRkM+BtScOmwzuSgbXACcnCmuGk5GBNcEpysWnwrpTDGuE9yY947Xuia3uia3uia3ui//o9EU8UDwkPq/iWm59lKB3gavdiSYEYwHU+BVdSC66IWejxPeibfeiHy9DPVqEfrWdMfEsewKjwH/Rjv/qP84Xfz185UT3w7+eNeOglFa/BFQ0YF/Bg9dj+1lfj+V9I+zFvR58C9BxAXwf0aEA//LId0BMBVw1gP0Dvvvj+VPvWdPv6C1qr0+dJ6XMrRs4GjK2rse87uLo7MGb9H0vEgZ77f3dKYNScDa2Uf7/wuURACRCtiXfMbp/V1jpzxvSW5qZpjVMb6mN1tVOiNdXXT75u0sSqCeMry0pLigvyA3n+XI/DajIadJoMtUqpkMskSqC43t/Q7U3mdydl+f7GxhJ+7e/Bip4xFd1JL1Y1XNgn6e0W3bwX9oxizyUX9YymekZHexKjdzJMLin21vu9ydMxv/cImdcWx/LemL/TmzwrytNFWZYvLnR44fPhHd56R3/MmyTd3vpkw/r+ofruGPId0mTU+ev6MkrwzSBDg0UNlpIF/oFDpKCaiAItqJ90iIJKx4dNSoH6nt5ka1u8Puby+TpFHdQJrqSiLqkUXN5lfM6wx3uo+PjQHUeMsKg7pO319/YsiCelHrxpSKofGtqVNIWShf5YsnDTPzpQ5L5ksT9Wnwz5kax51ugAJCkPGP3eoc8BJ+8/+/sLa3rSNYqA8XPgRS7iqJqwfaQMODecIcrn8/G57DkShUV4kdzeFk9de2GR6zBEy0KdSdrNW46PtNg6eMv2kZbR27v9Pm6q+u70Z32/I7l9kbekGLUvPgH8YLs3KeV3L1rcz889fUP+WCylt9nxZDSGhWhPWtb6Q+Vl2L+nG4VYxtXQFk+W+QeSVn9tqgNWeLkNlrXHxS3p25LWuiR0L07flSyrj/F5eeuHumOpCXIuf1v8NdxL/fzQOK/rxQjuqDr5PJKZdWiU/PqheO+SpKfb1Yv+ucQbd/mS0U5UX6c/3tfJreQ3Jgt/jsP5xIjiLpTtot4jnbnkyoDKG6cuqZNbCyu8DQj+2snYYERziUtu0drJ3jhxwUg3HCXdg5cu4MELKVDXyJskfmtdo8vX6Uulq0zJlZ6TPJBUjeEyYsXonFLjXHFqqd58QoXe+r7YmAleQCpPTzDNdvl5Uq6L9MB4h4qbs3GkSQrgysU6ijSiilvR4U1Cqzfu7/N3+tGHoq1xLhvXtbBvc7u/uW1eXFg77SWzL7hKtVeNtqVLSVqHDtgQco3YVFxPFdejl40XNU8bafYOqfzN7UOc2Z8mBO/QtCSgy0ZxcVaZx6XXbwOGN39Dj99r9DYM9Rxh2xcNHYpGhwbqu/sncR7/tN4hf3t8sktMb1Z8q2sTH86M7/zNs2tLijH41B7yk91th6Jkd/u8+GtG3ETsnh0/REltJ/d+Rz8KiMGu3tvLlbOls3+ou5O7NmSiIvFDksRfjS95/upDhCq0yQx/X21S46/l9TW8viZVr+D1SjQLySQl/Mkh4fsXxTcugjsXvvfJuyi/K/IXpOA/md/gmSovynmYl6XzB5g/v1KWbsB8VDoqy8N8P+bvprK8DPPmdB7mWbER0r9j+Gizqq2pYKFh8ueQJf2W13x36JU4P3/4jjzC5jC/7h7pbeyrFjs9nijuI4C8Tc+h7ErwRg0yGlVpGqlaSVRKSUGh7HTZaWL89LTx09DpivKIyWcK4hEm+8LDH9Fz581hOnQetypyfEP8o7SWnkRN2vH9MojvdM9E7YZcTy7N3bJ9ZunCUlq6NVqwJft9B3EcYcejHTjMcSdx8uEczixnh8thdTlcWa4sRXbltsq7KmklbwJ83cWn+pbt5dqolmq3Rs1YVEQVVDEuELqpwqNzaZ3aLJlDJtluMqjlUPOz4dM1POEZ551wnncOJ5xnuxKhhPGUaeLEsrJdoV1bT5DQ6tBqhzHVmKgoJ1aFPze/ctz4SDhTOS7fn6uwWTMj4fGBCPEHrtBGdnS3tXXzY3Vettvvd2fnkXF7hjfuoYcvaaBSV29vFz8ipaWRSFnZr883H76oiluxgU0lCyUDvvUHoxaDwWOgKlmGUtJAm1KvyZBkUBYpixDjmfOnwsaT4YryroTFmmlXlhKc3gS7nvykaXJ/x4IFHf2Tm0ho/ZmOusVf7NnzxeK6jjOcXY7sOYK9JOrIkCk1EvJyLSsNqbG+HKIrYTwTGhnFMi4/OCGH2KwKZbCa7LnKGBQyEN7FfbgFcuC96CZCJac7xwrWPD0BvVFPrfo8/b16CfQE15weXzFaLHqrRe/dZyEW3Hhl2TNtVqU1pCMGnUdHXbqQ7mGdZNARmZLolFZli0pnVenetzIrtar41FUei8qZ1SiTJJmVqKx6qqMqlVKFq1q4QaQrMbEscjZcg0oLZZ1M7HII8ycSidWrjbv0J06ckJ84gSeS9eOE49SuixpTbRXlvlIS9OmJ0l8tTYjkSHail5SRUol6NS7d8Gc6l+bRYEPdFP/+3Nq6huDwQbnV6TGeNOa4rHkt+fkteQNvPHV/Y+P9T70xQB2GcbFZJSWzYuNQV63sz/QF+jpowQ3jojmKBh2XSLfRAx4CscwNOVp1U2YWBanJZlZDDRcDD2IcPpswDofOVpSjUdARK4VTKuUoPDpq0FSNlTn09xq3dd3q5euMuQbyTtXSexcUDYwfv66o8+v9VdsIWd+/YoDQn87bGS9WauhjGcqCOTvRQ1rReh60nhxcUR0o5TFpg0JG5U0E1XkWdfjFWeOpivKAzWeKmKhnuOLAzp305fMfpu98HO80QGt0HOhiei6KfoMJTEaT19Rq+sAkV8piig1Gg4rbaLNEJCVVULlKphrUEi23VzghLMaRyxgWQoZT2jf5TVzxfFhf3YH4Q9t8re2z8h6+8bdLhyfRl33dK9aNJw+eb+YeyGeyC7Vqh1zojV6vVWgULSat1WTSarwNEp+WlLc9jxjyiMxkNVGVyWWJ2Tb4FaamGjdxu8Gi0qo0KpejyYZkNWFUek2NeWJZQmj+/PEfdKF/YDg8e2qXkbsLBo9wJl8aOD1/qRT02/xoATsaxJayDXEdeKKuxlZaUmR+wRIsLLBOPxBZMc7k0hbHW6bT11etmzbf6aybNjM/t6H2Osd5+kyGagclx4orIyHUqxWlmYV6VWJEsKlBislSKxb1JqkUtJHP8fzxGuHfn5z/BK1DcAKYK+msDw98SF/ecf4DWr4Du/nZ5+S3NBv0UAELohMDUpuVM1k3RQwRT+SRiKQq9paUl0RLpBJtm3tzWKYMlOeS3FyDVI7z6LA5NMWFHSUGMuKIiTDXSuS0cMgTiXAXt9f54+ge4fETKkuJP1dPMVJa0BdtJj1eltLKcdUUo6g97bHBaokYMgu06jyDLZBtLHPXxiszvWvaIu2TvYHq1pC7RF86Mb/JZdEFSyP9lK6mMrneYfa7yEs5Va0Vw99TWsyFteWl0XyTXKbPL9VkbJCplXKcbQn7jJxBWd1QGy3oN20w0al0LqVqlS2Ty5zp8XqIoR0259jMczOzNGrtXJWcXLTCPg2FT6H3JRKW9KyVXKZ08OfBlktUEmjojRY1+Dy2sKd2yvUtrmqnzTmjrLG/zkOUE/uaiw36G1XaWXVTZ2RoNmmMoaY+tATOjrpwdtn4nERLzHEucVIFPnHNlifRA9vLVES1udBQSJ4KkqAWZ1lgNsx1BMs0NRqq0cgtDk0N2mUun/DZRE2EW+G0MTXrMLrmF4mziRPi2TAyc+6dPhEqcNoSn3agVOLmUZaEGuaXD9xCyfDz8pZo4cwsq7agoip76rJ6H+kiGrvfmZXn0OFabVjWkHf7Dp1HWzreoNmo0KoVRdN611ryss2m7IBFyBSjWurE538RLIlGd3nIRg1xytuKuL6LNhWXF28vpoZiTzFVWczmDWijdu/mkEI9tyhA5HSuc7t7n5uuRvEtmXPNBj3a4nz400QiPMYiERNG8xEnA5TOGhnxNEXqAR5MBcTrCTdOfsrbcqj9ZJ+9QK/JsV43iUy99fby7kKnf3pFtNIRyVkxmFffW+OaWBWxEsdWreoclWYMn7t5q0m/VW+sKrZoNDcPTloYC8hVGgWPLRNwz/TPdBh3SwYoeQ1MuJHJRPlMm2RSWwbdZDQoiVKnwH1kBn/8nE7gvMPnw+dCuHXCADZhzE7i4/379ZV5eZX8oPoHCsvKCgvTewDclLpRk0HoeFFpJ4V8t1SCgxRuymozZL+ZTbMDbYbgm0GqCirb1JsK8jOcGQpJyvXMVev1JitR8rEjqKyz4bApkoqln3Qlzn6SOM8nkiCpxYcxolribp16XNjwOtWAD3qTnywNlOhz9PstkYmT3ROn2r3t/pq2cvP+QIk2pFfK9hN742SJDn+N/E2uUcvdVrvTH42PH/57Xq9V2yPu4V9A2tPD6OkW8EBV1G9tB7Gp2+wr9xGDz+OjKmd7xmbv/XZin2sg7rlyDX/OnOV6O5uy9Vm+OeMPtpHokUPHbsJoOC+28Do0UX6wfmHVRDw/MCESqaqKRCYQVfXSaQUF05ZWVy9pLChoXFJdP3NmfX1bG+o4iPHhGM6rCPZEW+1aYjaZfMtUxK0iBhXpzSHmHAI5RJXjVMlz5KpOZ47VmaNyOuV2qc3HJfBtLjYUzyymBcGgvU2zOeSU2wogmKcx80iHvns6zA/cb3JB0BRCErw0vrVLFjISxK3GE8CfJJgIPtUi3KMniOdFsFRKuUgq4Nis6ME5km3UwX9WmFtc4p9YkLmyuzzudDqvz29QmD2OimjAsO6GhoQ5K7/1BqPd7DLpsoPj85vmmDIG1fqgWq8zqM3+wrBvRqtDtdFgQi3wvVo21YMZXopu2QVkg5EsVZA8MwGz0UzvNT9u/sgs5ZrDZioqzHq1vtNgtuJnm4EY1Ph4MqBd6cPwDHwMUglcD1RUqECmlnVKYJVAbZA8UpkkSRajmsxSL1JTmdqqzlNLanOGAR9FMhhZLGK9JFbjcyyRdTK9TesSW7Es40V7M7H6SSKST4N8U8A3ZQqq/HFkWdnBDJfbrdfluF0ZD5Uti/QS7cHg/EQ8Ly+emB88OPynXvHWk43HAg1f0fyND0MWyGRX+GJRJT4iKfi3ingox7YrcKukwMyJ1Hjmr0Kg0H4lbrX4iKQUJdXoWOlKhRiO358hhkVWpU6rTHNrcTD5lbkzRmkyRMVF3EoxnEzwqEQN4GuASvwPAWB4uzK3RnzS6tGIyV3AzXnVmFPc6hS32mgc4caXe4XiytzaURG0l3Krx3DrhWDYrDYZ1V+NW5cuZoiSZlSOdKUajwxuQZR/hNtiyhBGBTChIEq4fNLx6YwMoxcVF3BrkI8PJxc8WiEJaKzmEW7zVbgN4pOmMVyeW4v5S25k1dgsmjS35atxa7nycO4XcGvx8ktuXZrbbtMKZwSwoZJUcPlkEp+0ekxiMN3Ydh3/EzcOqBQ8ekhZyJE5wp2JSlLD5ZNJqEwkvSgZR/U/yq3HrBI8BiEJ6LLsujS3/atyW0SFcWy7HtkNmC/kdmXp09xZqKQMuHyy8L+qpZJBlMyjY6Ur9TiYUXA7xLA4Y0O2Uw+puOO8OrctXTSKkuVy3KY0t0lIAga3y5Dmdl2F2zaWO/NSbiOym0a5zWnunOwRbgy5Gg1cPtmEqUUyccOgXixj203IbU79CxLO0SwkAaPXbUzHZvdVuO18OqlkFiXbqBzpSiMOZklzW4QkYPLlmNLcOWhcLVw+jeG2iH+eyryY28R/miG43cLYnNvvNae5vVfhzhKmFskqSvYLubn6rViV4rYJLYElkGtJP1Ny0XF0cPnkFKYWySaehVmjcqQHtPAfkIhIkitMgzO25PtHuP1oXD1cPrlST9cUt/tSbpvgtqe57SluW0HAmn5eBa7CnS1MLZKdGwYHu4A7E2duxyrOnSea+IooCtrS3EF0HANcPiGxJ110cMPgYK6x7Vz9WZhT3E6hJbCXFtnTz8IiNK4RLp+86X+FA656VB6O5B7bniW+MnWJ4BgU6kOdZ4VLs9LPwlJUkhkunwLik1ZPPqJPaGY0ZSO7G6u43CHRhHpxjw+70s/CMCrJApdPBeIjUg4UCsG9Y9tzcM783+W43OU4sPAsz6RKd/pZWInat8HlU0h8RPJBsRDcP7bdi7POxcyjVEQ0oV58ddW5kIrF1SiIAy6fKsRHpHy8GaBkVA6RAsgbxCq+IicJwXy8kuC26nFWB9m6V9kc1qG755JfH8wjf+IKS6c/XjqydN+XUpBeaMDjSpuo/y2Jfji6ywP6C/7N11X6RlLt9E8X9sPte6p+yeiT6auPX5iSF/Ui/phCG9PnWakz8Yk35tEkdfG3W2xfmGofSeTXfHGmOfNRJq75eYSiH92BVxRtXgaduJ3xKv4CctGqhHn8VyoyHpHuhp3pMsEVsyldphhl16TLEjrMuHRZhssrJ12WY5/MdFkhQl0HLIJ1sBIGEUuglv9mCnrRvUuhCn1pbKt3tDUGPXgexKuVMB3LPbAUWvC6F93Le4V7vKOcIzVj+9Vh3QBsxPkvQ65+rPOi55WjX1dgqQ5HWClGWwaLxdje9HilYkG2iPo+bF+LyMfivL1YXoPlQf6LsUvm1SD4Bi+4e7HoV4Gs5ZB+5wBgO/j/3l6ajoKaSIQe7vV4p+jQdOV4RPGQoBtxAA/KjmP7+IkNr/H/lz38hKd8igNNSYgK9hEldBAFntV4luNZhvOrwVoCBiwTeB/xD0QW3Utv3mb1rF9Z6BkcMHiiA0ZHw8pal2dZT6FnaV+vp6+u0LO4p9ezqof0YHVnW69nbkevpwOr27G8qo20YXVLrNDT1NjracTqhlivpzVGYlhdO8XkMUzxTCmbIql0RaoOeRHtkNEij6EIOjRFGR3KIkUHwbIa2yRsm91+hMCLmUROjpB9zUeUbFZzUtU6P0l2JwPtHKNt85KK3UnomDc/foiQOzt37N0Lte7mpLs9nvymu7M5uR0L4D6UCbWdoRCERlLXWhIKDYoKcslZnNYOruUXvG5wXcjRBf8OKmUkxQplbmRzdHJlYW0KZW5kb2JqCjMwIDAgb2JqCjw8L1R5cGUgL0ZvbnREZXNjcmlwdG9yCi9Gb250TmFtZSAvVWJ1bnR1LUJvbGQKL0ZsYWdzIDQKL0FzY2VudCA5MzIKL0Rlc2NlbnQgLTE4OQovU3RlbVYgMTcyCi9DYXBIZWlnaHQgNjkzCi9JdGFsaWNBbmdsZSAwCi9Gb250QkJveCBbLTE3MCAtMjIxIDM0NzUgOTYyXQovRm9udEZpbGUyIDI5IDAgUj4+CmVuZG9iagozMSAwIG9iago8PC9UeXBlIC9Gb250Ci9Gb250RGVzY3JpcHRvciAzMCAwIFIKL0Jhc2VGb250IC9VYnVudHUtQm9sZAovU3VidHlwZSAvQ0lERm9udFR5cGUyCi9DSURUb0dJRE1hcCAvSWRlbnRpdHkKL0NJRFN5c3RlbUluZm8gPDwvUmVnaXN0cnkgKEFkb2JlKQovT3JkZXJpbmcgKElkZW50aXR5KQovU3VwcGxlbWVudCAwPj4KL1cgWzAgWzUwMCAwIDAgMjQwXSA4IFs5MTggMCAwIDM1NiAzNTZdIDM2IFs3MjEgMCAwIDczN10gNDcgWzU2MyAwIDc1NiAwIDAgMCA2NjcgMCA2MTRdIDY4IFs1NTMgMCA1MDAgMCA1ODQgMCA1OTQgMCAyODkgMCAwIDAgODYyIDAgNjA3IDAgMCAwIDQ4NSAwIDAgNTUwXV0KL0RXIDA+PgplbmRvYmoKMzIgMCBvYmoKPDwvRmlsdGVyIC9GbGF0ZURlY29kZQovTGVuZ3RoIDMxNz4+IHN0cmVhbQp4nF3SW2uDMBQH8Hc/RR67h+KlXloQobMr+LALs/sANjl2gRlDTB/89ov5dy0soPDjXKI5Cevm0ChpWfhhRt6SZb1UwtA0Xg0ndqaLVEGcMCG5vcm/+dDpIHTF7TxZGhrVj0FZMhZ+uuhkzcxWezGe6SkI340gI9WFrb7q1rm9av1DAynLoqCqmKDedXrt9Fs3EAt92boRLi7tvHY1j4zTrIkl3jG+ho+CJt1xMp26UFBGblWsPLpVBaTEv3hcoOzc8+/O+PSNS4+iJKq8tlDmlaReaQwVUAododprE0MvUOaVJRDqMtSl6JmjZ5pDGwi759g93UMFVEM7ryyCDlACHSH0LNAz20G5P47bf8d/p/A4tWefFmGXZHvLRnw5x2Xe9yHxqzFuPv5S+MEsI5GK7vdGj3qpWp5fmdCoTgplbmRzdHJlYW0KZW5kb2JqCjEzIDAgb2JqCjw8L1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUwCi9CYXNlRm9udCAvVWJ1bnR1LUJvbGQKL0VuY29kaW5nIC9JZGVudGl0eS1ICi9EZXNjZW5kYW50Rm9udHMgWzMxIDAgUl0KL1RvVW5pY29kZSAzMiAwIFI+PgplbmRvYmoKeHJlZgowIDMzCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDEwOTMyIDAwMDAwIG4gCjAwMDAwMDAxNTQgMDAwMDAgbiAKMDAwMDAxOTIxMSAwMDAwMCBuIAowMDAwMDAwMTkxIDAwMDAwIG4gCjAwMDAwMDQ2MjEgMDAwMDAgbiAKMDAwMDAyNTYzOCAwMDAwMCBuIAowMDAwMDQyNDcwIDAwMDAwIG4gCjAwMDAwMDY5NTYgMDAwMDAgbiAKMDAwMDAxMTE5NiAwMDAwMCBuIAowMDAwMDA4NTc4IDAwMDAwIG4gCjAwMDAwMTE0NjIgMDAwMDAgbiAKMDAwMDA1MDkzMiAwMDAwMCBuIAowMDAwMDA5OTE0IDAwMDAwIG4gCjAwMDAwMTE3NDAgMDAwMDAgbiAKMDAwMDAxMTgxMCAwMDAwMCBuIAowMDAwMDExODU5IDAwMDAwIG4gCjAwMDAwMTgxMjIgMDAwMDAgbiAKMDAwMDAxODM1OSAwMDAwMCBuIAowMDAwMDE4ODE2IDAwMDAwIG4gCjAwMDAwMTkzNDYgMDAwMDAgbiAKMDAwMDAyNDU3NCAwMDAwMCBuIAowMDAwMDI0ODE3IDAwMDAwIG4gCjAwMDAwMjUyNTYgMDAwMDAgbiAKMDAwMDAyNTc3OCAwMDAwMCBuIAowMDAwMDQxMzkzIDAwMDAwIG4gCjAwMDAwNDE1NzggMDAwMDAgbiAKMDAwMDA0MjA0OCAwMDAwMCBuIAowMDAwMDQyNjAxIDAwMDAwIG4gCjAwMDAwNDk5OTYgMDAwMDAgbiAKMDAwMDA1MDE4NiAwMDAwMCBuIAowMDAwMDUwNTQ0IDAwMDAwIG4gCnRyYWlsZXIKPDwvU2l6ZSAzMwovUm9vdCAxNiAwIFIKL0luZm8gMSAwIFI+PgpzdGFydHhyZWYKNTEwNjkKJSVFT0Y=",
                        "reportId": 137,
                        "createdAt": "2021-07-19T05:17:10.267Z",
                        "updatedAt": "2021-07-19T05:17:10.267Z"
                    }
                },
                "encoding": "base64"
            }
        });
    });
}

export const getConfiguredGroups = () => {
    return new Promise(function (myResolve, myReject) {
        myResolve({
            'status': 0,
            'statusMessage': 'Groups fetched',
            'groups': [
                {
                    groupId: "Group1",
                    ssid: 1,
                },
                {
                    groupId: "Group2",
                    ssid: 2,
                },
                {
                    groupId: "Group3",
                    ssid: 3,
                },
                {
                    groupId: "Groupr4",
                    ssid: 4,
                }
            ]
        });
    });
}

export const liveStatusLogs = () => {
    return new Promise(function (myResolve, myReject) {
        myResolve([
            {
                "level": "user",
                "timeStamp": "2021-09-30T09:28:21.357",
                "msg": "Joining device to ATF...",
                "src": "HomePage",
                "service": "Device",
                "deviceId": "8c:55:4a:23:74:b8",
                "deviceName": "device_3",
                "deviceType": "linux",
                "deviceIpAddress": "unknown",
                "userName": "alethea"
            },
            {
                "level": "user",
                "timeStamp": "2021-09-30T09:28:21.461",
                "msg": "Device joined ATF.",
                "src": "HomePage",
                "service": "Device",
                "deviceId": "8c:55:4a:23:74:b8",
                "deviceName": "device_3",
                "deviceType": "linux",
                "deviceIpAddress": "unknown",
                "userName": "alethea"
            },
            {
                "level": "user",
                "timeStamp": "2021-09-30T09:28:21.477",
                "msg": "Resetting device...",
                "src": "HomePage",
                "service": "Device",
                "deviceId": "8c:55:4a:23:74:b8",
                "deviceName": "device_3",
                "deviceType": "linux",
                "deviceIpAddress": "unknown",
                "userName": "alethea"
            },
            {
                "level": "user",
                "timeStamp": "2021-09-30T09:28:21.487",
                "msg": "Traffics stopped.",
                "src": "HomePage",
                "service": "Device",
                "deviceId": "8c:55:4a:23:74:b8",
                "deviceName": "device_3",
                "deviceType": "linux",
                "deviceIpAddress": "unknown",
                "userName": "alethea"
            }
        ]
        );
    });
}