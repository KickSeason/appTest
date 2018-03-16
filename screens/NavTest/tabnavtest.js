'use strict';

import React, {Component} from 'react';

import {View, ScrollView, ListView, Text, Button} from 'react-native';

import {
    StackNavigator,
    TabNavigator,
    NavigationActions,
} from 'react-navigation';

class tabhomescreen extends Component {
    
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
                title='home'
                onPress={()=>this.props.navigation.navigate('Profile', {isEditing: true})}
            />
            </View>
        );
    }
  
}

class profilescreen extends Component {

    static defaultProps = {
        title: 'profilescreen',
        showBackButton: true,
    };

    constructor(props) {
        super(props);
            this.state = {
        };
        console.log(this.props.navigation.state);
        console.log(this.props.navigation.dispatch);
    }

    render() {
        return (
            <View style={{height: 20}} >
            <Button title='go' onPress={()=>this.props.navigation.navigate('StackHome')} />
            </View>
        );
    }
  
}

const Tab = TabNavigator({
    TabHome: {screen: profilescreen},
    Profile: {screen: profilescreen}
});


export default class TabNav extends Component {
    render() {
        return <Tab />;
    }
}