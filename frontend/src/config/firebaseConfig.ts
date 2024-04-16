import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirebaseKeys } from "../apiServices/firebaseApi";

const fetchKeys = async () => {
  return await getFirebaseKeys();
}

const data = await fetchKeys();

const firebaseConfig = {
  apiKey: data?.firebaseApiKey,
  authDomain: data?.firebaseAuthDomain,
  projectId: data?.firebaseProjectId,
  storageBucket: data?.firebaseStorageBucket,
  messagingSenderId: data?.firebaseMessagingSenderId,
  appId: data?.firebaseAppId
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);

export { firebaseAuth };