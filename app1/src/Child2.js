import React from 'react'
import Child3 from './Child3'

function Child2(props) {
  return (
    <Child3 parentdata={props.pdata}/>
  )
}

export default Child2