export const KEYBOARD_EVENT_KEYDOWN = 'KEYBOARD_EVENT_KEYDOWN'

export function keydown(key: string) {
    return {
        type: KEYBOARD_EVENT_KEYDOWN, key,
    }
}