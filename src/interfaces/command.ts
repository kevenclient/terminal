import indicator from './../enums/indicator'

interface Command {
    name: string
    indicator?: indicator
}

export default Command