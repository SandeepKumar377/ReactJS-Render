import React, { useState } from 'react'

const initState = ['Bruce', 'Wayne']

export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)

    const handleClick = ()=>{
        // persons.push('Sendy')
        // persons.push('Kumar')
        // setPersons(persons)
        const newPersons =[...persons]
        newPersons.push('Sendy')
        newPersons.push('Kumar')
        setPersons(newPersons)
    }
    console.log('Array State Render')
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {
                persons.map(person=>(
                    <div key={person}>
                        {person}
                    </div>
                ))
            }
        </div>
    )
}
