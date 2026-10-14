import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyCQeX29VPEnx7gH7IEIwVL-BGAYwh5qRWQ',
    authDomain: 'challenge-9311e.firebaseapp.com',
    databaseURL: 'https://challenge-9311e-default-rtdb.firebaseio.com',
    projectId: 'challenge-9311e',
    storageBucket: 'challenge-9311e.firebasestorage.app',
    messagingSenderId: '564624137179',
    appId: '1:564624137179:web:db37f4096e5f5401fba5fe'
}

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getDatabase(app);

export { app, auth, db };