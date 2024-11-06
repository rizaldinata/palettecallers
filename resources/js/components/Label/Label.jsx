import React from "react";

const Label = (props) => {
    const {htmlFor, children} = props;
    return (
        <>
            <label htmlFor={htmlFor} className="block text-lg font-medium mb-2">{children}</label>
        </>
    )
}

export default Label;