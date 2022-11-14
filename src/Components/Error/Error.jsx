import React from 'react'

export default function Error(props) {
    return (
        <div style={{height: '50px'}}>
        {props.error &&<div className={`alert alert-${props.error.type} alert-dismissible fade show`} role="alert">
            <strong>{props.error.type}</strong>: {props.error.msg}
        </div>}
        </div>
    )
}