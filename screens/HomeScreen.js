// SearchInputExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, ListView, TextInput, Button, Linking, Modal, Text, AppState, ToastAndroid, Clipboard} from 'react-native';
import CustomModal from './Components/CustomModal'


export default class NewPageHome extends Component {

  static defaultProps = {
    title: 'NewPage',
  };

  constructor(props) {
    super(props);
    this.state = {
        currentAppState: AppState.currentState,
        animationType: 'fade',
        transparent: true,
        modalVisible: false,
    };
  }

  _setModalVisible=(value)=>{
    this.setState({modalVisible: value});
  }

  goToVideo=()=>{
    this.setState({modalVisible: false});
    let message={url: this.state.content};
    console.log('current routeName:', this.props.navigation.state.routeName);

    if (this.props.navigation.state.routeName === 'VideoPage') {
        this.props.navigation.replace('VideoPage', message);
    } else {
        this.props.navigation.navigate('VideoPage', message);
    }
  }

  closeModal=()=>{
    this.setState({modalVisible: false});
  }

  onShowPress=()=>{
    this.setState({modalVisible: true});
  }

  hasAccessCode= async ()=>{
    try{
        let content = await Clipboard.getString();
        if (content.includes('http://vodtest.crazycdn.com:8088/')) {
            this.setState({content: content});
            Clipboard.setString('');
            this.onShowPress();
        }
    } catch (e) {
        console.log(e.message);
    }
  }

  _handleAppStateChange=(nextAppState)=>{
    if (this.state.currentAppState.match(/inactive|background/) && nextAppState === 'active') {
      this.hasAccessCode();
    }
    this.setState({currentAppState: nextAppState});
  }
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }
  componentWillUnmount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }
  render() {
    return (
        <View style={{flex: 1}}>
        <CustomModal 
            title='VideoCodeDetected'
            message={this.state.content} 
            ref='_CustomModal' 
            visibility={this.state.modalVisible}
            onLeftPress={this.closeModal} 
            onRightPress={this.goToVideo}
        />
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{height: 20}} />
                <Button style={{width: 200}} title='open new page' onPress={()=>{
                    let tm = Date.now();
                    console.log('new page press', tm);
                    this.props.navigation.navigate('NewPage');
                }} />
            <View style={{height: 20}} />
            <View style={{height: 20}} />
                <Button style={{width: 200}} title='open Drawer' onPress={()=>{
                    let tm = Date.now();
                    console.log('Drawer press', tm);
                    this.props.navigation.navigate('Drawer')
                }} />
            <View style={{height: 20}} />
            <View style={{height: 20}} />
                <Button style={{width: 200}} title='open MyDrawer' onPress={()=>{
                    let tm = Date.now();
                    console.log('MyDrawer press', tm);
                    this.props.navigation.navigate('MyDrawer')
                }} />
            <View style={{height: 20}} />
            <View style={{height: 20}} />
                <Button style={{width: 200}} title='open Web' onPress={()=>{
                    let tm = Date.now();
                    console.log('Web press', tm);
                    this.props.navigation.navigate('Web')
                }} />
            <View style={{height: 20}} />
            <View style={{height: 20}} />
                <Button style={{width: 200}} title='open Tab' onPress={()=>{
                    let tm = Date.now();
                    console.log('Tab press', tm);
                    this.props.navigation.navigate('Tab')
                }} />
            <View style={{height: 20}} />
            <View style={{height: 20}} />
                <Button style={{width: 200}} title='open MyTab' onPress={()=>{
                    let tm = Date.now();
                    console.log('Tab press', tm);
                    this.props.navigation.navigate('MyTab')
                }} />
            <View style={{height: 20}} />
            <View style={{height: 20}} />
                <Button style={{width: 200}} title='open APP' onPress={()=>{
                    let tm = Date.now();
                    console.log('APP press', tm);
                    let url = "tad://test";
                    Linking.canOpenURL(url).then(supported => {
                        if (supported) {
                            Linking.openURL(url);
                        }
                    });
                }} />
            <View style={{height: 20}} />
            <View style={{height: 20}} />
                <Button style={{width: 200}} title='open Video' onPress={()=>{
                    let tm = Date.now();
                    console.log('Video press', tm);
                    this.props.navigation.navigate('VideoPage');
                }} />
            <View style={{height: 20}} />
            <View style={{height: 20}} />
                <Button style={{width: 200}} title='open list' onPress={()=>{
                    let tm = Date.now();
                    console.log('list press', tm);
                    this.props.navigation.navigate('PlayList')
                }} />
            <View style={{height: 20}} />
            <View style={{height: 20}} />
                <Button style={{width: 200}} title='open clipboard' onPress={()=>{
                    this.props.navigation.navigate('ClipBoard');
                }} />
            <View style={{height: 20}} />
            <View style={{height: 20}} />
                <Button style={{width: 200}} title='open modal' onPress={()=>{
                    this.props.navigation.navigate('ModalPage');
                }} />
            <View style={{height: 20}} />
            <View style={{height: 20}} />
                <Button style={{width: 200}} title='navigate test' onPress={()=>{
                    this.props.navigation.navigate('navTestPage');
                }} />
            <View style={{height: 20}} />
        </ScrollView>
    </View>
    );
  }

}
