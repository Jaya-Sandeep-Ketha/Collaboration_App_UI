import React, { useState } from 'react';
import landingPage3 from '../../assets/landingPage3.jpg';
import { Typography } from '@material-tailwind/react';
import Buttons from './Buttons';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import AlreadyRegisteredAdmin from './AlreadyRegisteredAdmin';

function Landing() {
  const [isAdminBtnClicked, setIsAdminBtnClicked] = useState(true);
  const [isUserBtnClicked, setIsUserBtnClicked] = useState(false);
  const [isAlreadyBtnClicked, setIsAlreadyBtnClicked] = useState(false);

  console.log(`adminbtn - ${isAdminBtnClicked}`)
  console.log(`alreadyBtn - ${isAlreadyBtnClicked}`)

  const handleAdminBtnClick = () => {
    setIsAdminBtnClicked(true);
    setIsUserBtnClicked(false);
    setIsAlreadyBtnClicked(false)
  };

  const handleUserBtnClick = () => {
    setIsUserBtnClicked(true);
    setIsAdminBtnClicked(false);
    setIsAlreadyBtnClicked(false)
  };

  const handleAdminAlreadyRegistered = () => {
    setIsAlreadyBtnClicked((prev)=>!prev);
  };
  const handleAdminNotYetRegistered = () => {
    setIsAlreadyBtnClicked(false);
  };

  return (
    <>
      <div
        className="relative w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${landingPage3})` }}
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
        <Buttons 
            onAdminClick={handleAdminBtnClick} 
            onUserClick={handleUserBtnClick}
            isAdminActive={isAdminBtnClicked}
            isUserActive={isUserBtnClicked}
          />

          {/* Conditional Rendering */}
          <div className="mt-6">
            {isAdminBtnClicked ? (
              isAlreadyBtnClicked ? (
                <AlreadyRegisteredAdmin notYetRegisteredAdmin={handleAdminNotYetRegistered}/>
              ) : (
                <RegisterForm alreadyRegisteredForAdmin={handleAdminAlreadyRegistered} />
              )
            ) : (
              <LoginForm />
            )}
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
