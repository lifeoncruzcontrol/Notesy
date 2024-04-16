import type { FirebaseJSON } from "../interfaces/firebaseJSON";

export function isFirebaseJSON(value: unknown): value is FirebaseJSON {
  if(!value || typeof value !== 'object'){
    return false;
  }
  const object = value as Record<string, unknown>;
  
  return object.hasOwnProperty("firebaseApiKey") &&
  object.hasOwnProperty("firebaseAppId") &&
  object.hasOwnProperty("firebaseAuthDomain") &&
  object.hasOwnProperty("firebaseMeasurementId") &&
  object.hasOwnProperty("firebaseMessagingSenderId") &&
  object.hasOwnProperty("firebaseProjectId") &&
  object.hasOwnProperty("firebaseStorageBucket") &&
  typeof object.firebaseApiKey == 'string' &&
  typeof object.firebaseAppId == 'string' &&
  typeof object.firebaseAuthDomain == 'string' &&
  typeof object.firebaseMeasurementId == 'string' &&
  typeof object.firebaseMessagingSenderId == 'string' &&
  typeof object.firebaseProjectId == 'string' &&
  typeof object.firebaseStorageBucket == 'string';
};