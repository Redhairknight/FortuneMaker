import React, {Component} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar,Text } from 'react-native';
import retrieveDatabse from "../components/DatabaseManager"

// import firebase
import firebaseConfig from "../config/firebase";
import * as firebase from 'firebase'

import ListItem from '../components/ListItem';
import { render } from 'react-native-web';
const messages = [
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

export default class SavingThree extends Component {

    // insert data
    // firebase.database().ref('users/001').set(
    //     {
    //         name:'Chang Liu',
    //         age: 21
    //     }
    // ).then(() => {
    //     console.log('Inserted');
    // }).catch((error) => {
    //     console.log(error);
    // })
    // setTimeout(() => {
        // firebase.database().ref('users').once('value', (data) => {
        //     console.log(data.toJSON());
        // });
    // }, 5000);

    constructor(props){
        super(props);
        this.state = {
            adata:'have not set up',
        }
    }

    getData(){
        setTimeout(() => {
            console.log('Our data is fetched');
            this.setState({
            adata: "app"
            })
        }, 2000)
    }

    componentDidMount(){
        this.getData();
    }

    // test = firebase.database()
    //     .ref('/users/001/age').once('value').then(snapshot => {
    //         result = snapshot.val();
    //         if(!result) return;
    //     });

    render() {
        var test = firebase.database().ref('users/001/age').once('value', (data) => {
            data.toJSON();
        });
        
        var date = retrieveDatabse("/users/001/age")
        var productName = retrieveDatabse("/investment/transactionHistory/financialProduct")
        var price = retrieveDatabse("/investment/transactionHistory/price")
        
        return (
            <SafeAreaView style={styles.screen}>
                <FlatList 
                    data={messages}
                    keyExtractor={message => message.id.toString()}
                    renderItem={({item}) => 
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image} 
                    /> }
                />
                <Text>Firebase:{date} </Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});
