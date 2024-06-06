import React, { Component } from "react";
import { StyleSheet, View, Animated, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DetailsView from "./tab1";
import GalleryView from "./tab2";
import ReviewView from "./tab3";

import DeviceSize from "../../../common/device";
import images from "../../../common/images";
import colors from "../../../common/colors";
import CustomText from "../../../commonView/CustomText";

const Tab = createMaterialTopTabNavigator();

const Seprator = () => <View style={{ height: 0.7, backgroundColor: 'gray' }} />

class NewTripView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headerHeight: 0,
            scrollY: new Animated.Value(0),
            currentIndex: 0
        };

        // Create refs for each tab
        this.detailsRef = React.createRef();
        this.galleryRef = React.createRef();
        this.reviewsRef = React.createRef();
    }

    handleHeaderLayout = (event) => {
        this.setState({ headerHeight: event.nativeEvent.layout.height });
    };

    contentScrollChanged = (offsetY, index) => {
        updatedOffset = 0;

        if (offsetY > 300 - safeTop) {
            updatedOffset = 300 - safeTop
        } else if (offsetY < 0) {
            updatedOffset = 0
        } else {
            updatedOffset = offsetY
        }


        // console.log(`offset : ${offsetY}, index : ${index}`)


        if (this.detailsRef.current && index != 0) {
            this.detailsRef.current.scrollTo({ y: updatedOffset, animated: true });
        }
        if (this.galleryRef.current && index != 1) {
            this.galleryRef.current.scrollTo({ y: updatedOffset, animated: true });
        }
        if (this.reviewsRef.current && index != 2) {
            this.reviewsRef.current.scrollTo({ y: updatedOffset, animated: true });
        }

        // console.log(DeviceSize.screenHeight)

    };

    setIndex = (index) => {
        this.setState({ currentIndex: index })
    }



    render() {

        safeTop = DeviceSize.safeAreaTop

        const translateY = this.state.scrollY.interpolate({
            inputRange: [0, 300 - safeTop],
            outputRange: [0, -300 + safeTop],
            extrapolate: 'clamp',
        });

        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, 300 - safeTop],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });



        return (

            <Animated.View style={{ flex: 1, transform: [{ translateY }] }}>
                <Animated.View
                    style={[{ gap: 5, position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2, }]}
                    onLayout={this.handleHeaderLayout}
                >
                    <Animated.Image style={[styles.bgImage, { opacity: imageOpacity }]} source={images.trip} />
                    <CustomText style={styles.title} data="Mountain Trip" />
                    <CustomText style={styles.subtitle} data="Mountain Trip powered by Letsgo" />
                    <Seprator />
                </Animated.View>
                <Animated.View
                    style={{ position: 'absolute', bottom: -300 + safeTop, left: 0, right: 0, top: this.state.headerHeight }}
                >
                    <Tab.Navigator
                        screenOptions={{
                            tabBarActiveTintColor: colors.tripRed,
                            tabBarLabelStyle: { fontSize: 14, fontWeight: '500' },
                            tabBarInactiveTintColor: 'darkgray',
                            tabBarIndicatorStyle: { backgroundColor: colors.tripRed },
                        }}
                    >
                        <Tab.Screen name="Details">
                            {(props) => <DetailsView  {...props} scrollY={this.state.scrollY}
                                contentScrollChanged={this.contentScrollChanged} scrollRef={this.detailsRef} index={this.state.currentIndex} setIndex={this.setIndex} />}
                        </Tab.Screen>
                        <Tab.Screen name="Gallery" >
                            {(props) => <GalleryView  {...props} scrollY={this.state.scrollY}
                                contentScrollChanged={this.contentScrollChanged} scrollRef={this.galleryRef} index={this.state.currentIndex} setIndex={this.setIndex} />}
                        </Tab.Screen>
                        <Tab.Screen name="Reviews">
                            {(props) => <ReviewView  {...props} scrollY={this.state.scrollY}
                                contentScrollChanged={this.contentScrollChanged} scrollRef={this.reviewsRef} index={this.state.currentIndex} setIndex={this.setIndex} />}
                        </Tab.Screen>
                    </Tab.Navigator>
                </Animated.View>
            </Animated.View >
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    },
    bgImage: {
        height: 300,
        width: "100%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginHorizontal: 15
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '400',
        marginHorizontal: 15
    },
});

export default NewTripView;