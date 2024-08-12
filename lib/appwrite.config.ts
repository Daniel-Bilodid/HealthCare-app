import * as sdk from "node-appwrite";

const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66a379e30021fb23aed9")
  .setKey(
    "fa898e0afdddb4365962ac5be9004295c7437fb893b09b9fb0f4f667949268d65a4246f14275fc16ae787c7ae4fe9c4ab6d88c2de1289138271568d5bfef707ce6200ab03fc77ca9c7e0f79e4837351b9178505369055d0ac6962d1772856817f9b75522d91f2c3e79842572f6d40b8808be9360fcdfa470de302671920634e7"
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);

export { BUCKET_ID, ENDPOINT, PATIENT_COLLECTION_ID, PROJECT_ID, DATABASE_ID };
