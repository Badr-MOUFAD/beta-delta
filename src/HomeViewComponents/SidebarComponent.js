import React from "react";
import { Layout, Menu } from "antd";


export default function SidebarComponent(props) {

    return(
        <Layout.Sider className="site-layout-background" width={200}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                >
                <Menu.SubMenu key="sub1" title="Espace de travail">
                  <Menu.Item key="1">Démarche</Menu.Item>
                  <Menu.Item key="2">Simulation</Menu.Item>
                  <Menu.Item key="3">Remarque</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="sub2" title="Precision">
                  <Menu.Item key="5">Démarche</Menu.Item>
                  <Menu.Item key="6">Simulation</Menu.Item>
                  <Menu.Item key="7">Remarque</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </Layout.Sider>
    );
}

                   