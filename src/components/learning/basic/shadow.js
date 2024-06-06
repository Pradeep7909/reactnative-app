import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShadowView = () => (
    <View style={styles.container}>
        <View style={styles.centerView}></View>
        <Text>testing of text</Text>
    </View>

);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    centerView: {
        height: 150,
        width: 150,
        backgroundColor: 'green',
        borderRadius: 20,

        //for shadow
        shadowColor: 'gray',
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowOffset: {
            height: 10,
            width: 10
        }

    }
})


export default ShadowView;