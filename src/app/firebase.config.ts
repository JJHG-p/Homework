import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyAvsqfEh264r3SE0svphjinVOTWXTiYv04',
    authDomain: 'parcial-02-c5d82.firebaseapp.com',
    databaseURL: 'https://parcial-02-c5d82-default-rtdb.firebaseio.com',
    projectId: 'parcial-02-c5d82',
    storageBucket: 'parcial-02-c5d82.firebasestorage.app',
    messagingSenderId: '449736877022',
    appId: '1:449736877022:web:ec24051752f87b75ccf34f'
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getDatabase(app);

export { app, auth, db };