import React from 'react'
import ICommand from './../interfaces/command'
import Command from './Command'

interface IProps {
    commands: ICommand[]
}

const component = (props: IProps) => {
    return <React.Fragment>
        {props.commands.map((command, index) => <Command key={ index }
            name={ command.name } indicator={ command.indicator }/>)}
    </React.Fragment>
}

export default component