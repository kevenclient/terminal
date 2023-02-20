import store from './../store'
import { KEYBOARD_EVENT_KEYDOWN } from './../actions'

const keydown = (event: KeyboardEvent) => {
    store.dispatch({
        type: KEYBOARD_EVENT_KEYDOWN, key: event.key,
    })
}

const events = {
    keydown,
}

export default events