 "use client";
 import Link from "next/link";

export default function Header(){
    return(
        <div>
             <div
          className="bg-[#c7a268] text-sm flex flex-col md:flex-row 
        md:justify-between items-center
         px-4 md:px-8 py-2 space-y-1 md:space-y-0" >
          <div className="text-center md:text-left">
            Phone: <span className="font-medium">+12345678</span> |{" "}
            <span className="font-medium">Email : food@restan.com</span>
          </div>
          <div >English</div>
        </div>
          <header
          className="flex justify-between items-center px-10 py-4
       bg-black border-b border-gray-800"
        >
          <h1 className="w-20">
            <img
              src={
                "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
              }
            />
          </h1>
          <nav className="space-x-20 hidden md:block">
            <Link href="/" className="hover:text-amber-400">
              {" "}
              Home
            </Link>
            <Link href="/about" className="hover:text-amber-400">
             
              Pages
            </Link>
            <Link href="/blog" className="hover:text-amber-400">
            
              Blog
            </Link>
            <Link href="/contact" className="hover:text-amber-400">
              
              Contact
            </Link>
          </nav>
          <button className="border hover:text-amber-400 px-4 py-2  rounded ">
           
            Reservation
          </button>
        </header>

        </div>
        
    )
}
        