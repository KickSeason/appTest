'use strict';

import React, {Component} from 'react';
import {View, WebView, ScrollView, ListView, TextInput} from 'react-native';

var timestamp;
export default class NewPageView extends Component {

  static defaultProps = {
    title: 'NewPage',
    showBackButton: true,
  };

  constructor(props) {
    let tm = Date.now();
    timestamp = tm;
    console.log('searchview start', tm);
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    var duration = Date.now() - timestamp;
    console.log('newPageLoaded', duration);
  }

  render() {
    return (
      <WebView style={{flex: 1, backgroundColor: 'white'}} source={{uri: }}>

      </WebView>
    );
  }

}