import ICommand from './../interfaces/command'
import { dropRight, join } from 'lodash'

import {
    KEYBOARD_EVENT_KEYDOWN,
    KEYDOWN_BACKSPACE,
    RESET_COMMAND_STORE,
} from './../actions'

const initState: ICommand = {
    input: '',
}

export default function filter(
    state = initState, action: any,
): ICommand {
    switch (action.type) {
        case KEYBOARD_EVENT_KEYDOWN:
            return {
                ...state,
                input: `${ state.input }${ action.key }`,
            }
        case KEYDOWN_BACKSPACE:
            return {
                ...state, input: join(
                    dropRight(state.input),
                ''),
            }
        case RESET_COMMAND_STORE:
            return initState
        default:
            return state
    }
}