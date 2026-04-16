import React from 'react';

const Navbar = () => {
 return (
   <div className="navbar bg-base-100 shadow-sm px-4">
     <div className="flex-1">
       <a className="text-xl font-bold text-gray-800">KeenKeeper</a>
     </div>
     <div className="flex gap-2">
       <button className="btn bg-[#1a8862] text-white hover:bg-gray-700 border-none">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5 mr-1"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
         >
           <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
           <polyline points="9 22 9 12 15 12 15 22"></polyline>
         </svg>
         Home
       </button>
       <button className="btn btn-ghost text-gray-600">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5 mr-1"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
         >
           <circle cx="12" cy="12" r="10"></circle>
           <polyline points="12 6 12 12 16 14"></polyline>
         </svg>
         Timeline
       </button>
       <button className="btn btn-ghost text-gray-600">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5 mr-1"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
         >
           <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
         </svg>
         Stats
       </button>
     </div>
   </div>
 );
};

export default Navbar;