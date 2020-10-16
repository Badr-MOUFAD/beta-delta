import React, { useState } from "react";

import { Card, Row, Col, Button } from "antd";
import { RightCircleOutlined, PlayCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";

import Workspace from "../analysis/Workspace";

import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(window.Plotly);


export default function AnimatedPlotComponent(props) {
    const [plan, setPlan] = useState(49); 
    const title = props.title;

    const workspace = Workspace(225.6, 60, 244, 1200);

    return(
        <Card
            style={{ width: "600px", height: "600px" }}
            actions={[
                <Button icon={<LeftCircleOutlined />} onClick={() => setPlan(plan - 1)} type="text"></Button>,
                <Button icon={<PlayCircleOutlined />} onClick={() => alert("Play simulation")} type="text"></Button>,
                <Button icon={<RightCircleOutlined />} onClick={() => setPlan(plan + 1)} type="text"></Button>
            ]}>
            <Row align="middle" justify="center">
                <Col>
                    <Plot
                        data={[
                            {
                                type: "scatter",
                                x: workspace[plan].x,
                                y: workspace[plan].y   
                            }
                        ]}
                        layout={{ 
                            width: 500, 
                            height: 500, 
                            title: "Workspace",
                            transition: {
                                duration: 1000,
                                easing: "linear"
                            },
                            xaxis: {
                                range: [-200, 200]
                            },
                            yaxis: {
                                range: [-200, 200]
                            }
                        }}
                        frames={[
                            { data: [
                                {
                                    type: "scatter",
                                    x: workspace[plan - 1].x,
                                    y: workspace[plan - 1].y 
                                }
                            ]}
                        ]}
                        onAnimated={() => alert("ok")}
                    />
                </Col>
            </Row>
        </Card>
    );
}
