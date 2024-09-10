import React from "react";
import NewTripView from "./CollapsingHeader/NewTrip";
import { NavigationContainer } from '@react-navigation/native';
import ChartExample from "./BarteosScreens/graph";
import CircularProgressView from "./BarteosScreens/CircularProgressView";
import CircularProgress from "./BarteosScreens/CircluarProgress";
// import DishUploadDemo from "./VideoClip/DishUploadDemo";
// import DishUploadGallery from "./VideoClip/DishUploadGallery";


const Learning = () => {
    return (
        <NavigationContainer>
            {/* <NewTripView /> */}
            {/* <DishUploadDemo /> */}
            {/* <DishUploadGallery /> */}
            {/* <ChartExample /> */}
            <CircularProgressView />
            {/* <CircularProgress /> */}
        </NavigationContainer>
    );
}

export default Learning;