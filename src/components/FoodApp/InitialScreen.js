import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../../common/colors";
import images from "../../common/images";

class InitialScreen extends Component {

    componentDidMount() {
        this.props.navigation.navigate('tabbar')
    }

    render() {
        return (
            <View style={styles.container}>

                <Image
                    source={images.vegFood}
                    style={styles.image}
                />
                <Text style={styles.text}>
                    Food App
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    image: {
        height: 250,
        width: 250,
        borderRadius: 125
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 20,
    }
})


export default InitialScreen;