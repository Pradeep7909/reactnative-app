import React from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecipesScreen from "./Recipes/RecipesScreen";
import RestaurantsScreen from "./Restaurants/RestaurantsScreen";
import colors from "../../../common/colors";
import images from "../../../common/images";

const Tab = createBottomTabNavigator();

class BottomTabBar extends React.Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { ...styles.tabContainer }, // Provide container style as required...
                    tabBarShowLabel: false, // It would hide the default label as we're customising the TabItems as well...
                    headerShown: false
                }}
            >
                <Tab.Screen
                    name="recipe"
                    component={RecipesScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={images.recipeTab}
                                style={[styles.image, { tintColor: focused ? 'green' : 'gray' }]}
                            />
                        )

                    }}
                />
                <Tab.Screen
                    name="restaurant"
                    component={RestaurantsScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={images.restaurantTab}
                                style={[styles.image, { tintColor: focused ? 'green' : 'gray' }]}
                            />
                        )

                    }}
                />

            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: 'white',
        borderTopColor: 'lightgray',
        borderTopWidth: 1
    },
    image: {
        width: 30, height: 30
    }
});

export default BottomTabBar;