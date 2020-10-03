import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCN1A--btq9HySyfzyWLOuT9fA2hwKeeXo',
	authDomain: 'clone-405b1.firebaseapp.com',
	databaseURL: 'https://clone-405b1.firebaseio.com',
	projectId: 'clone-405b1',
	storageBucket: 'clone-405b1.appspot.com',
	messagingSenderId: '602019625453',
	appId: '1:602019625453:web:c4ce305ce2c3c3e7d3cfe4',
	measurementId: 'G-G9PW1PLPCE'
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};