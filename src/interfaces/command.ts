import status from './../enums/status'

interface Command {
    input: string
    output?: string
    status?: status
}

export default Command