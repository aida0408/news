import React from "react"

const Button = ({onClick, title, color="green"}) =>{
    return(
        <button className="" onClick={onClick}>
            {title}
        </button>
    )
}

export default Button