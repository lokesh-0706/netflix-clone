import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCeVfimDD93ldXiZIjSRVSrgbOzPSkgKAY",
    authDomain: "netflix-clone-007-c16c0.firebaseapp.com",
    projectId: "netflix-clone-007-c16c0",
    storageBucket: "netflix-clone-007-c16c0.appspot.com",
    messagingSenderId: "959720875090",
    appId: "1:959720875090:web:2a52eeba79a9307a3d6b8b",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;