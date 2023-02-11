import React, { useState, useEffect } from "react";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import { Triangle } from  'react-loader-spinner';

import "./pokedex2.css";

import {
  API_PATH,
  API_VERSION_TWO,
  BASE_URL,
  API_VERSION_ONE,
  BASE_URL_FOR_DETAILS,
} from "../../Constants";

const Pokedex = () => {
  const [data, setData] = useState([]);

const [load , setload] = useState(true);


  const getPokemonData = () => {
    const URL = `${BASE_URL}${API_VERSION_ONE}${API_PATH.GET_ALL_POKEMONS}`;
    const options = {
      method: "GET",
    };
    fetch(URL, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const pokemonData = response.map((data) => {
          return {
            name: data.name,
            type: data.type,
            sourceUrl: data.image,
          };
        });
        setload(false);
        setData(pokemonData);
      });
  };

  useEffect(() => {
    getPokemonData();
  }, []);


  const filterModal=()=>{
    alert('coming Soon ⏳')
  }

  const details=(ele)=>{
    alert(ele);
  }


  return (
    <>
      <div className="Pokedex-content">
        <Navbar />

        <div className="container-poke">
          <div className="pokedex-title">
            {data.length} <span className="pokedex-heading">Pokemons</span> for
            you to choose your favorite
          </div>
          <div className="inputfield">
            <input type="text" placeholder="Encuentra tu pokemon" />
          </div>

          <div className="fiter-section">

          <button className="filter-btn" onClick={filterModal}>filter</button>
          
            <select name="Label" id="sel">
              <option value="js">tido</option>
              <option value="da">ataque</option>
              <option value="sa">experiencia</option>
            </select>

            <select name="Label" id="sel">
              <option value="js">ataque</option>
              <option value="da">kapoor</option>
              <option value="sa">tido</option>
            </select>

            <select name="Label" id="sel">
              <option value="js">experiencia</option>
              <option value="da">kapoor</option>
              <option value="sa">tido</option>
            </select>
          </div>

          <div className="loaderScreen">
{
  load && <Triangle color="#F2B807" height={500} width={500} />
}
          </div>


          <div className="card-container-pokedex">
            {data.map((element) => (
              <div className={`card-container element-${element.type[0]}`} onClick={()=>details(element.name)}>
                <div className="card-container-left">
                  <div className="card-name">{element.name}</div>

                  <div className="card-score">
                    <button className="score-attack">419</button>
                    <button className="score-defense">49</button>
                  </div>

                  <div className="card-description">
                    <div className="description-attack">Attack</div>
                    <div className="description-defense">Defense</div>
                  </div>

                  <div className="card-button">
                    <button
                      className={`button-grass element-${element.type[0]}`}
                    >
                      {element.type[0]}
                    </button>
                    {element.type[1] && (
                      <button
                        className={`button-poison element-${element.type[1]}`}
                      >
                        {element.type[1]}
                      </button>
                    )}
                  </div>
                </div>

                <div className="card-container-right">
                  <img
                    src={element.sourceUrl}
                    className={`card-img element-${element.type[0]}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        <Footer color={"poke-footer"}></Footer>
    </>
  );
};

export default Pokedex;
