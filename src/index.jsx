import { useState } from "react";

function Index() {
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



   <section>
    <header className="w-full border-b border-t ">
    <div className="border-b border-t">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left text */}
        <h1 className="text-lg font-bold">
          Diana Demo
        </h1>

        {/* Right  */}
      <a href="#" className="mr-40"><img src="shopping.png" alt="shopping" className="w-8 h-8" /></a>
      </div>
    </div>
    </header>
   </section>

  <section className="min-h-screen bg-white  justify-center">
<div className="max-w-6xl  mx-auto px-6 py-10">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">


   <div className="w-auto bg-gray-50 lg:col-span-2 ">
  {/* Contact */}
  <h2 className="text-lg font-semibold mb-3">Contact</h2>

  <input
    type="text"
    placeholder="Email or mobile phone number"
    className="w-full border-2 border-[#050978] rounded-md px-4 py-3 text-sm mb-2 focus:ring-1 focus:ring-black outline-none"
  />

  <label className="flex items-center gap-2 text-sm text-gray-600 mb-6">
    <input type="checkbox" />
    Email me with news and offers
  </label>

  {/* Delivery */}
  <h2 className="text-lg font-semibold mb-3">Delivery</h2>

  <select className="w-full border-2 border-[#050978] rounded-md px-4 py-3 text-sm mb-4">
    <option>India</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Canada</option>
          <option>Australia</option>
          <option>Afghanistan</option>
          <option>Albania</option>
          <option>Algeria</option>
          <option>Andorra</option>
          <option>Angola</option>
          <option>Argentina</option>
          <option>Armenia</option>
          <option>Austria</option>
          <option>Azerbaijan</option>
          <option>Bahamas</option> 
  </select>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <input
      type="text"
      placeholder="First name (optional)"
      className="border-2 border-[#050978] rounded-md px-4 py-3 text-sm"
    />
    <input
      type="text"
      placeholder="Last name"
      className="border-2 border-[#050978] rounded-md px-4 py-3 text-sm"
    />
  </div>

  <input
    type="text"
    placeholder="Address"
    className="w-full border-2 border-[#050978] rounded-md px-4 py-3 text-sm mb-4"
  />

  <input
    type="text"
    placeholder="Apartment, suite, etc. (optional)"
    className="w-full border-2 border-[#050978] rounded-md px-4 py-3 text-sm mb-4"
  />

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
    <input
      type="text"
      placeholder="City"
      className="border-2 border-[#050978] rounded-md px-4 py-3 text-sm"
    />
    <select className="border-2 border-[#050978] rounded-md px-4 py-3 text-sm">
      <option>Rajasthan</option>
    </select>
    <input
      type="text"
      placeholder="PIN code"
      className="border-2 border-[#050978] rounded-md px-4 py-3 text-sm"
    />
  </div>

  <label className="flex items-center gap-2 text-sm text-gray-600 mb-6">
    <input type="checkbox" />
    Save this information for next time
  </label>

  {/* Shipping */}
  <h2 className="text-lg font-semibold mb-3">Shipping method</h2>
  <div className="border-2 border-[#050978] rounded-md px-4 py-3 flex justify-between text-sm mb-6">
    <span>International Shipping</span>
    <span>$0.16</span>
  </div>

  {/* Payment */}
  <h2 className="text-lg font-semibold mb-1">Payment</h2>
  <p className="text-xs text-gray-500 mb-3">
    All transactions are secure and encrypted.
  </p>

  <div className="bg-gray-100 h-30 border-2 border-[#050978] rounded-md p-6 text-center text-sm text-gray-500">
    💳 This store can't accept payments right now.
  </div>
  <button
  disabled
  className="
    w-full bg-[#050978] text-white hover:bg-white hover:text-black hover:border-2 mt-6 mb-10 text-lg py-3 rounded-md cursor-not-allowed">
  Pay now
</button>
   </div>


     <div className="w-auto h-80 bg-[#050978] text-white p-6 rounded-lg ">

      <div className="flex justify-between mb-6">
        <div className="flex gap-10">
          <div className="relative">
            <img
              src="https://diana-demo.myshopify.com/cdn/shop/products/product_1_large.png?v=1548838312"
              className="w-14 h-14 rounded border"
            />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
          </div>

          <div className="gap-y-">
            <p className="text-sm font-medium ">
              New and sale badge product
            </p>
            <p className="text-xs text-gray-500">s / red</p>
            <p className="text-xs text-gray-400">$66.00/3g</p>
          </div>
        </div>

        <span className="text-sm font-medium">$110.00</span>
      </div>

      <div className="border-t mb-10"></div>

      <div className="flex justify-between text-sm mb-2">
        <span className=" text-white">Subtotal</span>
        <span>$110.00</span>
      </div>

      <div className="flex justify-between text-sm mb-8">
        <span className="text-white">Shipping</span>
        <span>$0.16</span>
      </div>

      <div className="border-t mb-4"></div>

      <div className="flex justify-between items-center">
        <span className="font-semibold text-2xl">Total</span>
        <span className="font-semibold flex">
          <span className="text-[15px] mt-1.5 text-gray-400 mr-1">USD</span>
          <h1 className="text-[20px]"> $110.16</h1> 
        </span>
      </div>
     </div>

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

export default Index;
