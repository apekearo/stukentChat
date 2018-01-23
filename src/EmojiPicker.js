import React, {Component} from 'react';
import EmojiPicker from 'emoji-picker-react';
import {emojify} from 'react-emojione';
 

 
class Picker extends Component {

    constructor(props) {
        super(props);
        this.myCallback = this.myCallback.bind(this);
      }
 
    myCallback (data) {
        this.props.addText(data);
        console.log(emojify(":"+data+":", {output:'unicode'}));
    }
    render() {
        return (
            <EmojiPicker onEmojiClick={this.myCallback}/>
        );
    }
}

export default Picker;