import React, { useState } from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import StorageIcon from '@mui/icons-material/Storage';
import image1 from "../images/Hospitail.jpg"
import server from "../images/server.jpg"
import useNavigation from '../useNavigation';

function Home() {
    const {show,close,menu,display,closedisplay} = useNavigation()
  return (
       <div className="bg-[#1E1E1E] h-full p-4">
         <div className="flex items-center p-2 sticky bg-[#1E1E1E] top-0 z-30 text-gray-500">
            <div className="flex flex-1 text-white ">
                <h2 className="text-lg cursor-pointer">Emmanuel</h2>
            </div>
            <div className="hidden  items-center text-white md:flex">
                <div>
                    <ul className="flex items-center cursor-pointer">
                        <li className="m-2"><a href="#home">Home</a></li>
                        <li className="m-2 "><a href="#">About Us</a></li>
                        <li className="m-2 "><a href="#service">Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="md:hidden flex relative">
                {
                    menu 
                     &&
                <div className="flex md:hidden" onClick={display}>
                    <MenuIcon/>
                </div>
                }
                 {
                    close &&
                    <div onClick={closedisplay}>
                        <CloseIcon/>
                    </div>
                 }
                {/*DROP DOWN */}
                {
                    show && 
                    <div className=" absolute top-10  list-none  right-0  divide-gray-100 shadow">
                    <div className="w-48 text-sm font-medium text-gray-900 bg-white  ">
                        <a href="#home"
                            className="block py-2 px-4 w-full  rounded-t-lg border-b border-gray-200 cursor-pointer  hover:text-blue-700 ">
                            Home
                        </a>
                        <a href="#"
                            className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 ">
                            About Us
                        </a>
                        <a href="#service"
                            className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 ">
                            Service
                        </a>
                    </div>
                </div>
                }
            </div>
        </div>
        <div className="p-2  flex mt-20">
                <div>
                    <p className="text-slate-300 text-xs flex items-center"> <span className="m-1 w-3">&#9473;</span> MY NAME IS </p>
                    <h3 className="text-4xl text-white font-bold mt-4">Emmanuel <span className="text-blue-600">Adane .</span></h3>
                     <p className="mt-5 mb-5 text-slate-300 md:w-96">
                        Self-motivated individual with a strong sense of integrity. Also, a good communicator and able to get along with other
                        people. Assertive and results oriented with a clear vision of objectives.I am keen in building a career in Web
                        development.
                     </p>
                    <div className="flex mt-4 space-x-3">
                        <a href="tel:0546506783" className="text-gray-300 dark:hover:text-white flex items-center">
                            <PhoneIcon/>
                        </a>
                        <a href="mailto:emmanueladane52@gmail.com"
                            className="text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center">
                            <EmailIcon/>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center">
                            <InstagramIcon/>
                        </a>
                        <a href="https://twitter.com/_adanee"
                            className="text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center">
                        <TwitterIcon/>
                        </a>
                        <a href="http://github.com/Emmanuel19-code"
                            className="text-gray-300 hover:text-white0 dark:hover:text-white flex items-center">
                            <GitHubIcon/>
                        </a>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
          </div>
           {/*SERVICES */}
           <div className="mt-20 mb-10  items-center" id="service">
               <p className="text-center text-slate-500  text-xs mb-3"> <span className="m-1 w-3">&#9473;</span>SERVICES</p>
               <h3 className="text-center text-white text-2xl font-bold">Specialized in</h3>
               <div className=" md:flex  justify-center">
                    <div className="bg-white  rounded p-2 flex items-center justify-center flex-col m-2">
                        {/*<i className='bx bx-data p-3 rounded-lg bg-slate-300 text-blue-500'></i>*/}
                        <div className='p-2 rounded-lg bg-slate-300 text-blue-500'>
                            <StorageIcon />
                        </div>
                        
                        <h4 className="text-sm">Backend Development</h4>
                        <p className="text-center w-64">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
                            illo sequi minima eveniet iste dolores quos quis atque
                        </p>
                    </div>
               </div>
           </div>
           {/*   WORKS */}
            <div className="mt-10">
            <p className="text-slate-500  text-xs flex items-center"> <span className="m-1 w-3">&#9473;</span> MY WORKS </p>
            <div className=" md:flex items-center justify-center">
                <div class="bg-white m-2 p-2 rounded">
                    <div class="md:w-96 mb-3">
                        <img src={image1} class="md:w-96" alt="" />
                    </div>
                    <a href="https://github.com/jxtBuild/starClinic.git" 
                    className='p-1 bg-blue-500 rounded text-white'
                    >
                        GITHUB LINK
                    </a>
                    <p>Hospitail website</p>
                </div>
                <div class="bg-white m-2 p-2 rounded">
                    <div class="md:w-96 mb-3">
                        <img src={server} class="md:w-96" alt="" />
                    </div>
                    <a href="https://github.com/jxtBuild/ClinicServer.git" 
                    className='p-1 bg-blue-500 rounded text-white'
                    >
                        GITHUB LINK
                    </a>
                    <p>Backend of a Hospitail website</p>
                </div>
            </div>
           </div>
              {/*WORK EXPERIENCE*/}
        <div class="mt-10">
            <p class="text-slate-500 text-xs flex items-center"> <span class="m-1 w-3">&#9473;</span> CAREER PATH </p>
            <div class="mt-4">
                <div>
                    <h3 class="text-white text-xl font-bold">Work Experience</h3>
                    <ul class="mt-10 mb-3">
                        <li class="text-slate-300">KNUST NUPSG</li>
                    </ul>
                </div>
            </div>
        </div>
       </div>
  )
}

export default Home