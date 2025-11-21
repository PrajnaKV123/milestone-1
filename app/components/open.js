"use client";

export default function Open(){
    return(
        <div className="flex flex-wrap">
            <iframe
  className="w-full md:w-150 h-100 md:ml-30 mt-10 md:mt-50"
  src="https://www.youtube.com/embed/F3zw1Gvn4Mk"
></iframe>
<div className="h-130 md:h-110 md:w-120 w-150 md:mt-20 dark:text-black  bg-white shadow-2xl md:absolute right-20">
<p className="text-3xl mt-20 ml-10">Opening Hours</p>
<p className="text-[12px] mt-5 text-gray-500 ml-10">A relaxing and pleasant atmosphere, 
    good jazz, dinner, and cocktails. The<br/> Patio Time Bar opens in the center..</p>
<p className="text-[13px] ml-15 mt-5">Sunday To Tuesday: ----------- 10:00-9:00</p>
<p className="text-[13px] ml-15">Wednesday To Thursday: ----------- 11:30-10:30</p>
<p className="text-[13px] ml-15 ">Friday & Saturday: ----------- 10:30-12:30</p>
<div className="flex flex-row items-center mt-5 ml-5 gap-4">
  <img className="h-20 w-20" 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8XfyBGRSIfTcGC2CdrrIQkqzVXsUvw7USQ&s" alt="Phone icon"/>
  <div>
    <p className="text-gray-500 text-sm">Call anytime</p>
    <p className="text-xl font-bold">+964733-378901</p>
  </div>
</div>
</div>
</div>
        
    )
}