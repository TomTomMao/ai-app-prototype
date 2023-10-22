import { ID, storage } from "@/appwrite";

export async function uploadPDF (file: File) {
    if (!file) return;

    const fileUploaded = await storage.createFile(
      process.env.NEXT_PUBLIC_PERSONAL_STATEMENT_COLLECTION_ID!,
      ID.unique(),
      file
    );
    return fileUploaded
}