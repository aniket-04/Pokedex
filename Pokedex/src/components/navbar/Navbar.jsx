import React, { useState} from "react";
import {Link , NavLink ,useMatch,useResolvedPath} from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const [shownav, setshownav] = useState(false);
  
  const handleClick = () => {
    setshownav(!shownav);
  };

  const navlinkstyles=({isActive})=>{
return{
  textDecoration : !isActive ? 'none' : 'underline',
  textUnderlinePosition: 'under',
  textUnderlineOffset: '10px',
  textDecorationColor: 'black',
}
  }

  return (
      <header>
        {!shownav?(
        <div className="logo">
          <NavLink to="/">
            <img src="src/Assets/PokemonLogo.svg" alt="poke" />
          </NavLink>

          <button className="hamy " onClick={handleClick}>
            
           { !shownav? <img src="src/Assets/BurgenBtn.svg" alt="burger"/> : <img src="src/Assets/closeCross.svg" alt="burger"/>}
          </button>
        </div> 
        )
        :(
          <div className="logo-mob">
            <img src="src/Assets/PokemonLogo.svg" alt="poke" onClick={handleClick}/>
            </div>
        )}


        {shownav ? (
          
          <nav className="ulist">
            <ul>
              <NavLink to="/" style={{textDecoration:'none'}}>
                <li>Home</li>{" "}
              </NavLink>
              <NavLink to="/Pokedex" style={{textDecoration:'none'}}>
                <li>Pokédex</li>{" "}
              </NavLink>
              <NavLink to="/Legendaries" style={{textDecoration:'none'}}>
                <li>Legendaries</li>{" "}
              </NavLink>
              <NavLink to="/ErrorPage" style={{textDecoration:'none'}}>
                <li>Documentation</li>{" "}
              </NavLink>
            </ul>
        </nav>
        ):
        (
          <nav className= {"desktopnav"}>
            <ul>
              <NavLink to="/" style={navlinkstyles}>
                <li>Home</li>{" "}
              </NavLink>
              <NavLink to="/Pokedex" style={navlinkstyles}>
                <li>Pokédex</li>{" "}
              </NavLink>
              <NavLink to="/Legendaries" style={{textDecoration:'none'}}>
                <li>Legendaries</li>{" "}
              </NavLink>
              <NavLink to="/ErrorPage" style={{textDecoration:'none'}}>
                <li>Documentation</li>{" "}
              </NavLink>
            </ul>
        </nav>
        )}
      </header>
  );
};

export default Navbar;
