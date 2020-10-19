import React, { Component, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar,Text, View, ScrollView, ImageBackground, Image, Button, TouchableHighlight, Modal } from 'react-native';
import { ceil } from 'react-native-reanimated';
import retrieveDatabse from "../components/DatabaseManager";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import  Swipeable  from 'react-native-gesture-handler/Swipeable';
// import firebase
import firebaseConfig from "../config/firebase";
import * as firebase from 'firebase'
// import component
import AppTextInput from '../components/AppTextInput';
import ListItem from '../components/ListItem';
// import ListItemDeleteAction from '../components/ListItemDeleteAction';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const initialMessages = [
    {
        id:1,
        title: 'PS5',
        description: 'Save some money from shopping',
        image: require('../assets/Welcome/money.png')
    },
    {
        id:2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/Welcome/money.png')
    },
]
// use for sign out
import { NavigationActions } from "react-navigation";

function SavingTwo(props) {
        const [messages, setMessages] = useState(initialMessages);
        const [refreshing, setRefreshing] = useState(false);

        const [modalVisible, setModalVisible] = useState(false);

        const handleDelete = message => {
            // delete message
            setMessages(messages.filter(m => m.id !== message.id))
            // call the server
        }

        return (
            <SafeAreaView style={styles.screen}>
                <Image style={styles.image} source={require('../assets/g_back.jpg')} />   
                <View style={styles.inLine}>
                    <TouchableHighlight style={styles.button} onPress={() => setModalVisible(true)}>
                        <Text style={styles.text}>Set up Goal!</Text>
                    </TouchableHighlight>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}>
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <AntDesign name="close" size={24} color="black" style={styles.closeTag} onPress={() => {
                        setModalVisible(!modalVisible);}}/>
                    <AppTextInput 
                        keyboardType="email-address"
                        onChangeText={text => setEmail(text)}
                        autoCorrect={false}
                        autoCapitalize= 'none'
                        icon = 'email'
                        placeholder="Your Goal"
                        textContentType="emailAddress"
                        />
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon='lock'
                        onChangeText={text => setPassword(text)}
                        placeholder="Describe it"
                        secureTextEntry
                        textContentType="emailAddress"
                        />
                    <Button title="Create" onPress={()=>navigation.navigate("MainScreen") && setModalVisible(!modalVisible)} />

                    </View>
                    </View>
                </Modal>

                <FlatList 
                    data={messages}
                    keyExtractor={message => message.id.toString()}
                    renderItem={({item}) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image} 
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => (
                            <TouchableWithoutFeedback onPress={() => handleDelete(item)}>
                                <View style={styles.renderContainer}>
                                    <MaterialCommunityIcons 
                                        name="trash-can"
                                        size={35}
                                        color={colors.white}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    /> )}
                    ItemSeparatorComponent={() => 
                        <View 
                        style={styles.separator} />}
                    refreshing={refreshing}
                    onRefresh={() => 
                        setMessages([{
                            id:1,
                            title: 'PS5',
                            description: '$500',
                            image: require('../assets/Welcome/money.png')
                        },
                        {
                            id:2,
                            title: 'ROG laptop',
                            description: '$2000',
                            image: require('../assets/Welcome/money.png')
                        },   
                        {
                            id:3,
                            title: 'Fendi Wallet',
                            description: '$1000',
                            image: require('../assets/Welcome/money.png')
                        },   
                        {
                            id:4,
                            title: 'AMG GTR',
                            description: '$200000',
                            image: require('../assets/Welcome/money.png')
                        },   
                        {
                            id:5,
                            title: 'ROG laptop',
                            description: '$2000',
                            image: require('../assets/Welcome/money.png')
                        },   
                        {
                            id:6,
                            title: 'ROG laptop',
                            description: '$2000',
                            image: require('../assets/Welcome/money.png')
                        },   
                    ])
                    }
                />
                
            </SafeAreaView>
        );
    }

    const styles = StyleSheet.create({
        screen: {
            // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            flex: 1,
        },
        separator: {
            width:"90%", 
            height: 2, 
            backgroundColor:colors.black,
            alignSelf: 'center'
        },
        renderContainer: {
            backgroundColor: colors.danger,
            width: 70,
            justifyContent: 'center',
            alignItems:'center',
            height: '100%',
        },
        image: {
            width: '100%',
            height: 300,
        },
        containter: {
            flexDirection:'row',
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
        modalView: {
            margin: 20,
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
    

export default SavingTwo;