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
  // let arrowHidden = false;
  hideArrow() {
    if(this.state.arrow){
      this.setState({arrow: false})
    }
  }
  componentDidMount(){
    window.addEventListener("scroll", (e)=>{
      if(window.scrollY > 0.5*window.innerHeight){
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
            riceApps
          </div>
          <div class={arrow_classes} onClick={() => this.hideArrow()} >
            <ScrollIntoView selector="#whatWeDo">
              <p><i class="arrow down" id = "arrow"></i></p>
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
