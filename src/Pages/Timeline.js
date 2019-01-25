import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import HorizontalTimeline from 'react-horizontal-timeline';
import './Timeline.css';

const VALUES = [];

export default class Timeline extends Component {
  constructor(prop) {
    super(props);
    this.state = {
      value: 0,
      previous: 0,

      minEventPadding: 20,
      maxEventPadding: 120,
      linePadding: 100,
      labelWidth: 100,
      fillingMotionStiffness: 150,
      fillingMotionDamping: 25,
      slidingMotionStiffness: 150,
      slidingMotionDamping: 25,
      stylesBackground: '#f8f8f8',
      stylesForeground: '#7b9d6f',
      stylesOutline: '#dfdfdf',
      isTouchEnabled: true,
      isKeyboardEnabled: true,
      isOpenEnding: false,
      isOpenBeginning: false,
    }
  }

  render() {
    views = () => {
      return(
        <div>
          <div>
            I am text.
          </div>
          <div>
            I am also text.
          </div>
        </div>
      )
    }

    return (
      <div>
        <div id="timeline-box">
          <HorizontalTimeline
            index = {
              this.state.value
            }
            indexClick = { (index) => {
              this.setState({
                value: index,
                previous: this.state.value
              });
            }}
            values = { VALUES } />
        </div>
        <div id="description" >
            <SwipeableViews
              index = {
                this.state.value
              }
              onChangeIndex = { (index) => {
                this.setState({
                  value: value,
                  previous: previous
                });
              }}
              resistance>
              {views}
              </SwipeableViews>
        </div>
      </div>
    )
  }
}
