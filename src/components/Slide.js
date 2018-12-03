import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://dmi3w0goirzgw.cloudfront.net/gallery-images/1600/360000/500/360598.jpg',
    altText: 'Slide 1',
    caption: 'M2',
    header: 'BMW'
  },
  {
    src: 'https://dmi3w0goirzgw.cloudfront.net/gallery-images/1600/389000/300/389311.jpg',
    altText: 'Slide 2',
    caption: '911 GT3',
    header: 'Porsche'
  },
  {
    src: 'https://dmi3w0goirzgw.cloudfront.net/gallery-images/1600/348000/400/348410.jpg',
    altText: 'Slide 3',
    caption: '570 GT',
    header: 'McLaren'
  }
];

const Example = () => <UncontrolledCarousel
  style={{
    maxWidth: '600px',
    maxHeight: '1000px',
    width: 'auto',
    height: 'auto',
    marginBottom: 10
  }} 
  items={items} />;

export default Example;