'use client'

import { useEffect, useState } from 'react'
import React from 'react'
import { useLocation } from "@/hook/useLocation"
import { uploadPersonalStatement } from "@/lib/uploadPersonalStatement"

import { CourseLevel } from "@/types"

type FormData = {
  universityName: string
  universityLocation: string
  courseName: string
  courseLevel: CourseLevel
  courseUrl: string
  studentName: string
  file: File | null
}

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    universityName: '',
    universityLocation: '',
    courseName: '',
    courseLevel: CourseLevel.Bachelor,
    courseUrl: '',
    studentName: '',
    file: null,
  })
  const setUniversityName = (e: React.ChangeEvent<HTMLInputElement>
  ) => setFormData({ ...formData, universityName: e.target.value })
  const setUniversityLocation = (e: React.ChangeEvent<HTMLSelectElement>
  ) => setFormData({ ...formData, universityLocation: e.target.value })
  const setCourseName = (e: React.ChangeEvent<HTMLInputElement>
  ) => setFormData({ ...formData, courseName: e.target.value })
  const setCourseLevel = (e: React.ChangeEvent<HTMLSelectElement>
  ) => setFormData({ ...formData, courseLevel: e.target.value as CourseLevel })
  const setCourseUrl = (e: React.ChangeEvent<HTMLInputElement>
  ) => setFormData({ ...formData, courseUrl: e.target.value })
  const setStudentName = (e: React.ChangeEvent<HTMLInputElement>
  ) => setFormData({ ...formData, studentName: e.target.value })
  const setFile = (e: React.ChangeEvent<HTMLInputElement>
  ) => setFormData({ ...formData, file: e.target.files ? e.target.files[0] : null })

  const locations = useLocation()
  // set default location as the first one when location changed
  useEffect(() => {
    if (locations.length > 0) {
      setFormData(prevFormData => ({ ...prevFormData, universityLocation: locations[0].name }))
    }
  }, [locations])

  const courseLevels = Object.values(CourseLevel)
  const username = 'Tom'

  const handleSubmit = () => {
    if (!formData.file) return
    uploadPersonalStatement({
      universityName: formData.universityName,
      universityLocation: formData.universityLocation,
      courseName: formData.courseName,
      courseLevel: formData.courseLevel,
      courseUrl: formData.courseUrl,
      studentName: formData.studentName,
      file: formData.file,
      username: username,
    }
    )
  }

  return (
    <div className="relative flex flex-col justify-center h-full overflow-hidden mt-12">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center">上传文书</h1>
        <div className="space-y-4">
          <div>
            <label className="label" htmlFor='UniversityName'>
              <span className="text-base label-text">院校</span>
            </label>
            <input value={formData.universityName} onChange={setUniversityName} required id="UniversityName" name="UniversityName" type="text" placeholder="输入院校名称" className="w-full input input-bordered input-primary mb-2" />
            <select value={formData.universityLocation} onChange={setUniversityLocation} required id="UniversityLocation" name="UniversityLocation" className="select select-primary w-full">
              {locations.map(location =>
                <option key={location.code} value={location.name}>{location.name}</option>
              )}
            </select>
          </div>
          <div>
            <label className="label" htmlFor="courseName">
              <span className="text-base label-text">课程</span>
            </label>
            <input value={formData.courseName} onChange={setCourseName} required id="courseName" name='courseName' type="text" placeholder="输入课程名称" className="w-full input input-bordered input-primary mb-2" />
            <select value={formData.courseLevel} onChange={setCourseLevel} required id="courseLevel" name="courseLevel" className="select select-primary w-full">
              {courseLevels.map(courseLevel =>
                <option key={courseLevel} value={courseLevel}>{courseLevel}</option>
              )}
            </select>
          </div>
          <div>
            <label className="label" htmlFor="courseUrl">
              <span className="text-base label-text">课程网址</span>
            </label>
            <input value={formData.courseUrl} onChange={setCourseUrl} required id="courseUrl" name="courseUrl" type="url" placeholder="输入课程网址" className="w-full input input-bordered input-primary" />
          </div>
          <div>
            <label className="label" htmlFor='studentName'>
              <span className="text-base label-text">学生姓名</span>
            </label>
            <input value={formData.studentName} onChange={setStudentName} required id='studentName' name="studentName" type="text" placeholder="输入学生姓名" className="w-full input input-bordered input-primary" />
          </div>
          <div>
            <label className="label" htmlFor='file'>
              <span className="text-base label-text">文书文件</span>
            </label>
            <div className="w-full flex">
              <input onChange={setFile} required id='file' name='file' type="file" accept='.pdf' className="file-input file-input-bordered file-input-primary w-full" />
            </div>
          </div>
          <div className='flex w-full space-x-2 justify-between'>
            <button className="btn w-1/5 btn-warning">重置</button>
            <button className="btn w-1/5 btn-primary" onClick={handleSubmit}>确认</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page