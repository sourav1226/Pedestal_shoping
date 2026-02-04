import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= TOP BAR ================= */}
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
   <nav className="w-full bg-white relative p-3">
  <div className="mx-auto px-6 py-4 flex items-center justify-between">

        
        {/* Logo */}
       <img
         src="https://pedestaltechnoworld.com/front-end/asset/images/header-logo.png"
         className="h-10"
             />


        {/* Search */}
        <div className="hidden md:flex flex-1 justify-center px-6">
             <div className="relative w-full max-w-xl">
               <img
                 src="https://pedestaltechnoworld.com/front-end/asset/images/icons/search-bar-icon.png"
                   className="absolute left-4 top-1/2 -translate-y-1/2 w-5"
              />
               <input
               placeholder="Search Courses"
               className="w-full pl-12 py-2 border-2 border-blue-800 rounded-full"
                />
             </div>
             </div>


        {/* Right Section */}
<div className="hidden md:flex items-center gap-4 relative">
  <select className="border-2 border-[#050978] rounded-full px-5 py-2">
    <option>Categories</option>
  </select>

  <select className="border-2 border-[#050978] rounded-full px-5 py-2">
    <option>₹ INR</option>
    <option> $ US </option>
  </select>
 <div className="w-20 h-5 mx-5 mb-6">
  <button className="bg-[#050978] text-white px-7 font-bold py-2 rounded-full hover:bg-white hover:text-black hover:border-2">
    Login
  </button>
  </div>

  {/* Hamburger */}
  <div
    onClick={() => setOpen(!open)}
    className="flex flex-col gap-1 cursor-pointer"
  >
    <span className="w-6 h-0.5 ml-auto bg-[#050978]"></span>
    <span className="w-7 h-0.5 bg-[#050978]"></span>
    <span className="w-6 h-0.5 ml-auto bg-[#050978]"></span>
  </div>
</div>

       
 {open && (
  <div className="absolute top-[110%] right-6 w-72 bg-white shadow-xl rounded-lg z-50">
    <ul>
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
      ].map((item, i) => (
        <li
          key={i}
          onClick={() => setOpen(false)}
          className="px-6 py-3 text-sm border-b border-dashed hover:bg-gray-50 cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
)}




 <div
  onClick={() => setOpen(!open)}
  className="flex flex-col gap-1 cursor-pointer md:hidden"
>
  <span className="w-6 h-0.5 ml-auto bg-[#050978]"></span>
  <span className="w-7 h-0.5 bg-[#050978]"></span>
  <span className="w-6 h-0.5 ml-auto bg-[#050978]"></span>
</div>
</div>
    </nav>
    </section>

     
      <section className="bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded shadow">
            <div className="p-4 border-b flex justify-between text-sm text-gray-600">
              <span>From Saved Addresses</span>
              <a href="#" className="text-blue-600">
                Enter Delivery Pincode
              </a>
            </div>

            <div className="p-4 flex flex-col sm:flex-row gap-4">
              <img
                src="https://diana-demo.myshopify.com/cdn/shop/products/product_1_compact.png"
                className="w-full sm:w-28 h-40 object-cover rounded"
                alt=""
              />

              <div className="flex-1">
                <h2 className="font-semibold text-sm sm:text-base">
                 1. New and sale badge product
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                </p>

                <div className="flex gap-3 mt-2 items-center">
                  <span className="line-through text-gray-400">$130</span>
                  <span className="text-lg font-bold">$110</span>
                </div>

                <div className="flex gap-4 mt-3 text-sm">
                    
                  <a href="#" className=" hover:text-blue-600">Save</a>
                  <a href="#" className="hover:text-red-600 ">Remove</a>
                </div>
              </div>

              <select className="border rounded px-3 py-2 h-fit text-sm">
                <option>Qty: 1</option>
                {[2, 3, 4, 5,6,7,8,9,10].map((q) => (
                  <option key={q}>{q}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-white rounded shadow p-4 h-fit">
            <h3 className="font-semibold border-b pb-2">
              Price Details
            </h3>

            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Price</span>
                <span>$139</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>- $20</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-2">
                <span>Total</span>
                <span>$110</span>
              </div>
            </div>

            <button disabled className="mt-4 w-full bg-gray-400 text-white py-2 rounded">
              Place Order
            </button>
          </div>
        </div>
      </section>


      <section className="w-full bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white">
  <div className="max-w-7xl mx-auto px-4 py-16">

   
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
};

export default Header;
