import React, { useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const SubMenu = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => setCollapsed(!collapsed);
    const { icon, title, items } = props;

    return (
        <div className='subMenu-Side'>
            <NavItem
                onClick={toggle}
                className={classNames({ "menu-open": !collapsed })}
            >
                <NavLink className="dropdown-toggle">
                <i className={'fa ' + icon} aria-hidden="true"></i>
                    {title}
                </NavLink>
            </NavItem>
            <Collapse
                isOpen={!collapsed}
                navbar
                className={classNames("items-menu", { "mb-1": !collapsed })}
            >
                {items.map((item, index) => (
                    <NavItem key={index} className="pl-2">
                        <NavLink tag={Link} to={item.target}>
                        <i className={'fa ' + item.icon} aria-hidden="true"></i> {item.title}
                        </NavLink>
                    </NavItem>
                ))}
            </Collapse>
        </div>
    );
};

export default SubMenu;
