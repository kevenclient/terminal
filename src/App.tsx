import React from 'react'
import Decoration from './components/Decoration'
import indicator from './enums/indicator'

function App() {
    return (
        <div className='min-h-screen bg-[#1e1e1e] text-[#cccccc]'>
            <div>
                <Decoration indicator={indicator.SUCCEEDED}/>
                <span className='font-mono font-bold text-[#37c565]'>guest@get-go.dev:</span>
                <span className='font-mono font-bold text-[#398fe6]'>~</span>
                <span className='font-mono font-bold'>$ whois</span>
            </div>
            <div>
                <Decoration indicator={indicator.FAILED}/>
                <span className='font-mono font-bold text-[#37c565]'>guest@get-go.dev:</span>
                <span className='font-mono font-bold text-[#398fe6]'>~</span>
                <span className='font-mono font-bold'>$ whois</span>
            </div>
            <div>
                <Decoration/>
                <span className='font-mono font-bold text-[#37c565]'>guest@get-go.dev:</span>
                <span className='font-mono font-bold text-[#398fe6]'>~</span>
                <span className='font-mono font-bold'>$ whois</span>
            </div>
        </div>
    )
}

export default App