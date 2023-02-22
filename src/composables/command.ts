import ICommand from './../interfaces/command'
import store from './../store'
import status from '../enums/status'
import commands from './../json/commands.json'
import { HISTORY_PUSH } from './../actions'
import { get } from 'lodash'

const execute = (command: ICommand) => {
    const output = get(commands, command.input)
    
    command = output ? {
        ...command, output,
        status: status.SUCCEEDED,
    } : {
        ...command,
        output: `Command '${command.input}' not found`,
        status: status.FAILED,
    }

    store.dispatch({
        type: HISTORY_PUSH, command,
    })
}

const events = {
    execute,
}

export default events