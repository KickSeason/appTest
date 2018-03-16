// MyDrawerScreen.js

'use strict';

import React, {Component} from 'react';
import { View, Text, ScrollView, ListView, TextInput, DrawerLayoutAndroid, Button} from 'react-native';

var timestamp;
export default class MyDrawerScreen extends Component {

  static defaultProps = {
    title: 'MyDrawer',
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  openDrawer() {
      let tm  = Date.now();
      timestamp = tm;
      console.log('drawer open', tm);
      this.refs.drawlayout.openDrawer();
  }
  componentDidMount() {
    var duration = Date.now() - timestamp;
    console.log('newPageLoaded', duration);
  }
  onDrawerOpened() {
    let tm  = Date.now();
    tm = tm - timestamp;
    console.log('drawer open', tm);
  }
  render() {
    var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </View>
      );
    return (
        <DrawerLayoutAndroid
            ref={'drawlayout'}
          drawerWidth={300}
          onDrawerOpen = {this.onDrawerOpened}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
            <Button title='open drawer' onPress={() => {
                this.openDrawer();
            }} />
          </View>
        </DrawerLayoutAndroid>
      );
  }

}
