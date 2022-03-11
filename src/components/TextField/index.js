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
        <label>{label}</label>
        <input
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {errors && <small style={{color: 'red'}}>{errors}</small>}
        </>
    )
}

export default TextField;