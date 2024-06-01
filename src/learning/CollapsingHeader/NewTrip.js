import React from "react";
import { StyleSheet, View, Animated, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DetailsView from "./tab1";
import GalleryView from "./tab2";
import ReviewView from "./tab3";
import colors from "../../style/colors";
import DeviceSize from "../../style/device";
import images from "../../style/images";

const Tab = createMaterialTopTabNavigator();

const Seprator = () => <View style={{ height: 0.7, backgroundColor: 'gray' }} />

class NewTripNew extends React.Component {

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



    SAFE_TOP = 44

    render() {

        const translateY = this.state.scrollY.interpolate({
            inputRange: [0, 300 - this.SAFE_TOP],
            outputRange: [0, -300 + this.SAFE_TOP],
            extrapolate: 'clamp',
        });

        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, 300 - this.SAFE_TOP],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });

        const contentScrollChanged = (offsetY, index) => {
            updatedOffset = 0;

            if (offsetY > 300 - this.SAFE_TOP) {
                updatedOffset = 300 - this.SAFE_TOP
            } else if (offsetY < 0) {
                updatedOffset = 0
            } else {
                updatedOffset = offsetY
            }


            console.log(`offset : ${offsetY}, index : ${index}`)


            if (this.detailsRef.current && index != 0) {
                this.detailsRef.current.scrollTo({ y: updatedOffset, animated: true });
            }
            if (this.galleryRef.current && index != 1) {
                this.galleryRef.current.scrollTo({ y: updatedOffset, animated: true });
            }
            if (this.reviewsRef.current && index != 2) {
                this.reviewsRef.current.scrollTo({ y: updatedOffset, animated: true });
            }

            console.log(DeviceSize.screenHeight)

        };

        const setIndex = (index) => {
            this.setState({ currentIndex: index })
        }

        return (

            <Animated.View style={{ flex: 1, transform: [{ translateY }] }}>
                <Animated.View
                    style={[{ gap: 5, position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2, }]}
                    onLayout={this.handleHeaderLayout}
                >
                    <Animated.Image style={[styles.bgImage, { opacity: imageOpacity }]} source={images.trip} />
                    <Text style={styles.title}>Mountain Trip</Text>
                    <Text style={styles.subtitle}>Mountain Trip powered by Letsgo</Text>
                    <Seprator />
                </Animated.View>
                <Animated.View
                    style={{ position: 'absolute', bottom: -300 + this.SAFE_TOP, left: 0, right: 0, top: this.state.headerHeight }}
                >
                    <NavigationContainer>
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
                                    contentScrollChanged={contentScrollChanged} scrollRef={this.detailsRef} index={this.state.currentIndex} setIndex={setIndex} />}
                            </Tab.Screen>
                            <Tab.Screen name="Gallery" >
                                {(props) => <GalleryView  {...props} scrollY={this.state.scrollY}
                                    contentScrollChanged={contentScrollChanged} scrollRef={this.galleryRef} index={this.state.currentIndex} setIndex={setIndex} />}
                            </Tab.Screen>
                            <Tab.Screen name="Reviews">
                                {(props) => <ReviewView  {...props} scrollY={this.state.scrollY}
                                    contentScrollChanged={contentScrollChanged} scrollRef={this.reviewsRef} index={this.state.currentIndex} setIndex={setIndex} />}
                            </Tab.Screen>
                        </Tab.Navigator>
                    </NavigationContainer>
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

export default NewTripNew;