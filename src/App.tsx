import React from 'react'
import IAppProps from './interfaces/app-props'
import keyboardEvents from './composables/keyboard-events'
import Command from './components/Command'
import History from './components/History'
import Banner from './components/Banner'
import { connect } from 'react-redux'
import { join } from 'lodash'

class App extends React.Component<IAppProps> {
    componentDidMount() {
        document.addEventListener(
            'keydown', keyboardEvents.keydown,
        )
    }

    render() {
        const classes = join([
            'min-h-screen', 'bg-[#1e1e1e]', 'font-mono',
            'leading-8', 'text-[#cccccc]', 'p-5',
        ], ' ')

        const { command, history } = this.props

        return <div className={ classes }>
            <Banner/>
            <span className='block mt-3'>
                Type "help" to list all available commands
            </span>
            <History commands={ history.commands }/>
            <Command input={ command.input }/>
        </div>
    }
}

const mapStateToProps = (state: any) => ({
    ...state,
})

export default connect(mapStateToProps)(App)