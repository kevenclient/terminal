import React from 'react'
import ICommand from './../interfaces/command'
import Indicator from './Indicator'

const component = (props: ICommand) => {
    return <div>
        <Indicator type={ props.indicator }/>
        <span className='font-bold text-[#37c565]'>guest@get-go.dev:</span>
        <span className='font-bold text-[#398fe6]'>~</span>
        <span className='font-bold mr-2'>$</span>
        <span className='break-all'>
            { props.name }
        </span>
    </div>
}

export default component