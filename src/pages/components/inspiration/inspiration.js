import React, { Component } from 'react';
import imageBannerInspiration from '../../../images/bannerInspiration.jpg';
import imageBannerMobile from '../../../images/banner-home-mobile.jpg'
import BannerContainer from '../../containers/banner-container';
import MenuInspiration from '../../containers/menu-inspirations'
import ListInspiration from '../../containers/menu-list-inspiration'
import MenuTopics from '../../containers/menu-topics'
import PostsMenu from '../home/post-menu'
import './inspiration.css'

class Inspiration extends Component {

  render(){

    let style
    if (this.props.viewport.viewport.width > 768) {
      style = {
        backgroundImage: 'url('+ imageBannerInspiration +')'
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
          <h1 className="hidden-xs">Inspiration </h1>
          <p>Sources of inspiration related to consciousness</p>
          <a>TELL YOUR STORY</a>
        </BannerContainer>
        <section className='inspiration'>
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

export default Inspiration;
