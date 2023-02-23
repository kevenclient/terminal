import store from './../store'
import command from './command'
import { isEqual, gt } from 'lodash'

import {
    KEYBOARD_EVENT_KEYDOWN,
    KEYDOWN_BACKSPACE,
} from './../actions'

const keydown = (event: KeyboardEvent) => {
    const state = store.getState()

    if (isEqual(event.key, 'Enter')) {
        command.execute(state.command)
        return
    }

    if (isEqual(event.key, 'Backspace')) {
        store.dispatch({
            type: KEYDOWN_BACKSPACE,
        })
        return
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