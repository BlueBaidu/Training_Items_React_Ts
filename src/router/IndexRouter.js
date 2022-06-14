//路由文件
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Redirect } from 'react-router-dom'
import HomeComponent from "../components/home/index"
import Carousel from "../components/scrollList/index"
import Tabbar from "../components/ReactRouterTest/Tabbar"

export default class IndexRouter extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/home" element={<HomeComponent />}></Route>
                    <Route path="/home/cinemas" element={<Carousel />}></Route >
                </Routes>
                {/* Tabbar展示插槽 */}
                {/* {this.props.children} */}
            </Router>
        );
    }
}