import React from "react";

import { Layout } from "antd";

import Navbar from "./NavbarComponent";
import Sidebar from "./SidebarComponent";
import Footer from "./FooterComponent";


export default function HomeView(props) {

    return(
        <Layout>
            <Navbar />

            <Layout.Content style={{ padding: '0 50px', margin: '16px 16px 0 0' }}>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sidebar />

                    <Layout.Content style={{ padding: '24px 24px', minHeight: 580, backgroundColor: "white" }}>
                        Content
                    </Layout.Content>
                </Layout>
            </Layout.Content>

            <Footer />
        </Layout>
    );
}