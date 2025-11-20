"use client";
import Link from "next/link";
import Footer from "../components/footer";
export default function BlogPage() {
  return (
    <div className="bg-gray-100 dark:bg-zinc-950 w-full h-full">
      <div className="bg-black text-white  ">
        <div className="bg-[#c7a268] text-sm flex flex-col md:flex-row  md:justify-between items-center
         px-4 md:px-8 py-2 space-y-1 md:space-y-0"  >
          <div className="text-center md:text-left">
            Phone: <span className="font-medium">+12345678</span> |{" "}
            <span className="font-medium">Email : food@restan.com</span>
          </div>
          <div>English</div>
        </div>
        <header
          className="flex justify-between items-center px-10 py-4
       bg-black border-b border-gray-800"  >
          <h1 className="w-20">
            <img src={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"  }  />
          </h1>
          <nav className="space-x-20 hidden md:block">
            <Link href="/" className="hover:text-amber-400">  Home </Link>
            <Link href="/about" className="hover:text-amber-400">  Pages </Link>
            <Link href="/blog" className="hover:text-amber-400">   Blog  </Link>
            <Link href="/contact" className="hover:text-amber-400"> Contact  </Link>
          </nav>
          <button className="border hover:text-amber-400 px-4 py-2  rounded "> Reservation </button>
        </header>
        <div className="w-full h-100 flex flex-col justify-center items-center bg-black">
          <img src="https://th.bing.com/th/id/OIP.EC2cs4VWiaF3yc15Hg7URAHaEv?w=287&h=183&c=7&r=0&o=7&pid=1.7&rm=3"
            className=" opacity-50 w-[800px] h-100 "   />
          <h2 className="text-3xl font-semibold font-sans absolute position top-[240px] font-serif ">
            Blog Standard </h2>
          <div className=" mt-3 text-gray-300 absolute position top-[300px]">
            <Link href="/" className="hover:text-amber-400">  Home </Link>
            Blog
          </div>
        </div>
      </div>
      <section>
        <div className="bg-white dark:bg-zinc-800 md:w-[700px] md:h-[700px] md:ml-55 md:mt-30 mt-15">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=1920&q=75"
            className="md:w-[700px] md:h-[400px]" />
          <div className="p-8">
            <div className="text-gray-600 dark:text-white text-sm flex gap-5 items-center mb-2">
              <button className="hover:text-[#8b6932]">12 August, 2024</button>
              <button className="hover:text-[#8b6932]"> Admin</button>
            </div>
            <h2 className="text-3xl font-serif font-semibold mb-4 text-black  dark:text-white">
              Picked up a Brussels burger Sprouts. </h2>
            <p className="text-gray-600  dark:text-white text-[13px] mb-6">
              Indulgence diminution so discovered mr apartments. Are off under
              folly death wrote cause her way spite. Plan upon yet way get cold
              spot its week. Almost do am or limits hearts. Resolve parties but
              why she shewing. She sang know now.  </p>
            <button  className="bg-[#a07c42] text-white px-6 py-2 rounded-xl
           hover:bg-[#8b6932] transition" >
              Read More
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white dark:bg-zinc-800 md:w-[700px] md:h-[700px] md:ml-55 md:mt-30 mt-15">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=1920&q=75"
            className="md:w-[700px] md:h-[400px]"
          />
          <div className="p-8">
            <div className="text-gray-600  dark:text-white text-sm flex gap-5 items-center mb-2">
              <button className="hover:text-[#8b6932]">13 August, 2024</button>
              <button className="hover:text-[#8b6932]"> Admin</button>
            </div>
            <h2 className="text-3xl font-serif font-semibold mb-4  dark:text-white text-black">
              This prefabricated passive house highly </h2>
            <p className="text-gray-600  dark:text-white text-[13px] mb-6">
              Bndulgence diminution so discovered mr apartments. Are off under
              folly death wrote cause her way spite. Plan upon yet way get cold
              spot its week. Almost do am or limits hearts. Resolve parties but
              why she shewing. She sang know now</p>
            <button className="bg-[#a07c42] text-white px-6 py-2 rounded-xl
           hover:bg-[#8b6932] transition"  > Read More</button>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white dark:bg-zinc-800 md:w-[700px] md:h-[700px] md:ml-55  md:mt-30 mt-15">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=1920&q=75"
            className="md:w-[700px] md:h-[400px]" />
          <div className="p-8">
            <div className="text-gray-600  dark:text-white text-sm flex gap-5 items-center mb-2">
              <button className="hover:text-[#8b6932]">14 August, 2024</button>
              <button className="hover:text-[#8b6932]"> John Baus</button>
            </div>
            <h2 className="text-3xl font-serif font-semibold mb-4  dark:text-white text-black">
              Overcame breeding point concerns has. </h2>
            <p className="text-gray-600  dark:text-white text-[13px] mb-6">
              Bndulgence diminution so discovered mr apartments. Are off under
              folly death wrote cause her way spite. Plan upon yet way get cold
              spot its week. Almost do am or limits hearts. Resolve parties but
              why she shewing. She sang know now </p>
            <button className="bg-[#a07c42] text-white px-6 py-2 rounded-xl hover:bg-[#8b6932] transition" > Read More </button>
          </div>
        </div>
      </section> 
       <Footer/>
    </div>
  );
}