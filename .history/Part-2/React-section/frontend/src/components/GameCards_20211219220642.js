import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'material-ui-image'

function GameCards ({eachGame}) {

    return (
        <Box className="game-cards" onClick={(event) => console.log(event.target)}>
            <Typography variant="h2" component="h2" gutterBottom>{eachGame.name}</Typography>
            <hr className="divider"></hr>
            <img className="imgs" src={eachGame.img} alt={eachGame.name} />
            <Typography variant="p" component="p" gutterBottom>Cross-Platform: {eachGame.cross_platform.toString()}</Typography>
            <Typography variant="p" component="p" gutterBottom>Price: $ {eachGame.price}</Typography>
            <Typography variant="p" component="p" gutterBottom>
                <Typography variant="p" component="p" gutterBottom>Genres: </Typography>
                {eachGame.genres.map(eachGenre => {
                    return <Typography variant="li" component="li" key={eachGenre} gutterBottom>{eachGenre}</Typography>
                })}

            </Typography>
            <Typography variant="p" component="box" gutterBottom>ID: {eachGame._id}</Typography>
            {/* <Button onClick={(event) => console.log(event.target)} type="submit" variant="outlined" color="error" startIcon={<DeleteIcon />}>Delete Game</Button> */}



        </Box>
    )
}

export default GameCards;