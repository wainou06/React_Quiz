import React, { useState } from 'react'
import './App.css'

const Quiz03 = () => {
   const [pokemons, setPoke] = useState([
      { id: 1, name: '피카츄', img: '/images/피카츄.png' },
      { id: 2, name: '메타몽', img: '/images/메타몽.png' },
      { id: 3, name: '파이리', img: '/images/파이리.png' },
   ])

   const pokesList = pokemons.map((poke) => (
      <li key={poke.id}>
         <div onDoubleClick={() => onRemove(poke.id)}>
            <img src={poke.img} alt={poke.name} width="130" />
            <p>{poke.name}</p>
         </div>
      </li>
   ))

   const [inputPokemon, setInputPokemon] = useState('')
   const [nextId, setNextId] = useState(4)

   const onChangeName = (e) => setInputPokemon(e.target.value)

   const onClick = () => {
      const nextPokes = pokemons.concat({
         id: nextId,
         name: inputPokemon,
         img: `/images/${inputPokemon}.png`,
      })

      setPoke(nextPokes)
      setNextId(nextId + 1)
      setInputPokemon('')
   }

   const onRemove = (id) => {
      const removePokes = pokemons.filter((pokes) => pokes.id !== id)

      setPoke(removePokes)
   }

   return (
      <>
         <h2>포켓몬 도감</h2>
         <input value={inputPokemon} onChange={onChangeName}></input>
         <button onClick={onClick}>등록</button>
         <ul>{pokesList}</ul>
      </>
   )
}

export default Quiz03
