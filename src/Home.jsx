import { useState } from "react";

const items = [
  {
    title: "Free Home Delivery",
    desc: "Provide free home delivery for all products over $100",
    img:"image-1.jpeg",
  },
  {
    title: "Quality Products",
    desc: "We ensure the product quality that is our main goal",
    img: "image-3.jpeg",
  },
  {
    title: "3 Days Return",
    desc: "Return product within 3 days for any product you buy",
    img: "image-2.jpeg",
  },
  {
    title: "Online Support",
    desc: "We ensure the product quality that you can trust easily",
    img: "image-4.jpeg",
  },

 
];

function Home() {
    const [open, setOpen] = useState(false);
  return (
    <>
       <section>
    <section className="hidden md:flex bg-[#050978] py-2">
     <div className="flex">
      <h3 className="ml-10 font-bold text-white mt-0.5">
        Flutter Development From Basic Advance
      </h3>
      <button className="bg-gray-500 text-white hover:bg-gray-600 hover:text-blue-900 ml-5 py-1 px-6 rounded-2xl font-bold transition-all duration-300  ">Apple New</button>
    
     <div className="absolute right-[30px] flex gap-4">
      <a href="#" className="flex items-center justify-center w-6 h-6 rounded-full hover:scale-105 hover:shadow-2xs bg-white">
        <img
           src="https://pedestaltechnoworld.com/front-end/asset/images/icons/facebook-icon.png" alt="Facebook"
           className="max-w-2.5 h-4"
       />
      </a>
      <a href="#" className="flex items-center justify-center w-6 h-6 rounded-full hover:scale-105 hover:shadow-2xs bg-white">
        <img
           src="https://pedestaltechnoworld.com/front-end/asset/images/icons/instagram-icon.png" alt="instagram"
           className="max-w-4 h-4"
       />
      </a>
      <a href="#" className="flex items-center justify-center w-6 h-6 rounded-full hover:scale-105 hover:shadow-2xs bg-white">
        <img
           src="https://pedestaltechnoworld.com/front-end/asset/images/icons/linkdin-icon.png" alt="linkdin"
           className="max-w-3 h-3"
       />
      </a>
      <a href="#" className="flex items-center justify-center w-6 h-6 rounded-full hover:scale-105 hover:shadow-2xs bg-white">
        <img
           src="https://pedestaltechnoworld.com/front-end/asset/images/icons/thread-icon.png" alt="thread"
           className="max-w-3.5 h-3.5"
       />
      </a>

     </div>
    </div>
    </section>
   <nav className="w-full bg-white gap-20 p-3">
      <div className=" mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://pedestaltechnoworld.com/front-end/asset/images/header-logo.png"
            alt="Pedestal Logo"
            className="h-10"
          />
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <div className="relative w-full max-w-xl ">
            <img className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-800" src="https://pedestaltechnoworld.com/front-end/asset/images/icons/search-bar-icon.png" />
            <input
              type="text"
              placeholder="Search Courses"
              className="w-full pl-12 pr-4 py-2 border-2 font-medium border-blue-800 rounded-full focus:outline-none"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center  gap-4">
          <select className="border-2 font-medium border-[#050978] rounded-full px-5 py-2">
            <option>Categories</option>
          </select>

          <select className="border-2 font-bold  border-[#050978] rounded-full px-5 py-2">
            <option className=" font-medium">₹ INR</option>
          </select>

          <button className="bg-[#050978] text-white px-7 font-bold py-2 rounded-full hover:bg-white hover:text-black hover:border-2">
            Login
          </button>

          {/* Menu Icon */}
         {/* Menu Icon */}
<div
  onClick={() => setOpen(!open)}
  className="flex flex-col gap-1 cursor-pointer "
>
  <span className="w-6 h-0.5 ml-auto bg-[#050978]"></span>
  <span className="w-7 h-0.5 bg-[#050978]"></span>
  <span className="w-6 h-0.5 ml-auto bg-[#050978]"></span>
</div>

        </div>
       
  {open && (
  <div className=" top-36  w-50 absolute right-[10px] bg-white shadow-lg z-50">
    <ul className="flex flex-col">
      {[
        "About us",
        "Campus Recruitment Trainings",
        "Skill Club",
        "Categories",
        "Blogs",
        "Forum",
        "Internship",
        "Sikar Center",
        "Contact Us",
        "Help & Support",
        "Verify Certificate",
      ].map((item, index) => (
        <li
          key={index}
          onClick={() => setOpen(false)}
          className="px-6 py-3 text-black border-b border-dashed border-gray-300 hover:bg-gray-50 cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
)}



        {/* Mobile Menu */}
{/* Menu Icon */}
<div
  onClick={() => setOpen(!open)}
  className="flex flex-col gap-1 cursor-pointer md:hidden md:top-25"
>
  <span className="w-6 h-0.5 ml-auto bg-[#050978]"></span>
  <span className="w-7 h-0.5 bg-[#050978]"></span>
  <span className="w-6 h-0.5 ml-auto bg-[#050978]"></span>
</div>
</div>
    </nav>
</section>
    
     
      <section className="w-full bg-gradient-to-b from-[#050978] to-[#050978]">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-2">
            Products
          </h1>
          <p className="text-gray-300 text-sm">
            <span className="hover:text-red-500 cursor-pointer">Home</span>
            <span className="mx-2">-</span> Products
          </p>
        </div>
      </section>

    
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
      
        <section className="space-y-8">
          <div>
            <div className="bg-gray-200 py-2 text-center font-semibold">
              Availability
            </div>
            <label className="flex gap-2 text-sm mt-3">
              <input type="checkbox" /> In stock (30)
            </label>
            <label className="flex gap-2 text-sm">
              <input type="checkbox" /> Out of stock (18)
            </label>
          </div>

          <div className="space-y-4">
            <div className="border bg-gray-50 py-2 text-center font-medium">
              Price
            </div>

            <div className="flex flex-wrap gap-2 items-center text-sm">
              <span>$</span>
              <input
                type="number"
                placeholder="0.00"
                className="border w-20 px-2 py-1 text-center outline-none"
              />
              <span>From</span>
              <span>$</span>
              <input
                type="number"
                placeholder="110.00"
                className="border w-20 px-2 py-1 text-center outline-none"
              />
              <span>To</span>
            </div>

            <button className="bg-black text-red-500 px-6 py-2 rounded-full hover:bg-red-500 hover:text-black font-semibold">
              Filter
            </button>
          </div>
        </section>

   
        <section className="lg:col-span-3">
          
       
          <div className="flex flex-col sm:flex-row justify-between gap-4 border-b pb-4 mb-8">
            <div className="flex items-center gap-4">
              <button className="text-red-500">
                <svg width="18" height="18" fill="currentColor">
                  <rect width="6" height="6" />
                  <rect x="12" width="6" height="6" />
                  <rect y="12" width="6" height="6" />
                  <rect x="12" y="12" width="6" height="6" />
                </svg>
              </button>

              <button
                className="hover:text-red-600"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                <svg width="20" height="18" fill="currentColor">
                  <rect width="20" height="3" />
                  <rect y="7" width="20" height="3" />
                  <rect y="14" width="20" height="3" />
                </svg>
              </button>

              <span className="text-sm text-gray-700">
                Showing 1 - 15 of 33 result
              </span>
            </div>

            <select className="border rounded-full px-4 py-2 text-sm">
              <option>Featured</option>
            <option>Best Selling</option>
            <option>Alphabetically, A-Z</option>
            <option>Alphabetically, Z-A</option>
            <option>Price, low to high</option>
            <option>Price, high to low</option>
            <option>Date, now to old</option>
            <option>Date, old to new</option>
            </select>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            
            <div className="bg-white p-5 rounded shadow text-center">
              <img
                src="https://diana-demo.myshopify.com/cdn/shop/products/product_1.png"
                className="mx-auto h-48 object-contain mb-4"
                alt=""
              />
              <h4 className="text-sm hover:text-red-500 cursor-pointer">
                New and sale badge product
              </h4>
              <p className="text-sm mt-2">
                <span className="font-semibold">$110.00</span>
                <span className="line-through ml-2 text-gray-400">$130.00</span>
              </p>
            </div>

           
            <div className="bg-white p-5 rounded shadow text-center">
              <img
                src="https://diana-demo.myshopify.com/cdn/shop/products/product_2.png"
                className="mx-auto h-48 object-contain mb-4"
                alt=""
              />
              <h4 className="text-sm hover:text-red-500 cursor-pointer">
                Large title testing product
              </h4>
              <p className="font-semibold">$19.00</p>
            </div>

          
            <div className="bg-white p-5 rounded shadow text-center">
              <img
                src="https://diana-demo.myshopify.com/cdn/shop/products/product_3.png"
                className="mx-auto h-48 object-contain mb-4"
                alt=""
              />
              <h4 className="text-sm hover:text-red-500 cursor-pointer">
                Product with video
              </h4>
              <p className="font-semibold">$39.00</p>
            </div>
    
            <div className="bg-white p-5 rounded shadow text-center">
              <img
                src="https://diana-demo.myshopify.com/cdn/shop/products/product_3.png"
                className="mx-auto h-48 object-contain mb-4"
                alt=""
              />
              <h4 className="text-sm hover:text-red-500 cursor-pointer">
                Product with video
              </h4>
              <p className="font-semibold">$39.00</p>
            </div>


            
          

          </div>
        </section>
      </section>

     
      <section className="flex justify-center py-6">
        <div className="flex gap-4 text-gray-600 text-sm">
          <span className="opacity-40 cursor-not-allowed">‹ Back</span>
          <span className="font-semibold text-black">1</span>
          <span className="hover:text-red-500 cursor-pointer">2</span>
          <span className="hover:text-red-500 cursor-pointer">3</span>
          <span className="hover:text-red-500 cursor-pointer">Next ›</span>
        </div>
      </section>

      <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              
            
             <img
  src={item.img}
  alt={item.title}
  className="w-20 h-20 object-contain transition-transform duration-700 hover:rotate-[360deg]"
/>

         
              <div>
                <h4 className="font-semibold text-base mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="w-full bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white">
  <div className="max-w-7xl mx-auto px-4 py-16">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold">
        Where You Can Find Us
      </h2>
      <p className="mt-3 text-blue-200 text-sm md:text-base">
        Step into any of our centers and unlock new opportunities
      </p>
    </div>

    {/* Location Cards */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-24">

      <div className="bg-blue-900/40 backdrop-blur-lg rounded-3xl p-5 w-56 shadow-xl">
        <div className="bg-white rounded-2xl p-3">
          <img src="jaipur.jpeg" alt="Jaipur"
            className="w-full h-32 object-cover rounded-xl" />
          <p className="text-center text-gray-800 font-semibold mt-3">
            Jaipur
          </p>
        </div>
      </div>

      <div className="bg-blue-900/40 backdrop-blur-lg rounded-3xl p-5 w-56 shadow-xl">
        <div className="bg-white rounded-2xl p-3">
          <img src="gurgaon.jpeg" alt="Gurgaon"
            className="w-full h-32 object-cover rounded-xl" />
          <p className="text-center text-gray-800 font-semibold mt-3">
            Gurgaon
          </p>
        </div>
      </div>

      <div className="bg-blue-900/40 backdrop-blur-lg rounded-3xl p-5 w-56 shadow-xl">
        <div className="bg-white rounded-2xl p-3">
          <img src="siker.jpeg" alt="Sikar"
            className="w-full h-32 object-cover rounded-xl" />
          <p className="text-center text-gray-800 font-semibold mt-3">
            Sikar
          </p>
        </div>
      </div>

    </div>

    {/* Footer */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-blue-200">

      <div>
        
          <img className="text-white text-xl font-semibold mb-4" src="https://pedestaltechnoworld.com/front-end/asset/images/icons/footer-icon/footer-logo.png" alt="" />
     
        <p>
          Pedestal Techno World Private Limited is an India’s leading
          EdTech company bridging the gap between industry and students.
        </p>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4">
          Explore Pedestal
        </h4>
        <ul className="space-y-2">
          <li><a href="">Who We Are</a></li>
          <li><a href="">Help & Support</a></li>
          <li><a href="">Courses We Offer</a></li>
          <li><a href="">Blog & Insights</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4">
          Top Learning Tracks
        </h4>
        <ul className="space-y-2">
          <li><a href="">Digital Marketing</a></li>
          <li><a href="">Coding & Programming</a></li>
          <li><a href="">AI & ML</a></li>
          <li><a href="">Data Science</a></li>
          <li><a href="">UI/UX Design</a></li>
          <li><a href="">Full Stack Development</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4">
          Connect With Us
        </h4>
        <ul className="space-y-3">
          <li><a href="">📞 +91 99299 34909</a></li>
          <li><a href="">📞 +91 99299 70449</a></li>
          <li><a href="">☎️ 0141-3142014</a></li>
          <li><a href="">✉️ info@pedestaltechnoworld.com</a></li>
        </ul>
      </div>

    </div>
  </div>
</section>


    
    </>
  );
}

export default Home;
