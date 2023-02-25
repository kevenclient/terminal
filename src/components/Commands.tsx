import React from 'react'

const component = () => {
    const commands = {
        'projects': 'List all project ideas',
        'help': 'List all available commands',
    }

    return <React.Fragment>
        <span className='text-[#e3c43a]'>
            Available commands:
        </span>
        <table className='ml-4 leading-normal'>
            <tbody>
                { Object.entries(commands).map(([command, description]) => {
                    return <tr key={ command }>
                        <td className='text-[#27ad4f] align-top'>
                            { command }
                        </td>
                        <td className='pl-4 pb-2'>
                            { description }
                        </td>
                    </tr>
                }) }
            </tbody>
        </table>
    </React.Fragment>
}

export default component