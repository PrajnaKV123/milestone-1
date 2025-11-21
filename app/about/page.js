"use client";
import Link from "next/link";
import Footer from "../components/footer";
import Open from "../components/open";
import Header from "../components/header";
export default function AboutPage() {
  return (
    <div>
        
   <Header/>
        <div className="w-full h-80 flex flex-col justify-center items-center bg-black" >
          <img  src="https://th.bing.com/th/id/OIP.PttypMqisCQOfQiC_wDmcwHaCD?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
            className=" opacity-60 h-50 w-[1100px]  mt-31"/>
          <h2 className="text-4xl md:text-6xl text-white absolute position top-[180px] font-serif ">
            About Us</h2>
          <div className=" mt-3 text-gray-300 absolute position top-[240px]">
            <Link href="/" className="hover:text-amber-400"> Home </Link>
            About Us
          </div>
        </div>

        <section className="bg-gray-200 dark:bg-zinc-800  md:w-full md:h-[350px] h-[900px] ">
          <div className=" text-[#a47c3c] py-20 text-center">
            <h3 className="text-lg font-serif mb-2 text-center"> OUR TRUSTED 8K HAPPY PARTNER  </h3>
            <div className="w-20 h-[3px] bg-[#a47c3c] mx-auto"></div>
          </div>
          <div className="md:ml-50 flex flex-wrap  justify-center gap-6 absolute position top-150">
            <img src={ "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=640&q=75"}
              className="md:w-40 w-50 md:ml-30"/>
            <img src={ "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=640&q=75"  }
              className="md:w-40 w-50 md:ml-15"/>
            <img  src={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=640&q=75"}
              className="md:w-40 w-50 md:ml-15" />
            <img src={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=640&q=75"}
              className="md:w-40 w-50 md:ml-15"/>
          </div>
        </section>

        <section className="bg-gray-100 dark:bg-zinc-950 text-black dark:text-white py-16 ">
          <div className=" px-6 md:flex-row flex flex-col gap-8 ">
            <div>
              <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F6-full.jpg&w=1920&q=75"
                className="object-cover  md:w-[700px] md:h-[400px]"/>
            </div>
            <div className="hidden md:block">
              <img src="https://tse4.mm.bing.net/th/id/OIP.3v9pAbx8_60ApcdwW_-CyAHaJY?pid=ImgDet&w=163&h=206&c=7&o=7&rm=3"
                className="object-cover w-[700px] h-[400px]"/>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-7   ">
              <h3 className="text-lg-bold  dark:text-white text-[#a47c3c]  mb-2">About Us </h3>
              <h2 className="text-3xl font-semibold font-serif mb-4 ">
                We Invite You To Visit Our Restaurant</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-[12px] md:text-[15px]">
                A relaxing and pleasant atmosphere, good jazz, dinner, and
                cocktails. The Patio Time Bar opens in the center of Florence.
                The only bar inspired by the 1960s, it will give you a
                experience that you will have a hard time forgetting.</p>
              <button className="bg-[#a47c3c] text-white px-6 py-3  rounded-md font-medium hover:bg-black transition">
                Discover More</button>
            </div>
          </div>
        </section>
        <section className="bg-gray-200  dark:bg-zinc-800 w-full text-center py-20">
          <div className="text-[#a47c3c] dark:text-white font-serif text-sm md:text-lg"> MASTER CHEFS </div>
          <div className="text-2xl md:text-4xl font-serif text-black dark:text-white"> Meet Our Special Chefs </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 py-10">
            <div>
              <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=1920&q=75"
                className="w-50 h-50 md:w-60 md:h-60  rounded-full border-black dark:border-white p-3 border" />
              <div className="bg-[#6b5738] text-white   rounded-md w-48 md:w-56  mt-[-20px]">
                <h3 className="font-semibold text-md md:text-lg"> Alexander Petilo </h3>
                <p className="text-xs md:text-sm">Assistant Chef</p>
              </div>
            </div>
            <div>
              <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=1920&q=75"
                className="w-50 h-50 md:w-60 md:h-60 rounded-full border-black  dark:border-white p-3 border " />
              <div className="bg-[#6b5738] text-white  rounded-md w-48 md:w-56 mt-[-20px]">
                <h3 className="font-semibold text-md md:text-lg"> Mendia Juxef</h3>
                <p className="text-xs md:text-sm">Burger King</p>
              </div>
            </div>
            <div>
              <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F3.jpg&w=1920&q=75"
                className="w-50 h-50 md:w-60 md:h-60 rounded-full border-black  dark:border-white p-3 border " />
              <div className="bg-[#6b5738] text-white   rounded-md w-48 md:w-56 mt-[-20px]">
                <h3 className="font-semibold text-md md:text-lg">  Petro William </h3>
                <p className="text-xs md:text-sm">Main Chef</p>
              </div>
            </div>
          </div>
        </section>
       
      
       <Open/>
         <Footer/>
       </div>
       
  )
}