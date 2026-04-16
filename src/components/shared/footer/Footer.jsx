import React from 'react';
import Image from 'next/image';
import insta from "../../../assets/instagram.png";
import faceBook from "../../../assets/facebook.png"
import x from "../../../assets/twitter.png";

const Footer = () => {
 return (
   <footer className="bg-[#2c4f42] text-white py-8 md:py-12 px-4 md:px-8">
     <div className="max-w-7xl mx-auto">
       <div className="text-center mb-6 md:mb-8">
         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">KeenKeeper</h2>
         <p className="text-gray-200 text-xs md:text-sm max-w-xl md:max-w-2xl mx-auto">
           Your personal shelf of meaningful connections. Browse, tend, and
           nurture the relationships that matter most.
         </p>
       </div>

       <div className="text-center mb-8 md:mb-10">
         <h3 className="font-semibold text-xs md:text-sm mb-2 md:mb-3 text-white">Social Links</h3>
         <div className="flex justify-center gap-2 md:gap-3">
           <a
             href="#"
             className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
           >
             <Image src={insta} alt="Instagram" width={24} height={24} className="md:w-8 md:h-8" />
           </a>
           <a
             href="#"
             className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
           >
             <Image src={faceBook} alt="Facebook" width={24} height={24} className="md:w-8 md:h-8" />
           </a>
           <a
             href="#"
             className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
           >
             <Image
               src={x}
               alt="Twitter"
               width={24}
               height={24}
               className="md:w-8 md:h-8"
             />
           </a>
         </div>
       </div>

       <div className="border-t border-gray-600 pt-4 md:pt-6">
         <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-gray-300 text-xs md:text-sm">
           <p>© 2026 KeenKeeper. All rights reserved.</p>
           <div className="flex gap-4 md:gap-6">
             <a href="#" className="hover:text-white transition">
               Privacy Policy
             </a>
             <a href="#" className="hover:text-white transition">
               Terms of Service
             </a>
             <a href="#" className="hover:text-white transition">
               Cookies
             </a>
           </div>
         </div>
       </div>
     </div>
   </footer>
 );
};

export default Footer;