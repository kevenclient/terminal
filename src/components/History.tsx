import React from 'react'
import IHistory from './../interfaces/history'
import Command from './Command'

const component = (props: IHistory) => {
    return <React.Fragment>
        { props.commands.map((command, index) => <Command key={ index }
            input={ command.input } status={ command.status }/>) }
    </React.Fragment>
}

export default component