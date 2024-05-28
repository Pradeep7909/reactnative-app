import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InitialScreen from "./InitialScreen";
import BottomTabBar from "./TabBar/BottomTabBar";
import { Text, View } from "react-native";
import RecipeVariantScreen from "./TabBar/Recipes/RecipeVariantScreen";
import RecipeDetailScreen from "./TabBar/Recipes/RecipeDetailScreen";

const Stack = createNativeStackNavigator();

const FoodApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="initial"
                screenOptions={{ headerShown: false }} >
                <Stack.Screen name="initial" component={InitialScreen} />
                <Stack.Screen name="tabbar" component={BottomTabBar} />
                <Stack.Screen name="recipeVariant" component={RecipeVariantScreen} />
                <Stack.Screen name="recipeDetail" component={RecipeDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}


export default FoodApp;