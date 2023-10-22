export type Location = {
  name: string;
  code: string
}

export type FileInfo = {
  buckId: string;
  fileId: string
}

export enum CourseLevel {
  Bachelor = 'Bachelor',
  Master = 'Master'
}

export type PersonalStatement = {
  universityName: string
  universityLocation: string
  courseName: string
  courseLevel: CourseLevel
  courseUrl: string
  studentName: string
  file: File
  username: string
}

