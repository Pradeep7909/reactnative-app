import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const data = {
    labels: ['1W', '1M', '3M', '6M',],
    datasets: [
        {
            data: [40, 30, 35, 10, 50, 65],
            color: () => `rgba(255, 0, 0, 1)`, // red line
            strokeWidth: 5,
        },
        {
            data: [40, 20, 30, 50, 30, 40],
            color: () => `rgba(255, 255, 0, 1)`, // yellow line
            strokeWidth: 5,
        },
    ],
};

const ChartExample = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 20, overflow: 'hidden' }}>
            <LineChart
                data={data}
                width={screenWidth - 50}
                height={250}
                chartConfig={{
                    backgroundGradientFrom: '#282654',
                    backgroundGradientTo: '#282654',
                    decimalPlaces: 1,
                    color: (opacity = 1) => `rgba(255, 255, 255,0.2)`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, 1)`,
                    propsForLabels: {
                        fontSize: 16, // Increase font size
                    },
                    propsForBackgroundLines: {
                        strokeDasharray: "", // Make lines solid
                        strokeWidth: 0.5, // Set background line width
                        stroke: `rgba(255, 255, 255, 0.2)`, // Line color
                    },
                }}
                bezier
                withDots={false} // Hide point circles
                withShadow={false} // remove downside shadow
                withHorizontalLabels={false} // hide horizontal labels
                verticalLabelRotation={0} // avoid rotation
                yAxisInterval={1}
                style={{
                    borderRadius: 16,
                    // marginLeft: -40
                }}
                fromZero // start y-axis from zero
            />
        </View>
    );
};

export default ChartExample;
