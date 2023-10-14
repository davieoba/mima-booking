import { ChevronRightIcon, FileEdit, Grip } from "lucide-react"
import Link from "next/link"

import { GripIcon, MailIcon, HeartIcon, SettingsIcon, CompassIcon } from "lucide-react"
import Image from "next/image"

export const Sidebar = () => {
  const styles = {
    icons: `h-6 w-6`,
    link: `inline-block relative`,
    container: `inline-block text-lg relative flex items-center gap-x-6`
  }

  return (
    <aside className="min-h-screen py-12 px-8 flex flex-col items-start justify-between">
      <div className="flex flex-col items-center justify-between space-y-8">
        <h1 className="font-bold text-[2rem]">
          <span className="text-blue-950">Mima</span>
          <span className="text-[#686868]">Booking</span>
        </h1>
        <div className="space-y-8">
          <div className="h-32 w-32 border rounded-full p-2 flex items-center justify-center border-blue-950 relative">
            <Image
              src='https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              alt='user-photo'
              className="rounded-full object-cover h-28 w-28" 
              width={1000}
              height={1000}
            />
            <div className="absolute z-10 h-8 w-8 bg-blue-950 rounded-full flex items-center justify-center bottom-[-12.5px] cursor-pointer">
              <FileEdit className="h-4 w-4 text-white"/>
            </div>
          </div>

          <h3 className="text-[#686868] font-medium text-xl text-center">Ilia Jain</h3>
        </div>
      </div>

      <div>
        <ul className="space-y-8 text-[#686868]">
          <li>
            <Link href='#' className={`${styles.container} sidebar-active`}>
              <CompassIcon className={styles.icons} />
              <span className="">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link href='#' className={styles.container}>
              <Grip className={styles.icons} />
              <span className={styles.link}>Explore City</span>
            </Link>
          </li>

          <li>
            <Link href='#' className={styles.container}>
              <MailIcon className={styles.icons} />
              <span className={styles.link}>Ticket</span>
            </Link>
          </li>

          <li>
            <Link href='#' className={styles.container}>
              <HeartIcon className={styles.icons} />
              <span className={styles.link}>Favorites</span>
            </Link>
          </li>

          <li>
            <Link href='#' className={styles.container}>
              <SettingsIcon className={styles.icons} />
              <span className={styles.link}>Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <Link href='#' className="flex items-center gap-x-6 text-[#686868]">
          <div className="h-8 w-8 rounded-xl flex items-center justify-center border-[#333] border">
            <ChevronRightIcon className="h-4 w-4" />
          </div>
          <p>Logout</p>
        </Link>
      </div>
    </aside>
  )
}
