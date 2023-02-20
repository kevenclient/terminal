import React from 'react'
import indicator from './../enums/indicator'
import { concat, join } from 'lodash'

interface IProps {
    type?: indicator
}

const component = (props: IProps) => {
    let classes = [
        'inline-flex', 'items-center', 'justify-center',
        'font-bold', 'font-sans', 'w-5',
    ]

    let symbol

    switch (props.type) {
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

export default component