import React from 'react'
import decoration from './../interfaces/decoration'
import indicator from './../enums/indicator'
import { concat, join } from 'lodash'

function Decoration(prop: decoration) {
    let classes = [
        'inline-block', 'w-5', 'text-center', 'font-bold',
    ]

    let symbol;

    switch (prop.indicator) {
        case indicator.SUCCEEDED:
            symbol = '●'
            classes = concat(classes, [
                'text-[#2882a6]', 'text-[18px]',
            ])
            break
        case indicator.FAILED:
            symbol = '⊗'
            classes = concat(classes, [
                'text-[#e7474f]', 'text-[12px]',
            ])
            break
        default:
            symbol = '○'
            classes = concat(classes, [
                'text-[#555555]', 'text-[12px]',
            ])
            break
    }

    return <span className={join(classes, ' ')}>
        { symbol }
    </span>
}

export default Decoration