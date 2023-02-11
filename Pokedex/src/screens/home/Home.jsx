import React from "react";

import {useGoogleLogin} from 'react-google-login';

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ClikButton from "../../components/clikButton/ClikButton";

import "./newHome.css";

const  CLIENT_ID = `834835411755-23j4f3usfitko6a61i3ke68aavgu3vvu.apps.googleusercontent.com`;

const Home = () => {

    const {signIn} = 
    useGoogleLogin({
  clientId: CLIENT_ID,
  // isSignedIn:false,
  onSuccess:(response)=>{
    alert("🎉 Login successfull 🎉")
    // window.location.href='/Pokedex';
    window.location.href='/Pokedex';
// window.location.push('/Pokedex');
    console.log(response.profile.Obj.name);
  },
  OnFailure:(response)=>{
    console.error(response);
  }
    })
  return (
    <>
      <div className="home">
        <Navbar></Navbar>
        <div className="home-container">
          <div className="text-container">

            <div className="heading">
                <p>
              <b>Find</b> all your favorite <b>Pokemon</b>{" "}
            </p>
            </div>

            <div className="subheading">
               <p> 
              You can know the type of Pokemon, its strengths, disadvantages and
              abilities.
            </p>
            </div>

            <div className="clikbtn">
                <ClikButton
                text={"google"}
                classname={"google-btn"}
              signIn={signIn}
                ></ClikButton>              
            </div>

          </div>

          <div className="image-container">
            <img
              src="src/Assets/banner-complete.svg"
              alt="pikachu"
              className="pikachuBanner"
            />
          </div>

        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
