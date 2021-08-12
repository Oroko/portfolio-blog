import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getPost} from '../actions/index'


function BlogPost() {

  const params = useParams()
  const post = useSelector(state => state.postsReducer.post)
  const dispatch = useDispatch() 

  useEffect(() => {
    dispatch(getPost(params.id))
  },[dispatch, params])
  return (
    <div>
      {post && post.content}
    </div>
  )
}

export default BlogPost
