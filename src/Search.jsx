import React, {useState, useEffect} from "react";

const Search = ({players, setPlayers}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const searchFunc = (players, searchTerm) => {
        const result = players.filter(playerObj => playerObj.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return result;
    }

    useEffect(() => {
        setPlayers(searchFunc(players, searchTerm));
    }, [searchTerm]);
    
    return (
        <form>
            <label htmlFor='search'>Search:</label>
            <input type='text' name='search' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
        </form>
    )
}

export default Search