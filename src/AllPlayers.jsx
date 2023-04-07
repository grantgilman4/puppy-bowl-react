import React from "react";

const AllPlayers = ({players, fetchSinglePlayer}) => {
    return(
players.map((player) => {
        return(
            <div key={player.id} className="single-player-card">
                <div className="header-info">
                    <p className="pup-title">{player.name}</p>
                    <p className="pup-number">{player.id}</p>
                </div>
                <img src={player.imageUrl} alt="the puppy"/>
                <button className="detail-button" onClick={() => {fetchSinglePlayer(player.id)}}>See details</button>
                <button className="delete-button">Remove from Roster</button>
            </div>
    )}))
}

export default AllPlayers;