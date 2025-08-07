import { GoogleGenerativeAI } from '@google/generative-ai';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const GEMINI_API_KEY = 'AIzaSyBoUdqqO7WWJFWdd8spfe9_2ziH1gbxacE';
export const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
export const MODEL_NAME = 'gemini-pro';

const firebaseConfig = {
  apiKey: "AIzaSyBeAZc28wYWVUXpRK-Y1vBXdDW2Gv6UJYw",
  authDomain: "cyber-519a5.firebaseapp.com",
  projectId: "cyber-519a5",
  storageBucket: "cyber-519a5.firebasestorage.app",
  messagingSenderId: "512837456837",
  appId: "1:512837456837:web:9a74a14c351d9e1b2e71ac",
  measurementId: "G-935KBYZ8E9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);