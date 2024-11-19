import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('672ba8f200126c09ab80')
  .setKey('standard_1343c1199f4703df67045ec964e1a3a6443c95b1ee9cbd106dd91a9a92d64b766308edaf5ddd85b1380da37afba959108bcc3dcd543db5a226fb03ad0ae39c12c075e78e0b0d54f0b026cb75fd439e4769ef0e081f1a3e19dbb9778a551d037b0297ab22260f35beecef3bb1c865210f8499e5dee41c87b7caad67ccdee88a06');

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
