import React, { Component } from 'react'//导入了路由懒加载模块
export default class World extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <div>
        {/**
        原生js中进行页面跳转有两种方式：
        1.声明式：使用一个a标签声明要跳转的地址
        <a href="/index.html">声明式跳转</a>

        如果是/home/movie这样的多级结构，使用a链接的时候path参数需要加#，/home/#/movie 用路由的哈希模式，否则会送根路径进行跳转，而不是【拼接】
        
        
        2.编程式：使用js来进行界面的跳转
        location.href = '/index.hrml'

         */}
      </div>
    )
  }
}

