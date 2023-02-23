import IHistory from './../interfaces/history'
import { HISTORY_PUSH } from '../actions'
import { concat } from 'lodash'

const initState: IHistory = {
    commands: [],
}

export default function filter(
    state = initState, action: any,
): IHistory {
    switch (action.type) {
        case HISTORY_PUSH:
            const commands = concat(
                state.commands,
                action.command,
            )

            return {
                ...state, commands,
            }
        default:
            return state
    }
}