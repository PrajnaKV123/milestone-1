"use client";
export default function Footer(){
    return(
<footer >
          <div className="bg-zinc-900 mt-25 text-gray-300 md:ml-60 w-full md:w-[1000px] py-10 px-6 
             grid grid-cols-1 md:grid-cols-4 gap-8  pb-8 relative z-20 -mb-20 "  >
            <div className=" text-left">
              <h2 className="text-white text-lg font-semibold mb-4"> About Us</h2>
              <p className="text-[12px]">
                Continued at zealously necessary is surrounded sir motionless she end literature.</p>
              <div className="flex gap-3 mt-4 justify-start ">
                <button className="bg-[#38332c] text-white px-2 py-1 "> F</button>
                <button className="bg-[#38332c] text-white px-2 py-1 ">   T</button>
                <button className="bg-[#38332c] text-white px-2 py-1 "> Y</button>
                <button className="bg-[#38332c] text-white px-2 py-1 ">L </button>
              </div>
            </div>
            <div className=" text-left">
              <h2 className="text-white text-lg font-semibold mb-4">Explore</h2>
              <ul className="space-y-2 text-[12px]">
                <li className="hover:text-white">Company Profile</li>
                <li className="hover:text-white">About</li>
                <li className="hover:text-white">Help Center</li>
                <li className="hover:text-white">Career</li>
                <li className="hover:text-white">Features</li>
                <li className="hover:text-white">Contact</li>
              </ul>
            </div>
            <div className="text-left">
              <h2 className="text-white text-lg font-semibold mb-4"> Contact Info</h2>
              <p className="text-[12px]">175 10th Street , Office 375 Berlin, DE 21562 </p>
              <p className="mt-4 text-[12px]"> +123 34598768<br /> +554 34598734 </p>
              <p className="mt-4 text-[12px]">food@restan.com</p>
            </div>
            <div className="text-left">
              <h2 className="text-white text-lg font-semibold mb-4"> Newsletter</h2>
              <p className="text-[12px]">
                Join our subscribers list to get the latest news and special offers.</p>
              <input type="email"  placeholder="Your Email"
                className="mt-7 w-full sm:w-55 px-3 text-[12px] border-1 text-white rounded"/>
              <label className=" mt-7 text-xs">
                <input type="checkbox"  /> I agree to the Privacy Policy  </label>
            </div>
          </div>
          <div className="bg-zinc-800 w-full  pt-10  "> 
            <img src={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F9.png&w=640&q=75"}
            className="  w-40 h-40 opacity-45 "/>
            <img src={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"}
            className=" -mt-25  ml-35 md:w-[70px] w-[90px]"/>
            <p className="md:text-right text-center text-gray-400 mt-6 text-[12px]"> &copy; Copyrights 2025 Restan. All Rights Reserved. </p>
            </div>
         
        </footer>
        )
    }