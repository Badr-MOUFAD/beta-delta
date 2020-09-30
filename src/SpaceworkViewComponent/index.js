import React from "react";

import { Card, Row, Col, Button } from "antd";
import { RightCircleOutlined, PlayCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";

import { matrix } from "mathjs";

import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(window.Plotly);



export default function AnimatedPlotComponent(props) {
    const title = props.title;

    return(
        <Card
            style={{ width: "600px", height: "600px" }}
            actions={[
                <Button icon={<LeftCircleOutlined />} onClick={() => alert("Previous frame")} type="text"></Button>,
                <Button icon={<PlayCircleOutlined />} onClick={() => alert("Play simulation")} type="text"></Button>,
                <Button icon={<RightCircleOutlined />} onClick={() => alert("following frame")} type="text"></Button>
            ]}>
            <Row align="middle" justify="center">
                <Col>
                    <Plot
                        data={[
                            {
                                type: "heatmap",
                                z: [[1, 2], [3, 4]],
                                x: ["Monday", "Tuesday"],
                                y: ["Monday", "Tuesday"]
                            }
                        ]}
                        layout={ { width: 500, height: 500, title: "Test graph" } }
                    />
                </Col>
            </Row>
        </Card>
    );
}
