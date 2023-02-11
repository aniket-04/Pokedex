import React from 'react'

import {useGoogleLogin} from 'react-google-login';

import ClikButton from '../../components/clikButton/ClikButton'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

import './home2.css'

const  CLIENT_ID = "834835411755-23j4f3usfitko6a61i3ke68aavgu3vvu.apps.googleusercontent.com";

const HomeContent = () => {
    const {signIn} = 
    useGoogleLogin({
  clientId: CLIENT_ID,
  // isSignedIn: true,
  onSuccess:(response)=>{
    alert("🎉 Login successfull 🎉")
    window.location.href='/Pokedex';
    console.log(response.profile.Obj.name);
  },
  OnFailure:(response)=>{
    console.error(response);
  }
    })
    
  return (
    <>
    <div className="container">
      <Navbar></Navbar>
        <div className="container-1">
        <p className="heading"><b>Find</b> all your favorite <b>Pokemon</b> </p>
        <p className="subheading">You can know the type of Pokemon, 
        its strengths, disadvantages and abilities.
        </p>
            <ClikButton text={'google'} classname={'google-btn'} signIn={signIn}></ClikButton>
        </div>
        <div className="container-2">
            <img src="src/Assets/PikachuBanner.svg" alt="pikachu" className="pikachuBanner" />
        </div>
    </div>
    <Footer color={'footer'}></Footer>
    </>
  )
}

export default HomeContent