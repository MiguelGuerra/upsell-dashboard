import React from 'react'
import './PageTitle.css'

function PageTitle(props) {
    return (
        <div className="title">
            <h1>{props.title}</h1>
            <hr />
        </div>
    )
}

export default PageTitle
