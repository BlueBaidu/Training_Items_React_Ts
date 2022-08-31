
import React from 'react'
import TdInput from './Input'
import TdList from './List'
import Test from '../../../src/store/index'
// import { create } from "../../../public/anyshare.sdk.js";
import './index.less'

interface action {
    type: 'INCREMENT' | 'DECREMENT'
}



export default class ReduxExample extends React.Component {

    componentWillMount() {
        // create()
    }

    aa = async () => {
    }

    counter = (state: number, action: action) => {
        if (action.type === 'INCREMENT') {
            return state + 1;
        } else if (action.type === 'DECREMENT') {
            return state - 1;
        }
    }

    spellDamage = (skin: boolean, addition?: number): number => {
        let magicAttack = 0
        magicAttack = addition ?? 0
        if (skin) {
            magicAttack += 10
        }
        return magicAttack
    }

    render(): React.ReactNode {
        const a = this.counter(0, { type: 'INCREMENT' });
        const b = this.counter(0, { type: 'DECREMENT' });
        return (
            <div className='df'>
                {/* <h1>TodoList</h1>
                <TdInput />
                <TdList /> */}
                <div className='bg-border'>
                    <div className='df jc w100 bg-title'>计数器</div>
                    <div className='df jc bg-content'>
                        <Test />
                        <div>法术伤害{this.spellDamage(false, 2)}点</div>
                        <button>测试</button>
                    </div>
                </div>
            </div>
        )
    }
}
