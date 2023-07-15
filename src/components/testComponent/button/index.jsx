import React from "react";

const Button = ({ onClick, children }) => {
    const handleClick = () => {
        onClick("hey clicked")
    }
    return (
        <button onClick={handleClick}>{children}</button>
    )
}

export default Button;