import 'react'
import heroImg from "../assets/heroImg.png"
const Content = () => {
  return (
    <div className='overflow-hidden'>
      <div className="head overflow-hidden text-green-600 text-center font-bold text-3xl mt-16">
        Blogs and Articles 
      </div>
      <div className="cont overflow-hidden flex gap-16 ml-36 mt-8 w-screen h-96">
      <div className="blogbox rounded-xl p-6  m-16 w-64 h-80 bg-neutral-900">
          <img className='w-56 h-32 rounded-md' src={heroImg} alt="" />
          <h2 className='mt-5 text-white font-bold '>This is the Heading</h2>
          <p className='mt-2 text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum. </p>
          <button className='text-green-700 mt-1'>Read More</button>
        </div>
        <div className="blogbox rounded-xl p-6  m-16 w-64 h-80 bg-neutral-900">
          <img className='w-56 h-32 rounded-md' src={heroImg} alt="" />
          <h2 className='mt-5 text-white font-bold '>This is the Heading</h2>
          <p className='mt-2 text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum.</p>
          <button className='text-green-700 mt-1'>Read More</button>
        </div>
        <div className="blogbox rounded-xl p-6  m-16 w-64 h-80 bg-neutral-900">
          <img className='w-56 h-32 rounded-md' src={heroImg} alt="" />
          <h2 className='mt-5 text-white font-bold '>This is the Heading</h2>
          <p className='mt-2 text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum.</p>
          <button className='text-green-700 mt-1' >Read More</button>
        </div>
      </div>
    </div>
  )

}

export default Content 
