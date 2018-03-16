'use strict';

import React, {Component} from 'react';
import {View, WebView, ScrollView, ListView, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';

var timestamp;
var thisprops;
export default class WebPageScreen extends Component {

  static defaultProps = {
    title: 'NewPage',
    showBackButton: true,
  };

  constructor(props) {
    let tm = Date.now();
    timestamp = tm;
    console.log('searchview start', tm);
    super(props);
    thisprops = props;
    this.state = {
    };
  }

  componentDidMount() {
    var duration = Date.now() - timestamp;
    console.log('newPageLoaded', duration);
  }
  openNewPage() {
    this.props.navigation.navigate('NewPage');
  }

  handleMessage(event) {
    const message = event.nativeEvent.data;
    console.log('[webview] get message',message);
    let para = JSON.parse(message);
    console.log(para);
    thisprops.navigation.navigate('TotalWeb', para);
  }

  render() {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <WebView 
                ref='webview'
                style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                source={{uri:'http://192.168.2.42:9560/adver'}}
                startInLoadingState={true}
                onLoadStart={(e) => {
                    this.webtm = Date.now();
                    console.log('web loadStart', this.webtm, this.webtm - timestamp);
                }}
                onLoadEnd={(e) => {
                    this.webtm = Date.now() - this.webtm;
                    console.log('web loadEnd:', this.webtm);
                }}
                renderLoading={() => {
                    //return <View><Text>Loading...</Text></View>
                    return <ActivityIndicator size='small' />;
                }}
                onMessage={this.handleMessage}
            />
            <View style={{flexDirection: 'row', height: 30, justifyContent: 'space-between',}}>
                <Button style={{flex: 4}} title='flush' onPress={() => {
                    let tm = Date.now();
                    timestamp = tm;
                    console.log('flush press', tm);
                    this.refs['webview'].reload();
                }} />
                <Button style={{flex: 2}} title='forward' onPress={() => {
                    this.refs['webview'].goForward();
                }} />
                <Button style={{flex: 2}} title='back' onPress={() => {
                    this.refs['webview'].goBack();
                }} />
                <Button style={{flex: 2}} title='send' onPress={() => {
                    const message = 'hello web!';
                    this.refs['webview'].postMessage(message);
                }} />
            </View>
        </View>
    );
  }

}
