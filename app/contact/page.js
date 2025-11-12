"use client";
import Link from 'next/link';
import Map from "../components/map";
import Open from "../components/open";
import Footer from "../components/footer"
export default function Contact(){
    return(
        <div>
            <div className="bg-black text-white h-30">
        <div className="bg-[#c7a268] text-sm flex flex-col md:flex-row 
        md:justify-between items-center
         px-4 md:px-8 py-2 space-y-1 md:space-y-0">
          <div className="text-center md:text-left">
            Phone: <span className="font-medium">+12345678</span> |{" "}
            <span className="font-medium">Email : food@restan.com</span>
          </div>
          <div>English</div>
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
            <Link href="/" className="hover:text-amber-400"> Home </Link>
            <Link href="/about" className="hover:text-amber-400"> Pages </Link>
            <Link href="/blog" className="hover:text-amber-400">  Blog  </Link>
            <Link href="/contact" className="hover:text-amber-400">  Contact</Link>
          </nav>
          <button
            className="border hover:text-amber-400 px-4 py-2  rounded "
          >
            Reservation
          </button>
        </header>
        </div>
    <div>
      <img className="w-full h-70 md:h-100 opacity-85" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70qOalgPKlLRqby8tBn_FDoukfqSjmUO_kg&s"/>
      <p className="absolute inset-0 ml-23 md:ml-150 mt-60 md:mt-60 text-4xl md:text-6xl font-serif text-white">Contact Us</p>
      <p className="absolute inset-0 text-white ml-30 md:ml-170 mt-70 md:mt-78">Home contact</p>
    </div>
{/*next section*/}
    <div className="flex flex-wrap mt-30">
      <div className="dark:bg-white h-70 w-full md:w-90 border-1 md:ml-25 rounded-2xl">
        <img className="ml-33 mt-3 h-25 w-25"src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=640&q=75"/>
        <p className="dark:text-black ml-34 mt-6 text-2xl text-bold">Hotline</p>
        <p className="dark:text-black ml-30 mt-2">+4733378901</p>
      </div>

      <div className="dark:bg-white h-70 w-full md:w-90 border-1 md:ml-25 mt-10 md:mt-0 rounded-2xl">
        <img className="ml-33 mt-3 h-25 w-25"
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75"/>
        <p className="dark:text-black ml-30 md:ml-28 mt-6 text-2xl text-bold">Our Location</p>
        <p className="dark:text-black ml-7 md:ml-5 mt-2">55 Main Street, The Grand Avenue 2nd Block,<br/> New York City</p>
      </div>

      <div className="dark:bg-white h-70 w-full md:w-90 border-1 md:ml-25 mt-10 md:mt-0 rounded-2xl">
        <img className="ml-33 mt-3 h-25 w-25"
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75"/>
        <p className="dark:text-black ml-28 mt-6 text-2xl text-bold">Official Email</p>
        <p className="dark:text-black ml-30 mt-2 text-bold">info@restan.com</p>
      </div>
    </div>

    {/*next section*/}
    <div className=" dark:bg-white h-200 md:h-170 md:w-300 shadow-2xl md:ml-40 mt-30">
     <p className="text-center pt-20 text-xl text-amber-300">KEEP IN TOUCH</p>
      <h1 className="text-center text-4xl dark:text-black">Send us a Message</h1>
    <input className="bg-gray-200 dark:text-black pl-3 ml-20 h-10 mt-8 md:w-250" placeholder="Name" type="Name"/>
     <div className="flex flex-wrap">
     <input className="bg-gray-200 dark:text-black pl-3 ml-20 h-10 mt-8 md:w-120" placeholder="Email" type="email"/>
     <input className="bg-gray-200 dark:text-black pl-3 ml-20  md:ml-10 h-10 mt-8 md:w-120" placeholder="Phone" type="Phone"/>
    </div>
     <input className="bg-gray-200 dark:text-black pl-3 ml-20 h-50 mt-8 md:w-250 " placeholder="Your Message" type="msg"/>
     <div>
     <button className="ml-20 mt-10 h-15 w-50 rounded-2xl bg-amber-500">Get in Touch</button>
    </div>
    </div>

    <Map/>
    <Open/>
    <Footer/>
        </div>
    )
}