import React from "react";
import { Image, StyleSheet, Text, Touchable, View, Button, Dimensions, ScrollView } from "react-native";
import HeaderView from "./Header";
import SingleProduct from "./SingleProduct";

const screenWidth = Dimensions.get('window').width;

const ProductsView = () => {

    const products = [
        {
            name: "Redme",
            color: "Black",
            price: 15000,
            image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-10-1.jpg"

        },
        {
            name: "iPhone",
            color: "White",
            price: 60000,
            image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=90&crop=false"

        },
        {
            name: "Nokia",
            color: "Blue",
            price: 8000,
            image: "https://images.ctfassets.net/wcfotm6rrl7u/mR30KMMK9smp7R7tKcY26/ca7ab686a26fefe11a7adf4e7c62243b/nokia-C12-light_mint-front_back-int.png"

        }
    ]

    return (
        < View style={styles.container}>
            <HeaderView style={{

            }} />
            <ScrollView>
                <View style={{ marginBottom: 40, paddingHorizontal: 15 }}>
                    {
                        products.map((item, index) =>
                            <SingleProduct key={index} item={item} />
                        )
                    }
                </View>

            </ScrollView>

        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    buttonContainer: {
        marginTop: 10,
        backgroundColor: 'royalblue',
        borderRadius: 45,
        width: screenWidth * 0.7
    },

});


export default ProductsView;