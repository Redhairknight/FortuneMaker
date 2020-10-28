import React, { Component } from 'react';
import { Modal, FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, Text, View, ScrollView, ImageBackground, Image, Button, TouchableHighlight, Alert } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

// import firebase
import * as firebase from 'firebase'
// import component
import AppTextInput from '../components/AppTextInput';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class SavingGoal extends Component {
    // initialize state for Firebase array, input text and modal status
    constructor(props) {
        super(props);
        this.state = {
            listingData: [],
            modalVisible: false,
            description: "",
            price: "",
            initial: "",
        }
    }
    // call to show the modal
    DisplayModal = () => {
        this.setModalVisible(true);
        this.state.description = ''
        this.state.price = ''
        this.state.initial = ''
    };
    // set modal state
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };

    // capture the data before it loads
    componentWillMount() {
        var that = this;
        var userId = firebase.auth().currentUser.uid;
        let q = firebase.database().ref('Saving/' + userId + '/Goals/');
        var finished = [];

        q.once('value', snapshot => {
            snapshot.forEach(function (data) {
                let result = data.val();
                result['key'] = data.key;
                finished.push(result);
            })
        }).then(function () {
            that.setState({
                listingData: finished
            })
        })
    }

    render() {
        const price = this.state.price;
        const description = this.state.description;
        const initial = this.state.initial;
        const navi = this.props.navigation;
        // valide the form, if missing input value, will pop up window to remind the user
        function formValidation() {
            if (price == "" || description == "" || initial == "") {
                Alert.alert("Missing something", "Please fill your information",
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ])
            } else {
                // if success, will redirect to SavingSuceess Page and pass three params
                navi.navigate("SavingSuccess", {
                    description: description,
                    price: price,
                    initial: initial
                })
            }
        }

        // initial empty array and assign data from firebase into it
        var dataList = [];
        this.state.listingData.map(function (receive) {
            dataList.push({
                id: receive.date,
                title: receive.description,
                description: receive.price,
                value: receive.initial,
                date: receive.date,
                // image source: https://www.flaticon.com/free-icon/piggy-bank_3050243?term=saving&page=1&position=32
                image: require('../assets/Welcome/money.png')
            });
        })

        var modalBackgroundStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        };
        var innerStyle = { backgroundColor: '#fff', padding: 20 };

        return (
            <SafeAreaView style={styles.screen}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setModalVisible(false)}>
                    <View style={[styles.modalContainer, modalBackgroundStyle]}>
                        <View style={[styles.modalView, innerStyle]}>
                            <AntDesign name="close" size={24} color="black" style={styles.closeTag} onPress={this.setModalVisible.bind(this, false)} />
                            <Text style={styles.warning}>Add new Saving Goal</Text>
                            <AppTextInput onChangeText={(text) => this.setState({ description: text })}
                                autoCorrect={false}
                                autoCapitalize='none'
                                icon='playlist-check'
                                placeholder="Description"
                            />
                            <AppTextInput onChangeText={(text) => this.setState({ price: text })}
                                autoCorrect={false}
                                autoCapitalize='none'
                                icon='currency-usd'
                                placeholder="Price"
                            />
                            <AppTextInput onChangeText={(text) => this.setState({ initial: text })}
                                autoCorrect={false}
                                autoCapitalize='none'
                                icon='currency-usd'
                                placeholder="Price"
                            />
                            <TouchableHighlight style={styles.buttonTwo} onPress={() => formValidation(this.setModalVisible(false))}>
                                <Text style={styles.text}>Create</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                {/* image source: https://unsplash.com/photos/ZVprbBmT8QA */}
                <Image style={styles.image} source={require('../assets/g_back.jpg')} />
                <FlatList
                    // assign value to data in ListItem (customized component)
                    data={dataList}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            subTitle={item.description}
                            image={item.image}
                            value={item.value}
                            date={item.date}
                            onPress={() => this.setState({ date: item.date })}
                            renderRightActions={() => (
                                <TouchableWithoutFeedback onPress={this.DisplayModal}>
                                    <View style={styles.renderContainer}>
                                        <MaterialCommunityIcons
                                            name="plus"
                                            size={35}
                                            color={colors.white}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            )}
                        />)}
                    // add the separator line
                    ItemSeparatorComponent={() =>
                        <View
                            style={styles.separator} />} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    separator: {
        width: "90%",
        height: 2,
        backgroundColor: colors.black,
        alignSelf: 'center'
    },
    renderContainer: {
        backgroundColor: 'rgba(41, 241, 195, 1)',
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    image: {
        width: '100%',
        height: 300,
    },
    containter: {
        flexDirection: 'row',
        padding: 15,
    },
    imageL: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    warning: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
    },
    subTitle: {
        color: colors.medium,
    },
    price: {
        color: 'blue',
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    },
    buttonTwo: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: '60%',
        marginTop: 30,
    },
    text: {
        color: colors.white,
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    inLine: {
        position: 'relative',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        paddingBottom: 150,
    },
    modalView: {
        margin: 30,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 150,
    },
    closeTag: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
});
