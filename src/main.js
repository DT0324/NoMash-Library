import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'


const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXF2rG2BqM7s4n8XQQ4Tm5DR06njcwwqM",
  authDomain: "fit5032-11789.firebaseapp.com",
  projectId: "fit5032-11789",
  storageBucket: "fit5032-11789.firebasestorage.app",
  messagingSenderId: "579980308236",
  appId: "1:579980308236:web:3fe1f46609f2d568302329",
  measurementId: "G-0JC19ZGCK3"
};

// Initialize Firebase
initializeApp(firebaseConfig);



