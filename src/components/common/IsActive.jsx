import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare , faTimesCircle} from '@fortawesome/free-solid-svg-icons'
function IsActive({active}) {
    return (
        <Fragment>
        { (active) ? <FontAwesomeIcon style={{color:'green'}} icon={faCheckSquare}/> : <FontAwesomeIcon style={{color:'red'}} icon={faTimesCircle}/> }
        </Fragment>
    )
}

export default IsActive
