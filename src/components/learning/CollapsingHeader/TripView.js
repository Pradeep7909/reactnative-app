import React from "react";
import { ImageBackground, StyleSheet, View, Text, ScrollView, TouchableOpacity, Animated } from "react-native";
import images from "../common/images";
import colors from "../common/colors";


const SingleTabView = ({ title, index, selectedIndex, onPress }) => {
    const isSelected = index == selectedIndex
    return (
        <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: '400', color: isSelected ? colors.tripRed : 'gray' }}>
                {title}
            </Text>
            <View style={{ height: 1.5, backgroundColor: isSelected ? colors.tripRed : 'transparent' }} />
        </TouchableOpacity>
    );
}


const Seprator = () => <View style={{ height: 0.7, backgroundColor: 'gray' }} />

const SingleDetail = ({ title, descripiton }) => {
    return (
        <View style={{ marginVertical: 10, gap: 5 }}>

            <Text style={styles.detailTitle}>
                Breathtaking Views
            </Text>
            <Text style={styles.detailDescription}>
                Witness the stunning beauty of mountain landscapes, from the first light of dawn breaking over the peaks to the golden hues of sunset. Every moment offers a picturesque scene that is perfect for nature lovers and photography enthusiasts alike.
            </Text>
        </View>
    );
}

class SingleTripView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0,
            parentScrollEnabled: true,
            parentScrollY: 0,
            imageTopMargin: 0,
            scrollY: new Animated.Value(0)

        }
    }

    safeTop = DeviceSize.safeAreaTop
    changeTab = (index) => {
        this.setState({ selectedTab: index });
    }

    handleChildScroll = (event) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        console.log(`Child scrollY: ${scrollY}`)
        if (scrollY < 300 && scrollY > 0) {
            this.setState({ imageTopMargin: scrollY })
        } else if (scrollY < 0) {
            this.setState({ imageTopMargin: 0 })
        } else if (scrollY > 300) {
            this.setState({ imageTopMargin: 300 })
        }
    }

    render() {

        const { scrollY } = this.state;

        const translateY = scrollY.interpolate({
            inputRange: [0, 300 - safeTop],
            outputRange: [0, -300 + safeTop],
            extrapolate: 'clamp',
        });
        const imageOpacity = scrollY.interpolate({
            inputRange: [0, 300 - safeTop],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });




        console.log('view rerender....')


        return (

            <View style={styles.container}>
                <Animated.View style={[{ transform: [{ translateY }], gap: 5, position: 'absolute', width: '100%', zIndex: 2 }]}>
                    <Animated.Image style={[styles.bgImage, { opacity: imageOpacity }]} source={images.trip} />
                    <Text style={styles.title}>Mountain Trip</Text>
                    <Text style={styles.subtitle}>Mountain Trip powered by Letsgo</Text>
                    <Seprator />
                    <View style={[styles.tabs]}>
                        <SingleTabView
                            title="Details" index={0} selectedIndex={this.state.selectedTab} onPress={() => { this.changeTab(0) }} />
                        <SingleTabView
                            title="Gallery" index={1} selectedIndex={this.state.selectedTab} onPress={() => { this.changeTab(1) }} />
                        <SingleTabView
                            title="Reviews" index={2} selectedIndex={this.state.selectedTab} onPress={() => { this.changeTab(2) }} />
                    </View>
                    <Seprator />
                </Animated.View>


                <Animated.View style={{ flex: 1, position: 'absolute', bottom: 0, left: 0, right: 0, top: 100 + safeTop }}>
                    <Animated.ScrollView
                        contentContainerStyle={{ paddingTop: 300 - safeTop }}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                            { useNativeDriver: false },
                        )}
                        style={{ margin: 15 }}
                    >
                        <Animated.View style={{ flex: 1 }}>
                            {[1, 2, 3, 4, 5, 6, 7].map((val, ind) => (
                                <SingleDetail key={ind} />
                            ))}


                        </Animated.View>
                    </Animated.ScrollView>
                </Animated.View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    topView: {

    },
    bottomView: {

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
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    detailTitle: {
        fontSize: 16,
        fontWeight: '600',

    },
    detailDescription: {
        fontSize: 14,
        fontWeight: '400',
        color: 'darkgary'

    }

});

export default SingleTripView;