import { ChevronRightIcon, Grip } from "lucide-react"
import Link from "next/link"

import { GripIcon, MailIcon, HeartIcon, SettingsIcon, CompassIcon } from "lucide-react"

export const Sidebar = () => {
  const styles = {
    icons: `h-6 w-6`,
    link: `inline-block relative`,
    container: `inline-block text-lg relative flex items-center gap-x-6`
  }

  return (
    <aside className="min-h-screen py-12 px-8 flex flex-col items-start justify-between">
      <div className="flex flex-col items-center justify-between">
        <h1 className="font-bold text-[2rem]">
          <span className="text-blue-950">Mima</span>
          <span className="text-[#686868]">Booking</span>
        </h1>
        <div></div>
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

const sidebarLinks = [
  {
    icon: CompassIcon,
    title: 'Dashboard',
    link: '#'
  },
  {
    icon: Grip,
    title: 'Explore City',
    link: '#'
  },
  {
    icon: MailIcon,
    title: 'Ticket',
    link: '#'
  },
  {
    icon: HeartIcon,
    title: 'Favorites',
    link: '#'
  },
  {
    icon: SettingsIcon,
    title: 'Setting',
    link: '#'
  }
]