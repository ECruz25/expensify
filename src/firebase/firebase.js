import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAqQir2OqNcLrUoRo1Qc39n9N7YBNucXic',
  authDomain: 'expensify-c4886.firebaseapp.com',
  databaseURL: 'https://expensify-c4886.firebaseio.com',
  projectId: 'expensify-c4886',
  storageBucket: 'expensify-c4886.appspot.com',
  messagingSenderId: '337339570083'
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').on('child_removed', snapshot => {
//   database.ref('removed_expenses').push(snapshot.key);
// });

// database.ref('expenses').on('child_changed', snapshot => {
//   database.ref('changed_expenses').push({
//     id: snapshot.key,
//     values: { ...snapshot.val() }
//   });
// });

// const firebaseNotes = {
//   notes: {
//     alksmd: {
//       title: 'First Note',
//       body: 'This is my note'
//     },
//     alksmda: {
//       title: 'Second note',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [
//   { body: 'This is my note', id: 2, title: 'Second Note' },
//   { body: 'This is my note', id: 1, title: 'First Note' }
// ];

// database.ref('notes').set(notes);
