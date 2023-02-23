import ICommand from './../interfaces/command'
import status from './../enums/status'
import commands from './../json/commands.json'
import history  from './history'
import { get, trim, isEmpty } from 'lodash'

const execute = (command: ICommand) => {
    const input = trim(command.input)

    if (isEmpty(input)) {
        history.push(command)
        return
    }

    const output = get(commands, input)

    command = output ? {
        ...command, output,
        status: status.SUCCEEDED,
    } : {
        ...command,
        output: `Command '${command.input}' not found`,
        status: status.FAILED,
    }

    history.push(command)
}

const events = {
    execute,
}

export default events