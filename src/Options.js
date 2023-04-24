import React from "react";
import './Options.css'

function Options({action, Icons,text}){
    return (
        <div className={`Option ${action && 'Option--action'}`}>
        <Icons />
        <h1>{text}</h1>
        </div>
    )
}

export default Options