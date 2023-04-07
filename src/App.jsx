import React, { useState, useEffect } from 'react'
import './style.css'
import SinglePlayer from './SinglePlayer'
import AllPlayers from './AllPlayers';
import Search from './Search';

const App = () => {
    const cohortName = '2303-ftb-et-web-ft-react';
    const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

    const [players, setPlayers] = useState([])
    const [player, setPlayer]  = useState({})

    const fetchAllPlayers = async () => {
        try {
            const response = await fetch(`${APIURL}players`);
            const result = await response.json();
            return result.data.players;
        } catch(error) {
            console.log(error)
        }
    }

    const fetchSinglePlayer = async (playerId) => {
        try {
            const response = await fetch(`${APIURL}players/${playerId}`);
            const result = await response.json();
            setPlayer(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const getPlayers = async () => {
        const fetchedPlayers = await fetchAllPlayers();
        setPlayers(fetchedPlayers);
        }
        getPlayers();
    }, [])

    console.log(players)
    return(
        <div id="all-players-container"> 
            <Search players={players} setPlayers={setPlayers} />
            {player.data ? <SinglePlayer setPlayer={setPlayer} player={player.data.player}/> : <AllPlayers fetchSinglePlayer={fetchSinglePlayer} players={players}/>}
        </div>
    );
};   

export default App;