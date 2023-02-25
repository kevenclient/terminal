import ICommand from './../interfaces/command'
import status from './../enums/status'
import history  from './history'
import Commands from './../components/Commands'
import Error from './../components/Error'
import { isEmpty, get, trim } from 'lodash'
import { renderToString } from 'react-dom/server'

const execute = (command: ICommand) => {
    const input = trim(command.input)

    if (isEmpty(input)) {
        history.push(command)
        return
    }

    const output = get({
        help: renderToString(<Commands/>)
    }, input)

    const error = renderToString(
        <Error input={ input }/>
    )

    command = output ? {
        ...command, output,
        status: status.SUCCEEDED,
    } : {
        ...command,
        output: error,
        status: status.FAILED,
    }

    history.push(command)
}

const events = {
    execute,
}

export default events