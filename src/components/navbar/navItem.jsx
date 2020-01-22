import React from 'react'

export default props => {
    return (
        <li className="nav-item">
            <a className="nav-link js-scroll active" href={props.href}>
                {props.label}
            </a>
        </li>
    )
}
