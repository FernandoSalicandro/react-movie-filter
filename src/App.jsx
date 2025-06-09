import { useState, useEffect } from 'react'

function App() {

  //dati
  const films = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]
  const generi = ["Tutti", "Fantascienza", "Thriller", "Romantico", "Azione"]
  //stati
  const [selectedGenre, setSelectedGenre] = useState("Tutti")
  const [selectedList, setSelectedList] = useState(films);
  const [search, setSearch] = useState("");


  //funzioni

  //selettore + filtro in tempo reale
  useEffect(() => {
    const newList = selectedGenre === "Tutti" ?
      films :
      films.filter(curFilm => curFilm.genre === selectedGenre)

   
  const finalList = newList.filter(curFilm =>
    curFilm.title.trim().toLowerCase().includes(search.trim().toLowerCase())
  )

  setSelectedList(finalList)

  }, [selectedGenre, search])

 
 

  return (
    <>
      <h1>Movie Filter</h1>



      <div className="wrapper">

        <select name="" id="" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>

          {generi.map(genere => {
            return (<option key={genere} >{genere}</option>)
          })}
        </select>
        <input type="text" placeholder='Scrivi qui il Film che cerchi' value={search} onChange={(e) => setSearch(e.target.value)} />


      </div>
      <ul>
        {selectedList.map(curFilm => {
          return (
            <li key={curFilm.title}>{curFilm.title}, genere : {curFilm.genre}</li>
          )
        })}
      </ul>

      

    </>
  )

}

export default App
