import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import imageBannerHome from '../../../images/banner-home.jpg';
import imageBannerMobile from '../../../images/banner-home-mobile.jpg'
import BannerContainer from '../../containers/banner-container';
import MenuTopics from '../../containers/menu-topics'
import PostsMenu from './post-menu'
import Carousel from './carousel'
import MenuInspiration from '../../containers/menu-inspirations'
import BannerConsciousness from '../../containers/banner-consciousness'
import './home.css'

class Home extends Component {

  render(){

    let style
    if (this.props.viewport.viewport.width > 768) {
      style = {
        backgroundImage: 'url('+ imageBannerHome +')'
      };
    }
    else {
      style = {
        backgroundImage: 'url('+ imageBannerMobile +')'
      };
    }
    return(
      <div>
        <BannerContainer style={style}>
          <h1 className="hidden-xs">BLOG/FORUM</h1>
          <p>& social network where consciousness is the context</p>
          <a>TELL YOUR STORY</a>
        </BannerContainer>
        <section className="section-posts">
          <MenuTopics data = {this.props.data} />
          <PostsMenu data = {this.props.data}/>
          <div className = "button-topics">
            <Link to='/topics'> EXPLORE TOPICS </Link>
          </div>
        </section>
        <section className="section-carousel">
          <div className='title-container'>
            <h1>INSPIRATION</h1>
            <p>Explore our sources of inspiration related to consciousness</p>
          </div>
          <Carousel/>
          <MenuInspiration data = {this.props.data}/>
        </section>
        <BannerConsciousness/>
      </div>
    )
  }
}

export default Home;
