import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, Touchable, View, Button, Dimensions, ScrollView } from "react-native";
import { addToCart, removeFromCart } from "../action";
import { useDispatch, useSelector } from 'react-redux'


const screenWidth = Dimensions.get('window').width;

const SingleProduct = (props) => {
    const item = props.item
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer);
    const [isAdded, setIsAdded] = useState(false);


    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    }

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item.name))
    }


    useEffect(() => {

        const itemInCart = cartItems.some(cartItem => cartItem.name === item.name);
        setIsAdded(itemInCart);

    }, [cartItems])

    return (
        <View style={{
            alignItems: "center",
            borderBottomColor: "gray",
            borderBottomWidth: 2,
            alignItems: "center",
            paddingVertical: 20
        }}>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>{item.name}</Text>
            <Text>Price: {item.price}Rs</Text>
            <Text>Color: {item.color}</Text>
            <Image style={{ height: 150, width: 100, resizeMode: "contain" }} source={{ uri: item.image }} />
            <View style={styles.buttonContainer}>
                {
                    isAdded ?
                        <Button
                            title='REMOVE FROM CART'
                            color="white"
                            onPress={() => handleRemoveFromCart(item)}
                            style={styles.button}

                        />
                        : <Button
                            title='ADD TO CART'
                            color="white"
                            onPress={() => handleAddToCart(item)}
                            style={styles.button}

                        />
                }

            </View>
        </View>


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    buttonContainer: {
        marginTop: 10,
        backgroundColor: 'royalblue',
        borderRadius: 45,
        width: screenWidth * 0.7
    },

});


export default SingleProduct;