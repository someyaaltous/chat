import React, { Component } from 'react';
import bubble1 from '../../assest/bubble1.svg';
import bubble2 from '../../assest/bubble2.svg';
import bubble3 from '../../assest/bubble3.svg';
import { Image, Image2, Image3, Div } from './index.style';
class Live extends Component {
  render() {
    return (
      <>
        <Div>
          <div className='image'>
            <Image2 src={bubble2} />
          </div>
          <div className='image1'>
            <Image src={bubble1} />
          </div>
          <div className='image2'>
            <Image3 src={bubble3} />
          </div>
        </Div>
      </>
    );
  }
}

export default Live;
