import 'react';
import { useState, useEffect } from 'react';
import LoggedNav from '../Components/LoggedNav';
import Footer from '../Components/Footer';
import Uploadhero from '../PageComponents/Uploadhero';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';
import Navbar from '../Components/Navbar';
import Signup from './Signup';
import Login from './Login';

const Upload = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
   onAuthStateChanged(auth, (user) => {
    if(user){
      setUser(user)
    }else{
      setUser(null)
    }
   })
  }, []);

  if(user === null ){
    return (
      <>
      <Navbar />
      <Signup />
      <Login />
      </>
    )
  }
  return (
    <div>
      <LoggedNav />
      <h1 className="text-white">Hey i am Uploads Page</h1>
      <Uploadhero />
      <Footer />
    </div>
  )
}

export default Upload
