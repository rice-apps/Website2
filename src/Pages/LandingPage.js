import React, { Component } from 'react';
import './LandingPage.css';
import ScrollIntoView from 'react-scroll-into-view';


export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrow: true,
    };
  }
  let arrowHidden = false;
  hideArrow() {
    console.log('hidden');
    // if (this.state({arrow:true})){
      this.setState({arrow: false})
    // }
  }
  componentDidMount(){
    window.addEventListener("scroll", function(e){
      if(window.scrollY > 105){
        console.log("trigger");
        this.hideArrow();
      }
      
    });
  }
  
  render() {
    if(window.scrollY>=45){
      console.log("test");
    }
    let arrow_classes = this.state.arrow
    ? "arrow-open" : "arrow-closed";

    return (
      <div>
        <div id="title">
          <div id="ds" class="initialText">
            {/* <style>@import url('https://fonts.googleapis.com/css?family=Questrial');</style> */}
            DIGITAL SOLUTIONS
          </div>

          <div id="sg" class="initialText">
            <span id="gray">FOR</span> <span id="social">SOCIAL</span> GOOD
         </div>

          <div id="riceApps">
            riceApps
          </div>
          {/* onClick={()=> style="visibility: hidden"} */}
          <div id="arrow" class={arrow_classes} onClick={() => this.hideArrow()} >
            <ScrollIntoView selector="#aboutUs">
              <p><i class="arrow down"></i></p>
              {/* <div class="sidebarText">MISSION</div> */}
            </ScrollIntoView>
          </div>

        </div>

      </div>
    )
  }
  // handleScroll(event) {
  //   var heightBound = window.height * 0.8
  //   if (heightBound > window.scrollY) {
  //       // Probably you want to load new cards?
  //       this.hideArrow;
  //   } 
  // }
}
