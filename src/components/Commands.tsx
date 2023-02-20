import React from 'react'
import ICommand from './../interfaces/command'
import Indicator from './Indicator'

interface IProps {
    commands: ICommand[]
}

const component = (props: IProps) => {
    return <React.Fragment>
        {props.commands.map((cmd, index) => <div key={ index }>
            <Indicator type={ cmd.indicator }/>
            <span className='font-bold text-[#37c565]'>guest@get-go.dev:</span>
            <span className='font-bold text-[#398fe6]'>~</span>
            <span className='font-bold mr-2'>$</span>
            <span className='break-all'>
                { cmd.name }
            </span>
        </div>)}
    </React.Fragment>
}

export default component