// ClipboardScreen.js

'use strict';

import React, {Component} from 'react';
import {View, Text, TextInput, Clipboard} from 'react-native';

export default class ClipboardPage extends Component {

  static defaultProps = {
    title: 'ClipboardPage',
    showBackButton: true,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _setClipboardContent=()=>{
    Clipboard.setString('Hello World');
    Clipboard.getString()
    .then((text)=>{
      console.log('[clipbaord]', text)
      this.setState({content: text});
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  render() {
    return (
        <View>
            <Text onPress={this._setClipboardContent} style={{color: 'blue'}}>
                Tap to put "Hello World" in the clipboard
            </Text>
            <Text style={{color: 'red', marginTop: 20}}>
                {this.state.content}
            </Text>
            <TextInput />
        </View>
    );
  }
}
