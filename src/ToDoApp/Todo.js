import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoList from "./TodoList";
import TodoAddTask from "./TodoAdd";

const Stack = createNativeStackNavigator();
const Todo = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="todoList"
                screenOptions={{ headerShown: false }} >
                <Stack.Screen name="todoList" component={TodoList} />
                <Stack.Screen name="addTask" component={TodoAddTask} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}


export default Todo;