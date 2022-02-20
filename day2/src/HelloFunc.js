import React, { useState } from 'react'

function HelloFunc() {
    const [ counter, setCounter ]= useState(0)
    return (
        <div onClick={()=>{setCounter(counter + 1)}}>Hello {counter}</div>
    )
}

export default HelloFunc