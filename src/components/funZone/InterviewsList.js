import React from 'react'

function InterviewsList(props) {

    return (
        <div className="div-details">
            <article className="detail-article">
                <h4>{props.title}</h4>
                <div>{props.htmlTag}</div>
            </article>
        </div>
    )

}


export default InterviewsList