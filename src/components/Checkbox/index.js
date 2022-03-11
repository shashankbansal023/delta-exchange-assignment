import React from 'react'

const Checkbox=({
    onChange=()=>{},
    checked="",
    label="",
    name="",
    heading=""
})=>{
    return (
        <>
            <input type="checkbox"
             name={name} 
             checked={checked}
             onChange={(e)=>onChange(e,heading)}></input>
            <label htmlFor={name}>{label}</label>
        </>
    )
}

export default Checkbox;