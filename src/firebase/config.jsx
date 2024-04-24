import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_EeUuxzmGIyTKHJ9yqHDuxWWHz2SmsS8",
    authDomain: "quadro-kanban-e4bf3.firebaseapp.com",
    projectId: "quadro-kanban-e4bf3",
    storageBucket: "quadro-kanban-e4bf3.appspot.com",
    messagingSenderId: "777754256225",
    appId: "1:777754256225:web:d15f81478778a333c35b20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};