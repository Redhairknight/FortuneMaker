import React, { Component, useState } from 'react';
import { Modal, FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, Text, View, ScrollView, ImageBackground, Image, Button, TouchableHighlight, Alert } from 'react-native';
import { ceil } from 'react-native-reanimated';
import retrieveDatabse from "../components/DatabaseManager";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Swipeable from 'react-native-gesture-handler/Swipeable';
// import firebase
import firebaseConfig from "../config/firebase";
import * as firebase from 'firebase'
// import component
import AppTextInput from '../components/AppTextInput';
import ListItem from '../components/ListItem';
// import ListItem from '../components/ListItem';
import { getTrans } from '../components/DatabaseIterate';
// import ListItemDeleteAction from '../components/ListItemDeleteAction';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class SavingDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listingData: [],
            modalVisible: false,
            description: "",
            price: "",
        }
    }
    
    DisplayModal = () => {
        this.setModalVisible(true);
        this.state.description = ''
        this.state.price = ''
    };

    // onNavigate = () => {
    //     this.setState({isModalVisible: false}, () => formValidation())
    // };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };

    // capture the data before it loads
    componentWillMount() {
        var that = this;

        let q = firebase.database().ref('Transaction');
        var finished = [];

        q.once('value', snapshot => {
            snapshot.forEach(function (data) {
                let result = data.val();
                result['key'] = data.key;
                finished.push(result);
                // console.log("finished:" + finished)
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
        const navi = this.props.navigation;

        function formValidation() {
            console.log(price);
            console.log(description);
            if (price == '' || description == '') {
                Alert.alert("Missing something","Please fill your information",
                [
                    {
                      text: "Cancel",
                      style: "cancel"
                    },
                    { text: "OK" }
                  ])
            } else {
                modal = true;
                navi.navigate("SavingSuccess",
                    {
                        description: description,
                        price: price,
                    })
            } 
        } 

        var dataList = [];
        this.state.listingData.map(function (receive) {
            dataList.push({ x: receive.Category, y: receive.price });
            // console.log(dataList);
        })

        var modalBackgroundStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          };
        var innerStyle = {backgroundColor: '#fff', padding: 20};
        
        return (
            <SafeAreaView style={styles.screen}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={()=> this.setModalVisible(false)}>
                    <View style={[styles.modalContainer, modalBackgroundStyle]}>
                    <View style={[styles.modalView, innerStyle]}>
                    <AntDesign name="close" size={24} color="black" style={styles.closeTag} onPress={this.setModalVisible.bind(this, false)}/>
                    <AppTextInput onChangeText={(text)=>this.setState({description:text})}
                        autoCorrect={false}
                        autoCapitalize= 'none'
                        icon = 'email'
                        placeholder="Description"
                        />
                    <AppTextInput onChangeText={(text)=>this.setState({price:text})}
                        autoCorrect={false}
                        autoCapitalize= 'none'
                        icon = 'lock'
                        placeholder="Price"
                        />
                    {/* <Button title="Create" onPress={()=>formValidation() && this.setModalVisible.bind(this, false)} /> */}
                    <TouchableHighlight style={styles.button} onPress={() => formValidation(this.setModalVisible(false))}>
                        <Text style={styles.text}>Create</Text>
                    </TouchableHighlight>

                    </View>
                    </View>
                </Modal>
                <ScrollView>
                    <Image style={styles.image} source={require('../assets/g_back.jpg')} />
                    <View style={styles.inLine}>
                        <TouchableHighlight style={styles.button} onPress={this.DisplayModal}>
                            <Text style={styles.text}>Set up Goal!</Text>
                        </TouchableHighlight>
                    </View>
                    {
                        this.state.listingData.map(function (x) {
                            return (
                                <Swipeable key={x.key}>
                                    <TouchableHighlight
                                        underlayColor={colors.light}>
                                        <View style={styles.containter}>
                                            <Image style={styles.imageL} source={require('../assets/Welcome/commonwealth.png')} />
                                            <View>
                                                <Text style={styles.title}>{x.title}</Text>
                                                <Text style={styles.subTitle}>{x.description}</Text>
                                                <Text style={styles.price}>${x.price}</Text>
                                            </View>
                                        </View>
                                    </TouchableHighlight>
                                </Swipeable>
                            )
                        })
                    }
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
    },
    separator: {
        width: "90%",
        height: 2,
        backgroundColor: colors.black,
        alignSelf: 'center'
    },
    renderContainer: {
        backgroundColor: colors.danger,
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
    text: {
        color: colors.white,
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    inLine: {
        position: 'absolute',
        width: 200,
        top: 0,
        bottom: 200,
        left: 95,
        right: 0,
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
