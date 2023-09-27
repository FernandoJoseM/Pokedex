import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const PokedexId = () => {
  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [pokeCard, getPokeCard] = useFetch(url);
  useEffect(() => {
    getPokeCard();
  }, [id]);
  console.log(pokeCard);
  return (
    <>
      <header className="card-header">
        <h2>Pokédex</h2>
        <section>
          <div className="pokePage-ball">
            <div className="ball-cuatro">
              <div className="ball-tres">
                <div className="ball-dos"></div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <article className="article-card">
        <section className="img-card">
        <img src={pokeCard?.sprites.other["official-artwork"].front_default} />
        </section>
        
        <h2 className="card-id">#{pokeCard?.id}</h2>
        <h2 className="card-name">{pokeCard?.name}</h2>
        <div className="card-height">
          <p>
            Altura: <span>{pokeCard?.height}</span> /
          </p>
          <p>
            Peso: <span>{pokeCard?.weight}</span>
          </p>
        </div>
        <div className="card-type">
            <h2>Tipo:</h2>
          <ul className="first-ul">
            {pokeCard?.types.map((el) => (
              <li key={el.type.url}>{el.type.name}</li>
            ))}
          </ul>
          Habilidad:
          <ul className="second-ul">
            {pokeCard?.abilities.map((el) => (
              <li key={el.ability.url}>{el.ability.name}</li>
            ))}
          </ul>
        </div>

        <section className="stats">
          <h2>Poder</h2>
          <ul className="stats-ul">
            {pokeCard?.stats.map((el) => (
              <li key={el.stat.url}>
                <span className="span-uno">{el.stat.name}</span>
                <span className="span-dos">{el.base_stat}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
};

export default PokedexId;
