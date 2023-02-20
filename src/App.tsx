import React from 'react'
import IAppProps from './interfaces/app-props'
import keyboardEvents from './composables/keyboard-events'
import Commands from './components/Commands'
import Command from './components/Command'
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
            'min-h-screen', 'font-mono', 'bg-[#1e1e1e]',
            'text-[#cccccc]', 'p-5',
        ], ' ')

        const { terminal } = this.props

        return <div className={classes}>
            <Commands commands={terminal.commands}/>
            <Command name={terminal.command}/>
        </div>
    }
}

const mapStateToProps = (state: any) => ({
    ...state,
})

export default connect(mapStateToProps)(App)