import React, { Component } from 'react';
//Import React
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import YouTube from 'react-native-youtube';
class Screen extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,

      screenType: 'content',
    };
  }
 
  onSeek = seek => {
    //Handler for change in seekbar
    this.videoPlayer.seek(seek);
  };
 
  onPaused = playerState => {
    //Handler for Video Pause
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };
 
  onReplay = () => {
    //Handler for Replay
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };
 
  onProgress = data => {
    const { isLoading, playerState } = this.state;
    // Video Player will continue progress even if the video already ended
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime });
    }
  };
  
  onLoad = data => this.setState({ duration: data.duration, isLoading: false });
  
  onLoadStart = data => this.setState({ isLoading: true });
  
  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });
  
  onError = () => alert('Oh! ', error);
  
  exitFullScreen = () => {
    alert('Exit full screen');
  };
  
  enterFullScreen = () => {};
  
  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'content' });
  };
  renderToolbar = () => (
    <View>
      <Text> toolbar </Text>
    </View>
  );
  onSeeking = currentTime => this.setState({ currentTime });
 
  render() {
    return (
      <View style={{flex:1}}>
      <ScrollView>
      <View style={{marginTop:20}}>
      <Text style={{textAlign:'center', marginBottom : 10}}>Modicare Success Story</Text>
    <YouTube
  videoId="S40G85NSnc0" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyD0nhmGVsfQ3JwVaJeSa-yRKovdzMrEvwM"
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Modicare Sanitary Napkin Demo</Text>
 <YouTube
  videoId="Ypy02vMMyTg" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
   apiKey="AIzaSyBpWd-_IPS2tgOwZ62WalkMzOeHBHK6KBk"

  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Things To Avoid In Modicare Business</Text>
 <YouTube
  videoId="PBCYotk_SCY" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyCkP5eDNuY9riT87KESPInG7VbYUSiZZV0"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Modicare EnviroChip Demo</Text>
 <YouTube
  videoId="EXOEs0K8-wg" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyB2IGYbtz-iTLj1Q0fjGW2uYre6hdAhgmM"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Modicare New Products 2020</Text>
 <YouTube
  videoId="0vgS5WzDTY4" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyByq_EaxQPVTzOBDTok_LP7MQn8OoOBf0k"
  
/>
</View>
</ScrollView>
</View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
});
export default Screen;