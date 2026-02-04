import { useState } from "react";

function About() {
  const [open, setOpen] = useState(false);
  
  return <>
  
<section>
    <section className="hidden md:flex bg-[#050978] py-2">
     <div className="flex">
      <h3 className="ml-10 font-bold text-white mt-0.5">
        Flutter Development From Basic Advance
      </h3>
      <button className="bg-gray-500 text-white hover:bg-gray-600 hover:text-blue-900 ml-5 py-1 px-6 rounded-2xl font-bold transition-all duration-300  ">Apple New</button>
    
     <div className="absolute right-[30px] flex gap-4">
      <a href="https://www.facebook.com/pedestaltech?mibextid=LQQJ4d&rdid=UdmsVeIYZs20JFAv&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252FBpK7vMUsjp1Srtxc%252F%253Fmibextid%253DLQQJ4d" className="flex items-center justify-center w-6 h-6 rounded-full hover:scale-105 hover:shadow-2xs bg-white">
        <img
           src="https://pedestaltechnoworld.com/front-end/asset/images/icons/facebook-icon.png" alt="Facebook"
           className="max-w-2.5 h-4"
       />
      </a>
      <a href="https://www.instagram.com/pedestal_edtech?igsh=MWpxNG1mdmRmZ2Izbw==" className="flex items-center justify-center w-6 h-6 rounded-full hover:scale-105 hover:shadow-2xs bg-white">
        <img
           src="https://pedestaltechnoworld.com/front-end/asset/images/icons/instagram-icon.png" alt="instagram"
           className="max-w-4 h-4"
       />
      </a>
      <a href="https://www.linkedin.com/company/pedestaltech/" className="flex items-center justify-center w-6 h-6 rounded-full hover:scale-105 hover:shadow-2xs bg-white">
        <img
           src="https://pedestaltechnoworld.com/front-end/asset/images/icons/linkdin-icon.png" alt="linkdin"
           className="max-w-3 h-3"
       />
      </a>
      <a href="https://x.com/Pedestaltechno" className="flex items-center justify-center w-6 h-6 rounded-full hover:scale-105 hover:shadow-2xs bg-white">
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
   <a href="Login">Login</a>
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
  <div className="absolute top-full right-6 w-72 bg-white shadow-xl rounded-lg z-50">
    <ul className="divide-y divide-dashed">
      {[
        { name: "Product", link: "/product", internal: true },
        { name: "About Us", link: "https://pedestaltechnoworld.com/about" },
        { name: "Campus Recruitment Trainings", link: "https://pedestaltechnoworld.com/placement-guarantee-courses" },
        { name: "Skill Club", link: "https://pedestaltechnoworld.com/pedestal-skill-club" },
        { name: "Categories", link: "https://pedestaltechnoworld.com/categories" },
        { name: "Blogs", link: "https://blog.pedestaltechnoworld.com/" },
        { name: "Forum", link: "https://pedestaltechnoworld.com/forum" },
        { name: "Internship", link: "https://internship.pedestaltechnoworld.com/" },
        { name: "Sikar Center", link: "https://sikar.pedestaltechnoworld.com/" },
        { name: "Contact Us", link: "https://pedestaltechnoworld.com/contact" },
        { name: "Help & Support", link: "https://pedestaltechnoworld.com/help-support" },
        { name: "Verify Certificate", link: "https://pedestaltechnoworld.com/truecopy" },
      ].map((item, i) => (
        <li
          key={i}
          onClick={() => setOpen(false)}
          className="px-6 py-3 text-sm hover:bg-gray-50 cursor-pointer"
        >
          {item.internal ? (
            <Link to={item.link} className="font-bold block">
              {item.name}
            </Link>
          ) : (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold block"
            >
              {item.name}
            </a>
          )}
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

<section className="min-h-screen bg-gray-50 flex items-center justify-center p-4">

<section className="w-full max-w-5xl bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

<section className="hidden md:flex items-center justify-center bg-gray-100 p-10">
<img
src="https://pedestaltechnoworld.com/front-end/asset/forget-password-img/forget-passowrd-img.png"
alt="Forgot password"
className="max-w-sm"
/>
</section>



<section className="p-8 md:p-12 flex flex-col justify-center">

  <a href="" className="text-sm text-gray-500  hover:text-gray-700">← Back to Login</a>





<h1 className="text-3xl font-bold text-gray-900 mb-2">
Forgot your password?
</h1>
<p className="text-gray-500 mb-8">
Don’t worry, happens to all of us. Enter your email below to recover
your password.
</p>



<form className="space-y-6">
<input
type="email"
placeholder="Email"
className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
/>


<button
type="submit"
className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg"
>
Reset
</button>
</form>



<div className="flex items-center gap-4 my-8">
<div className="h-px bg-gray-200 flex-1" />
<span className="text-sm text-gray-400">Or login with</span>
<div className="h-px bg-gray-200 flex-1" />
</div>


<div className="flex gap-4">
  <a href="" className="flex-1 border border-blue-500 rounded-lg py-3 flex justify-center hover:bg-gray-50">
    <img src="https://pedestaltechnoworld.com/front-end/asset/login-img/facebook-img.png" alt="Facebook" className="h-5" />
  </a>


<a href="" className="flex-1 border border-blue-500 rounded-lg py-3 flex justify-center hover:bg-gray-50">
<img src="https://pedestaltechnoworld.com/front-end/asset/login-img/google-img.png" alt="Google" className="h-5" />
</a>


<a href="" className="flex-1 border border-blue-500 rounded-lg py-3 flex justify-center hover:bg-gray-50">
<img src="https://pedestaltechnoworld.com/front-end/asset/login-img/apple-img.png" alt="Apple" className="h-5" />
</a>



</div>
</section>
</section>
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
    <div className="hidden md:flex flex flex-col md:flex-row items-center justify-center gap-12 mb-24">

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

      <div className="text-center ">
         <div className="flex justify-center items-center">
          <img className="text-white  text-xl font-semibold mb-4" src="https://pedestaltechnoworld.com/front-end/asset/images/icons/footer-icon/footer-logo.png" alt="" />
         </div>
        <p>
          Pedestal Techno World Private Limited is an India’s leading
          EdTech company bridging the gap between industry and students.
        </p>
      </div>

      <div className="text-center">
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

      <div className="text-center">
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

      <div className="text-center">
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
}
export default About;
