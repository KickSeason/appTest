'use strict';

import React, {Component} from 'react';
import {View, Image, StyleSheet, Button, Text} from 'react-native';
import {
  TabNavigator,
  TabBarBottom
} from 'react-navigation';

var timestamp;

class Tab0Screen extends Component {
  static defaultProps = {
    title: 'Home',
  };

  constructor(props) {
    let tm = Date.now();
    timestamp = tm;
    console.log('tab0 construct', tm);
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    let tm = Date.now();
    tm = tm - timestamp;
    console.log('tab0 did mount', tm);
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      </View>
    );
  }
}

class Tab1Screen extends Component {

  static defaultProps = {
    title: 'Setting',
  };

  constructor(props) {
    let tm = Date.now();
    timestamp = tm;
    console.log('tab1 construct', tm);
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    let tm = Date.now();
    tm = tm - timestamp;
    console.log('tab1 did mount', tm);
  }
  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Setting!</Text>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});

export default TabNavigator(
  {
    Home: {
      screen: Tab0Screen,
    },
    Setting: {
      screen: Tab1Screen,
    },
  },
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
  }
);