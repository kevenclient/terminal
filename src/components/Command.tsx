import React from 'react'
import ICommand from './../interfaces/command'
import Indicator from './Indicator'
import { isEmpty } from 'lodash'

const component = (props: ICommand) => {
    const output = {
        __html: props.output as string,
    }

    return <React.Fragment>
        <div className='font-bold'>
            <Indicator type={ props.status }/>
            <span className='text-[#37c565]'>guest@get-go.dev:</span>
            <span className='text-[#398fe6]'>~</span>
            <span className='mr-2'>$</span>
            <span className='font-normal break-all'>
                { props.input }
            </span>
            { isEmpty(props.status) &&
                <span>█</span>
            }
        </div>
        <div className='ml-5 mt-1' dangerouslySetInnerHTML={ output }/>
    </React.Fragment>
}

export default component