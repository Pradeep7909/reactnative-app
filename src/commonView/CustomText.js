import React from "react";
import { Text } from "react-native";

const CustomText = ({ data, style }) => {
    return (
        <Text style={style}>
            {data}
        </Text>
    )
}

export default CustomText;