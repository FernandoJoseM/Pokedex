import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const SelectType = ({setTypeSelect}) => {
   const url='https://pokeapi.co/api/v2/type'
   const[types,getTypes]=useFetch(url)
   useEffect(() => {
    getTypes()
   }, [])
   const handleChange=(e)=>{
    setTypeSelect(e.target.value)

   }
  return (
    <>
        <select className="select" onChange={handleChange}>
            <option value='allPokemons'>All Pokemons</option>
            {
                types?.results.map(el=>(
                  <option value={el.url}key={el.url}>{el.name}</option>  
                ))
            }
        </select>
    </>
  )
}

export default SelectType