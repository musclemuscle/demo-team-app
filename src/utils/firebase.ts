// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD0JdnKXBpggmeOK5eK-xKOa-UeWxPwFAM",
	authDomain: "musclemuscle-demo.firebaseapp.com",
	projectId: "musclemuscle-demo",
	storageBucket: "musclemuscle-demo.appspot.com",
	messagingSenderId: "912020773675",
	appId: "1:912020773675:web:77b0880b2969801704c36e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
