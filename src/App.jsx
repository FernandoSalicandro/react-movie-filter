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
  const [selectedGenre, setSelectedGenre] = useState("Tutti");
  const [selectedList, setSelectedList] = useState(films);
  const [search, setSearch] = useState("");
  const [inpCorrente, setInpCorrente] = useState("");
  const [mostraForm, setMostraForm] = useState(false);
  const [titoloDaAggiugere, setTitoloDaAggiungere] = useState("");
  const [genereDaAggiungere, setGenereDaAggiungere] = useState("");
  const [filmDaAggiungere, setFilmDaAggiungere] = (selectedList)


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

const aggiungiFilm = () => {

  const newFilm = {
    title : titoloDaAggiugere,
    genre : genereDaAggiungere
  }

  setSelectedList([...selectedList, newFilm])
  setTitoloDaAggiungere("")
  setGenereDaAggiungere("")
  setMostraForm(false)


}


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

      <div className="wrapper mt-2"><button onClick={() => setMostraForm(!mostraForm)}>Aggiungi Un Film</button>




      </div>
      <div className="wrapper mt-2">

        {mostraForm && (
          <>
            <input type="text" placeholder="Titolo" value={titoloDaAggiugere} onChange={(e) => setTitoloDaAggiungere(e.target.value)} />
            <input type="text" placeholder="Genere" value={genereDaAggiungere} onChange={(e) => setGenereDaAggiungere(e.target.value)} />
            <button onClick={()=> aggiungiFilm()}>Aggiungi</button>
          </>


        )}


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
