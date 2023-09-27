import { useRef } from "react";
import { setTrainerSlice } from "../store/slices/trainer.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const inputTrainer = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleTrainerSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()));
    navigate("/pokedex");
  };

  return (
    <div className="home">
      <h1>Pokédex</h1>
      <h2>¡Hola entrenador!</h2>
      <p>Para poder comenzar,dame tu nombre</p>
      <form onSubmit={handleTrainerSubmit}>
        <input ref={inputTrainer} type="text" placeholder="Tu Nombre" />
        <button>Start</button>
      </form>
      <footer className="home-footer">
        <div className="home-footer-division"></div>
        <div className="home-footer-ball">
          <div className="ball-cuatro">
            <div className="ball-tres">
              <div className="ball-dos"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
