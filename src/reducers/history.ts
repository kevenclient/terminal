import IHistory from './../interfaces/history'
import { HISTORY_PUSH, HISTORY_CLEAR } from './../actions'
import { concat } from 'lodash'

const initState: IHistory = {
    commands: [],
}

export default function filter(
    state = initState, action: any,
): IHistory {
    switch (action.type) {
        case HISTORY_PUSH:
            return {
                ...state,
                commands: concat(
                    state.commands,
                    action.command,
                ),
            }
        case HISTORY_CLEAR:
            return initState
        default:
            return state
    }
}