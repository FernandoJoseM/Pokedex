import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/pokedexPage/PokeCard";
import SelectType from "../components/pokedexPage/SelectType";
import Pagination from "../components/pokedexPage/Pagination";
const PokedexPage = () => {
  const [productForPage, setProductForPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(1)
  const [typeSelect, setTypeSelect] = useState("allPokemons");
  const [inputValue, setinputValue] = useState("");
  const inputSearch = useRef();
  const trainer = useSelector((store) => store.trainer);
  const url = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=200";
  const [pokemons, getPokemons, getTypePoke] = useFetch(url);
  const totalProducts=pokemons?.results.length
  const lastIndex=currentPage * productForPage
  const firstIndex=lastIndex-productForPage
  useEffect(() => {
    if (typeSelect === "allPokemons") {
      getPokemons();
    } else {
      getTypePoke(typeSelect);
    }
  }, [typeSelect]);
  const handleSearch = (e) => {
    e.preventDefault();
    setinputValue(inputSearch.current.value.trim().toLowerCase());
  };
  const pokemonFilter = pokemons?.results.filter((poke) =>
    poke.name.includes(inputValue)
  );
  console.log(totalProducts);
  return (
    <div className="pokePage">
      <div className="pokePage-section">
        <h2>Pokédex</h2>
        <div className="pokePage-division"></div>
        <div className="pokePage-ball">
          <div className="ball-cuatro">
            <div className="ball-tres">
              <div className="ball-dos"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pokePage-contenido">
        <p>
          <span>Bienvenido {trainer},</span> aquí podrás encontrar a tu pokemón
          favorito
        </p>
        <div className="pokePage-search"> 
        <form onSubmit={handleSearch}>
          <input ref={inputSearch} type="text" />
          <button>Buscar</button>
        </form>
        <SelectType setTypeSelect={setTypeSelect} />
        </div>
        <div className="content-pokeCard">
          {pokemonFilter?.map((el) => (
            <PokeCard key={el.url} url={el.url} />
          )).slice(firstIndex,lastIndex)}
        </div>
        <Pagination productForPage={productForPage} currentPage={currentPage}setCurrentPage={setCurrentPage} totalProducts={totalProducts}/>
      </div>
    </div>
  );
};

export default PokedexPage;
