import React, { Component } from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import styled, {css} from 'styled-components';
import Fade from 'react-reveal/Fade';
import './Testimonials.css';


const width = '80vw', height='calc(40px + 45vh + 5vw)';

const Container = styled.div`\
  width: ${width};
`;
const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;

const Dot = styled.span`
  font-size: calc(5px + 1.6vw + 0.5vh);
  cursor: pointer;
  color: #40BFB4;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`;
const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
    </Children>
    <Dots>
      {Array(...Array(total)).map( (val, index) =>
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ ' }
        </Dot>
      )}
    </Dots>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

export default class LandingPage extends Component {


  render() {
    return (
      <div className="TestmonialsWrapper">
      <div className="CarouselWrapper">

      <Carousel defaultWait = {10000}>
        <Fade right>
          <div className="carouselBox">
            <div className="TestimonialParagraph">
              "Riceapps was instrumental to my development not only as a developer, but as a <em> leader </em> — I was able to communicate with clients clearly and thoughtfully, while working <em> efficiently </em> with my team. I emerged with a better understanding of the principles used in software and product management."
            </div>
            <div className="nameWrapper">
              <span id="shryans">— Shryans Goyal</span>
              <span id="teamLead">Team Lead, Class of '21</span>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="carouselBox">
            <div className="TestimonialParagraph">
            "RiceApps is a great <em> learning experience</em>. I was part of a <em> fast-moving </em> team building a real application, which is something different from what I get out of my classes. I was able to apply my skills and expand them more effectively."
            </div>
            <div className="nameWrapper">
              <span id="shryans">— Danny Andreini</span>
              <span id="teamLead">Vice Chair, Class of '20</span>
            </div>
          </div>
        </Fade>

      </Carousel>


      </div>
      </div>
    )

  }

}
