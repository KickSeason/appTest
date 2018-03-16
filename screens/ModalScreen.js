// ModalScreen.js

'use strict';

import React, {Component} from 'react';
import {
    View,
    Button,
    Modal,
    Text,
} from 'react-native';

var timestamp;
export default class NewPageView extends Component {

  static defaultProps = {
    title: 'ModalPage',
    showBackButton: true,
  };

  constructor(props) {
    super(props);
    this.state = {
        animationType: 'fade',
        transparent: true,
        modalVisible: false,
    };
  }

  componentDidMount() {
    var duration = Date.now() - timestamp;
    console.log('newPageLoaded', duration);
  }

  _setModalVisible=(value)=>{
    this.setState({modalVisible: value});
  }

  closeModal=()=>{
    this.setState({modalVisible: false});
  }

  onShowPress=()=>{
    let vision = this.state.modalVisible;
    this.setState({modalVisible: !vision});
  }

  render() {
    return (
        <View>
            <Modal
                animationType={this.state.animationType}
                transparent={this.state.transparent}
                visible={this.state.modalVisible}
                onRequestClose={() => {this._setModalVisible(false)}}
            >
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center',}}>
                <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20,backgroundColor: 'gray', borderRadius: 10}}>
                    <Text style={{}}>this is modal</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Button title='yes' onPress={this.closeModal}/>
                        <Button title='no' onPress={this.closeModal}/>
                    </View>
                </View>
            </View>
            </Modal>
            <View>
                <Text>this is a modal test page.</Text>
                <Button title='show modal' onPress={this.onShowPress} />
            </View>
        </View>
    );
  }

}
