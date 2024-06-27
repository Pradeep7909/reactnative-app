// import React, { Component } from 'react';
// import { Text, View } from 'react-native';
// import { VideoPlayer, Trimmer } from 'react-native-video-processing';

// class DishUploadGallery extends Component {


//     constructor(props) {
//         super();
//         this.state = {
//             selectedIndex: 0,
//             showDeleteIcon: false,
//             pauseVideo: true,
//             isLoading: false,
//             duration: 0,
//             progress: 0,
//             seekTime: 0,
//             timeRange: [0, 0],
//             showClipSpeedIcons: false,
//             editClip: false,
//             videoDurations: {},
//             source:
//                 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
//             clipData: [
//                 // {
//                 //   id: 0,
//                 //   poster:
//                 //     'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
//                 //   duration: 0,
//                 // },
//                 // {
//                 //   id: 1,
//                 //   poster:
//                 //     'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
//                 //   duration: 0,
//                 // },
//                 // {
//                 //   id: 2,
//                 //   poster:
//                 //     'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
//                 //   duration: 0,
//                 // },
//                 {
//                     id: 3,
//                     poster:
//                         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
//                     duration: 0,
//                 },
//             ],
//         };
//     }

//     trimVideo() {
//         const options = {
//             startTime: 0,
//             endTime: 15,
//             quality: VideoPlayer.Constants.quality.QUALITY_1280x720, // iOS only
//             saveToCameraRoll: true, // default is false // iOS only
//             saveWithCurrentDate: true, // default is false // iOS only
//         };
//         this.videoPlayerRef.trim(options)
//             .then((newSource) => console.log(newSource))
//             .catch(console.warn);
//     }

//     compressVideo() {
//         const options = {
//             width: 720,
//             height: 1280,
//             bitrateMultiplier: 3,
//             saveToCameraRoll: true, // default is false, iOS only
//             saveWithCurrentDate: true, // default is false, iOS only
//             minimumBitrate: 300000,
//             removeAudio: true, // default is false
//         };
//         this.videoPlayerRef.compress(options)
//             .then((newSource) => console.log(newSource))
//             .catch(console.warn);
//     }

//     getPreviewImageForSecond(second) {
//         const maximumSize = { width: 640, height: 1024 }; // default is { width: 1080, height: 1080 } iOS only
//         this.videoPlayerRef.getPreviewForSecond(second, maximumSize) // maximumSize is iOS only
//             .then((base64String) => console.log('This is BASE64 of image', base64String))
//             .catch(console.warn);
//     }

//     getVideoInfo() {
//         this.videoPlayerRef.getVideoInfo()
//             .then((info) => console.log(info))
//             .catch(console.warn);
//     }

//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 <Text>
//                     Video processor
//                 </Text>
//                 <View style={{ alignItems: 'center' }}>
//                     <VideoPlayer
//                         ref={ref => {
//                             this.player = ref;
//                         }}
//                         replay={false}
//                         startTime={this.state.timeRange[0]}
//                         endTime={this.state.timeRange[1]}
//                         currentTime={this.state.timeRange[0]}
//                         play={true}
//                         source={this.state.source}
//                         style={{
//                             width: 300,
//                             height: 300,
//                         }}
//                         onChange={({ nativeEvent }) => {
//                             this.setState({
//                                 seekTime: nativeEvent.currentTime,
//                                 progress: this.state.duration / nativeEvent.currentTime,
//                             });
//                         }}
//                         trackerStyle={{ height: 200, backgroundColor: 'white' }}
//                     />
//                 </View>

//                 {/* <Trimmer
//                     source={this.state.source}
//                     height={100}
//                     width={300}
//                     onTrackerMove={(e) => console.log(e.currentTime)} // iOS only
//                     currentTime={this.state.seekTime} // use this prop to set tracker position iOS only
//                     themeColor={'white'} // iOS only
//                     thumbWidth={30} // iOS only
//                     trackerColor={'green'} // iOS only
//                     onChange={(e) => console.log(e.startTime, e.endTime)}
//                 /> */}
//             </View>
//         );
//     }
// }


// export default DishUploadGallery;