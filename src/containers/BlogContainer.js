
import { getPosts } from "../actions/index";
import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Blog from '../components/Blog'
import BlogInput from "../components/BlogInput";





const BlogContainer = () => {
  const posts = useSelector(state => state.postsReducer.posts)
  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(getPosts())
  },[dispatch])
    
  
  
    return (
      <div>
        <BlogInput />
        <Blog posts={posts} />
      </div>
    );
  }



export default BlogContainer

