
import { useState } from "react";
import { Truck, Award, RotateCcw, Headphones } from "lucide-react";





function Product() {
const images = [
    "https://diana-demo.myshopify.com/cdn/shop/products/product_1_compact.png?v=1548838312",
    "https://diana-demo.myshopify.com/cdn/shop/products/product_2_compact.png?v=1548838314",
    "https://diana-demo.myshopify.com/cdn/shop/products/product_3_compact.png?v=1548838316",
    "https://diana-demo.myshopify.com/cdn/shop/products/product_4_compact.png?v=1548838320",
  ];
  const items = [
  {
    title: "Free Home Delivery",
    desc: "Provide free home delivery for all products over $100",
    img:"image1.png",
  },
  {
    title: "Quality Products",
    desc: "We ensure the product quality that is our main goal",
    img: "image2.png",
  },
  {
    title: "3 Days Return",
    desc: "Return product within 3 days for any product you buy",
    img: "image3.png",
  },
  {
    title: "Online Support",
    desc: "We ensure the product quality that you can trust easily",
    img: "image4.png",
  },

 
];

  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);

  const prevImg = () => {
    setActiveImg(activeImg === 0 ? images.length - 1 : activeImg - 1);
  };

  const nextImg = () => {
    setActiveImg(activeImg === images.length - 1 ? 0 : activeImg + 1);
  };

   

   const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  

  const handleSubmit = () => {
    if (!text.trim()) return;

    setComments([
      ...comments,
      { id: Date.now(), text },
    ]);
    setText("");
  };



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

<section className="w-full bg-gradient-to-b from-[#050978] to-[#050978]">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
<h1 className="text-4xl md:text-5xl font-light text-white tracking-wide">
1. New and sale badge product
</h1>


<p className="mt-4 text-sm text-gray-300">
<a className="text-gray-400 hover:text-red-500" href="">Home</a>
<span className="mx-2">-</span>
<span className="text-white">1. New and sale badge product</span>
</p>
</div>
       </section>

        <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT IMAGE SECTION */}
        <div>
          <div className="bg-gray-100 p-4 flex items-center justify-center rounded">
            <img
              src={images[activeImg]}
              alt="Product"
              className="w-72 object-contain"
            />
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={prevImg}
              className="w-9 h-9 rounded-full border hover:bg-gray-200"
            >
              ‹
            </button>

            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImg(i)}
                className={`p-1 border cursor-pointer rounded ${
                  activeImg === i ? "border-red-500" : "border-gray-300"
                }`}
              >
                <img src={img} alt="thumb" className="w-16" />
              </div>
            ))}

            <button
              onClick={nextImg}
              className="w-9 h-9 rounded-full border hover:bg-gray-200"
            >
              ›
            </button>
          </div>
        </div>

        {/* RIGHT DETAILS SECTION */}
        <div>
          <h1 className="text-xl font-semibold">
            New and sale badge product
          </h1>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-2xl font-bold">$110.00</span>
            <span className="text-gray-400 line-through">$130.00</span>
          </div>

          <p className="text-sm text-gray-500 mt-1">$31.43 / 2 g</p>

          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in classical Latin literature from 45 BC.
          </p>

          {/* SIZE */}
          <div className="mt-6 border-t pt-4">
            <span className="font-medium text-sm">Size</span>
            <div className="flex gap-4 mt-2 text-sm">
              <button className="text-red-500 font-semibold">S</button>
              <a href="">M</a>
              <a href="">L</a>
              <a href="">XL</a>
              
            </div>
          </div>

          {/* COLOR */}
          <div className="mt-5 border-t pt-4">
            <span className="font-medium text-sm">Color</span>
            <div className="flex gap-3 mt-2">
              <a href=""className="w-5 h-5 bg-red-500 border"></a>
              <a href="" className="w-5 h-5 bg-green-600 border"></a>
              <a href=""className="w-5 h-5 bg-blue-600 border"></a>
                <a href="" className="w-5 h-5 bg-yellow-400 border" ></a>
                <a href="" className="w-5 h-5 bg-white border"></a>
                
                 </div>
          </div>

          {/* QUANTITY */}
          <div className="mt-5 border-t pt-4 flex items-center gap-4">
            <span className="font-medium text-sm">Quantity</span>
            <div className="flex border rounded">
              
              <button
                className="px-3 bg-black text-white"
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              >
                −
              </button>
              <span className="px-4 border-x">{qty}</span>
              <button className="px-3 bg-black text-white" onClick={() => setQty(qty + 1)}>
                +
              </button>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex items-center gap-4">
            <a href=""className="bg-red-500 text-white px-6 py-2 hover:bg-black">Add to cart</a>
            
             <a href="" className="text-xl w-5">♥</a> 
            
          </div>

          

          <button className="mt-4 w-30 bg-black text-white py-3 hover:bg-red-500">
           <a href="index">Buy it now</a>
          </button>

          <p className="mt-4 text-xs text-gray-500">
            Guaranteed safe checkout
          </p>
        </div>
      </div>
    </section>

  <section className="w-full bg-white py-10 ">
      <div className=" mx-auto px-6 gap-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              
              {/* Image Icon */}
             <img
               src={item.img}
               alt={item.title}
               className="w-20 h-20 object-contain transition-transform duration-700 hover:rotate-[360deg]"
            />

              {/* Text */}
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



       




  
  
  </>;
}
export default Product;
