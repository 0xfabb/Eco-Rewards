import 'react';
import LoggedNav from '../Components/LoggedNav';
import Footer from '../Components/Footer';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';
import Navbar from '../Components/Navbar';
import Signup from './Signup';
import Login from './Login';

const Rewards = () => {
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
            <h1 className="text-white">Hey i am rewards page</h1>
            <Footer />
        </div>

    )
}

export default Rewards;