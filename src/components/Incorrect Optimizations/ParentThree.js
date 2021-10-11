import React, { useState } from 'react'
import { MemoizedChildFour } from './ChildFour'
// import { MemoizedChildThree } from './ChildThree'

export const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Sandeep')
    console.log('ParentThree render')
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={()=>setName('Kumar')} >Change Name</button>
            
            <MemoizedChildFour name={name} />

            {/* <MemoizedChildThree name={name} >
                <strong>Hello</strong>
            </MemoizedChildThree> */}
        </div>
    )
}


