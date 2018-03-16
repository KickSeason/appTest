'use strict';

import React, {Component} from 'react';
import {View, Image, StyleSheet, Button, Text, TouchableOpacity} from 'react-native';
import {
  TabNavigator,
  TabBarBottom
} from 'react-navigation';

var timestamp;

export default class MyTabViewScreen extends Component {

  static defaultProps = {
    title: 'Setting',
  };

  constructor(props) {
    super(props);
    this.state = {
        index: 0,
    };
  }
  renderPage(index) {
    if (index === 0) {
        return <Text>Home!</Text>;
    }
    if (index === 1) {
        return <Text>Setting!</Text>;
    }
  }
  componentDidUpdate() {
      let tm = Date.now();
      tm = tm - timestamp;
      console.log('tab update', tm);
  }
  renderTabButton(title, func) {
    // return (
    //     <Button title={title} style={{flex: 1, width: 200}} onPress={func} />
    // );
    return (
        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2196F3', borderRadius: 2, height: 50}} onPress={func} >
            <Text>{title}</Text>
        </TouchableOpacity>
    );
  }
  render() {
    return (
        <View style={{flex: 1}}>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center',}}>
                {this.renderPage(this.state.index)}
            </View>
            <View style={{height: 50, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                {this.renderTabButton('Home', ()=> { 
                    timestamp = Date.now();
                    this.setState({index: 0})
                    })}
                {this.renderTabButton('Setting', ()=> {
                    timestamp = Date.now();
                    this.setState({index: 1})
                    })}
            </View>
        </View>
    );
  }

}