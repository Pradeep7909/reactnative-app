
import React from "react";
import { ScrollView, StyleSheet, Text, View, Animated } from "react-native";
import DeviceSize from "../../../common/device";
import SingleDetailView from "../../../commonView/SingleDetailView";


class GalleryView extends React.Component {

    safeTop = DeviceSize.safeAreaTop

    constructor(props) {
        super(props);
        this.lastPrintTime = 0;
    }

    handleScroll = (event) => {
        const currentTime = new Date().getTime();
        if (currentTime - this.lastPrintTime >= 100 && this.props.index == 1) { // Check if 100ms have passed
            const offsetY = event.nativeEvent.contentOffset.y;
            this.lastPrintTime = currentTime;
            this.props.contentScrollChanged(offsetY, 1)
        }
    };

    componentDidUpdate() {
        console.log('galleryView updated')
    }


    setCurrentIndex = () => {
        if (this.props.index != 1) {
            this.props.setIndex(1)
        }

    }

    render() {

        const { scrollY } = this.props;

        const contentTranslateY = scrollY.interpolate({
            inputRange: [0, 300 - safeTop],
            outputRange: [0, 300 - safeTop],
            extrapolate: 'clamp',
        });
        // Conditionally assign onScroll handler
        onScrollHandler = this.props.index === 1
            ? Animated.event(
                [{ nativeEvent: { contentOffset: { y: this.props.scrollY } } }],
                {
                    useNativeDriver: false,
                    listener: this.handleScroll,
                }
            )
            : undefined;



        return (
            <View style={[styles.container]}>
                <ScrollView
                    contentContainerStyle={{ paddingHorizontal: 15, flexGrow: 1, paddingBottom: 20 }}
                    onScroll={onScrollHandler}
                    ref={this.props.scrollRef}
                    scrollEventThrottle={16}
                    onScrollBeginDrag={this.setCurrentIndex}
                >
                    <Animated.View style={{ transform: [{ translateY: contentTranslateY }], marginBottom: 300 - safeTop }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((val, ind) => (
                            <SingleDetailView key={ind} title={"Breathtaking Views"} descripiton={"Witness the stunning beauty of mountain landscapes, from the first light of dawn breaking over the peaks to the golden hues of sunset. Every moment offers a picturesque scene that is perfect for nature lovers and photography enthusiasts alike."} />
                        ))}
                    </Animated.View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default GalleryView;