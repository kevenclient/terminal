import React from 'react'
import IError from './../interfaces/error'

const component = (props: IError) => {
    return <React.Fragment>
        <span className='bg-[#c92c36] uppercase px-2 py-1 mr-2'>
            Error
        </span>
        Command "{ props.input }" is not defined.
    </React.Fragment>
}

export default component