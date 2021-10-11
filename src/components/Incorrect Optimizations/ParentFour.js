import React, { useState } from 'react'
import { MemoizedChildFive } from './ChildFive'

export const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Sandeep')

    const person ={
        fname:'John',
        lname:'Cena'
    }
    const handleClick=()=>{}

    console.log('ParentFour render')
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={()=>setName('Kumar')} >Change Name</button>
            
            <MemoizedChildFive name={name} person={person}  handleClick={handleClick}/>

        </div>
    )
}


