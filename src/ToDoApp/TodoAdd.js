import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import colors from "../style/colors";
import BackButton from "../commonView/backButton";
import CustomButtom from "../commonView/customButton";
import { connect } from "react-redux";
import { addNewTask, addToCart } from "../mobileCart-redux/action";


const TopView = ({ navigation }) => {

    return (
        <View style={styles.topView}>
            <View style={styles.topContent}>
                <BackButton
                    title="Todo"
                    navigation={navigation}
                />
                <Text style={styles.text}>
                    Add New Task
                </Text>
            </View>
        </View>
    );
}

const CustomInputView = ({ title, placeholder, inputData, onChangeText }) => {
    return (
        <View style={styles.inputView}>
            <Text style={styles.inputLabel}>
                {title}
            </Text>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                onChangeText={onChangeText}
                value={inputData}
            />
        </View>
    );
}







class TodoAddTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: '',
            description: ''
        };
    }
    addTask = () => {

        // const item = {

        //     name: "Redme",
        //     color: "Black",
        //     price: 15000,
        //     image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-10-1.jpg"



        // }

        // this.props.addToCart(item);
        console.log(`task: ${this.state.task}, description: ${this.state.description}`)
        const { task, description } = this.state;
        if (task.trim() !== '') {
            const newTask = {
                title: task,
                description: description
            };
            this.props.addNewTask(newTask);
            this.props.navigation.goBack();
        }
    };


    render() {
        return (
            <View style={styles.container}>

                <TopView
                    navigation={this.props.navigation}
                />
                <View style={styles.content}>


                    <CustomInputView
                        title="Task"
                        placeholder="Enter your task here."
                        inputData={this.state.task}
                        onChangeText={(data) => {
                            this.setState({ task: data })
                        }
                        }
                    />
                    <CustomInputView
                        title="Description"
                        placeholder="Enter your task Description here."
                        inputData={this.state.description}
                        onChangeText={(data) => {
                            this.setState({ description: data })
                        }
                        }
                    />
                    <CustomButtom
                        title="Add Task"
                        style={styles.button}
                        onPress={this.addTask}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        height: 150,
        backgroundColor: colors.todoPrimary
    },
    topContent: {
        justifyContent: 'space-between',
        alignItems: '',
        position: "absolute",
        top: 60,
        bottom: 15,
        left: 15,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    inputView: {
        paddingBottom: 20
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        fontSize: 16
    },
    inputLabel: {
        paddingBottom: 5,
        fontSize: 16,
        fontWeight: '500'
    },
    button: {
        marginTop: 10,
        backgroundColor: colors.todoPrimary
    },
    content: {
        padding: 20
    }

})


const mapDispatchToProps = {
    addNewTask,
    addToCart
};

export default connect(null, mapDispatchToProps)(TodoAddTask);