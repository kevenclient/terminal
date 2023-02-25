import React from 'react'

const component = () => {
    const commands = {
        'projects': 'Tortor pretium viverra suspendisse potenti nullam ac tortor',
        'help': 'Sit amet porttitor eget dolor morbi non',
    }

    return <React.Fragment>
        <span className='text-[#e3c43a]'>
            Available commands:
        </span>
        <table className='ml-4'>
            <tbody>
                { Object.entries(commands).map(([command, description]) => {
                    return <tr key={ command }>
                        <td className='text-[#27ad4f] align-top'>
                            { command }
                        </td>
                        <td className='pl-4'>
                            { description }
                        </td>
                    </tr>
                }) }
            </tbody>
        </table>
    </React.Fragment>
}

export default component