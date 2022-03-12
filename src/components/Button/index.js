import React from 'react'

function Button({
    onClick=()=>{},
    onSubmit=()=>{},
    style={},
    children="",
    type="text"
}){
    return (
        <button style={style} type={type} onClick={onClick} onSubmit={onSubmit}>{children}</button>
    )
}

export default Button;