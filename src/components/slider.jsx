// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import sliderImage from "../assets/sliderImage.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default class Sliders extends Component {
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
  slidesToScroll: 1,
  arrows: false
};
  return (
      <section className="text-gray-600 body-font px-[20px] sm:px-[0px]">
        <div className="container lg:px-[150px] py-24 mx-auto">
          <div className="flex flex-col w-full  mb-12">
            <h1 className="sm:text-[50px]  md:leading-[80px] md:text-[65px]  text-[35px] font-bold title-font lg:w-[800px] mb-4 text-gray-900">
             Experience excellence with our recent projects
            </h1>
            <p className="lg:w-[800px] text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut exercitationem officia, optio modi nisi. Nam repellat similique eveniet, rem excepturi placeat impedit et, omnis explicabo ad, magnam fugiat accusamus.</p>
          </div>
        </div>
        
        <div className=" bg-[#283245] mb-[50px] pt-[10px]">
        <div className="w-[100%] flex justify-center mt-[20px] mb-[20px]">
          <div className="w-[70%] flex justify-center lg:justify-start lg:pl-[230px]">
          <button className="button mr-[20px]" onClick={this.previous}>
          <FontAwesomeIcon icon={faArrowLeft} className="text-[25px]" />
          </button>
          <button className="button" onClick={this.next}>
          <FontAwesomeIcon icon={faArrowRight} className="text-[25px]" />
          </button>
          </div>
        </div>
        <Slider className="max-w-[90%] sm:max-w-[95%] max-h-auto"  ref={c => (this.slider = c)} {...settings}>
          <div className="lg:py-[100px]">
           <div className="flex md:justify-between justify-center flex-col md:flex-row">
            <div className="flex md:w-1/2 w-full  md:justify-end justify-center mb-[30px] md:mb-[0px]">
            <div className="md:w-1/2 w-full  flex text-white flex-col">
                <p className="text-[30px] sm:text-[50px] font-bold">1</p>
                <p className="mt-[20px] text-[20px] sm:text-[50px] font-bold">Ballast</p>
                <p className="text-[20px] sm:text-[50px] font-bold">House</p>
                <p className="mt-[10px]  font-bold">Website design & development</p>    
                <p className="mt-[10px] lg:w-[300px] xxl:w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam dolorem, delectus eos eum consectetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis tempora, ad accusantium sunt labore</p>    
            </div>
            </div>
           <div className="md:w-1/2 w-full  flex justify-center items-end">
           <img src={sliderImage} alt=""  className="h-[400px]"/>
           </div>
           </div>
          </div>
          <div className="lg:py-[100px]">
           <div className="flex md:justify-between justify-center flex-col md:flex-row">
            <div className="flex md:w-1/2 w-full  md:justify-end justify-center mb-[30px] md:mb-[0px]">
            <div className="md:w-1/2 w-full  flex text-white flex-col">
                <p className="text-[30px] sm:text-[50px] font-bold">1</p>
                <p className="mt-[20px] text-[20px] sm:text-[50px] font-bold">Ballast</p>
                <p className="text-[20px] sm:text-[50px] font-bold">House</p>
                <p className="mt-[10px]  font-bold">Website design & development</p>    
                <p className="mt-[10px] lg:w-[300px] xxl:w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam dolorem, delectus eos eum consectetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis tempora, ad accusantium sunt labore</p>    
            </div>
            </div>
           <div className="md:w-1/2 w-full  flex justify-center">
           <img src={sliderImage} alt=""  className="h-[400px]"/>
           </div>
           </div>
          </div>
          <div className="lg:py-[100px]">
           <div className="flex md:justify-between justify-center flex-col md:flex-row">
            <div className="flex md:w-1/2 w-full  md:justify-end justify-center mb-[30px] md:mb-[0px]">
            <div className="md:w-1/2 w-full  flex text-white flex-col">
                <p className="text-[30px] sm:text-[50px] font-bold">1</p>
                <p className="mt-[20px] text-[20px] sm:text-[50px] font-bold">Ballast</p>
                <p className="text-[20px] sm:text-[50px] font-bold">House</p>
                <p className="mt-[10px]  font-bold">Website design & development</p>    
                <p className="mt-[10px] lg:w-[300px] xxl:w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam dolorem, delectus eos eum consectetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis tempora, ad accusantium sunt labore</p>    
            </div>
            </div>
           <div className="md:w-1/2 w-full  flex justify-center">
           <img src={sliderImage} alt=""  className="h-[400px]"/>
           </div>
           </div>
          </div>
          <div className="lg:py-[100px]">
           <div className="flex md:justify-between justify-center flex-col md:flex-row">
            <div className="flex md:w-1/2 w-full  md:justify-end justify-center mb-[30px] md:mb-[0px]">
            <div className="md:w-1/2 w-full  flex text-white flex-col">
                <p className="text-[30px] sm:text-[50px] font-bold">1</p>
                <p className="mt-[20px] text-[20px] sm:text-[50px] font-bold">Ballast</p>
                <p className="text-[20px] sm:text-[50px] font-bold">House</p>
                <p className="mt-[10px]  font-bold">Website design & development</p>    
                <p className="mt-[10px] lg:w-[300px] xxl:w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam dolorem, delectus eos eum consectetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis tempora, ad accusantium sunt labore</p>    
            </div>
            </div>
           <div className="md:w-1/2 w-full  flex justify-center">
           <img src={sliderImage} alt=""  className="h-[400px]"/>
           </div>
           </div>
          </div>
          <div className="lg:py-[100px]">
           <div className="flex md:justify-between justify-center flex-col md:flex-row">
            <div className="flex md:w-1/2 w-full  md:justify-end justify-center mb-[30px] md:mb-[0px]">
            <div className="md:w-1/2 w-full  flex text-white flex-col">
                <p className="text-[30px] sm:text-[50px] font-bold">1</p>
                <p className="mt-[20px] text-[20px] sm:text-[50px] font-bold">Ballast</p>
                <p className="text-[20px] sm:text-[50px] font-bold">House</p>
                <p className="mt-[10px]  font-bold">Website design & development</p>    
                <p className="mt-[10px] lg:w-[300px] xxl:w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam dolorem, delectus eos eum consectetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis tempora, ad accusantium sunt labore</p>    
            </div>
            </div>
           <div className="md:w-1/2 w-full  flex justify-center">
           <img src={sliderImage} alt=""  className="h-[400px]"/>
           </div>
           </div>
          </div>
          <div className="lg:py-[100px]">
           <div className="flex md:justify-between justify-center flex-col md:flex-row">
            <div className="flex md:w-1/2 w-full  md:justify-end justify-center mb-[30px] md:mb-[0px]">
            <div className="md:w-1/2 w-full  flex text-white flex-col">
                <p className="text-[30px] sm:text-[50px] font-bold">1</p>
                <p className="mt-[20px] text-[20px] sm:text-[50px] font-bold">Ballast</p>
                <p className="text-[20px] sm:text-[50px] font-bold">House</p>
                <p className="mt-[10px]  font-bold">Website design & development</p>    
                <p className="mt-[10px] lg:w-[300px] xxl:w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam dolorem, delectus eos eum consectetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis tempora, ad accusantium sunt labore</p>    
            </div>
            </div>
           <div className="md:w-1/2 w-full  flex justify-center">
           <img src={sliderImage} alt=""  className="h-[400px]"/>
           </div>
           </div>
          </div>
        </Slider>

       
      </div>
      
      </section>
  );
}
}
 