import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const initializingApp = () => initializeApp(firebaseConfig);

export default initializingApp;