import React from "react";
import NewTripView from "./CollapsingHeader/NewTrip";
import { NavigationContainer } from '@react-navigation/native';
// import DishUploadDemo from "./VideoClip/DishUploadDemo";
// import DishUploadGallery from "./VideoClip/DishUploadGallery";


const Learning = () => {
    return (
        <NavigationContainer>
            <NewTripView />
            {/* <DishUploadDemo /> */}
            {/* <DishUploadGallery /> */}
        </NavigationContainer>
    );
}

export default Learning;