import React from 'react'
import Refresh from './Refresh'

export default function Gif ({id, url}){
    return (
        <>
        <img src={url} alt={id}/>
        <Refresh/>
        </>
    )
}

