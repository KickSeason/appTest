'use strict';

import React, {Component} from 'react';
import {View, ScrollView, ListView, TextInput, StyleSheet, ActivityIndicator, } from 'react-native';
import Video from 'react-native-video';

let timestamp;
export default class VideoScreen extends Component {

    static defaultProps = {
      title: 'Video',
      showBackButton: true,
    };
    constructor(props) {
      super(props);
      console.log('video para', this.props.navigation.state.params);
      this.state = {
      };
      if (!this.props.navigation.state.params) {
          this.state.url = 'http://vodtest.crazycdn.com:8088/test/piano.mp4';
      } else {
          this.state.url = this.props.navigation.state.params.url;
      }
      console.log('url:' + this.state.url);
    }
    video;
    componentDidMount() {
        this.video.presentFullscreenPlayer();
    }
    render() {
        return (
                <Video
                    ref={(ref) => {
                        this.video = ref
                    }}
                    //source={{uri: 'http://qiubai-video.qiushibaike.com/A14EXG7JQ53PYURP.mp4'}}
                    source={{uri: this.state.url}}
                    rate={1.0}
                    volume={1.0}
                    muted={false}
                    paused={false}
                    resizeMode='contain'
                    repeat={false}
                    onLoadStart={() => {
                        this.video.presentFullscreenPlayer();
                        return <ActivityIndicator size='large' />;
                    }}
                    onLoad={() => {
                        this.video.presentFullscreenPlayer();
                        return <ActivityIndicator size='large' />;
                    }}
                    onProgress={(err) => {

                    }}
                    onError={(err) => {console.log(err);}}
                    style={styles.backgroundVideo} 
                />
        );
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
  });