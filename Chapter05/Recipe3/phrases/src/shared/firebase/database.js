import firebase from 'firebase';
import { fbConfig } from '../../config/firebase';

firebase.initializeApp(fbConfig.app);

export default firebase.database().ref(fbConfig.ref);
