import React, { Component } from 'react'

interface Props {

}

interface State {
    lists: string[]
}

export default class Tabbar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            lists: ['电影', '影院', '我的']
        };
    }
    render() {
        const { lists } = this.state
        return (
            <div>
               {lists.length>0&&<>1111</>}
            </div>
        );
    }
}