import React, { useState } from "react";
import { FlatList, Image, ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import images from "../../../style/images";
import commonStyles from "../../../style/styles";
import LinearGradient from "react-native-linear-gradient";
import BackButton from "../../../commonView/backButton";
import colors from "../../../style/colors";
import { BlurView } from "@react-native-community/blur";
import CustomButtom from "../../../commonView/customButton";


const LogoImage = ({ label, image }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={image}
                style={{ height: 25, width: 25, tintColor: colors.primary }}
            />
            <Text style={{ color: colors.primary, fontSize: 12, fontWeight: 500, paddingTop: 5 }}>
                {label}
            </Text>

        </View >
    );
}

const Seprator = () => <View style={{ height: 0.7, backgroundColor: 'lightgray' }} />


const SingleIngrediant = ({ title, description, index }) => {

    const [selected, setSelected] = useState(false)

    const changeSelect = () => {
        setSelected(selected ? false : true)
    }

    return (
        <View>
            <TouchableWithoutFeedback onPress={changeSelect}>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <Image
                        style={{ height: 25, width: 25, tintColor: colors.primary, marginHorizontal: 10 }}
                        source={selected ? images.circleTick : images.circle}
                    />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontSize: 16 }}>{title}</Text>
                        <Text style={{ fontSize: 12, color: 'gray', paddingTop: 2 }}>{description}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Seprator />
        </View>
    );
}

class RecipeDetailScreen extends React.Component {

    state = {
        showOverlay: false
    }


    detail = [{ id: 1, title: "Select fresh juice and ingredients." },
    { id: 2, title: "Blend them smoothly." },
    { id: 3, title: "Customize flavor to preference." },
    { id: 4, title: "Delight customers with a friendly serving experience." },
    { id: 5, title: "Create an unforgettable experience with every sip." }
    ]

    ingredient = [
        {
            title: 'Flour',
            description: '2 cups'
        },
        {
            title: 'Baking Powder',
            description: '4 teaspoons'
        },
        {
            title: 'Salt',
            description: '1/2 teaspoons'
        },
        {
            title: 'Milk',
            description: '1 cup'
        },
        {
            title: 'Oil',
            description: '1/4 cup'
        },
        {
            title: 'Sugar',
            description: '1/2 cup'
        },
        {
            title: 'Eggs',
            description: '2'
        },

    ];


    seeIngradientAction = () => {
        console.log('seeIngradientAction Button pressed!');
        this.setState({ showOverlay: true })
    };

    hideIngradientAction = () => {
        console.log(' hideIngradientAction Button pressed!');
        this.setState({ showOverlay: false })
    };



    renderItem = ({ item, index }) => (
        <View>
            <View style={{ padding: 10, flexDirection: 'row' }}>
                <Text style={styles.count}>
                    {item.id}
                </Text>
                <Text style={styles.detailText}>{item.title}</Text>
            </View>
            {
                index < this.detail.length - 1 &&
                <Seprator />
            }

        </View>
    );

    render() {
        const { title, person, minute, image, prevScreen } = this.props.route.params;
        return (
            <View style={{ flex: 1, backgroundColor: colors.screenColor }}>

                <View style={styles.topImageView}>
                    <ImageBackground
                        source={image}
                        style={commonStyles.imageBackground}
                    />
                    <LinearGradient
                        colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.6)']}
                        style={commonStyles.gradient}
                    />
                    <BackButton
                        title={prevScreen}
                        navigation={this.props.navigation}
                        style={styles.backButton}
                    />

                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>

                <View style={styles.detail}>
                    <LogoImage
                        image={images.person}
                        label={`${person} person`}
                    />
                    <LogoImage
                        image={images.clock}
                        label={`${minute} minutes`}
                    />
                </View>

                <View style={{ padding: 15 }}>

                    <CustomButtom
                        title="See Ingredients"
                        onPress={this.seeIngradientAction}

                    />
                    <View>
                        <FlatList
                            data={this.detail}
                            renderItem={this.renderItem}
                            keyExtractor={(item) => item.id}
                            style={styles.detailList}
                            scrollEnabled={false}
                        />
                    </View>
                </View>


                <Modal
                    animationType="slide"
                    style={{ backgroundColor: 'red' }}
                    transparent={true}
                    visible={this.state.showOverlay}
                    onRequestClose={() => {
                        this.hideIngradientAction
                    }}
                >
                    <TouchableWithoutFeedback
                        onPress={this.hideIngradientAction}
                    >
                        <View style={styles.blueView}>
                            <BlurView
                                style={styles.blueView}
                                blurType="dark"
                                blurAmount={20}
                            >
                            </BlurView>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={styles.overlayView}>
                        <TouchableWithoutFeedback
                            onPress={this.hideIngradientAction}
                        >
                            <View style={{ justifyContent: 'center', alignItems: 'center', height: 45 }}>
                                <Image
                                    source={images.downChevron}
                                    style={styles.chevron}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    color: colors.primary,
                                    fontWeight: 'bold'
                                }}>
                                    Ingredients
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <Seprator />

                        {
                            this.ingredient.map((item, index) => (

                                <SingleIngrediant
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    index={index}

                                />
                            ))
                        }

                        <View style={styles.bottomButton}>
                            <CustomButtom
                                title="Add to Reminder"
                                onPress={this.hideIngradientAction}
                            />
                        </View>
                    </View>

                </Modal>






            </View>
        );
    }
}

const styles = StyleSheet.create({
    topImageView: {
        height: 250
    },
    backButton: {
        position: 'absolute',
        left: 10,
        top: 70
    },
    title: {
        position: 'absolute',
        left: 10,
        bottom: 20,
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold'
    },
    detail: {
        height: 80,
        width: "100%",
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    detailList: {
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 10
    },
    count: {
        padding: 10,
        color: 'darkgray',
        fontSize: 18

    },
    detailText: {
        fontSize: 18,
        padding: 10,
        marginRight: 5
    },


    //blur view styles
    blueView: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    overlayView: {
        position: 'absolute',
        top: 250,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },

    bottomButton: {
        position: 'absolute',
        bottom: 30,
        left: 15,
        right: 15
    },
    chevron: {
        position: 'absolute',
        left: 10,

        height: 25,
        width: 25,
        tintColor: colors.primary

    }


})

export default RecipeDetailScreen;