import React from 'react'

const component = () => {
    const projects = [
        {
            name: 'Kakeibo',
            description: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            `,
            repository: 'https://github.com/kevenclient/kakeibo',
            progress: 45,
        },
        {
            name: 'Argus',
            description: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            `,
            repository: 'https://github.com/kevenclient/argus',
            progress: 0,
        },
    ]

    return <React.Fragment>
        <span className='text-[#e3c43a]'>
            Project ideas:
        </span>
        <table className='ml-4 leading-normal'>
            <tbody>
                { projects.map((project, index) => {
                    return <tr key={ index }>
                        <td className='text-[#27ad4f] align-top'>
                            { project.name }
                        </td>
                        <td className='pl-4 pb-2'>
                            { project.description }
                        </td>
                    </tr>
                }) }
            </tbody>
        </table>
    </React.Fragment>
}

export default component