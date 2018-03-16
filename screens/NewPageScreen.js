// SearchInputExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, ListView, TextInput, Button, TouchableOpacity} from 'react-native';
import VectorIcon from 'react-native-vector-icons/Entypo';


export default class NewPageView extends Component {

  static defaultProps = {
    title: 'NewPage',
    showBackButton: true,
  };

  constructor(props) {

    super(props);
    this.state = {
    };
  }

  arr = [1,2,3];

  componentDidMount() {

  }

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{height: 20}} />
          <TextInput style={{width: 200}} placeholder='Enter text' />
          {this.arr.map(element => {
            return (<Button title={element.toString()} onPress={()=>{}} />);
          })}
          <VectorIcon name='info-with-circle' size={30} color='#2196F3' />
          <VectorIcon.Button 
            name='info-with-circle' 
            backgroundColor='#2196F3'
            onPress={()=>{}} 
          >
            About us
          </VectorIcon.Button>
          <Button title='local-button' onPress={()=>{}} />
          <TouchableOpacity 
            activeOpacity={0.5}
            onPress={()=>{}}
            style={{elevation: 10}}
          >
            <VectorIcon name='info-with-circle' size={30} color='#2196F3' />
          </TouchableOpacity>
          <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <VectorIcon.Button 
              name='info-with-circle' 
              backgroundColor='#2196F3'
              onPress={()=>{}} 
            >
              About us
            </VectorIcon.Button>
            <View style={{width: 2, height: 30, backgroundColor: 'black', borderRadius: 2, marginLeft: 1, marginRight: 1,}} />
            <VectorIcon.Button 
              name='facebook' 
              backgroundColor='#2196F3'
              onPress={()=>{}} 
            >
              About us
            </VectorIcon.Button>
          </View>
        <View style={{height: 20}} />
      </ScrollView>
    );
  }

}
