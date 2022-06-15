import React, { Component } from "react";
import "./index.less"
import Tabbar from "../../components/ReactRouterTest/Tabbar";
import { Outlet } from "react-router-dom";

type Props = {}
type State = {}

export default class HomeComponent extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    render(): React.ReactNode {
        return (
            <div>
                <div className='div-static-dispaly'>固定显示内容</div>
                <Tabbar />
                <Outlet />
            </div>
        );
    }
}