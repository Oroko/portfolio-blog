
import React from "react";

const  Blog = ({posts}) => {
 
    return (
      <div>
        <h4>Posts</h4>
        {posts && posts.map(post => <li key={post.id}>{post.title}</li>)}
        {/* <ul>{this.props.posts !== undefined ? this.props.posts.map(post => post.attributes['title']) : 'No Data'}</ul> */}
      </div>
    );
  }




export default Blog;
