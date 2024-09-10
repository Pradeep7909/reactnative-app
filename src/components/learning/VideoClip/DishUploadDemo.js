// import React, { Component } from 'react';
// import { View } from 'react-native';
// import {
//   heightPercentageToDP,
//   widthPercentageToDP,
// } from 'react-native-responsive-screen';
// import { VideoPlayer, Trimmer } from 'react-native-video-processing';
// // import COLOR from '../../styles/Color';

// export default class DishUploadDemo extends Component {
//   trimVideo() {
//     const options = {
//       startTime: 0,
//       endTime: 15,
//       quality: VideoPlayer.Constants.quality.QUALITY_1280x720, // iOS only
//       saveToCameraRoll: true, // default is false // iOS only
//       saveWithCurrentDate: true, // default is false // iOS only
//     };
//     this.videoPlayerRef
//       .trim(options)
//       .then(newSource => console.log(newSource))
//       .catch(console.warn);
//   }

//   compressVideo() {
//     const options = {
//       width: 720,
//       height: 1280,
//       bitrateMultiplier: 3,
//       saveToCameraRoll: true, // default is false, iOS only
//       saveWithCurrentDate: true, // default is false, iOS only
//       minimumBitrate: 300000,
//       removeAudio: true, // default is false
//     };
//     this.videoPlayerRef
//       .compress(options)
//       .then(newSource => console.log(newSource))
//       .catch(console.warn);
//   }

//   getPreviewImageForSecond(second) {
//     const maximumSize = { width: 640, height: 1024 }; // default is { width: 1080, height: 1080 } iOS only
//     this.videoPlayerRef
//       .getPreviewForSecond(second, maximumSize) // maximumSize is iOS only
//       .then(base64String =>
//         console.log('This is BASE64 of image', base64String),
//       )
//       .catch(console.warn);
//   }

//   getVideoInfo() {
//     this.videoPlayerRef
//       .getVideoInfo()
//       .then(info => console.log(info))
//       .catch(console.warn);
//   }

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <VideoPlayer
//           ref={ref => (this.videoPlayerRef = ref)}
//           startTime={30} // seconds
//           endTime={120} // seconds
//           play={true} // default false
//           replay={true} // should player play video again if it's ended
//           rotate={true} // use this prop to rotate video if it captured in landscape mode iOS only
//           //  source
//           source={{
//             uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
//           }}
//           playerWidth={250} // iOS only
//           playerHeight={300} // iOS only
//           // style={{backgroundColor: 'black'}}
//           resizeMode={VideoPlayer.Constants.resizeMode.CONTAIN}
//           onChange={({ nativeEvent }) => console.log({ nativeEvent })} // get Current time on every second
//           trackerStyle={{
//             height: 200,
//             backgroundColor: "orange",
//             marginLeft: 20,
//           }}
//           style={{
//             width: widthPercentageToDP(70),
//             height: heightPercentageToDP(40),
//           }}
//         />
//         <View style={{ height: 90, marginLeft: 20 }}>
//           <Trimmer
//             source={{
//               uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
//             }}
//             height={100}
//             width={200}
//             onTrackerMove={e => console.log(e.currentTime)} // iOS only
//             currentTime={this.video?.currentTime} // use this prop to set tracker position iOS only
//             themeColor={'red'} // iOS only
//             thumbWidth={30} // iOS only
//             trackerColor={'red'} // iOS only
//             onChange={e => console.log(e.startTime, e.endTime)}
//             style={{ backgroundColor: 'red' }}
//           />
//         </View>
//       </View>
//     );
//   }
// }
