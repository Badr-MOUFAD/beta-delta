import React from "react";
import { Layout, Row, Col, Button } from "antd";

import { GithubOutlined, BoldOutlined, UpOutlined, SmallDashOutlined } from "@ant-design/icons";


export default function NavbarComponent(props) {

    return(
        <Layout.Header className="header" style={{ backgroundColor: "white"}}>
            <Row justify="space-between">
                <LogoComponent />
                <ContributeComponent />
            </Row>
        </Layout.Header>
    );
}


export function LogoComponent(props) {

    return(
        <Col>
            <Row align="middle" gutter={20}>
                <Col >
                    <BoldOutlined style={{ fontSize: '25px', color: '#f5222d'}}/>
                    <SmallDashOutlined style={{ fontSize: '25px', color: "#1890ff"}}/>
                    <UpOutlined style={{ fontSize: '25px', color: "#1890ff"}}/>
                </Col>
                <Col>
                    <h1>Beta-Delta</h1>
                </Col>
            </Row>
        </Col>
    );
}


export function ContributeComponent() {

    return(
        <Row align="middle">
            <Col>
                <Button 
                    icon={<GithubOutlined style={{ fontSize: '25px', color: "black"}}/>} 
                    type="link" 
                    href="https://github.com/Badr-MOUFAD/beta-delta"
                    target="_blank">    
                </Button>
            </Col>
        </Row>
    );
}

    