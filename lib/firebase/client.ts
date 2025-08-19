import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB_11tcDfTf6K9mD70lTFG6EHTPuTdgoN0",
  authDomain: "grandhyatt-71946.firebaseapp.com",
  projectId: "grandhyatt-71946",
  storageBucket: "grandhyatt-71946.firebasestorage.app",
  messagingSenderId: "327834275928",
  appId: "1:327834275928:web:e2ec1b59882fed5ff47a2d",
  measurementId: "G-J1H03Y1NBX"
};

export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
