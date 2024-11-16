import React from 'react';
import landingPage2 from '../../assets/landingPage2.jpg';
import { Typography } from '@material-tailwind/react';
import Buttons from './Buttons';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useState } from 'react';
function Landing() {
  const [isAdminBtnClicked, setIsAdminBtnClicked] = useState(false)
  const [isUserBtnClicked, setIsUserBtnClicked] = useState(false)


  const handleAdminBtnClick = () => {
    setIsAdminBtnClicked(true)
    setIsUserBtnClicked(false)
  }
  const handleUserBtnClick = () => {
    setIsUserBtnClicked(true)
    setIsAdminBtnClicked(false)
  }
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
          style={{ backdropFilter: 'blur(10px)' }}
        ></div>

        {/* Buttons and Register Form Container */}
        <div className="absolute top-20 right-20 z-40">
          {/* Buttons */}
          <Buttons onAdminClick = {handleAdminBtnClick} onUserClick={handleUserBtnClick}/>
          {/* Register Form */}
          <div className="absolute mt-6 right-20">
           {isAdminBtnClicked ? <RegisterForm/> :<LoginForm/>}
          </div>

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
              className="text-white text-4xl md:text-6xl lg:text-7xl ml-10 font-light mt-3"
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
