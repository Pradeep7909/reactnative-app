import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from 'react-redux'


const HeaderView = () => {

    const cartData = useSelector((state) => state.reducer)
    const [cartItems, setCartItems] = useState(0);


    useEffect(() => {
        setCartItems(cartData.length)
    }, [cartData])


    return (
        < View style={{
            paddingTop: 50,
            backgroundColor: 'teal',
            flexDirection: 'row-reverse'


        }}>
            <View style={{ backgroundColor: "white", margin: 10, borderRadius: 20, height: 40, width: 40, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 22, color: 'teal', fontWeight: 600 }}>{cartItems}</Text>
            </View>

        </View >
    );

}

export default HeaderView;