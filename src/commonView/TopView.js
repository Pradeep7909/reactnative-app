import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../style/colors";
const TopView = ({ title }) => {

    return (
        <View style={styles.topView}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    topView: {
        height: 150,
        backgroundColor: colors.primary
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 100,
        paddingLeft: 20,
        color: 'white'
    }
})

export default TopView;