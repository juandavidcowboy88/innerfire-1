import React, { Component } from 'react';
import imageBannerTopics from '../../../images/bannerTopics.jpg';
import imageBannerMobile from '../../../images/banner-home-mobile.jpg'
import BannerContainer from '../../containers/banner-container';
import MenuInspiration from '../../containers/menu-inspirations'
import ListInspiration from '../../containers/menu-list-inspiration'
import MenuTopics from '../../containers/menu-topics'
import PostsMenu from '../home/post-menu'
import './topics.css'

class Topics extends Component {

  render(){

    let style
    if (this.props.viewport.viewport.width > 768) {
      style = {
        backgroundImage: 'url('+ imageBannerTopics +')'
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
          <h1 className="hidden-xs">Topics</h1>
          <p>Articles related to yoga and consciouness</p>
          <a>TELL YOUR STORY</a>
        </BannerContainer>
        <section className='topics'>
          <MenuInspiration data = {this.props.data}>
            <div className='list-inspiration-self'>
              <ListInspiration data = {this.props.data}/>
            </div>
          </MenuInspiration>
          <PostsMenu data = {this.props.data}/>
        </section>
      </div>
    )
  }
}

export default Topics;
