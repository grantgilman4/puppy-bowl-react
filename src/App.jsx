import React, { useState, useEffect } from 'react'
import  './style.css'

const App = () => {
    const cohortName = '2303-ftb-et-web-ft';
    const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

    const [players, setPlayers] = useState([])

    const fetchAllPlayers = async () => {
        try {
            const response = await fetch(`${APIURL}players`);
            const result = await response.json();
            setPlayers(result);
        } catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchAllPlayers();
    }, [])
    console.log(players.data)

    return(
        <div id="all-players-container"> 
            {players.data ? players.data.players.map((player) => {
            return(
                <div key={player.id}>
                    <div className="single-player-card">
                        <div className="header-info">
                            <p className="pup-title">{player.breed}</p>
                            <p className="pup-number">{player.id}</p>
                        </div>
                        <img src={player.imageUrl} alt="the puppy"/>
                        <button className="detail-button">See details</button>
                        <button className="delete-button">Remove from Roster</button>
                    </div>
            </div>)
            }): <h1>Loading</h1>}
        </div>
    );
};
            
export default App;