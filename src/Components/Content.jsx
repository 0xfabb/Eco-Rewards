import 'react'
import heroImg from "../assets/heroImg.png"
const Content = () => {
  return (
    <div className="mt-16 px-6 md:px-16">
    <h2 className="text-center text-3xl font-bold text-green-600">Latest Articles</h2>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="blog-box bg-neutral-900 text-white rounded-xl p-6">
        <img className="w-full h-32 object-cover rounded-lg" src={heroImg} alt="Article" />
        <h3 className="mt-4 font-bold">Article Title</h3>
        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="text-green-700 mt-4">Read More</button>
      </div>
      <div className="blog-box bg-neutral-900 text-white rounded-xl p-6">
        <img className="w-full h-32 object-cover rounded-lg" src={heroImg} alt="Article" />
        <h3 className="mt-4 font-bold">Article Title</h3>
        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="text-green-700 mt-4">Read More</button>
      </div>
      <div className="blog-box bg-neutral-900 text-white rounded-xl p-6">
        <img className="w-full h-32 object-cover rounded-lg" src={heroImg} alt="Article" />
        <h3 className="mt-4 font-bold">Article Title</h3>
        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="text-green-700 mt-4">Read More</button>
      </div>
    </div>
  </div>
  )

}

export default Content 


