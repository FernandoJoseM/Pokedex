import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const PokeCard = ({ url }) => {
  const [pokemon, getPokemon] = useFetch(url);
  const navigate=useNavigate()
  useEffect(() => {
    getPokemon();
  }, []);
  const handleNavigate=()=>{
    navigate(`/pokedex/${pokemon.id}`)
  }
  return (
    <article className="article-pokeCard" onClick={handleNavigate}>
      <header>
        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <section>
        <h3>{pokemon?.name}</h3>
        <ul className="pokePage-firstUl">
        <p>Tipo:</p>
          {pokemon?.types.map((typeInfo) => (
            <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
          ))}
          
        </ul>
        <hr />
        <ul className="pokePage-secondUl">
          {pokemon?.stats.map((statInfo) => (
            <li key={statInfo.stat.url}>
              <span>{statInfo.stat.name}</span>
              <span className="base">{statInfo.base_stat}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PokeCard;
