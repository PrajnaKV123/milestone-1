"use client";

export default function Blogcard({ image, date, author, title, description }) {
  return (
    <div className="bg-white dark:bg-zinc-800 md:w-[800px] md:h-[700px] md:ml-45 md:mt-30 mt-15">
      <img src={image} className="md:w-[800px] md:h-[400px]" />

      <div className="p-8">
        <div className="text-gray-600 dark:text-white text-sm flex gap-5 items-center mb-2">
          <button className="hover:text-[#8b6932]">{date}</button>
          <button className="hover:text-[#8b6932]">{author}</button>
        </div>

        <h2 className="text-3xl font-serif font-semibold mb-4 dark:text-white text-black">
          {title}
        </h2>

        <p className="text-gray-600 dark:text-white text-[13px] mb-6">{description}</p>

        <button className="bg-[#a07c42] text-white px-6 py-2 rounded-xl hover:bg-[#8b6932] transition">
          Read More
        </button>
      </div>
    </div>
  );
}
