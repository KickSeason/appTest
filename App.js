/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Clipboard,
  AppState,
  ToastAndroid,
} from 'react-native'
import {
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation';

import NewPageView from './screens/NewPageScreen';
import NewPageHome from './screens/HomeScreen';
import DrawerScreen from './screens/NotificationScreen';
import WebPage from './screens/WebScreen'
import TabScreen from './screens/TabScreen'
import MyTabScreen from './screens/MyTabScreen'
import MyDrawerScreen from './screens/MyDrawerScreen'
import VideoPage from './screens/VideoScreen'
import TotalWebPage from './screens/TotalWebScreen'
import PlayPage from './screens/PlayListScreen'
import ClipBoardPage from './screens/ClipboardScreen'
import ModalPage from './screens/ModalScreen'
import navTestPage from './screens/NavTest/NavigateTestScreen'

const AppStack=StackNavigator(
  {
    Home: {
      screen: NewPageHome,
    },
    NewPage: {
      screen: NewPageView,
    },
    Web: {
      screen: WebPage
    },
    Drawer:{
      screen: DrawerScreen,
    },
    MyDrawer: {
      screen: MyDrawerScreen,
    },
    Tab: {
      screen: TabScreen,
    },
    MyTab: {
      screen: MyTabScreen,
    },
    VideoPage: {
      screen: VideoPage,
    },
    TotalWeb: {
      screen: TotalWebPage,
    },
    PlayList: {
      screen: PlayPage,
    },
    ClipBoard: {
      screen: ClipBoardPage,
    },
    ModalPage: {
      screen: ModalPage,
    },
    navTestPage: {
      screen: navTestPage
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class APP extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
  render() {
    return (
      <AppStack />
    );
  }
}