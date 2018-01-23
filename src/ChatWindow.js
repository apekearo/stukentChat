import React, { Component } from 'react';
import Display from './Display';
import Picker from './EmojiPicker';
import {Emojify} from 'react-emojione';
// import Picker from './Emoji';

class ChatWindow extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addText = this.addText.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div>
        <h3>Stukent Chat App</h3>
        <Emojify>
          <Display items={this.state.items}/>
          <form onSubmit={this.handleSubmit}>
          
          <input onChange={this.handleChange} value={this.state.text} />
          <Picker addText={this.addText}/>
          <button>{'Send'}</button>
        </form>
        </Emojify>
      </div>
    );
  }

  addText(text) {
    this.setState({text:this.state.text+text});
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

}

export default ChatWindow;