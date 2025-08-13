import { GoogleGenerativeAI } from '@google/generative-ai';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

export const GEMINI_API_KEY = 'AIzaSyBoUdqqO7WWJFWdd8spfe9_2ziH1gbxacE';
export const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
export const MODEL_NAME = 'gemini-2.0-flash';

const firebaseConfig = {
  apiKey: "AIzaSyAh01cQUE6qMNAQLELHcgOTteci2XDOoY0",
  authDomain: "cyberbully-report.firebaseapp.com",
  projectId: "cyberbully-report",
  storageBucket: "cyberbully-report.firebasestorage.app",
  messagingSenderId: "506302830342",
  appId: "1:506302830342:web:8e10532ec5479199d2b087",
  measurementId: "G-K3RLFXYT05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

