import React from "react";
import NewTripView from "./CollapsingHeader/NewTrip";
import { NavigationContainer } from '@react-navigation/native';


const Learning = () => {
    return (
        <NavigationContainer>
            <NewTripView />
        </NavigationContainer>
    );
}

export default Learning;