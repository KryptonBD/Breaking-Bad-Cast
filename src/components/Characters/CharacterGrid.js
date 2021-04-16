import React from 'react';
import Character from './Character';

const CharacterGrid = ({ characters, isLoading }) => {
    return isLoading ? <h1>Loading</h1> : <section className="cards">
        {characters.map(char => (
            <Character key={char.char_id} character={char}/>
        ))}
    </section>
}

export default CharacterGrid;
