import firebaseConfig from "../config/firebase";
import * as firebase from "firebase";

// Retrieve data from database. link is the 
//adress of the data need to be retrieved


function retrieveDatabse(link){
  var list = new Array();
  firebase
    .database()
    .ref(link)
    .on('value', snapshot => {
      var trains = snapshot.val();
      list.push(trains);
  });

  return list[0];


}
  export default retrieveDatabse