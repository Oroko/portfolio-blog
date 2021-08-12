
import { getPosts } from "../actions/index";
import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import BlogIndex from '../components/BlogIndex'
import BlogInput from "../components/BlogInput";





const BlogContainer = () => {
  const posts = useSelector(state => state.postsReducer.posts)
  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(getPosts())
  },[dispatch])
    
  console.log(posts)
  
    return (
      <div>
        <BlogInput />
        <BlogIndex posts={posts} />
      </div>
    );
  }



export default BlogContainer

