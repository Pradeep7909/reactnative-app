import React from "react";
import { ScrollView, StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import DeviceSize from "../../../common/device";


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

class ReviewView extends React.Component {

    safeTop = DeviceSize.safeAreaTop

    constructor(props) {
        super(props);
        this.lastPrintTime = 0;
        this.state = {
            extraBottomHeight: 0
        }

    }

    handleScroll = (event) => {
        const currentTime = new Date().getTime();
        if (currentTime - this.lastPrintTime >= 100 && this.props.index == 2) { // Check if 100ms have passed
            const offsetY = event.nativeEvent.contentOffset.y;
            this.lastPrintTime = currentTime;
            this.props.contentScrollChanged(offsetY, 2)
        }
    };

    componentDidUpdate() {
        console.log('reviewview updated')
    }

    setCurrentIndex = () => {
        if (this.props.index != 2) {
            this.props.setIndex(2)
        }

    }

    // Conditionally assign onScroll handler
    onScrollHandler = this.props.index === 2
        ? Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            {
                useNativeDriver: false,
                listener: this.handleScroll,
            }
        )
        : undefined;

    setScrollViewHeight = (event) => {
        const screenHeight = Dimensions.get('window').height;
        const contentHeight = event.nativeEvent.layout.height;
        //168 is equal to tabbar + header + safearea
        const extraBottomHeight = screenHeight - event.nativeEvent.layout.height - 124 - safeTop
        this.setState({ extraBottomHeight: extraBottomHeight > 0 ? extraBottomHeight : 0 })

        console.log(`Screen height: ${screenHeight}`);
        console.log(`Content height: ${contentHeight}`);
        console.log(`Extra bottom height: ${this.state.extraBottomHeight}`);
    }

    render() {

        const { scrollY } = this.props;

        const contentTranslateY = scrollY.interpolate({
            inputRange: [0, 300 - safeTop],
            outputRange: [0, 300 - safeTop],
            extrapolate: 'clamp',
        });


        return (
            <View style={[styles.container]}>
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{ paddingHorizontal: 15, flexGrow: 1, paddingBottom: 20 }}
                    onScroll={this.onScrollHandler}
                    ref={this.props.scrollRef}
                    scrollEventThrottle={16}
                    onScrollBeginDrag={this.setCurrentIndex}
                >
                    <Animated.View
                        style={{ transform: [{ translateY: contentTranslateY }], marginBottom: 300 - safeTop }}
                        onLayout={this.setScrollViewHeight}
                    >
                        {[1, 2, 3].map((val, ind) => (
                            <SingleDetail key={ind} />
                        ))}
                    </Animated.View>
                    <View style={{ height: this.state.extraBottomHeight }} />
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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

export default ReviewView;