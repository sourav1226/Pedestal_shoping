
import { useState } from "react";
import { Truck, Award, RotateCcw, Headphones } from "lucide-react";




function Product() {
const images = [
    "https://diana-demo.myshopify.com/cdn/shop/products/product_1_compact.png?v=1548838312",
    "https://diana-demo.myshopify.com/cdn/shop/products/product_2_compact.png?v=1548838314",
    "https://diana-demo.myshopify.com/cdn/shop/products/product_3_compact.png?v=1548838316",
    "https://diana-demo.myshopify.com/cdn/shop/products/product_4_compact.png?v=1548838320",
  ];

  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);

  const prevImg = () => {
    setActiveImg(activeImg === 0 ? images.length - 1 : activeImg - 1);
  };

  const nextImg = () => {
    setActiveImg(activeImg === images.length - 1 ? 0 : activeImg + 1);
  };

   const [activeTab, setActiveTab] = useState("reviews");

   const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [sort, setSort] = useState("oldest");

  const handleSubmit = () => {
    if (!text.trim()) return;

    setComments([
      ...comments,
      { id: Date.now(), text },
    ]);
    setText("");
  };

  const sortedComments =
    sort === "newest"
      ? [...comments].reverse()
      : comments;


  
  return <>
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
            Buy it now
          </button>

          <p className="mt-4 text-xs text-gray-500">
            Guaranteed safe checkout
          </p>
        </div>
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-4 py-12">

     
      <div className="flex">
        {["description", "reviews", "comments"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-white text-sm uppercase transition ${
              activeTab === tab
                ? "bg-red-500"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

    
      <div className="bg-white p-6 text-gray-600 text-sm ">
        {activeTab === "description" && (
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. <br /> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          
        )}

        {activeTab === "reviews" && (
         <p></p>
        )}

        {activeTab === "comments" && (
           <section className="max-w-5xl mx-auto px-4 py-10">
      
     
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800">
          {comments.length} comments
        </h3>

        <div className="flex items-center gap-2 text-sm">
          <span>Sort by</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded px-2 py-1 focus:outline-none"
          >
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      <hr className="mb-6" />

      
      <div className="flex gap-4 mb-6">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white">
          👤
        </div>

        <textarea
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border rounded-md p-3 resize-none focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>

      

    
      <div className="space-y-4">
        {sortedComments.map((c) => (
          <div key={c.id} className="flex gap-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              👤
            </div>
            <div className="bg-gray-100 rounded-lg p-3 w-full">
              <p className="text-sm text-gray-700">{c.text}</p>
            </div>
          </div>
        ))}
      </div>

 

      <a href=""className="text-xs text-blue-600 mt-8">Facebook Comments Plugin</a>
      
    </section>
        )}
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-center">

        <div className="flex flex-col items-center gap-2">
          <Truck className="w-8 h-8" />
          <h4 className="font-medium">Free home delivery</h4>
          <p className="text-sm text-gray-500">
            Free delivery on orders over $100
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Award className="w-8 h-8" />
          <h4 className="font-medium">Quality Products</h4>
          <p className="text-sm text-gray-500">
            We ensure the product quality
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <RotateCcw className="w-8 h-8" />
          <h4 className="font-medium">3 Days Return</h4>
          <p className="text-sm text-gray-500">
            Return product within 3 days
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Headphones className="w-8 h-8" />
          <h4 className="font-medium">Online Support</h4>
          <p className="text-sm text-gray-500">
            24/7 customer support
          </p>
        </div>

      </div>
    </section>

    <footer className="w-full bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white">
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
</footer>



       




  
  
  </>;
}
export default Product;
