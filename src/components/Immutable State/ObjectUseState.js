import React, { useState } from 'react'

const initState = {
    fname: 'Sandeep',
    lname: 'Kumar'
}
export const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)

    const changeName = () => {
        // person.fname = 'Deep'
        // person.lname = 'Sendy'
        // setPerson(person)
        const newPerson = {...person}
        newPerson.fname='Sendy'
        newPerson.lname='Deep'
        setPerson(newPerson)
    }
    console.log('Object State Render')
    return (
        <div>
            <button onClick={changeName}>{person.fname}{person.lname}</button>
        </div>
    )
}
