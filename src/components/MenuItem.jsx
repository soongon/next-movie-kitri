import Link from 'next/link'
import React from 'react'

export default function MenuItem({route, title}) {
  return (
    <li>
        <Link href={route} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
            {title}
        </Link>
    </li>
  )
}
