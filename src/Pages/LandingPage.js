import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import ScrollIntoView from 'react-scroll-into-view';
import LightLogo from '../images/logo_color_light.png'

function LandingPage() {

  // get it to choose logofile based on theme

  const [arrow, setArrow] = useState(true);

  // let arrowHidden = false;
  function hideArrow() {
    if(arrow){
      setArrow(false)
    }
  }

  useEffect(() =>  {
    window.addEventListener("scroll", (e)=>{
      if(window.scrollY > 0.5*window.innerHeight){
        hideArrow();
      }
    });
  }, []);

  let arrow_classes = arrow ? "arrow-open" : "arrow-closed";

  return (
    <div>
      <div id="title">
        <div class = "initialText">
        <div id="ds" >
          {/* <style>@import url('https://fonts.googleapis.com/css?family=Questrial');</style> */}
          DIGITAL SOLUTIONS
        </div>

        <div id="sg">
          <span id="gray">FOR</span> <span id="social">SOCIAL</span> GOOD
        </div>
        </div>

        <div id="riceApps">
          <img src = {LightLogo} alt = "riceapps logo"/>
        </div>
        <div class={arrow_classes} onClick={() => hideArrow()} >
          <ScrollIntoView selector="#whatWeDo">
            <p><i class="arrow down" id = "arrow"></i></p>
          </ScrollIntoView>
        </div>

      </div>

    </div>
  )
}

export default LandingPage;
