import React from "react";

const Button = (props) => {
    const {type, children} = props;
    return (
        <>
            <button type={type} className="w-full p-3 bg-black text-white rounded">{children}</button>
        </>
    )
}

export default Button;