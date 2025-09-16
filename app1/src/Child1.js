import React from 'react'
import Child2 from './Child2'

function Child1(props) {
  return (
    <><Child2 pdata={props.parentData}/></>
  )
}

export default Child1