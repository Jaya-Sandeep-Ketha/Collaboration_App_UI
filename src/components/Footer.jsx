import React from 'react'
import { Typography } from "@material-tailwind/react"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  border-blue-gray-50 py-6 text-center md:justify-between px-10 bg-black text-white">
      <Typography color="blue-gray" className="font-normal">
        &copy; Kanya Raasi
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link  to="/documentation">
          <Typography
            as="a"
            href=""
            color="blue-gray"
            className=" transition-colors hover:text-blue-500 focus:text-blue-500 font-weight:bold"
          >
            Documentation
          </Typography>
          </Link>

        </li>
        
      </ul>
    </footer>
  );
}

export default Footer