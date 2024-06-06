import React from "react";
import { View } from "react-native";
import CustomText from "./CustomText";
import fonts from "../assets/fonts/Font";

const SingleDetailView = ({ title, descripiton }) => {
    return (
        <View style={{ marginVertical: 10, gap: 5 }}>
            <CustomText style={fonts.textTitle16} data={title} />
            <CustomText style={fonts.textDescription14} data={descripiton} />
        </View>
    );
}

export default SingleDetailView;