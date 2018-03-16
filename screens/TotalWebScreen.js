'use strict';

import React, {Component} from 'react';
import {View, WebView, ScrollView, ListView, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';

export default class TotalWebScreen extends Component {

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
                source={{uri: this.props.navigation.state.params.url}}
                startInLoadingState={true}
                onLoadStart={(e) => {

                }}
                onLoadEnd={(e) => {

                }}
                renderLoading={() => {
                    //return <View><Text>Loading...</Text></View>
                    return <ActivityIndicator size='large' />;
                }}
            >
            </WebView>
        </View>
    );
  }

}
