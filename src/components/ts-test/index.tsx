import { Divider } from "antd"
import React, { useEffect, useState } from "react"
import "./index.less"



const TsTest = () => {
    const EnumFunction = () => {
        enum Week {
            Sunday,
            Monday,
            Tuseday,
            Wedensday,
            Thursday,
            Friday,
            Saturday
        }
        const [selsectDay, setDay] = useState<number>()
        const [selectDay1, setDay1] = useState<string>()
        useEffect(() => {
            setDay(Week.Monday)
        }, [Week.Monday]);

        const onClickEnum = () => {
            setDay1(Week[5])
        }

        return <div>
            {/* 枚举测试 */}
            <button onClick={() => onClickEnum()}>枚举测试</button>
            <div>{selsectDay}</div>
            {selectDay1 && <div>{selectDay1}</div>}
        </div>
    }

    return <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div>
            <EnumFunction></EnumFunction>
            {/* css样式挑战 */}
            <div className="container">
                <div className="a">
                    <p></p>
                </div>
            </div>
            {/* 移动动画 */}
            <div style={{ position: 'relative', height: '100px', width: '600px', backgroundColor: '#1a4341' }}>
                <div className="box"></div>
            </div>
        </div>
        {/* 线性渐变 */}
        <div className="container">
            <div className="b"></div>
        </div>
    </div>
}

export default TsTest