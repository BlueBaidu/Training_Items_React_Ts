
import React from 'react'
import TdInput from './Input'
import TdList from './List'
import Test from '../../../src/store/index'
import './index.less'

interface action {
    type: 'INCREMENT' | 'DECREMENT'
}
interface Person {
    name: string;
    age: number;
    //自定义key 任意值
    [propname: string]: any;
}

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;//一个函数，参数为number，返回布尔值
};



export default function ReduxExample() {
    function print(person: Person) {
        Object.keys(person).map((keys: string, index: number) => console.log(person[keys])
        )
        // console.log(`人物${person.name}，年龄${person.age}岁`);
    }
    // print({ name: '安琪拉', age: 18, skill: ['攻击', '眩晕', '大招'] });

    //呼叫签名call-signatures
    // const fn = (n: number) => {
    //     console.log(n);
    //     return true
    // }
    // fn.description = 'hello'
    function doSomething(fn: DescribableFunction) {
        console.log(fn.description + " returned " + fn(6));
    }
    // console.log('fn', fn);
    // doSomething(fn)

    //箭头函数使用泛型的方式
    const transform = <Type extends {}>(arr:Type[]):Type | undefined => {
        return arr[0]
    }

    const counter = (state: number, action: action) => {
        if (action.type === 'INCREMENT') {
            return state + 1;
        } else if (action.type === 'DECREMENT') {
            return state - 1;
        }
    }

    const a = counter(0, { type: 'INCREMENT' });
    const b = counter(0, { type: 'DECREMENT' });
    console.log(a, b);

    const spellDamage = (skin: boolean, addition?: number): number => {
        let magicAttack = 0
        magicAttack = addition ?? 0
        if (skin) {
            magicAttack += 10
        }
        return magicAttack
    }

    return (
        <div className='df'>
            {/* <h1>TodoList</h1>
            <TdInput />
            <TdList /> */}
            <div className='bg-border'>
                <div className='df jc w100 bg-title'>计数器</div>
                <div className='df jc bg-content'>
                    <Test />
                    <div>法术伤害{spellDamage(false, 2)}点</div>
                </div>
            </div>
        </div>
    )
}
