import React from 'react'
import IAppProps from './interfaces/app-props'
import keyboardEvents from './composables/keyboard-events'
import Commands from './components/Commands'
import Indicator from './components/Indicator'
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
            <div>
                <Indicator/>
                <span className='font-bold text-[#37c565]'>guest@get-go.dev:</span>
                <span className='font-bold text-[#398fe6]'>~</span>
                <span className='font-bold mr-2'>$</span>
                <span className='break-all'>
                    {terminal.command}
                </span>
            </div>
        </div>
    }
}

const mapStateToProps = (state: any) => ({
    ...state,
})

export default connect(mapStateToProps)(App)