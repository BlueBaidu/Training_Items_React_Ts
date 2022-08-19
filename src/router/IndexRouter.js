//路由文件
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Redirect } from 'react-router-dom'
import MainComponent from "../components/main/index"
import HomeComponent from "../components/home/index"
import Carousel from "../components/scrollList/index"
import TsTest from "../components/ts-test/index"

export default class IndexRouter extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<MainComponent />}></Route>
                    <Route path="/home" element={<HomeComponent />}></Route>
                    <Route path="/home/cinemas" element={<Carousel />}></Route >
                    <Route path="/home/movie" element={<TsTest />}></Route >
                </Routes>
                {/* Tabbar展示插槽 */}
                {/* {this.props.children} */}
            </Router>
        );
    }
}