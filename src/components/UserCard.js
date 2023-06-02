import React, { useState } from 'react'
import img from '../assets/dummy-profile-pic.jpg'
export default function UserCard(){
   const [data,setData] = useState({
      name:'Firstname  Lastname',
      date :'dd-mm-yyyy',
      mandal : 'Sabha Name',
      whatsapp : 9892802112
   })
   const im = img
    return (
         <div className="flex items-start px-4 bg-white py-6 mt-2">
            <img className="w-12 h-12  rounded-full object-cover mr-4 shadow" src={im} alt="avatar"/>
            <div className="">
               <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 -mt-1">{data.name}</h2>
               </div>
               <p className="text-gray-700">{data.date}</p>
               <p className="mt-3 text-gray-700 text-lg">
                  {data.mandal}
               </p>
               <div className="mt-4 flex items-center">
                  <div className="flex items-center  text-gray-700 text-sm mr-4">
                  <i class="fa-brands fa-whatsapp text-lg text-green-500"></i>
                  </div>
               </div>
               
            </div>
         </div>
    );
}