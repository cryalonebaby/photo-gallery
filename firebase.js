import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBadT3UpoKrL1ZD6zm656qoJczOx5EYuwk",
  authDomain: "photo-gallery-57149.firebaseapp.com",
  projectId: "photo-gallery-57149",
  storageBucket: "photo-gallery-57149.appspot.com",
  messagingSenderId: "969731013943",
  appId: "1:969731013943:web:8b9d40e59efd2efc58eeb2"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)