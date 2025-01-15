import 'react'
import { Typography } from "@material-tailwind/react";
const Footer = () => {
  return (
    <div>
      <footer className="flex md:w-[1440px] md:ml-6 h-36 mt-72 text-white flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center md:justify-between">
          <Typography color="blue-gray" className="font-normal">
            &copy; 2023 Eco-Rewrads
          </Typography>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </footer>
    </div>
  )
}

export default Footer
