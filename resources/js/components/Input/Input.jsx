import React from "react";

const Input = (props) => {
    const {type, placeholder, name, value, onChange} = props;
    return (
        <>
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} className="w-full p-3 border rounded mb-4" />
        </>
    )
}

export default Input;