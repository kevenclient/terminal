import ICommand from './../interfaces/command'

export const KEYBOARD_EVENT_KEYDOWN = 'KEYBOARD_EVENT_KEYDOWN'
export const HISTORY_PUSH = 'HISTORY_PUSH'

export function keydown(key: string) {
    return {
        type: KEYBOARD_EVENT_KEYDOWN, key,
    }
}

export function history(command: ICommand) {
    return {
        type: HISTORY_PUSH, command,
    }
}