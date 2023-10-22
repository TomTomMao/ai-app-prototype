import React from 'react'
import useLocation from "@/hook/useLocation"
const Page = () => {
  async function uploadPersonalStatement(formData: FormData) {
    "use server"

  }
  const locations = useLocation()
  const courseLevels = ['本科', '硕士']
  return (
    <div className="relative flex flex-col justify-center h-full overflow-hidden mt-12">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center">上传文书</h1>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">院校</span>
            </label>
            <input type="text" placeholder="输入院校名称" className="w-full input input-bordered input-primary mb-2" />
            <select className="select select-primary w-full">
              {locations.map(location =>
                <option key={location.code} value={location.name}>{location.name}</option>
              )}
            </select>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">课程</span>
            </label>
            <input type="text" placeholder="输入课程名称" className="w-full input input-bordered input-primary mb-2" />
            <select className="select select-primary w-full">
              {courseLevels.map(courseLevel =>
                <option key={courseLevel} value={courseLevel}>{courseLevel}</option>
              )}
            </select>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">课程网址</span>
            </label>
            <input type="url" placeholder="输入课程网址" className="w-full input input-bordered input-primary" />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">学生姓名</span>
            </label>
            <input type="url" placeholder="输入学生姓名" className="w-full input input-bordered input-primary" />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">文书文件</span>
            </label>
            <div className="w-full flex">
              <input type="file" accept='.pdf' className="file-input file-input-bordered file-input-primary w-full" />
            </div>
          </div>
          <div className='flex w-full space-x-2 justify-between'>
            <button className="btn w-1/5 btn-warning">取消</button>
            <button className="btn w-1/5 btn-primary">确认</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page