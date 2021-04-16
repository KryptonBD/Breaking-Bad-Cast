import React, { useState } from 'react';

const Search = ({getQuery}) => {
    const [text, setText] = useState('');
    const onSearch = (q) =>{
        setText(q);
        getQuery(q);
    }
    return (
        <section className="search">
            <form>
                <input
                    type="text"
                    className="form-control"
                    value={text}
                    placeholder="Search Characters"
                    autoFocus
                    onChange={e=>onSearch(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search;
