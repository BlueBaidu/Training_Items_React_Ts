import React, { Component } from "react";
import "./index.css"

type Props = {}
type State = {}

export default class DfsComponent extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {}
    }

    render(): React.ReactNode {
        return (
            <div className='div-static-dispaly'>固定显示内容</div>
        );
    }
}