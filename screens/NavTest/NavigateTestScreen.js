// SearchInputExample.js

'use strict';

import React, {Component} from 'react';

import {View, ScrollView, ListView, Text, Button} from 'react-native';

import {
    StackNavigator,
    TabNavigator,
    NavigationActions,
} from 'react-navigation';

import TabNav from './tabnavtest'

class stackhomescreen extends Component {

    static defaultProps = {
        title: 'homescreen',
        showBackButton: true,
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{height: 20}} >
            <Button 
                style={{width: 200}}
                title='stackhome'
                onPress={()=>this.props.navigation.navigate('Profile', {isEditing: true})}
            />
            </View>
        );
    }
  
}


const Stack = StackNavigator({
    StackHome: {screen: stackhomescreen},
    Profile: {screen: TabNav},
});


export default class NavigationTestScreen extends Component {
    componentDidMount() {
        console.log('navtest did mount!');        
    }
    render() {
        return (<Stack ref={nav => {this.navigator=nav;}} />);
    }
} 
