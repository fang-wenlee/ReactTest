import React,{Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ScrollLock from 'react-scroll-lock-component';


export default class SecondComponent extends Component {
  state = { show: false}  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      fade:true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      afterChange: ( index => index == 3  ? 
        this.setState( {show: !this.state.show }) :  ""   )
    };


    if ( this.state.show === false ){ 
    return (

    <ScrollLock>
      <div className="blueSection"  >      
        <Slider {...settings}>       
           <div>
            <h2>Focus on impact</h2>
          </div>
          <div>
            <h2>Be open</h2>
          </div>
          <div>
            <h2>Be bold</h2>
          </div>
          <div>
            <h2>Build social value</h2>
          </div>
        </Slider>
      </div>
      </ScrollLock>
    );}

    return (
            
          <div className="blueSection"  >
              
              <Slider {...settings}>
                <div>
                  <h2>Focus on impact</h2>
                </div>
                <div>
                  <h2>Be open</h2>
                </div>
                <div>
                  <h2>Be bold</h2>
                </div>
                <div>
                  <h2>Build social value</h2>
                </div>
                
              </Slider>
        </div>
    ) 


  }
}