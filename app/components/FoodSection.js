// /components/FoodSection.jsx
export default function FoodSection() {
  const foodItems = [
    {
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F4.jpg&w=1920&q=75",
      title: "Broken Lasagna & Parmesan",
      rating: "4.9",
      reviews: "5.7K",
      price: "$34",
      desc: "4 chicken legs • Chili sauce • Soft Drinks"
    },
    {
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F10.jpg&w=1920&q=75",
      title: "White Chocolate Cheesecake",
      rating: "4.9",
      reviews: "5.7K",
      price: "$34",
      desc: "4 chicken legs • Chili sauce • Soft Drinks"
    },
    {
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F23.jpg&w=1920&q=75",
      title: "Seared Scallops with Butter",
      rating: "4.9",
      reviews: "5.7K",
      price: "$34",
      desc: "4 chicken legs • Chili sauce • Soft Drinks"
    },
    {
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F20.jpg&w=1920&q=75",
      title: "Americano Coffee",
      rating: "4.9",
      reviews: "5.7K",
      price: "$34",
      desc: "4 chicken legs • Chili sauce • Soft Drinks"
    },
    {
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F16.jpg&w=1920&q=75",
      title: "Special Cajun Red Crab",
      rating: "4.9",
      reviews: "5.7K",
      price: "$34",
      desc: "4 chicken legs • Chili sauce • Soft Drinks"
    },
    {
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F11.jpg&w=1920&q=75",
      title: "Lemon Meringue Pie",
      rating: "4.9",
      reviews: "5.7K",
      price: "$34",
      desc: "4 chicken legs • Chili sauce • Soft Drinks"
    }
  ];

  return (
    <div className="w-full px-5 md:px-20 mt-20">
    
      <div className="text-center">
        <p className="text-yellow-400 text-lg">FOOD MENU</p>
        <p className="text-3xl font-bold mt-2">Our Specials Menu</p>
        <p className="inline-block bg-orange-400 text-white px-6 py-2 rounded-2xl mt-4 text-lg">
          DISHES
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        {foodItems.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
            
            <img src={item.img} className="w-full h-60 object-cover" alt={item.title} />

          
            <div className="p-5">
              
              <div className="flex items-center justify-between text-gray-700">
                <div className="flex items-center gap-2">
                  <span>⭐</span>
                  <span className="font-medium">{item.rating}</span>
                  <span className="text-sm text-gray-500">({item.reviews})</span>
                </div>
                <div className="font-semibold">{item.price}</div>
              </div>

              
              <p className="text-2xl font-bold mt-3 dark:text-black">{item.title}</p>

              
              <p className="text-gray-600 mt-1">{item.desc}</p>

              
              <button className="mt-5 dark:text-black border border-gray-500 rounded-full px-4 py-2 hover:bg-amber-400 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
