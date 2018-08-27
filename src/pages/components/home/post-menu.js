import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class PostsMenuTopics extends Component{
  render(){
    let posts = this.props.data.categories[0].post;
    return(
      <div className='menuTopics'>
        <div className='container-posts'>
          {
            posts.slice(0,2).map((post) => {
              let style = {
                backgroundImage: 'url('+ post.image +')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center',
                backgroundSize:'cover'
              };
              return(
                <Link to='/' key={post.id} className='container-first-post'>
                  <div className='imageContainer'>
                    <div className='img' style={style}></div>
                  </div>
                  <div className='titleContainer'>
                    <h3>{post.title}</h3>
                  </div>
                  <div className='textContainer'>
                    <p className='hidden-xs'>
                      {post.content}
                    </p>
                  </div>
                  <div className="authorContainer hidden-xs">
                    <p>
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </p>
                  </div>
                </Link>
              )
            })
          }
        </div>
        <div className='container-posts'>
          {
            posts.slice(2,5).map((post) => {
              let style = {
                backgroundImage: 'url('+ post.image +')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center',
                backgroundSize:'cover'
              };
              return(
                <div key={post.id} className='container-second-post'>
                  <div className='imageContainer'>
                    <div className='img2' style={style}></div>
                  </div>
                  <div className='titleContainer'>
                    <h3>{post.title}</h3>
                  </div>
                  <div className='textContainer'>
                    <p className='hidden-xs'>
                      {post.content}
                    </p>
                  </div>
                  <div className="authorContainer hidden-xs">
                    <p>
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default PostsMenuTopics;
