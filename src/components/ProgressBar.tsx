import React from 'react'
import { range } from 'lodash'

interface IProps {
    value: number
}

const component = (props: IProps) => {
    const segment = 5
    const max = 100 / segment
    const progress = props.value / segment

    const progressBar = range(progress)
        .map(() => '▓')
        .join('')

    const track = range(max - progress)
        .map(() => '░')
        .join('')

    return <React.Fragment>
        [{ progressBar }{ track }]
        <span className='ml-2'>
            { props.value }%
        </span>
    </React.Fragment>
}

export default component