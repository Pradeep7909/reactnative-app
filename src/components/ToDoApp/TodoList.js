import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../common/colors";
import { connect, useDispatch } from "react-redux";
import images from "../../common/images";
import { deleteTask } from "../../redux/action";



const TopView = ({ navigation }) => {

    const addNewTask = () => {
        navigation.navigate("addTask")
    }

    return (
        <View style={styles.topView}>
            <View style={styles.topContent}>
                <Text style={styles.text}>
                    Todo
                </Text>
                <TouchableOpacity
                    style={{ backgroundColor: 'white', borderRadius: 10 }}
                    onPress={addNewTask}
                >
                    <Text style={{ margin: 10, color: colors.todoPrimary, fontSize: 14, fontWeight: '600' }}>
                        + Add New
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const SingleTodoCardView = ({ task }) => {

    const dispatch = useDispatch();

    const deleteTaskFromList = (id) => {
        dispatch(deleteTask(id))
    }


    return (
        <View style={styles.todoCard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Text style={styles.taskHeading}>
                        {task.title}
                    </Text>
                    <Text style={styles.taskDescription}>
                        {task.description}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => { deleteTaskFromList(0) }}
                >
                    <Image
                        source={images.delete}
                        style={styles.delete}
                    />

                </TouchableOpacity>
            </View>
        </View>
    );
}

class TodoList extends React.Component {

    componentDidUpdate() {
        this.props.tasks.map((task) => {
            console.log(`tasks: ${task.id}`)
        })
    }

    componentDidMount() {
        this.props.tasks.map((task) => {
            console.log(`tasks: ${task.id}`)
        })
    }

    render() {

        const { tasks } = this.props;
        return (
            <View style={styles.container}>
                <TopView
                    navigation={this.props.navigation}
                />
                <View style={{ padding: 20, gap: 20 }}>
                    {
                        tasks.map((task, index) => (
                            <SingleTodoCardView key={index} task={task} />
                        ))
                    }
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: "absolute",
        bottom: 15,
        left: 15,
        right: 15
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    taskHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    },
    taskDescription: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    todoCard: {
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        shadowColor: 'gray',
        backgroundColor: 'white',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        shadowOffset: {
            height: 5,
            width: 5
        }
    },
    delete: {
        height: 30,
        width: 30,
        margin: 20,
        tintColor: colors.todoPrimary
    }

})

const mapStateToProps = (state) => ({
    tasks: state.tasks || [],
});

export default connect(mapStateToProps)(TodoList);