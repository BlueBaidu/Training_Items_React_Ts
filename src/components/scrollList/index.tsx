import React, { Component, useState } from "react";
import "./index.less"
import ScrollList from "./components/index"

interface Props {

}

interface State { }

const Carousel = ({ }) => {
    // 此处data为父组件传过来的数据，为数组格式
    const data = [
        { 'k1': 1, 'k2': 2, 'k3': 3, 'k61': 61, 'k62': 62 },
        { 'k1': 11, 'k2': 22, 'k3': 33, 'k61': 661, 'k62': 662 },
        { 'k1': 21, 'k2': 32, 'k3': 43, 'k61': 761, 'k62': 762 },
        { 'k1': 31, 'k2': 42, 'k3': 53, 'k61': 861, 'k62': 862 },
        { 'k1': 41, 'k2': 52, 'k3': 63, 'k61': 961, 'k62': 962 }
    ]
    const [list]: any = useState(data);

    const getRank = (value: any) => {
        return value && value !== "-"
            ? `${Number((Number(value) * 100).toFixed(2))}%`
            : "-";
    };
    const getColor = (value: any) => {
        const num: any = Number((Number(value) * 100).toFixed(2));
        if (num >= 90) {
            return "color";
        } else if (num >= 80 && num < 90) {
            return "color1";
        } else if (num < 80) {
            return "color2";
        } else {
            return "";
        }
    };

    return (
        <>
            {/* 简单数据显示部分 */}
            <div className="parent">
                <h2 style={{ color: '#fff' }}>数据列表自动轮播</h2>
                <div className="container-scroll">
                    <div className="container-item">
                        <div className="child">
                            {list.map((item: any, index: any) => (
                                <li
                                    className="deviceListItem"
                                    key={index}
                                >
                                    <span>{item.k1}</span>
                                    <span className='item'>{item.k2}</span>
                                    <span className='item'>{item.k3}</span>
                                    <span className={getColor(item.k61)}>
                                        {getRank(item.k61)}
                                    </span>
                                    <span className={getColor(item.k62)}>
                                        {getRank(item.k62)}
                                    </span>
                                </li>
                            ))}
                        </div>
                        <div className="child">
                            {list.map((item: any, index: any) => (
                                <li
                                    className="deviceListItem"
                                    key={index}
                                >
                                    <span>{item.k1}</span>
                                    <span className='item'>{item.k2}</span>
                                    <span className='item'>{item.k3}</span>
                                    <span className={getColor(item.k61)}>
                                        {getRank(item.k61)}
                                    </span>
                                    <span className={getColor(item.k62)}>
                                        {getRank(item.k62)}
                                    </span>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* 时间轴列表显示部分 */}
            <h2>时间轴列表</h2>
            <ScrollList />
        </>
    );
};

export default Carousel;