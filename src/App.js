import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/Characters/CharacterGrid';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchCharacter();
    //eslint-disable-next-line
  }, [query])

  const fetchCharacter = async () => {
    const res = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    const data = await res.json();
    setCharacters(data);
    setIsLoading(false);
  }

  return (
    <div className="container">
      <Header />
      <Search getQuery={q => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
