import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableWithoutFeedback, FlatList } from "react-native";
import colors from "../../../style/colors";
import BackButton from "../../../commonView/backButton";
import LinearGradient from "react-native-linear-gradient";
import images from "../../../style/images";
import commonStyles from "../../../style/styles";


const RecipeDetail = ({ item, navigation, header }) => {
    const onPressRecipe = () => {

        navigation.navigate("recipeDetail", {
            title: item.title,
            person: item.person,
            minute: item.minute,
            image: item.image,
            prevScreen: header
        });
    };


    return (
        <TouchableWithoutFeedback onPress={onPressRecipe}>
            <View style={styles.singleRecipeView}>
                <ImageBackground
                    source={item.image}
                    style={commonStyles.imageBackground}
                >
                    <LinearGradient
                        colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.6)']}
                        style={commonStyles.gradient}
                    />

                    <View style={styles.innerView}>
                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                        <Text style={styles.subtitle}>
                            {item.person} person  |  {item.minute} minutes
                        </Text>
                    </View>

                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>

    );
}



class RecipeVariantScreen extends Component {

    recipesData = [
        {
            title: 'Morning Smoothies',
            person: 1,
            minute: 10,
            image: images.juice
        },
        {
            title: 'Fruity Oatmeal',
            person: 2,
            minute: 20,
            image: images.vegFood
        },
        {
            title: 'Samosa',
            person: 4,
            minute: 10,
            image: images.samosa
        },
        {
            title: 'Poha',
            person: 1,
            minute: 5,
            image: images.poha
        }
    ]

    render() {

        const { title } = this.props.route.params;

        return (
            <View style={styles.container}>
                <View style={styles.topView}>

                    <BackButton
                        title="Recipes"
                        navigation={this.props.navigation}
                        style={styles.backButton}
                    />
                    <Text style={styles.header}>
                        {title}
                    </Text>
                </View>
                <FlatList
                    data={this.recipesData}
                    renderItem={({ item }) => <RecipeDetail
                        item={item}
                        header={title}
                        navigation={this.props.navigation}
                    />}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.list}
                />

            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topView: {
        height: 100,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',


    },
    header: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
        margin: 10
    },
    singleRecipeView: {
        height: 150,
        borderRadius: 15,
        width: "100%",
        overflow: 'hidden',

    },

    list: {
        padding: 15,
        gap: 15
    },
    innerView: {
        justifyContent: 'space-between',
        width: "100%",
        height: "100%",
        padding: 10
    },
    title: {
        fontSize: 26,
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500'

    },
    backButton: {
        position: 'absolute',
        left: 10,
        bottom: 10
    },

})


export default RecipeVariantScreen;