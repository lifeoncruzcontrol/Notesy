import { isFirebaseJSON } from "../jsonValidation/firebaseJSONValidation";

export const getFirebaseKeys = async () => {
  try {
    const res = await fetch('http://localhost:3000/firebase/getKeys');
    if(!res.ok){
      throw new Error(`HTTP error. Status ${res.status}`);
    }
    const data = await res.json();
    
    if(!isFirebaseJSON(data)){
      throw new Error('Invalid data: expected JSON with firebase keys');
    }

    return data;
  } catch (err) {
    console.error('Error fetching data: ', err);
  }
};