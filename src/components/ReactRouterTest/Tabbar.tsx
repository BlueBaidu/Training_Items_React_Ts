import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './index.less'

interface Props {

}

interface State {
    lists: { [key: string]: string }[]
}

export default class Tabbar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            lists: [
                { name: '电影', path: '/movie' },
                { name: '影院', path: '/cinemas' },
                { name: '我的', path: '/center' }
            ]
        };
    }
    /**
     * 1、声明式导航的情况下，需要实现效果：a、点击电影标签实现电影标签高亮（被选中）效果  b、在地址栏输入电影地址/movie可以实现电影标签高亮
     * ··使用a链接方式实现跳转
     * ····使用原生js实现效果是--使用window.onhashchange监听路径的改变，使用location.hash获取到具体改变的路径，然后把对应的路径设置为高亮
     * ··使用react-router的轮子NavLink to写法
     *  
     */
    render() {
        const { lists } = this.state
        return (
            <div>
                {lists.length > 0 && <>{lists.map((item: any, index: number) => {
                    return <div className='tab-item' key={index}>
                        {/* react-router 6.0版本中需要自定义选中样式写法（不再支持activeClassName） */}
                        <NavLink to={'/home'+item.path} className={({ isActive }) => isActive ? "activeItems" : ""}>{item.name}</NavLink>
                    </div>
                })}</>}
            </div>
        );
    }
}