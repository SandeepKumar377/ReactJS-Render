import React, {useState} from 'react'
import { ChildA } from './ContextChildren'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ContextParent = () => {
    const [count, setCount] = useState(0)
    console.log('Context Parent Render')

    return (
        <div>
            <button onClick={() => setCount(count => count + 1)} >Count - {count}</button>
            <CountProvider value={count} >
                <ChildA />
            </CountProvider>
        </div>
    )
}