import ICommand from './../interfaces/command'
import store from './../store'

import {
    HISTORY_PUSH,
    RESET_COMMAND_STORE,
} from './../actions'

const push = (command: ICommand) => {
    store.dispatch({ type: HISTORY_PUSH, command })
    store.dispatch({ type: RESET_COMMAND_STORE })
}

const events = {
    push,
}

export default events