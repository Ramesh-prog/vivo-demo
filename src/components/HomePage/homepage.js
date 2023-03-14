import React from 'react';
import "./homepage.css";
import imgOne from '../../images/image_two.jpg';
import textone from '../../images/text_one.svg';
import imgTwo from '../../images/image_eight.jpg';
import imgThree from '../../images/image_seven.jpg';


import imgFour from '../../images/image_five.jpg';
import imgFive from '../../images/image_one.jpg';
import imgSix from '../../images/image_four.jpg';
import imgSeven from '../../images/image_six.jpg';
import imgEight from '../../images/image_three.jpg';

const Homepage = () => {
  return (
    <div className='whole'>

      <div className='top_div'>
        <div className='top_top'>
          <img className='text_one' src={textone} />
          <h4>Delight Every Moment</h4>
          <button>Buy now</button>
        </div>
        <img className='img_top' src={imgOne} />
      </div>

      <div className='top_second'>
        <div>
          <div className='top_second_one'>
            <div className='second_text'>
              <h4>Y100</h4>
              <h4>It's My Style</h4>
              <button>Buy now</button>
            </div>
            <img className='top_second_img' src={imgTwo} />
          </div>

          <div className='top_second_two'>
            <div className='second_text_two'>
              <h4>READY YOUR VOICES</h4>
              <h4>GET SET TO CONNECT</h4>
              <h4>GO REGISTER FOR CHANGE!</h4>
              <button>Live now</button>
            </div>
            <img className='top_second_img' src={imgThree} />
          </div>


          <div className='top_third'>
            <h1>DISCOVER</h1>
            <div className='top_third_div'>
              <div>
                <img src={imgEight} ></img>
                <img src={imgFive} ></img>
              </div>
              <div>
                <img src={imgSix} ></img>
              </div>
              <div>
                <img src={imgSeven} ></img>
                <img src={imgFour} ></img>
              </div>


            </div>
          </div>



        </div>
      </div>




    </div>
  )
}

export default Homepage;