"use server";

import { ID } from "node-appwrite";
import {
  BUCKET_ID,
  DATABASE_ID,
  databases,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
} from "../appwrite.config";
import { parseStringify } from "../utils";

export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    console.log("Creating appointment with data:", appointment);
    const newAppointment = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      appointment
    );
    return parseStringify(newAppointment);
  } catch (error) {
    console.error("Error creating appointment:", error);
  }
};
