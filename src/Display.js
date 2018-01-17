import React, { Component } from 'react';
var moment = require ('moment');
class Display extends React.Component {
   render(){
       return <ul>{this.state.items.map(item => 
        (<li key={item.id}>{item.text}</li>)
    )}
    timestamp = moment().format("h:mm:ss a");
    timestamp.fromNow("mm:ss");
    </ul>
   }
}

export default display;
