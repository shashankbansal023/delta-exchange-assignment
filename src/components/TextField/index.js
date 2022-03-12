import React from 'react'

const TextField=({
    value="",
    onChange=()=>{},
    name="",
    label="",
    errors="",
    placeholder=""
})=>{

    return (
        <>
            <label style={{fontSize:'20px'}}>{label}</label>
            <input
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            />
            {errors && <small style={{color: 'red',fontSize:'15px'}}>{errors}</small>}
        </>
        
    )
}

export default TextField;