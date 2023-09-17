import { initializeApp, getApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import 'firebase/database';

const clientCredentials = {
    apiKey: "AIzaSyDL8gOalvDEFuyfBAOCw1MMvYAcM5Io4dk",
    authDomain: "tkate-game.firebaseapp.com",
    databaseURL: "https://tkate-game-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tkate-game",
    storageBucket: "tkate-game.appspot.com",
    messagingSenderId: "658411300836",
    appId: "1:658411300836:web:a85bc58c6d7b92f5a249f1",
    measurementId: "G-6X3BSCGWED"
};


getApps().length === 0 ? initializeApp(clientCredentials) : getApp();

const db = getDatabase()

console.log(db)

export default db;