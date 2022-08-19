import { createStore, combineReducers } from 'redux'

export default function Test() {
    const spellDamage = (skin, addition) => {
        let magicAttack = 0
        magicAttack = addition ?? 0
        if (skin) {
            magicAttack += 10
        }

        return magicAttack
    }

    return (
        <div>法术伤害{spellDamage(1, 3)}点</div>
    );
}

