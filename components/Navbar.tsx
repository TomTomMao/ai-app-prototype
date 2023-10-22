"use client"

// responsive navbar with home page, my personal statement and upload, and avatar

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  return (<div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link href="/">主页</Link ></li>
          {/* <li>
          <Link>Parent</Link>
          <ul className="p-2">
            <li><Link>Submenu 1</Link></li>
            <li><Link>Submenu 2</Link></li>
          </ul>
        </li> */}
          <li><Link href="/personalStatement/my">我的文书</Link ></li>
          <li><Link href="/personalStatement/upload">上传文书</Link ></li>
        </ul>
      </div>
      <Link href="/" className="btn btn-ghost normal-case text-xl">文书GPT</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><Link href="/">主页</Link></li>
        {/* <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><Link>Submenu 1</Link></li>
            <li><Link>Submenu 2</Link></li>
          </ul>
        </details>
      </li> */}
        <li><Link href="/personalStatement/my">我的文书</Link></li>
        <li><Link href="/personalStatement/upload">上传文书</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
      <Link href="/" className="btn">用户头像</Link>
    </div>
  </div>
  )
}

export default Navbar