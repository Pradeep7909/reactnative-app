import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import images from "../common/images";


const BackButton = ({ title, navigation, style }) => {


    const goToBackScreen = () => {
        navigation.goBack();
    };

    return (

        <TouchableOpacity
            style={style}
            onPress={goToBackScreen}
        >
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={images.backChevron}
                    style={styles.backImage}
                />
                <Text style={styles.backTitle}>
                    {title}
                </Text>
            </View>

        </TouchableOpacity>
    );

}


const styles = StyleSheet.create({
    backTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: '400',
    },
    backImage: {
        height: 20,
        width: 20,
        tintColor: 'white'
    },

})


export default BackButton;