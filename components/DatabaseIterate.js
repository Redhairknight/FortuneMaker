import firebaseConfig from "../config/firebase";
import * as firebase from "firebase";
import 'firebase/firestore';

// Retrieve data from database. link is the 
//adress of the data need to be retrieved

export function getTrans(){
    
    var transList = [];
    
    var q = firebase.database().ref('Transaction');
    q.once('value', snapshot => {
        snapshot.forEach(function(data) {
            let result = data.val();
            result['key'] = data.key;
            transList.push(result);
        })
    })

    return transList;
}