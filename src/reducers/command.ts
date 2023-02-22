import ICommand from '../interfaces/command'
import { KEYBOARD_EVENT_KEYDOWN } from '../actions'

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
                input: `${state.input}${action.key}`,
            }
        default:
            return state
    }
}