"use client";                                                                                                                                                                                     "use client";

export default function ContactCard({ icon, title, content }) {
  return (
    <div className="dark:bg-white h-50 md:h-60 w-full md:w-70 border-1 md:ml-35 rounded-2xl flex flex-col items-center text-center p-4">
      
      <img
        className="h-20 w-20 mt-3"
        src={icon}
      />

      <p className="dark:text-black text-xl font-semibold mt-4">{title}</p>

      <p className="dark:text-black text-[13px] mt-2 leading-5">{content}</p>
    </div>
  );
}