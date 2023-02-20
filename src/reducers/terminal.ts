import ITerminal from './../interfaces/terminal'
import indicator from './../enums/indicator'
import { KEYBOARD_EVENT_KEYDOWN } from './../actions'
import { eq, concat } from 'lodash'

const initState: ITerminal = {
    commands: [],
    command: '',
}

export default function filter(state = initState, action: any) {
    switch (action.type) {
        case KEYBOARD_EVENT_KEYDOWN:
            if(eq(action.key, 'Enter')) {
                const command = {
                    name: state.command,
                    indicator: indicator.SUCCEEDED,
                }

                return {
                    ...state,
                    command: '',
                    commands: concat(
                        state.commands, command,
                    ),
                }
            }

            return {
                ...state,
                command: `${state.command}${action.key}`,
            }
        default:
            return state
    }
}