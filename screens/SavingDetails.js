import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';

// import firebase
import * as firebase from 'firebase'
// import component
import colors from '../config/colors';

export default class SavingDetail extends Component {
    // initialze state and construct the empty array
    constructor(props){
        super(props);
        this.state = {
            listingData: []
        }
    }

    // capture the data before it loads
    // this method is inspired by "Beginner Programmers" on:
    // https://www.youtube.com/watch?v=1jIKovuhtAU&t=615s&ab_channel=BeginnerProgrammers
    componentWillMount(){
        var that = this;
        var userId = firebase.auth().currentUser.uid;
        let trans = firebase.database().ref('Transaction/' + userId);
        var finished = [];

        // retreive array using foreach in firebase
        trans.once('value', snapshot => {
            snapshot.forEach(function(data) {
                let result = data.val();
                result['key'] = data.key;
                finished.push(result);
            })}).then(function(){
            that.setState({
                listingData: finished
            })
        })
    }
    
    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <ScrollView>
                    {/* image source: https://unsplash.com/photos/6EnTPvPPL6I */}
                    <Image style={styles.image} source={require('../assets/t_back.jpg')} />
                    {
                        this.state.listingData.map(function(x){
                            return(
                                <Swipeable key={x.key}>
                                    <TouchableHighlight 
                                        underlayColor={colors.light}>
                                        <View style={styles.containter}>
                                            {/* image source: https://favpng.com/png_view/commonwealth-bank-logo-logo-commonwealth-bank-brand-organization-png/3t2F5asF */}
                                            <Image style={styles.imageL}source={require('../assets/Welcome/commonwealth.png')}/>
                                            <View>
                                                <Text style={styles.title}>{x.name}</Text>
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
