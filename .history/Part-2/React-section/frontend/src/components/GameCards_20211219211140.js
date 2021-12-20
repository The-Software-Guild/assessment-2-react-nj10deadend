import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

function GameCards ({eachGame}) {

    return (
        <Box className="game-cards" onClick={(event) => console.log(event.target)}>
            <Typography variant="h2" component="box" gutterBottom>{eachGame.name}</Typography>
            <hr className="divider"></hr>
            <img className="imgs"src={eachGame.img} alt={eachGame.name} />
            <p>Cross-Platform: {eachGame.cross_platform.toString()}</p>
            <p>Price: $ {eachGame.price}</p>
            <div>
                <p>Genre: </p>
                {eachGame.genres.map(eachGenre => {
                    return <li key={eachGenre}>{eachGenre}</li>
                })}

            </div>
            <p>ID: {eachGame._id}</p>
            <Button onClick={(event) => console.log(event.target)} type="submit" variant="outlined" color="error" startIcon={<DeleteIcon />}>Delete Game</Button>



        </Box>
    )
}

export default GameCards;