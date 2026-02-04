import { useState } from "react";
import { Link } from "react-router-dom";

const featured = [
  { id: 1, title: "Without shortcode product", price: "₹7,165.73", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_1_large.png?v=1548838312" },
  { id: 2, title: "New and sale badge product", price: "₹9,977.60", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_5_19212936-2f87-4285-828c-7671a3b924df_large.png?v=1548838615", badge: "NEW" },
  { id: 3, title: "Variable product", price: "₹3,682.22 – ₹5,200.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_13_b0864ef1-4371-454e-960f-40c87ba5af6a_large.png?v=1548842040" },
  { id: 4, title: "Simple product", price: "₹4,535.27", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_9_49d8d7fd-f94a-4254-a42a-21008386d749_large.png?v=1548838720" },
  { id: 5, title: "Product with video", price: "₹5,357.51", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_4_53c6ead4-7887-4d16-9075-d8549c37180f_large.png?v=1548838585" },
  { id: 6, title: "New badge product", price: "₹7,256.43", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_6_f9c5f169-e6b9-4db4-8541-0d3b9ea1303e_large.png?v=1548838651", badge: "NEW" },
  { id: 7, title: "Soldout product", price: "₹1,723.40", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_8_e65d41b1-64c6-4941-a997-24ad72bdbd61_large.png?v=1548838696", badge: "SOLD" },
  { id: 8, title: "Variable without shortcode product", price: "₹4,988.00 – ₹6,500.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_10_f1873f17-43a7-4b16-acb5-3c44a303a2ec_large.png?v=1548838743" },
  { id: 9, title: "Product with video", price: "₹5,357.51", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_3_52fd9366-03c9-4491-80ce-78c67f2e3898_large.png?v=1548838575" },
  { id: 10, title: "Variable without shortcode product", price: "₹4,988.00 – ₹6,500.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_5_19212936-2f87-4285-828c-7671a3b924df_large.png?v=1548838615" },
  { id: 11, title: "Without shortcode product", price: "₹7,165.73", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_6_f9c5f169-e6b9-4db4-8541-0d3b9ea1303e_large.png?v=1548838651" },
  { id: 12, title: "New and sale badge product", price: "₹9,977.60", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_14_large.png?v=1548838780", badge: "NEW" },
  { id: 13, title: "Variable product", price: "₹3,682.22 – ₹5,200.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_1_large.png?v=1548838312" },
  { id: 14, title: "Simple product", price: "₹4,535.27", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_4_53c6ead4-7887-4d16-9075-d8549c37180f_large.png?v=1548838585" },
  { id: 15, title: "Variable without shortcode product", price: "₹4,988.00 – ₹6,500.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_10_f1873f17-43a7-4b16-acb5-3c44a303a2ec_large.png?v=1548838743" },
   { id: 16, title: "Variable product", price: "₹3,682.22 – ₹5,200.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_13_b0864ef1-4371-454e-960f-40c87ba5af6a_large.png?v=1548842040" },
 ];
const chair = [
   { id: 9, title: "Product with video", price: "₹5,357.51", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_3_52fd9366-03c9-4491-80ce-78c67f2e3898_large.png?v=1548838575" },
  { id: 10, title: "Variable without shortcode product", price: "₹4,988.00 – ₹6,500.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_5_19212936-2f87-4285-828c-7671a3b924df_large.png?v=1548838615" },
  { id: 11, title: "Without shortcode product", price: "₹7,165.73", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_6_f9c5f169-e6b9-4db4-8541-0d3b9ea1303e_large.png?v=1548838651" },
  { id: 12, title: "New and sale badge product", price: "₹9,977.60", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_14_large.png?v=1548838780", badge: "NEW" },
  { id: 13, title: "Variable product", price: "₹3,682.22 – ₹5,200.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_1_large.png?v=1548838312" },
  { id: 14, title: "Simple product", price: "₹4,535.27", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_4_53c6ead4-7887-4d16-9075-d8549c37180f_large.png?v=1548838585" },
  { id: 15, title: "Variable without shortcode product", price: "₹4,988.00 – ₹6,500.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_10_f1873f17-43a7-4b16-acb5-3c44a303a2ec_large.png?v=1548838743" },
  { id: 16, title: "Variable product", price: "₹3,682.22 – ₹5,200.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_13_b0864ef1-4371-454e-960f-40c87ba5af6a_large.png?v=1548842040" },
  { id: 1, title: "Without shortcode product", price: "₹7,165.73", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_1_large.png?v=1548838312" },
  { id: 2, title: "New and sale badge product", price: "₹9,977.60", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_5_19212936-2f87-4285-828c-7671a3b924df_large.png?v=1548838615", badge: "NEW" },
  { id: 3, title: "Variable product", price: "₹3,682.22 – ₹5,200.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_13_b0864ef1-4371-454e-960f-40c87ba5af6a_large.png?v=1548842040" },
  { id: 4, title: "Simple product", price: "₹4,535.27", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_9_49d8d7fd-f94a-4254-a42a-21008386d749_large.png?v=1548838720" },
  { id: 5, title: "Product with video", price: "₹5,357.51", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_4_53c6ead4-7887-4d16-9075-d8549c37180f_large.png?v=1548838585" },
  { id: 6, title: "New badge product", price: "₹7,256.43", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_6_f9c5f169-e6b9-4db4-8541-0d3b9ea1303e_large.png?v=1548838651", badge: "NEW" },
  { id: 7, title: "Soldout product", price: "₹1,723.40", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_8_e65d41b1-64c6-4941-a997-24ad72bdbd61_large.png?v=1548838696", badge: "SOLD" },
  { id: 8, title: "Variable without shortcode product", price: "₹4,988.00 – ₹6,500.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_10_f1873f17-43a7-4b16-acb5-3c44a303a2ec_large.png?v=1548838743" },
   ];

const sofa = [
   { id: 11, title: "Without shortcode product", price: "₹7,165.73", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_6_f9c5f169-e6b9-4db4-8541-0d3b9ea1303e_large.png?v=1548838651" },
  { id: 12, title: "New and sale badge product", price: "₹9,977.60", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_14_large.png?v=1548838780", badge: "NEW" },
  { id: 13, title: "Variable product", price: "₹3,682.22 – ₹5,200.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_1_large.png?v=1548838312" },
  { id: 14, title: "Simple product", price: "₹4,535.27", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_4_53c6ead4-7887-4d16-9075-d8549c37180f_large.png?v=1548838585" },
  { id: 15, title: "Variable without shortcode product", price: "₹4,988.00 – ₹6,500.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_10_f1873f17-43a7-4b16-acb5-3c44a303a2ec_large.png?v=1548838743" },
  { id: 16, title: "Variable product", price: "₹3,682.22 – ₹5,200.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_13_b0864ef1-4371-454e-960f-40c87ba5af6a_large.png?v=1548842040" },
  { id: 1, title: "Without shortcode product", price: "₹7,165.73", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_1_large.png?v=1548838312" },

];

const products = [
  { id: 1, title: "Without shortcode product", price: "₹7,165.73", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_1_large.png?v=1548838312" },
  { id: 2, title: "New and sale badge product", price: "₹9,977.60", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_5_19212936-2f87-4285-828c-7671a3b924df_large.png?v=1548838615", badge: "NEW" },
  { id: 3, title: "Variable product", price: "₹3,682.22 – ₹5,200.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_13_b0864ef1-4371-454e-960f-40c87ba5af6a_large.png?v=1548842040" },
  { id: 4, title: "Simple product", price: "₹4,535.27", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_9_49d8d7fd-f94a-4254-a42a-21008386d749_large.png?v=1548838720" },
  { id: 5, title: "Product with video", price: "₹5,357.51", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_4_53c6ead4-7887-4d16-9075-d8549c37180f_large.png?v=1548838585" },
  { id: 6, title: "New badge product", price: "₹7,256.43", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_6_f9c5f169-e6b9-4db4-8541-0d3b9ea1303e_large.png?v=1548838651", badge: "NEW" },
  { id: 7, title: "Soldout product", price: "₹1,723.40", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_8_e65d41b1-64c6-4941-a997-24ad72bdbd61_large.png?v=1548838696", badge: "SOLD" },
  { id: 8, title: "Variable without shortcode product", price: "₹4,988.00 – ₹6,500.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_10_f1873f17-43a7-4b16-acb5-3c44a303a2ec_large.png?v=1548838743" },
  { id: 9, title: "Product with video", price: "₹5,357.51", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_3_52fd9366-03c9-4491-80ce-78c67f2e3898_large.png?v=1548838575" },
  { id: 10, title: "Variable without shortcode product", price: "₹4,988.00 – ₹6,500.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_5_19212936-2f87-4285-828c-7671a3b924df_large.png?v=1548838615" },
  { id: 11, title: "Without shortcode product", price: "₹7,165.73", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_6_f9c5f169-e6b9-4db4-8541-0d3b9ea1303e_large.png?v=1548838651" },
  { id: 12, title: "New and sale badge product", price: "₹9,977.60", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_14_large.png?v=1548838780", badge: "NEW" },
  { id: 13, title: "Variable product", price: "₹3,682.22 – ₹5,200.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_1_large.png?v=1548838312" },
  { id: 14, title: "Simple product", price: "₹4,535.27", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_4_53c6ead4-7887-4d16-9075-d8549c37180f_large.png?v=1548838585" },
  { id: 15, title: "Variable without shortcode product", price: "₹4,988.00 – ₹6,500.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_10_f1873f17-43a7-4b16-acb5-3c44a303a2ec_large.png?v=1548838743" },
   { id: 16, title: "Variable product", price: "₹3,682.22 – ₹5,200.00", img: "https://diana-demo.myshopify.com/cdn/shop/products/product_13_b0864ef1-4371-454e-960f-40c87ba5af6a_large.png?v=1548842040" },
 ];
const cards = [
  {
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    title: "Standard dummy text ever since",
    desc: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    img: "https://diana-demo.myshopify.com/cdn/shop/articles/blog_9.png?v=1549080646",
    title: "Make a type specimen book",
    desc: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    img: "https://diana-demo.myshopify.com/cdn/shop/articles/blog_8.png?v=1549080555",
    title: "Lorem Ipsum is simply dummy",
    desc: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    title: "Printing and typesetting industry",
    desc: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "Unknown printer took a galley",
    desc: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    title: "Scrambled it to make a type",
    desc: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
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



function Home() {
  
const [open, setOpen] = useState(false);


const [activeTab, setActiveTab] = useState("featured");
const [page, setPage] = useState(0);
const perPage = 8;



const currentProducts = 
    activeTab === "featured"
    ? featured
    : activeTab === "chair"
    ? chair
    : sofa;

const[page2, setPage2] = useState(0); 
const perPage2 = 4;

const[page3, setPage3] = useState(0); 
const perPage3 = 3;






  return (
    
    <>
<section>
  
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

<section
          className=" w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]  bg-[20%] bg-cover"
          style={{backgroundImage: "url('https://diana-demo.myshopify.com/cdn/shop/files/slider-img_4.png?v=1613714145')",}}>
</section>

{/* Product List and button Section */}
<section className="py-20 px-10 ">
            <div className="sm:w-auto ml-auto mr-auto p-4 justify-center text-center ">
              <h2 className="text-4xl font-bold mb-4">Product List</h2>
               <p className="text-gray-700">Some of our customers say that they trust us and buy our <br />product without any hesitation because they believe us and always happy to buy our product.</p>
            </div>
         <div className="flex justify-center space-x-5">
             {["featured", "chair", "sofa"].map((tab) => (
                <button
                   key={tab}
                  onClick={() => {
                   setActiveTab(tab);
                   setPage(0);
                 }}
                className={`py-2 px-6 rounded-2xl font-bold transition-all duration-300
                  ${
                     activeTab === tab
                        ? "bg-[#050978] text-white"
                        : "text-black hover:bg-gray-300 hover:text-black"
                       }`}
                     >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                  ))}
             </div>


</section>


 {/* Product Grid Section */}
<section className="w-full h-auto bg-[#050978] mt-5">
  
  <section  className="relative w-auto pr-auto pl-auto mx-auto gap-20 px-6 py-3 gap-y-18">
       
    {/* Product Grid */}
   <div className="grid grid-cols-1 mb-5   ml-auto mr-auto max-w-7xl  md:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-auto top-10 ">
  {currentProducts
    .slice(page * perPage, (page + 1) * perPage)
    .map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-lg overflow-hidden shadow scale-90 hover:scale-95 transition-transform duration-300"
      ><a href="Order">
        <div className="relative">
          <img
            src={item.img}
            alt={item.title}
            className="w-full object-cover"
          />

          {item.badge && (
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">
              {item.badge}
            </span>
          )}
        </div>

        <div className="p-4 text-center">
          <a href="product" className="text-lg font-medium hover:text-red-600">
            {item.title}
          </a>
          <p className="text-sm text-gray-500 mt-1">{item.price}</p>
        </div>
       </a>
      </div>
    ))}
   </div>
  
   <div className=" flex  text-center justify-center gap-x-20   sm:w-full sm:justify-center sm:px-4 sm:top-10  sm:items-center ">
    {/* Left Arrow */}
    <div>
    <button
      onClick={() => setPage(page > 0 ? page - 1 : 0)}
      className="  sm:absolute sm:left-4  left-[30px] top-2/4 -translate-y-2/4
      w-13 h-13 bg-white rounded-full  shadow flex items-center   text-center justify-center  "
    >
     <h1 className="text-5xl mb-4">‹</h1>
    </button>
    </div>
       {/* Right Arrow */}
    <button
      onClick={() =>
        setPage((page + 1) * perPage < products.length ? page + 1 : page)
      }
      className="  top-1/2 -translate-y-1/2
       w-13 h-13
      bg-white rounded-full shadow
      flex items-center justify-center
      sm:absolute sm:right-4"
    >
     <h1 className="text-5xl mb-4">›</h1>
    </button>
    </div>

  </section>
</section>


{/* Product only  image  Section */}
<section className="w-full bg-[#f3f4f6] py-10">
 <a href="#" ><img className="ml-auto mr-auto" src="https://diana-demo.myshopify.com/cdn/shop/files/Banner-4.png?v=1613713962" alt="" /></a>
 </section>

{/* Product Grid 2 Section */}
<section className="w-full py-10">
   <div className="max-w-7xl mx-auto px-6 text-center">
     <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
     <p className="text-gray-700 mb-6">Some of our customers say that they trust us and buy our product without <br /> any hesitation because they believe us and always happy to buy our product.</p>
    
   </div>
 <section className="relative max-w-full   gap-y-15 bg-[#050978] px-6 py-3 ">

  

    {/* Product Grid section 2*/}
    
    <div className=" max-w-7xl  ml-auto mr-auto mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-22 top-10">
      {products
        .slice(page2 * perPage2, (page2 + 1) * perPage2)
        .map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow scale-90 hover:scale-95 transition-transform duration-300"
          >
            <a href="Order">
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full top-8  object-cover"
              />

              {item.badge && (
                <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">
                  {item.badge}
                </span>
              )}
            </div>

            <div className="p-4 text-center">
                <a href="product" className="text-lg font-medium hover:text-red-600">
                {item.title}
             </a>
              <p className="text-sm text-gray-500 mt-1">
                {item.price}
              </p>
            </div>
            </a>
          </div>
        ))}

    
    </div>

     <div className="  flex  text-center justify-center gap-x-20   sm:w-full sm:justify-center sm:px-4   sm:items-center ">
    {/* Left Arrow */}
    <button
      onClick={() => setPage2(page2 > 0 ? page2 - 1 : 0)}
      className="sm:absolute sm:left-4  left-[30px] top-2/4 -translate-y-2/4
      w-13 h-13 bg-white rounded-full shadow flex items-center   text-center justify-center"
    >
     <h1 className="text-5xl mb-4">‹</h1>
    </button>

       {/* Right Arrow */}
    <button
      onClick={() =>
        setPage2((page2 + 1) * perPage2 < products.length ? page2 + 1 : page2)
      }
      className="top-1/2 -translate-y-1/2
       w-13 h-13
      bg-white rounded-full shadow
      flex items-center justify-center
      sm:absolute sm:right-4"
    >
     <h1 className="text-5xl mb-4">›</h1>
    </button>
    </div>

 </section>

</section>



<section className="w-full bg-[#f3f4f6] ">
  <div className="ml-auto mr-auto justify-center text-center ">
        <p className="text-3xl">Special <a className="text-red-600 hover:text-red-600" href="#">Offers</a> for Subscription</p>
        <h2 className="text-3xl mt-5">GET INSTANT DISCOUNT FOR MEMBERSHIP</h2>
        <p className="text-slate-700 mt-5">Subscribe our newsletter and get all latest news abot our latest <br />
                                              products, promotions, offers and discount</p>
        <div className="w-full flex justify-center items-center py-12 px-4">
  <div className="relative w-full max-w-3xl">

    {/* Input */}
    <input
      type="email"
      placeholder="Enter your email address"
      className="w-full h-12 pl-6 pr-36
      border border-gray-300 rounded-full
      focus:outline-none focus:ring-2 focus:ring-[#050978] focus:border-transparent"
    />

    {/* Button */}
    <button
      className="absolute right-1 top-1/2 -translate-y-1/2
      bg-[#050978] hover:bg-red-600 text-white
      px-8 h-11 rounded-full font-semibold tracking-wide"
    >
      SUBSCRIBE
    </button>

  </div>
</div>


  </div>
</section>


{/* Product Latest Blog  Section */}
<section className="w-full py-10 gap-y-15">
  {/* Heading */}
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4 text-red-600 ">Latest Blog</h2>
    <p className="text-gray-700 mb-6">
      Some of our customers say that they trust us and buy our <br />
      product without any hesitation because they believe us.
    </p>
  </div>

  {/* Blog Section */}
  <div className="relative w-full bg-[#050978] py-1.5  gap-y-15">
    
    <div className="relative max-w-full mx-auto px-6">
     
      {/* Cards */}
      <div className="max-w-7xl ml-auto mr-auto top-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 top-10 ">
        {cards.slice(page3 * perPage3, (page3 + 1) * perPage3).map((item, index) => (
          
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow scale-90 hover:scale-95 transition-transform duration-300"
          > 
             <img
    src={item.img}
    alt={item.title}
    className=" w-full top-4 mx-auto object-contain"
  />

            <div className="p-6">
                  <a href="#" className="text-lg font-medium hover:text-red-600">
                {item.title}
             </a>

              <p className="text-gray-600 text-sm mb-4">
                {item.desc}
              </p>

              <button className="text-sm font-semibold border px-4 py-2 ml-auto mr-auto hover:bg-red-600 bg-[#050978] text-white rounded-full">
                Read More
              </button>

              <div className="mt-4 text-xs text-gray-500">
                By - Diana Demo Admin | 01 February, 2019
              </div>
            </div>
          </div>
        ))}

      <div className="flex  text-center justify-center gap-x-20   sm:w-full sm:justify-center sm:px-4   sm:items-center">
      {/* Left Arrow */}
      <button
        onClick={() => setPage3(page3 > 0 ? page3 - 1 : 0)}
        className="sm:absolute sm:left-4  left-[30px] top-2/4 -translate-y-2/4
      w-13 h-13 bg-white rounded-full shadow flex items-center   text-center justify-center"
      >
       <h1 className="text-5xl mb-4">‹</h1>
      </button>

      {/* Right Arrow */}
      <button
        onClick={() =>
          setPage3((page3 + 1) * perPage3 < cards.length ? page3 + 1 : page3)
        }
        className="top-1/2 -translate-y-1/2
       w-13 h-13
      bg-white rounded-full shadow
      flex items-center justify-center
      sm:absolute sm:right-4"
      >

        <h1 className="text-5xl mb-4">›</h1>
      </button>
     </div>
      </div>
     </div>



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


</section>
</>)




}
export default Home
