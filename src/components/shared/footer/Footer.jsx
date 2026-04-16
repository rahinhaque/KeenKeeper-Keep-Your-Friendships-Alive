import React from 'react';
import Image from 'next/image';
import insta from "../../../assets/instagram.png";
import faceBook from "../../../assets/facebook.png"
import x from "../../../assets/twitter.png";

const Footer = () => {
 return (
   <footer className="bg-[#2c4f42] text-white py-12 px-4">
     <div className="max-w-6xl mx-auto">
       <div className="text-center mb-8">
         <h2 className="text-4xl md:text-5xl font-bold mb-4">KeenKeeper</h2>
         <p className="text-gray-200 text-sm max-w-2xl mx-auto">
           Your personal shelf of meaningful connections. Browse, tend, and
           nurture the relationships that matter most.
         </p>
       </div>

       <div className="text-center mb-10">
         <h3 className="font-semibold text-sm mb-3 text-white">Social Links</h3>
         <div className="flex justify-center gap-3">
           <a
             href="#"
             className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
           >
             <Image src={insta} alt="Instagram" width={40} height={40} />
           </a>
           <a
             href="#"
             className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
           >
             <Image src={faceBook} alt="Facebook" width={40} height={40} />
           </a>
           <a
             href="#"
             className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
           >
             <Image
               src={x}
               alt="Twitter"
               width={40}
               height={40}
             />
           </a>
         </div>
       </div>

       <div className="border-t border-gray-600 pt-6">
         <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm">
           <p>© 2026 KeenKeeper. All rights reserved.</p>
           <div className="flex gap-6">
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