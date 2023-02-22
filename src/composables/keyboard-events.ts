import store from './../store'
import command from './command'
import { KEYBOARD_EVENT_KEYDOWN } from './../actions'
import { isEqual, gt } from 'lodash'

const keydown = (event: KeyboardEvent) => {
    const state = store.getState()

    if (isEqual(event.key, 'Enter')) {
        command.execute(state.command)
    }

    if (gt(event.key.length, 1)) {
        return
    }

    store.dispatch({
        type: KEYBOARD_EVENT_KEYDOWN,
        key: event.key,
    })
}

const events = {
    keydown,
}

export default events