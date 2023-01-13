import React from "react"

import './Titles.css'

export const Title = (props) => {
    return (

        <div className="Container title">
            <h4 className="text-pop-up-top">React Tsx</h4>
            <h2 className="text-pop-up-top">{props.title}</h2>
        </div>

    )
}