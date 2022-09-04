import * as firebase from "firebase/app"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCqKOrLfAOXmoG5-wz1xqSfLKwHFUFJFwQ",
    authDomain: "vue3-taskcreationapp.firebaseapp.com",
    projectId: "vue3-taskcreationapp",
    storageBucket: "vue3-taskcreationapp.appspot.com",
    messagingSenderId: "544197672593",
    appId: "1:544197672593:web:037a71e1bf5d38e3f44930",
    measurementId: "G-YRY4W1TVD3"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(firebaseApp);

  // simple event
  analytics()

  export const db = firebaseApp.firestore()