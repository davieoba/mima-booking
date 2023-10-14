import { ChevronRightIcon, Grip } from "lucide-react"
import Link from "next/link"

import { GripIcon, MailIcon, HeartIcon, SettingsIcon, CompassIcon } from "lucide-react"

export const Sidebar = () => {
  const styles = {
    icons: `h-6 w-6`,
    container: `flex items-center gap-x-6`,
    link: `inline-block text-lg`
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
          <li className={`${styles.container} sidebar-active`}>
            <CompassIcon className={styles.icons} />
            <Link href='#' className={styles.link}>
              Dashboard
            </Link>
          </li>

          <li className={styles.container}>
            <Grip className={styles.icons} />
            <Link href='#' className={styles.link}>
              Explore City
            </Link>
          </li>

          <li className={styles.container}>
            <MailIcon className={styles.icons} />
            <Link href='#' className={styles.link}>
              Ticket
            </Link>
          </li>

          <li className={styles.container}>
            <HeartIcon className={styles.icons} />
            <Link href='#' className={styles.link}>
              Favorites
            </Link>
          </li>

          <li className={styles.container}>
            <SettingsIcon className={styles.icons} />
            <Link href='#' className={styles.link}>
              Settings
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