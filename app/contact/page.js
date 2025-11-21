"use client";
import Link from 'next/link';
import Map from "../components/map";
import Open from "../components/open";
import Footer from "../components/footer"
import Header from "../components/header"
export default function Contact(){
    return(
        <div>
          <Header/>
          <div>
      <img className="w-full h-70 md:h-100 opacity-85" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70qOalgPKlLRqby8tBn_FDoukfqSjmUO_kg&s"/>
      <p className="absolute inset-0 ml-25 md:ml-150 mt-50 md:mt-60 text-4xl md:text-6xl font-serif text-white">Contact Us</p>
      <Link href="/"className="absolute inset-0 text-white hover:text-amber-400 ml-30 md:ml-170 mt-60 md:mt-78">Home</Link>
      <p className="absolute inset-0 text-white ml-45 md:ml-185 mt-60 md:mt-78">Contact Us</p>
    </div>
          
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