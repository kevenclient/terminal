import React from 'react'
import IError from './../interfaces/error'

const component = (props: IError) => {
    return <div className='break-all'>
        <span className='bg-[#c92c36] uppercase px-2 py-1 mr-2'>
            Error
        </span>
        Command "{ props.input }" is not defined.
    </div>
}

export default component