"use client";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import Blogcard from "../components/Blogcard";

export default function BlogPage() {
  return (
    <div className="bg-gray-100 dark:bg-zinc-950 w-full h-full">
      <div className="bg-black text-white">
        <Header />
        <div className="w-full h-100 flex flex-col justify-center items-center bg-black">
          <img
            src="https://th.bing.com/th/id/OIP.EC2cs4VWiaF3yc15Hg7URAHaEv?w=287&h=183&c=7&r=0&o=7&pid=1.7&rm=3"
            className="opacity-50 w-[800px] h-100"
          />
          <h2 className="md:text-6xl text-3xl font-serif absolute top-[240px]">
            Blog Standard
          </h2>
          <div className="mt-3 text-gray-300 absolute top-[300px]">
            <Link href="/" className="hover:text-amber-400">
              Home |
            </Link>{" "}
            Blog
          </div>
        </div>
      </div>

      <Blogcard
        image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=1920&q=75"
        date="12 August, 2024"
        author="Admin"
        title="Picked up a Brussels burger Sprouts."
        description="Indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite..."
      />

      <Blogcard
        image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=1920&q=75"
        date="13 August, 2024"
        author="Admin"
        title="This prefabricated passive house highly"
        description="Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now..."
      />

      <Blogcard
        image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=1920&q=75"
        date="14 August, 2024"
        author="John Baus"
        title="Overcame breeding point concerns has."
        description="Plan upon yet way get cold spot its week. Resolve parties but why she shewing..."
      />

      <Footer />
    </div>
  );
}