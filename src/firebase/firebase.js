import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBvMy7B3WBQpZzY6tPLneOC6QiVyOuRsbs",
  authDomain: "expensify-866f3.firebaseapp.com",
  databaseURL: "https://expensify-866f3.firebaseio.com",
  projectId: "expensify-866f3",
  storageBucket: "expensify-866f3.appspot.com",
  messagingSenderId: "1090725983536"
 };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };