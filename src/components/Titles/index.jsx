import React from "react"

export const Title = (props) => {
    return (

        <div className="Container">
            <h4 className="text-pop-up-top">React Tsx</h4>
            <h2 className="text-pop-up-top">{props.title}</h2>
        </div>

    )
}