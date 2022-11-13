import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCEb90hg6vwtuVOdzQD-y2NTgMSL4vjlGI",
  authDomain: "fire-cont.firebaseapp.com",
  datebaseURL: "https://fire-cont-default-rtdb.firebaseio.com/",
  projectId: "fire-cont",
  storageBucket: "fire-cont.appspot.com",
  messagingSenderId: "929352665410",
  appId: "1:929352665410:web:cdfb5f7832e25a488120db",
};

const app = initializeApp(firebaseConfig);
export default app;
