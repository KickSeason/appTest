'use strict';

import React, {Component} from 'react';
import {View, WebView, ScrollView, ListView, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';

export default class PlayListPage extends Component {

  static defaultProps = {
    title: 'NewPage',
    showBackButton: true,
    url: '',
  };

  constructor(props) {
    super(props);
    console.log(this.props.navigation.state.params);
  }

  static navigationOptions = {
    headerStyle: {height: 40, opacity: 1},
  } 

  render() {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <WebView 
                ref='webview'
                style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                source={{uri: 'http://vodtest.crazycdn.com:8088/playlist/list.html'}}
                startInLoadingState={true}
                onLoadStart={(e) => {

                }}
                onLoadEnd={(e) => {

                }}
                renderLoading={() => {
                    //return <View><Text>Loading...</Text></View>
                    return <ActivityIndicator size='large' />;
                }}
                onMessage={(event) => {
                    const message = event.nativeEvent.data;
                    console.log('[playlist] get message',message);
                    let para = JSON.parse(message);
                    console.log(para);
                    this.props.navigation.navigate('VideoPage', para);
                }}
            >
            </WebView>
        </View>
    );
  }

}
