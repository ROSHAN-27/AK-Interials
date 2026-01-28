import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJ8Hj2GATAlebRaqRclgV8txe3GPQRArk",
    authDomain: "ak-interials.firebaseapp.com",
    projectId: "ak-interials",
    storageBucket: "ak-interials.firebasestorage.app",
    messagingSenderId: "732442188795",
    appId: "1:732442188795:web:eb204ca6d7c178fcab495e",
    measurementId: "G-KMV2Z0XX05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
