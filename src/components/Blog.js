
import React from "react";
import {Link} from 'react-router-dom'

const  Blog = ({posts}) => {
 
    return (
      <div>
        <h4>Posts</h4>
        {
          posts && posts.map(post => {
          return (
            <Link key={post.id} to={`/blogPost/${post.id}`}>
              {post.title}
            </Link>
          );
          })
        }
        {/* <ul>{this.props.posts !== undefined ? this.props.posts.map(post => post.attributes['title']) : 'No Data'}</ul> */}
      </div>
    );
  }




export default Blog;
