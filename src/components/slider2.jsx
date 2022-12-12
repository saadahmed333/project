import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import profile from "../assets/profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
    <>
      <div className="mt-[100px] bg-[#F8F9FA]">
        <Slider className="max-w-[90%] sm:max-w-[95%] max-h-auto" ref={c => (this.slider = c)} {...settings}>
          <div className="lg:py-[100px]">
           <div className="flex justify-center">
           <img src={profile} alt=""  className="h-[100px] mr-[20px]"/>
            <div className="w-1/2">
                <p className="text-[20px] sm:text-[30px] font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda est, vitae officiis aliquam impedit quasi at officia laudantium voluptate, sit consequuntur voluptatem sunt adipisci aspernatur, optio nesciunt consectetur odit.</p>
                <p className="mt-[20px]">Leslie Robertson</p>
                <p className="mt-[10px]">Prime Personal Training - Owner</p>    
            </div>
           </div>
          </div>
          <div className="lg:py-[100px]">
           <div className="flex justify-center">
           <img src={profile} alt=""  className="h-[100px] mr-[20px]"/>
            <div className="w-1/2">
                <p className="text-[20px] sm:text-[30px] font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda est, vitae officiis aliquam impedit quasi at officia laudantium voluptate, sit consequuntur voluptatem sunt adipisci aspernatur, optio nesciunt consectetur odit.</p>
                <p className="mt-[20px]">Leslie Robertson</p>
                <p className="mt-[10px]">Prime Personal Training - Owner</p>    
            </div>
           </div>
          </div>
          <div className="lg:py-[100px]">
           <div className="flex justify-center">
           <img src={profile} alt=""  className="h-[100px] mr-[20px]"/>
            <div className="w-1/2">
                <p className="text-[20px] sm:text-[30px] font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda est, vitae officiis aliquam impedit quasi at officia laudantium voluptate, sit consequuntur voluptatem sunt adipisci aspernatur, optio nesciunt consectetur odit.</p>
                <p className="mt-[20px]">Leslie Robertson</p>
                <p className="mt-[10px]">Prime Personal Training - Owner</p>    
            </div>
           </div>
          </div>
          <div className="lg:py-[100px]">
           <div className="flex justify-center">
           <img src={profile} alt=""  className="h-[100px] mr-[20px]"/>
            <div className="w-1/2">
                <p className="text-[20px] sm:text-[30px] font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda est, vitae officiis aliquam impedit quasi at officia laudantium voluptate, sit consequuntur voluptatem sunt adipisci aspernatur, optio nesciunt consectetur odit.</p>
                <p className="mt-[20px]">Leslie Robertson</p>
                <p className="mt-[10px]">Prime Personal Training - Owner</p>    
            </div>
           </div>
          </div>
          <div className="lg:py-[100px]">
           <div className="flex justify-center">
           <img src={profile} alt=""  className="h-[100px] mr-[20px]"/>
            <div className="w-1/2">
                <p className="text-[20px] sm:text-[30px] font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda est, vitae officiis aliquam impedit quasi at officia laudantium voluptate, sit consequuntur voluptatem sunt adipisci aspernatur, optio nesciunt consectetur odit.</p>
                <p className="mt-[20px]">Leslie Robertson</p>
                <p className="mt-[10px]">Prime Personal Training - Owner</p>    
            </div>
           </div>
          </div>
        </Slider>

        <div className="w-[100%] flex justify-center mt-[20px]">
          <div className="w-[70%] flex justify-center lg:justify-start lg:pl-[230px]">
          <button className="button mr-[20px]" onClick={this.previous}>
          <FontAwesomeIcon icon={faArrowLeft} className="text-[25px]" />
          </button>
          <button className="button" onClick={this.next}>
          <FontAwesomeIcon icon={faArrowRight} className="text-[25px]" />
          </button>
          </div>
        </div>
      </div>
      
    </>
    );
  }
}