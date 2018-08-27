import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import carouselimg from '../../../images/carousel.jpg'
import carouselimg2 from '../../../images/carousel2.jpg'

class CarouselInspiration extends Component {
  render(){
    return(
      <Carousel className='hidden-xs'>
        <Carousel.Item>
          <img alt="" src={carouselimg} />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default CarouselInspiration;
