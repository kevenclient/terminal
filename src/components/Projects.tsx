import React from 'react'
import ProgressBar from './ProgressBar'

const component = () => {
    const projects = [
        {
            name: 'Kakeibo',
            description: `
                This application will help you capture all your transactions
                and provide an accurate picture of your finances. Therefore you can
                easily identify your spending pattern.
            `,
            repository: 'https://github.com/kevenclient/kakeibo',
            progress: 25,
        },
        {
            name: 'Argus',
            description: `
                This application enable you share and collect mobile camera
                input with real-time object detection.
            `,
            repository: 'https://github.com/kevenclient/argus',
            progress: 50,
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
                        <td className='pl-4'>
                            { project.description }
                            <div className='my-4'>
                                <ProgressBar value={project.progress} />
                            </div>
                        </td>
                    </tr>
                }) }
            </tbody>
        </table>
    </React.Fragment>
}

export default component