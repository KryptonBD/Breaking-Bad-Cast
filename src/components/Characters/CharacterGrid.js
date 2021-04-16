import React from 'react';
import Character from './Character';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({ characters, isLoading }) => {
    return isLoading ? <Spinner /> : <section className="cards">
        {characters.map(char => (
            <Character key={char.char_id} character={char} />
        ))}
    </section>
}

export default CharacterGrid;
