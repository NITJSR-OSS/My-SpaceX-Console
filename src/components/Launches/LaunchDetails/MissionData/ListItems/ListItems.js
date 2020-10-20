import React from 'react'

const ListItems = (props) => {
    return (
        <li>
            <span>{props.name}</span>
            <span>{props.value}</span>
        </li>
    )
} ; 

export default ListItems ;
