import React from 'react'
import testAction from '../actions/test'
import {useSelector} from 'react-redux'

function Blog() {
  const test = useSelector(state => state.testReducer)
  return (
    <div>
      {test}
    </div>
  )
}

export default Blog
