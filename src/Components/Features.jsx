import 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth, faHandshake, faMedal } from '@fortawesome/free-solid-svg-icons'
const Features = () => {
  return (
    <div className=' mb-16'>
      <div className="features md:flex md:gap-16 gap-6 md:ml-44 ml-8 -mt-10">
        <div className="box bg-slate-300 text-blue-900 hover:skew-x-6 md:ml-3.5 rounded-2xl p-8 font-semibold w-80 h-40">
            <FontAwesomeIcon size='2xl' className='ml-28' icon={faEarth} style={{color: "green"}} />
            <h2 className=' p-4 text-center'>Learn about Enviromental Issues</h2>
        </div>
        <div className="box bg-slate-300  hover:skew-x-6 text-blue-900 md:ml-3.5 rounded-2xl p-8 font-semibold w-80 h-40">
           <FontAwesomeIcon size='2xl' icon={faHandshake} className='ml-28' style={{color: "green"}} />
            <h2 className=' p-4 text-center'>Share Eco-Friendly Actions </h2>
        </div>
        <div className="box bg-slate-300 text-blue-900 hover:skew-x-6 hover:inset-5 md:ml-3.5 rounded-2xl p-8 font-semibold w-80 h-40">
        <FontAwesomeIcon size='2xl' icon={faMedal} className='ml-28' style={{color: "green"}} />
            <h2 className=' p-4 text-center'>Earn Reawrds for Contributions</h2>
        </div>
      </div>
    </div>
  )
}

export default Features
