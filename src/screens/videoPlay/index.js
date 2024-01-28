import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  BackHandler,
  Platform
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { WebView } from 'react-native-webview';
import { Vimeo } from 'react-native-vimeo-iframe';
import Video from 'react-native-video';
import { FontFamily } from '../../constant/Fonts';

const Width = Dimensions.get('window').width;

const VideoPlay = ({ route }) => {
  const navigation = useNavigation();
  const { videoId, isYouTube, isVimeo } = route.params;
  console.log('check params here -=-=-=--->>', route.params);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const webViewRef = useRef(null);
  const isAndroid = Platform.OS === 'android';
  useEffect(() => {
    // getYoutubeVideoThumbnail()
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.goBack()
        return true;
      },
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    console.log('Autoplay enabled:', autoplayEnabled);
  }, [autoplayEnabled]);

  const handleVideoPlay = () => {
    setAutoplayEnabled(true);
  };

  const handleVideoEnded = () => {
    setAutoplayEnabled(false);
  };

  const videoCallbacks = {
    timeupdate: (data) => console.log('timeupdate: ', data),
    play: handleVideoPlay,
    pause: (data) => console.log('pause: ', data),
    fullscreenchange: (data) => console.log('fullscreenchange: ', data),
    ended: handleVideoEnded,
    controlschange: (data) => console.log('controlschange: ', data),
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: 'white', }]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          width: 30,
          height: 30,
          backgroundColor: 'black',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
          borderRadius: 15,
          right: 13,
          top: 40,
        }}>
        <Image
          source={require('../../assets/images/xmark.png')}
          style={{ height: 11, width: 11, tintColor: 'white' }}
        />
      </TouchableOpacity>

      <View style={[styles.playerContainer, { marginVertical: 100  }
        //  { marginVertical: isYouTube || isVimeo ? 250 : Platform.OS == 'ios' ? 30 : 80 }
      ]}>
        {isYouTube && (
          <YoutubePlayer
            webViewStyle={{ marginVertical: 130 }}
            height={500}
            width={'100%'}
            play={true}
            videoId={videoId}
          />
        )}
        {isVimeo && (
          <Vimeo
          style={{marginVertical:100}}
            videoId={videoId}
            params={`api=1&autoplay=${autoplayEnabled ? 1 : 0}`}
            handlers={videoCallbacks}
          />
        )}
        {videoId && !isYouTube && !isVimeo && (
            <WebView
              style={{ marginVertical: 150 }}
              source={{ uri: `https://www.facebook.com/video/embed?video_id=${videoId}` }}
              allowsFullscreenVideo={true}
              allowsInlineMediaPlayback={true}
              mediaPlaybackRequiresUserAction={true}
              javaScriptEnabled={true}
              injectedJavaScript={'document.getElementsByTagName("video")[0].play();'}
            />
        )}
        {videoId && !isYouTube && !isVimeo && (
          <View style={{  right: 190, alignItems: 'center',position:'absolute'  }}>
            <Image style={{ height: 10, width: 10, }} source={require('../../assets/images/play.png')} />
            {/* <Text style={{color:'white'}}>Tap Anywhere</Text> */}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  playerContainer: {
    flex: 1,
    // backgroundColor:'red',
    // alignSelf: 'center',
    // alignItems: 'center',
    justifyContent: 'center',

  },
});

export default VideoPlay;
