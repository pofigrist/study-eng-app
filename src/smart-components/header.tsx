import {Link, useLocation} from "react-router-dom";
import React, {useMemo} from "react";
import {Pages} from "../constants";
import { Layout, Menu } from "antd";
const { Header: AHeader } = Layout;

const menuRouts: any = {
    [Pages.Main]: '1',
    [Pages.Train]: '2',
    [Pages.Manage]: '3'
}

export const Header = () => {
    let location = useLocation();
    const defaultRoute = useMemo(() => menuRouts[location.pathname], [])
    return <AHeader>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[defaultRoute]}>
        <Menu.Item key="1"><Link to={Pages.Main}>Main</Link></Menu.Item>
        <Menu.Item key="2"><Link to={Pages.Train}>Train</Link></Menu.Item>
        <Menu.Item key="3"><Link to={Pages.Manage}>Manage</Link></Menu.Item>
    </Menu>
    </AHeader>
}
