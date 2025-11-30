"use client";
import Link from "next/link";
import Map from "../components/map";
import Open from "../components/open";
import Footer from "../components/footer";
import Header from "../components/header";
import ContactCard from "../components/ContactCard";

export default function Contact() {
  return (
    <div>
      <div className="bg-black text-white h-30">
        <Header />
      </div>
      <div>
        <img
          className="w-full h-70 md:h-100 opacity-85"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70qOalgPKlLRqby8tBn_FDoukfqSjmUO_kg&s"
        />
        <p className="absolute inset-0 ml-23 md:ml-110 mt-60 md:mt-60 text-4xl md:text-6xl font-serif text-white">
          Contact Us
        </p>
        <div className=" mt-3 text-gray-300 md:ml-135 ml-30 absolute position top-[300px]">
          <Link href="/" className="hover:text-amber-400">
            {" "}
            Home |{" "}
          </Link>{" "}
          Blog
        </div>
      </div>
      {/*next section*/}
       <div className="flex flex-wrap mt-30 gap-y-10 md:gap-y-0">
      
      <ContactCard
        icon="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=640&q=75"
        title="Hotline"
        content="+4733378901"
      />

      <ContactCard
        icon="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75"
        title="Our Location"
        content="55 Main Street, The Grand Avenue 2nd Block, New York City"
      />

      <ContactCard
        icon="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75"
        title="Official Email"
        content="info@restan.com"
      />
      
    </div>

      {/*next section*/}
      <div className=" dark:bg-white h-160 md:h-150 md:w-200 shadow-2xl md:ml-40 md:mt-30 mt-10">
        <p className="text-center pt-10 text-lg text-amber-300">
          KEEP IN TOUCH
        </p>
        <h1 className="text-center text-2xl dark:text-black">
          Send us a Message
        </h1>
        <input
          className="bg-gray-200 dark:text-black pl-3 md:ml-20 ml-5 w-70 h-10 mt-8 md:w-150"
          placeholder="Name"
          type="Name"
        />
        <div className="flex flex-wrap">
          <input
            className="bg-gray-200 dark:text-black pl-3 md:ml-20 ml-5 w-70 h-10 mt-8 md:w-70"
            placeholder="Email"
            type="email"
          />
          <input
            className="bg-gray-200 dark:text-black pl-3 md:ml-20  ml-5 w-70 h-10 mt-8 md:w-70"
            placeholder="Phone"
            type="Phone"
          />
        </div>
        <input
          className="bg-gray-200 dark:text-black pl-3 md:ml-20 ml-5 w-70 h-30 mt-8 md:w-150 "
          placeholder="Your Message"
          type="msg"
        />
        <div>
          <button className="md:ml-20 ml-15  mt-10 h-15 w-50 rounded-2xl bg-amber-500">
            Get in Touch
          </button>
        </div>
      </div>
      <Map />
      <Open />
      <Footer />
    </div>
  );
}