import React from 'react'
import ICommand from './../interfaces/command'
import Indicator from './Indicator'

const component = (props: ICommand) => {
    return <React.Fragment>
        <div className='font-bold'>
            <Indicator type={ props.status }/>
            <span className='leading-8 text-[#37c565]'>guest@get-go.dev:</span>
            <span className='leading-8 text-[#398fe6]'>~</span>
            <span className='leading-8 mr-2'>$</span>
            <span className='leading-8 font-normal break-all'>
                { props.input }
            </span>
        </div>
        <div className='ml-5 my-2'>
            { props.output }
        </div>
    </React.Fragment>
}

export default component