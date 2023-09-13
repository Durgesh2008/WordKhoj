import React from 'react'

const Alert = (props) => {
  return (
    <div className={`alert alert-success d-${props.alert.display} position-absolute`} role="alert">
       {props.alert.msg}
   </div>
  )
}

export default Alert
