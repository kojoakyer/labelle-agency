import React from 'react'
import './TagButton.css'

function TagButton({name,handleSetTag,tagActive}) {
    return (
        <div className='tagContainer'>
            <button className={ `tag ${ tagActive ? 'active' : null}`} onClick={()=>handleSetTag(name)}>{name.toUpperCase()}</button>
        </div>
    )
}

export default TagButton



