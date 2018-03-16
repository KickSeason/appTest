'use strict';

import React, {Component} from 'react';
import {View, Image, StyleSheet, Button} from 'react-native';
import {
  DrawerNavigator,
} from 'react-navigation';

var timestamp;

class DrawerHomeScreen extends Component {
  static defaultProps = {
      title: 'DrawerHome',
    };
  
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({tintColor}) => {
      <Image
          source={require('../icons/me_active.png')}
          style={[styles.icon, {tintColor: tintColor}]}
      />
      }
  }

render() {
  return (
    <Button 
      onPress={() => {
        let tm = Date.now();
        console.log('drawer pressed', tm);
        this.props.navigation.navigate('DrawerOpen')
      }}
      title='Home'
    />
  );
}
}

class NotificationScreen extends Component {

  static defaultProps = {
    title: 'Notification',
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({tintColor}) => {
      <Image
        source={require('../icons/home_active.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    }
  }

  render() {
    return (
      <Button 
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title='Notification'
      />
    );
  }

}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});

export default DrawerNavigator(
  {
    Home: {
      screen: DrawerHomeScreen,
    },
    Notifications: {
      screen: NotificationScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);