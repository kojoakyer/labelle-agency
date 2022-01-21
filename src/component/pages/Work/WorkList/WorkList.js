import React from 'react'
import './WorkList.css'

function WorkList({title ,id, active, setselected }) {
    return (
        <div className="tag">
            <li className={active ? 'workList active' : 'workList'} onClick={()=>setselected(id)}>{title}</li>
        </div>
    )
}

export default WorkList
