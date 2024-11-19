'use server';
import { ID, Query } from "node-appwrite";
import { parseStringify } from "../utils";
import { APPOINTMENT_COLLECTION_ID, DATABASE_ID, databases, users } from "../appwrite.config";


export const createUser = async (user: CreateUserParams) => {
  try {
    // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,  // Placeholder for password if needed
      user.name
    );

    return parseStringify(newUser);
  } catch (error: any) {
    // Handle errors
    console.error("Error creating user:", error);

    // Check for existing user
    if (error && error.code === 409) {
      const document = await users.list([Query.equal('email', [user.email])]);
      return document.users[0];
    } else {
      throw new Error('User creation failed');
    }
  }
};







export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};


// export const registerPatient = async ({identificationDocument, ...patient}: RegisterUserParams) => {
//   try {
//     let file;
//     if (identificationDocument) {
//       const inputFile =
//         InputFile.fromBuffer(identificationDocument?.get("blobFile") as Blob, identificationDocument?.get("fileName") as string);

//       file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
//     }

//       console.log({
//         identificationDocumentId: file?.$id || null,
//         identificationDocumentUrl:`${ENDPOINT!}/storage/buckets/${BUCKET_ID!}/files/${file?.$id}/view?project=${PROJECT_ID!}`,
        
        
//       })
    
//       console.log(BUCKET_ID)

//     const newPatient = await databases.createDocument(
//       "672ba8f200126c09ab80"!,
//       "672bab7d000567c3ea0c"!,
//       ID.unique(),
//       {
//         identificationDocumentId: file?.$id ? file.$id : null,
//         identificationDocumentUrl: `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file?.$id}/view?project=${PROJECT_ID}`,
//         ...patient,
//       }
//     );

//     return parseStringify(newPatient);
//   } catch (error) {
//     console.error("An error occurred while creating a new patient:", error);
//   }
// };

export const getPatient = async (userId: string) => {
  try{
    const patient = await databases.listDocuments(
      "672ba9ae002e8bcbf1c8"!,
      "672bab7d000567c3ea0c"!,
      [Query.equal("userId", userId)]
    )

    return parseStringify(patient.documents[0]);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error); 
  }
}

export const createAppointments = async (
  appointment: CreateAppointmentParams
) => {
  try {
    const newAppointment = await databases.createDocument(
      "672ba8f200126c09ab80"!,
      "672bab7d000567c3ea0c"!,
      ID.unique(),
      appointment
    );

    return parseStringify(newAppointment);
    console.log(newAppointment)
  } catch (error) {
    console.error("An error occurred while creating a new appointment:", error);
  }
};











export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    const newAppointment = await databases.createDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      ID.unique(),
      appointment
    );

    return parseStringify(newAppointment);
  } catch (error) {
    console.error("An error occurred while creating a new appointment:", error);
  }
};

