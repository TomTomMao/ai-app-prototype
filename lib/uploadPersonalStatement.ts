import { ID, storage, databases } from "@/appwrite";
import { PersonalStatement } from "@/types";

/**
 * Don't use this in the client side
 * @param PersonalStatement
 * @returns
 */
export async function uploadPersonalStatement(
  PersonalStatement: PersonalStatement
) {
  const {
    universityName,
    universityLocation,
    courseName,
    courseLevel,
    courseUrl,
    studentName,
    file,
    username,
  } = PersonalStatement;
  // upload file and get file id and bucket id
  try {
    const { $id: fileId, bucketId: fileBucketId } = await storage.createFile(
      process.env.NEXT_PUBLIC_PERSONAL_STATEMENT_FILE_COLLECTION_ID!,
      ID.unique(),
      file
    );
    // upload personal statement to database
    try {
      const { $id: personalStatementId } = await databases.createDocument(
        process.env.NEXT_PUBLIC_PERSONAL_STATEMENT_DATABASE_COLLECTION_ID!,
        process.env.NEXT_PUBLIC_PERSONAL_STATEMENTS_TABLE_COLLECTION_ID!,
        ID.unique(),
        {
          UniversityName: universityName,
          UniversityLocation: universityLocation,
          CourseName: courseName,
          CourseLevel: courseLevel,
          CourseUrl: courseUrl,
          StudentName: studentName,
          FileId: fileId,
          FileBucketId: fileBucketId,
          Username: username,
          PSCreationTime: new Date(),
        }
      );
      return personalStatementId; // unique id of personal statement
    } catch (error) {
      // delete file if document failed to create
      await storage.deleteFile(
        process.env.NEXT_PUBLIC_PERSONAL_STATEMENT_FILE_COLLECTION_ID!,
        fileId
      );
      throw error;
    }
  } catch (error) {
    console.log(PersonalStatement)
    throw error;
  }
}
