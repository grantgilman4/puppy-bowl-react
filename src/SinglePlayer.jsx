import React from "react";

const SinglePlayer= ({player, setPlayer}) => {
    console.log(player)
    return (
        <div className="single-player-view">
        <div className="header-info">
          <p className="pup-title">{player.name}</p>
          <p className="pup-number">#{player.id}</p>
        </div>
        <p>Team: {player.team ? player.team.name : 'Unassigned'}</p>
        <p>Breed: {player.breed}</p>
        <img src={player.imageUrl} alt="puppy"/>
        <button id="see-all" onClick={() => setPlayer({})}>Back to all players</button>
      </div>
    )
}

export default SinglePlayer