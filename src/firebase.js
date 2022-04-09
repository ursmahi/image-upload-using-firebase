import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBuxMgJYoK0fwx09RIs28lOWHJEMbAV_XY",
  authDomain: "fileupload-340df.firebaseapp.com",
  projectId: "fileupload-340df",
  storageBucket: "fileupload-340df.appspot.com",
  messagingSenderId: "157121712120",
  appId: "1:157121712120:web:9ca41fa3c943552024d00d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);