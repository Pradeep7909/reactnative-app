import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SingleTripView from "./TripView";
import TodoList from "../ToDoApp/TodoList";
import RecipesScreen from "../FoodApp/TabBar/Recipes/RecipesScreen";

const Tab = createMaterialTopTabNavigator();

class Test extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 100 }} />
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="First" component={RecipesScreen} />
                        <Tab.Screen name="Second" component={SingleTripView} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    }
});

export default Test;