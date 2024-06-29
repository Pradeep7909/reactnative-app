import React from "react";
import NewTripView from "./CollapsingHeader/NewTrip";
import { NavigationContainer } from '@react-navigation/native';
import ChartExample from "./graph/graph";
// import DishUploadDemo from "./VideoClip/DishUploadDemo";
// import DishUploadGallery from "./VideoClip/DishUploadGallery";


const Learning = () => {
    return (
        <NavigationContainer>
            {/* <NewTripView /> */}
            {/* <DishUploadDemo /> */}
            {/* <DishUploadGallery /> */}
            <ChartExample />
        </NavigationContainer>
    );
}

export default Learning;