import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';

class CircularProgressView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    CircularProgressView
                </Text>
                <CircularProgress
                    value={100}
                    radius={120}
                    activeStrokeWidth={20}
                    inActiveStrokeWidth={20}
                    activeStrokeColor={'green'}
                    progressValueColor={''}
                    showProgressValue={false}
                    duration={10000}
                    initialValue={50}
                    dashedStrokeConfig={{
                        count: 20,
                        width: 30,
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }
});

export default CircularProgressView;