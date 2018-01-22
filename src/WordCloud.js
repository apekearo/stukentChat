import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';
 
class MyCloud extends Component {
  render() {
    return (
      <TagCloud 
        style={{
          fontFamily: 'sans-serif',
          fontSize: 30,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: () => randomColor(),
          padding: 5
        }}>
        <div style={{fontSize: 50}}>react</div>
        <div style={{color: 'green'}}>tag</div>
        <div rotate={90}>cloud</div>
        {/* //use map to update things,  not hard coded  
        //use map function to render the div and pass in new divs,  refer display.js */}
      </TagCloud>
    );
  }
}

export default MyCloud;