import React, { Component, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar,Text, View, ScrollView, ImageBackground, Image, Button, TouchableHighlight } from 'react-native';
import { ceil } from 'react-native-reanimated';
import retrieveDatabse from "../components/DatabaseManager";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ListItem, Divider } from 'react-native-elements';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';
// import firebase
import firebaseConfig from "../config/firebase";
import * as firebase from 'firebase'
// import component
// import ListItem from '../components/ListItem';
import {getTrans} from '../components/DatabaseIterate';
// import ListItemDeleteAction from '../components/ListItemDeleteAction';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const initialMessages = [
    {
        id:1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/Welcome/commonwealth.png')
    },
    {
        id:2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/Welcome/alipay.png')
    },
]

// function Transaction(props) {
//         const [messages, setMessages] = useState(initialMessages);
//         const [refreshing, setRefreshing] = useState(false);

//         const handleDelete = message => {
//             // delete message
//             setMessages(messages.filter(m => m.id !== message.id))
//             // call the server
//         }

//         return (
//             <SafeAreaView style={styles.screen}>
//                 <Image style={styles.image} source={require('../assets/t_back.jpg')} />
//                 <FlatList 
//                     data={messages}
//                     keyExtractor={message => message.id.toString()}
//                     renderItem={({item}) => (
//                     <ListItem
//                         title={item.title}
//                         subTitle={item.description}
//                         image={item.image} 
//                         onPress={() => console.log("Message selected", item)}
//                         renderRightActions={() => (
//                             <TouchableWithoutFeedback onPress={() => handleDelete(item)}>
//                                 <View style={styles.renderContainer}>
//                                     <MaterialCommunityIcons 
//                                         name="trash-can"
//                                         size={35}
//                                         color={colors.white}
//                                     />
//                                 </View>
//                             </TouchableWithoutFeedback>
//                         )}
//                     /> )}
//                     ItemSeparatorComponent={() => 
//                         <View 
//                         style={styles.separator} />}
//                     refreshing={refreshing}
//                     onRefresh={() => 
//                         setMessages([{
//                             id:1,
//                             title: 'T1',
//                             description: 'D1',
//                             image: require('../assets/Welcome/commonwealth.png')
//                         },
//                         {
//                             id:2,
//                             title: 'T2',
//                             description: 'D2',
//                             image: require('../assets/Welcome/alipay.png')
//                         },   
//                     ])
//                     }
//                 />
                
//             </SafeAreaView>
//         );
//     }

export default class SavingDetail extends Component {

    constructor(props){
        super(props);

        this.state = {
            listingData: []
        }
    }

    // capture the data before it loads
    componentWillMount(){
    
        var that = this;

        let q = firebase.database().ref('Transaction');
        var finished = [];

        q.once('value', snapshot => {
            snapshot.forEach(function(data) {
                let result = data.val();
                console.log(result);
                result['key'] = data.key;
                finished.push(result);
            })
        }).then(function(){
            that.setState({
                listingData: finished
            })
        })
    }
    
    render() {             
        return (
            <SafeAreaView style={styles.screen}>
                <ScrollView>
                    <Image style={styles.image} source={require('../assets/t_back.jpg')} />
                    {
                        this.state.listingData.map(function(x){
                            return(
                                <Swipeable key={x.key}>
                                    <TouchableHighlight 
                                        underlayColor={colors.light}>
                                        <View style={styles.containter}>
                                            <Image style={styles.imageL}source={require('../assets/Welcome/commonwealth.png')}/>
                                            <View>
                                                <Text style={styles.title}>{x.title}</Text>
                                                <Text style={styles.subTitle}>{x.description}</Text>
                                                <Text style={styles.price}>${x.price}</Text>
                                            </View>
                                        </View>
                                    </TouchableHighlight>
                                
                                {/* <View>
                                <Text>{x.description}</Text>
                                <Text>{x.price}</Text>
                                <Text>{x.title}</Text>
                                </View> */}
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
    }
});
