import React from 'react'
import ICommand from './../interfaces/command'
import Indicator from './Indicator'

const component = (props: ICommand) => {
    return <div className='font-bold'>
        <Indicator type={ props.indicator }/>
        <span className='leading-8 text-[#37c565]'>guest@get-go.dev:</span>
        <span className='leading-8 text-[#398fe6]'>~</span>
        <span className='leading-8 mr-2'>$</span>
        <span className='leading-8 font-normal break-all'>
            { props.name }
        </span>
    </div>
}

export default component