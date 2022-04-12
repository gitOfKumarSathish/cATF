import React, { Component } from 'react'
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink
} from "reactstrap";
import SubMenu from "./SubMenu";
import { Switch, Route, Link } from 'react-router-dom'

import stringResource from '../../Resource/en-us'
import versionNumber from '../../Resource/Version'
import ConfigDevice from '../ConfigDevice';
import ConfigTraffic from '../ConfigTraffic';
import * as API from '../../Api/Api';

import MenuButton from './../../assets/images/menu.svg'
import DashboardLogo from './../../assets/images/dashboardLogo.svg'
import Login from '../Login';
import DashBoard from '../Dashboard/DashBoard';

const leftMainMenu = [
    {
        title: stringResource.leftNavPanel.dashboardTitle,
        target: stringResource.leftNavPanel.dashboardTarget,
        icon: stringResource.leftNavPanel.dashboardIcon,
        items: stringResource.leftNavPanel.dashboardSubMenu,
    },
    {
        title: stringResource.leftNavPanel.configDevicesTitle,
        target: stringResource.leftNavPanel.configDevicesTarget,
        icon: stringResource.leftNavPanel.configDevicesIcon,
        items: stringResource.leftNavPanel.configDevicesSubMenu
    },

    {
        title: stringResource.leftNavPanel.configTrafficTitle,
        target: stringResource.leftNavPanel.configTrafficTarget,
        icon: stringResource.leftNavPanel.configTrafficIcon,
        items: stringResource.leftNavPanel.configTrafficSubMenu
    },


];

// Right User Settings Menu
const UserSettingsMenu = [stringResource.headerPanel.logout]

export class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.toggleUserSettings = this.toggleUserSettings.bind(this);

        this.state = {
            userSettingsDropDown: false,
            showLeftMenu: false
        }
        this.headerMenuOptions = this.headerMenuOptions.bind(this)
    }

    toggleUserSettings() {
        this.setState(prevState => ({
            userSettingsDropDown: !prevState.userSettingsDropDown
        }));
    }
    menuToggle() {
        this.setState(prevState => ({
            showLeftMenu: !prevState.showLeftMenu
        }));
    }
    menuHide() {
        this.setState(() => ({
            showLeftMenu: false
        }));
    }
    headerMenuOptions(value) {
        if (value === 'Sign Out') {
            API.logout(JSON.parse(JSON.stringify({ refresh_token: localStorage.getItem('refresh_token') }))).then(() => {
                window.location.href = "/login";
                localStorage.clear();
            })
        }
    }
    closeNav = () => {
        this.setState({
            showLeftMenu: false
        })
    }
    render() {
        let enableLeftMenu = this.state.showLeftMenu ? "menuActive" : "menuDeactivate";
        return (
            <>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <img src={MenuButton} style={{ width: "25%" }} onClick={() => this.menuToggle()} className='MenuToggleBtn' alt='MenuToggleBtn' />

                            <img src={DashboardLogo} className='DashboardLogo' alt='DashboardLogo' />
                            <p className="navbar-brand"> {versionNumber.major + '.' +
                                versionNumber.minor + '.' + + versionNumber.build}</p>
                        </div>
                        <Dropdown
                            isOpen={this.state.userSettingsDropDown}
                            toggle={this.toggleUserSettings}
                        >
                            <DropdownToggle>
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <i className="fa fa-caret-down"></i>
                            </DropdownToggle>
                            <DropdownMenu style={{ padding: "0px" }} right>
                                <span className="arrow-logout"></span>
                                {UserSettingsMenu.map((leftPanel, index) => {
                                    return (<DropdownItem onClick={() => this.headerMenuOptions(leftPanel)} style={{ cursor: "pointer", padding: "8px 1.5rem", borderBottom: "2px solid #e5e5e5", fontSize: '14px' }} key={index}>
                                        {leftPanel}
                                    </DropdownItem>)
                                })}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </nav>
                <nav className={`navbar navbar-default sidebar ${enableLeftMenu}`} >
                    <div className="nav sideList">
                        {leftMainMenu.map((item, index) => {
                            if ((item.items).length > 0) {
                                return (<SubMenu key={index} title={item.title} items={item.items} icon={item.icon} />)
                            } else {
                                return (
                                    <NavItem key={index} onClick={() => this.closeNav()}>
                                        <NavLink tag={Link} to={item.target}>
                                            <i className={'fa ' + item.icon} aria-hidden="true"></i>  {item.title}
                                        </NavLink>
                                    </NavItem>
                                )
                            }
                        })
                        }</div>
                </nav>
                <div className='mainContainer' id="page-wrapper" onClick={() => this.menuHide()}>
                    <Switch>
                        <Route exact path={'/' + stringResource.leftNavPanel.dashboardTarget} component={DashBoard} />
                        <Route exact path={'/' + stringResource.leftNavPanel.loginTarget} component={Login} />
                        <Route exact path={'/' + stringResource.leftNavPanel.configDevicesTarget} component={ConfigDevice} />
                        <Route exact path={'/' + stringResource.leftNavPanel.configTrafficTarget} component={ConfigTraffic} />
                        <Route exact path="/" component={Login} />
                        <Route exact path="*" component={() => "Server Error. Will be fixed in few minutes"} />
                    </Switch>
                </div>
            </>
        )
    }
}


export default SideMenu
