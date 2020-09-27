import React from "react";
import { Layout } from "antd";


export default function FooterComponent(props) {

    return(
        <Layout.Footer  style={{ textAlign: 'center'}}>
            <small>Mectro, 3D printer</small>
            <br />
            <small>2020-2021</small>
        </Layout.Footer>
    );
}