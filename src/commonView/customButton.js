import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../style/colors";

const CustomButtom = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity
            style={[styles.buttonView, style]}
            activeOpacity={0.5}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    buttonView: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45

    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },

})

export default CustomButtom;