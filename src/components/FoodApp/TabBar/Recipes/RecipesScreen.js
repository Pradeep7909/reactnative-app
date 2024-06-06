import React from "react";
import { FlatList, ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import images from "../../../../common/images";
import TopView from "../../../../commonView/TopView";
import commonStyles from "../../../../common/styles";

const SingleRecipe = ({ item, navigation }) => {

    const onPressRecipe = () => {
        navigation.navigate("recipeVariant", { title: item.title });
    };

    return (
        <TouchableWithoutFeedback onPress={onPressRecipe}>
            <View style={styles.singleRecipeView}>
                <ImageBackground
                    source={item.image}
                    style={commonStyles.imageBackground}
                >
                    <LinearGradient
                        colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)']}
                        style={commonStyles.gradient}
                    />

                    <Text style={styles.subtitle}>
                        {item.subtitle}
                    </Text>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>

    );
}


class RecipesScreen extends React.Component {

    recipesData = [
        {
            title: 'Breakfast',
            subtitle: 'START YOUR DAY RIGHT',
            image: images.breakFast
        },
        {
            title: 'Vegetarian',
            subtitle: 'POWER VEGETABLES',
            image: images.vegFood
        }, {
            title: 'Breakfast',
            subtitle: 'START YOUR DAY RIGHT',
            image: images.breakFast
        },
    ]



    render() {
        return (
            <View style={{ flex: 1 }}>
                <TopView
                    title="Recipes"
                />
                <FlatList
                    data={this.recipesData}
                    renderItem={({ item }) => <SingleRecipe
                        item={item}
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
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 15,
        color: 'white'
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 300,
        paddingTop: 15,
        paddingLeft: 15,
        color: 'white'
    },
    singleRecipeView: {
        height: 300,
        borderRadius: 15,
        width: "100%",
        overflow: 'hidden',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    list: {
        padding: 15,
        gap: 15,
    },

})

export default RecipesScreen;