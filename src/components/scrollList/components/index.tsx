import { Button, Timeline } from "antd"
// import styles from "./index.module.less"
import "./index.less"

// 时间轴滚动列表
const ScrollList = () => {
    const data = [
        {
            'arrivalTime': "2021-02-07T00:59:42.000+0000",
            'disinfectResult': "已消杀",
            'driver': "李胜、梅林",
            'licensePlateNumber': "鄂AJ8832、鄂AJ7851",
            'nodeName': "口岸通关",
            'nucleicResult': "已检测",
            'receivingCompany': "长江存储科技有限责任公司",
            'storeAddress': "湖北省武汉市东西湖区惠安大道铁路中心站",
            'traceCode': "42202102071010101",
            'traceCodeGrantTime': "2021-02-07T00:59:42.000+0000"
        },
        {
            'arrivalTime': "2021-02-07T00:59:42.000+0000",
            'disinfectResult': "未消杀",
            'driver': "刘海乔、李军、胡松",
            'licensePlateNumber': "鄂AZ2375",
            'nodeName': "运输及库存",
            'nucleicResult': "未检测",
            'receivingCompany': "武汉华星光电技术有限公司",
            'storeAddress': "湖北省孝感市孝南区",
            'traceCode': "42202102071010101",
            'traceCodeGrantTime': "2021-02-07T00:59:42.000+0000"
        },
        {
            'arrivalTime': "2021-02-07T00:59:42.000+0000",
            'disinfectResult': "已消杀",
            'driver': "刘海乔、李军、胡松",
            'licensePlateNumber': "鄂AZ4575",
            'nodeName': "运输及库存",
            'nucleicResult': "未检测",
            'receivingCompany': "武汉华星光电技术有限公司",
            'storeAddress': "湖北省孝感市孝南区",
            'traceCode': "42202102071010101",
            'traceCodeGrantTime': "2021-02-07T00:59:42.000+0000"
        },
        {
            'arrivalTime': "2021-02-07T00:59:42.000+0000",
            'disinfectResult': "未消杀",
            'driver': "李承、刘海洋",
            'licensePlateNumber': "鄂AJ2332、鄂AJ4641",
            'nodeName': "销售终端",
            'nucleicResult': "未检测",
            'receivingCompany': "武汉华星光电技术有限公司",
            'storeAddress': "湖北省孝感市孝南区",
            'traceCode': "42202102071010101",
            'traceCodeGrantTime': "2021-02-07T00:59:42.000+0000"
        }
    ]

    const renderStyle = (key: any) => {
        let color = "#A6FFB3"
        if (["未消杀", "未检测"].includes(key)) color = "#FF6767"
        return color
    }

    const renderItem = (item: any, index: any) => {
        return (
            <Timeline.Item key={index}>
                <div className="hj">{item?.nodeName ?? ""}</div>
                <div style={{ color: "#E3F2FE", padding: " 0 20px", textAlign: "left" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
                        <div>
                            <span className="timeline-span">消杀情况</span>
                            <span className="res" style={{ color: renderStyle(item?.disinfectResult) }}>
                                {item?.disinfectResult ?? ""}
                            </span>
                        </div>
                        <div>
                            <span className="timeline-span">核酸结果</span>
                            <span className="res" style={{ color: renderStyle(item?.nucleicResult) }}>
                                {item?.nucleicResult ?? ""}
                            </span>
                        </div>
                    </div>
                    <div>
                        <div style={{ margin: "10px 0" }}>
                            <span className="timeline-span">运输司机</span>
                            <span className="res">{item?.driver ?? ""}</span>
                        </div>
                        <div style={{ margin: "10px 0" }}>
                            <span className="timeline-span">车牌号</span>
                            <span className="res">{item?.licensePlateNumber ?? ""}</span>
                        </div>
                        <div style={{ margin: "10px 0" }}>
                            <span className="timeline-span">存放地址</span>
                            <span className="res">{item?.storeAddress ?? ""}</span>
                        </div>
                        <div style={{ margin: "10px 0" }}>
                            <span className="timeline-span">收货企业</span>
                            <span className="res">{item?.receivingCompany ?? ""}</span>
                        </div>
                    </div>
                </div>
            </Timeline.Item>
        )
    }

    return (
        <>
            <div className="layout">
                <div>
                    <div style={{ height: '692.52px', overflow: 'hidden' }}>
                        <Timeline className={(data.length > 3 ? "container-item" : '')} style={{ animationDuration: (data.length * 1.916 + 's') }}>
                            {data.map((item, index) => renderItem(item, index))}
                            {data.length > 3 ? data.map((item, index) => renderItem(item, index)) : null}
                            {data.length <= 3 && <Timeline.Item></Timeline.Item>}
                        </Timeline>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScrollList