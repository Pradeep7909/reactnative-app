import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const CircularProgress = ({
    size = 200,
    strokeWidth = 20,
    progressColor = "#e36622",
}) => {
    const circumference = 2 * Math.PI * (size / 2 - strokeWidth / 2);
    const dashCount = 20; // Number of dashes
    const dashLength = circumference / dashCount; // Length of each dash including gaps
    const gapLength = dashLength / 5; // Length of the gap
    const strokeDasharray = `${dashLength - gapLength}, ${gapLength}`; // Adjusting dash length to compensate gap length

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#387348' }}>
            <View style={[styles.container, { width: size, height: size }]}>
                <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    <Circle
                        cx={size / 2}
                        cy={size / 2}
                        r={size / 2 - strokeWidth / 2}
                        stroke={progressColor}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={strokeDasharray}
                    />
                </Svg>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CircularProgress;
