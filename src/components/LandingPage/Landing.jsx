import React from 'react';
import landingPage2 from '../../assets/landingPage2.jpg';
import { Typography } from '@material-tailwind/react';
import Buttons from './Buttons';

function Landing() {
  return (
    <>
      <div
        className="relative w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${landingPage2})` }}
      >
        {/* Background Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ backdropFilter: 'blur(0px)' }}
        ></div>

        {/* Buttons Positioned Slightly Down and Left */}
        <div className="absolute top-20 right-20 z-40">
          <Buttons />
        </div>

        {/* Main Content */}
        <div className="container mx-auto flex flex-col md:flex-row h-full z-30">
          {/* Left side: Large Heading */}
          <div className="w-full md:w-1/2 flex flex-col justify-start items-start md:ml-8 mb-8 md:mb-0">
            <Typography
              variant="h1"
              className="text-white text-2xl md:text-6xl lg:text-9xl ml-10 font-light mt-20"
            >
              Stay in
            </Typography>
            <Typography
              variant="h1"
              className="text-white text-4xl md:text-5xl lg:text-9xl font-extrabold ml-10 mt-1"
            >
              Touch
            </Typography>
            <Typography
              variant="h1"
              className="text-white text-4xl md:text-6xl lg:text-6xl ml-20 font-light mt-3"
            >
              Work as One
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
