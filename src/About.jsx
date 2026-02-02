function About() {
  return <>
  
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
  
  
  
  </>
}
export default About;
