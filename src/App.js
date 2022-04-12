import React, { Component } from 'react'
import './App.css';
import ReactTostify from './components/ReactTostify';
import Sidemenu from './containers/MainMenu_Header/MainMenuandHeader';
import * as API from './Api/Api';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { TitleComponent } from './components/TitleComponent';
import versionNumber from './Resource/Version'
import stringResource from './Resource/en-us'

export class App extends Component {
  logTimeInterval = process.env.REACT_APP_API_LOG_TIMER
  logLimit = process.env.REACT_APP_API_BUFFER_LOG_LIMIT
  constructor(props) {
    super(props);
    this.collectionLogs = []
    this.state = {
      logsGrouping: []
    }
    let stopTimeInterval = setInterval(() => {
      API.liveStatusLogs().then(resp => {
        if (resp !== null || !isEmpty(resp) || resp.length > 0) {
          this.collectionLogs = resp.reverse().concat(this.collectionLogs);
          if (this.collectionLogs.length > this.logLimit) {
            this.collectionLogs = this.collectionLogs.splice(0, this.logLimit)
          }
        }
        this.setState({
          logsGrouping: this.collectionLogs
        })
        this.props.updateLiveLogs(this.state.logsGrouping);
      }).catch(error => {
        console.log('ATF Error', error)
      });
    }, this.logTimeInterval);
    if (window.location.href.split('/')[3].includes('login')) {
      clearInterval(stopTimeInterval);
    }

  }
  componentWillReceiveProps() {
    if (this.props.clearLiveLogs) {
      // console.log('make me empty')
      this.collectionLogs = []
      this.setState({
        logsGrouping: this.collectionLogs
      })
      this.props.updateLiveLogs(this.collectionLogs);
      this.props.triggerClearHandler(false)
    }
  }
  render() {
    return (
      <div className="App" >
        <TitleComponent title={stringResource.productName + ' ' + versionNumber.major + '.' +
          versionNumber.minor + '.' + + versionNumber.build} />
        <ReactTostify />
        <Sidemenu />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    liveLogs: state.liveLogs,
    clearLiveLogs: state.clearLiveLogs
  };
}
const mapDispatchToProps = dispatch => {
  return {
    updateLiveLogs: (msg) => dispatch({ type: 'UpdateLiveLogs', value: msg }),
    triggerClearHandler: (msg) => dispatch({ type: 'ClearLogs', value: msg }),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App)
