import React, { Component } from 'react';
import { Tabs, Tab } from "react-bootstrap";
import imageBannerProfile from '../../../images/bannerProfile.jpg';
import BannerContainer from '../../containers/banner-container';
import PostsMenu from './post-menu-profile'
import Interest from '../../containers/interest'
import './profile.css'

class Profile extends Component {

  render(){
    console.log(this.props);
    let style = {
      backgroundImage: 'url('+ imageBannerProfile +')'
    }
    let user = (this.props.data.categories[0]);
    return(
      <div>
        <BannerContainer style={style}>
          <h1 className="hidden-xs">{user.name}</h1>
          <p>{user.decription}</p>
          <a>TELL YOUR STORY</a>
        </BannerContainer>
        <section className="tabs">
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="ARTICLES">
              <PostsMenu data = {this.props.data}/>
            </Tab>
            <Tab eventKey={2} title="INTEREST">
              <div className='content-interest'>
                <h3>All your interests</h3>
                <Interest data = {this.props.data} />
              </div>
              <div className='content-interest'>
                <h3>Add new interests</h3>
                <Interest data = {this.props.data} />
                <Interest data = {this.props.data} />
              </div>
            </Tab>
            <Tab eventKey={3} title="FOLLOWING">
              Tab 3 content
            </Tab>
          </Tabs>
        </section>
      </div>
    )
  }
}

export default Profile;
