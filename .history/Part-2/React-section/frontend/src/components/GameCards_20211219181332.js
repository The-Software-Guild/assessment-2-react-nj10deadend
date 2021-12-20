import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

function GameCards ({eachGame}) {

    return (
        <div className="game-cards">
            <h1>{eachGame.name}</h1>
            <img className="imgs"src={eachGame.img} alt={eachGame.name} />
            <p>Cross Platform: {eachGame.cross_platform.toString()}</p>
            <p>Price: $ {eachGame.price}</p>
            <div>
                <p>Genre: </p>
                {eachGame.genres.map(eachGenre => {
                    return <li key={eachGenre}>{eachGenre}</li>
                })}

            </div>
            <p>ID: {eachGame._id}</p>

            <Button>Edit</Button>
            <Button onClick={(event) => console.log(event.target)} type="submit" variant="outlined" startIcon={<DeleteIcon />}>Delete Game</Button>



        </div>
    )
}

export default GameCards;