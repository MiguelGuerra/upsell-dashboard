import React from 'react'
import './PageTitle.css'

function PageTitle(props) {
    return (
        <div data-testid="page-title" className="title">
            <h1>{props.title}</h1>
            <hr />
        </div>
    )
}

export default PageTitle
