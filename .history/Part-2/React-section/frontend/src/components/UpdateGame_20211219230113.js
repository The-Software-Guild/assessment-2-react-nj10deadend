import {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';



function UpdateGame ({getFetchGameServer}) {
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [crossPlatform, setCrossPlatform] = useState("");
    const [price, setPrice] = useState("");
    const [genres, setGenres] = useState(["", "", ""]);

    const [clicked, setClicked] = useState(false);
    const [searchId, setSearchId] = useState("");

    const updateButtonText = clicked ? "Hide Update Form" : "Click to Update a Game"

    async function patchRequest () {
        await axios.patch(`http://localhost:8080/allGames/update/${searchId}`,  {
            name: name, 
            img: img, 
            cross_platform: crossPlatform, 
            price: price, 
            genres: genres
        })
    }

    async function updateChanges (event) {
        event.preventDefault();
        await patchRequest();
        getFetchGameServer();
        setSearchId("");
        setName("");
        setImg("");
        setCrossPlatform("");
        setPrice("");
    }
    return (
        <Box sx={{ borderRadius: '50%' }}>
            <Button className="bttns"variant="contained" onClick={() => {setClicked(!clicked)}}>{updateButtonText}</Button>
            {clicked && (
                <div>
                    <br></br>
                    <form onSubmit={updateChanges}>
                        <div>
                            <label for="game-id">Game ID</label>
                            <br></br>
                            <br></br>
                            <TextField id="outlined-basic1" label="Enter ID of Game you want to update" 
                            variant="outlined" 
                            onChange={(event) => {setSearchId(event.target.value)}} 
                            value = {searchId}
                            />
                        </div>
                        <div>
                            <label for="name">Name</label>
                            <br></br>
                            <br></br>
                            <TextField id="outlined-basic2" label="Enter name" 
                            variant="outlined" 
                            onChange={(event) => {setName(event.target.value)}} 
                            value = {name}
                            />
                        </div>
                        <div>
                            <label for="img">Image Url</label>
                            <br></br>
                            <br></br>
                            <TextField id="outlined-basic3" label="Enter Image URL" 
                            variant="outlined" 
                            onChange={(event) => {setImg(event.target.value)}} 
                            value = {img}
                            />
                        </div>
                        <div>
                            <label for="cross platform">Cross Platform</label>
                            <br></br>
                            <br></br>
                            <TextField id="outlined-basic4" label="Enter True or False" 
                            variant="outlined" 
                            onChange={(event) => {setCrossPlatform(event.target.value)}} 
                            value = {crossPlatform}
                            />
                        </div>
                        <div>
                            <label for="price">Price</label>
                            <br></br>
                            <br></br>
                            <TextField id="outlined-basic5" label="Enter price of game" 
                            variant="outlined" 
                            onChange={(event) => {setPrice(event.target.value)}} 
                            value = {price}
                            />
                        </div>
                        <div>
                            <label for="genres">Genres</label>
                            <br></br>
                            <br></br>
                            <TextField id="outlined-basic6" label="Enter first genre category" 
                            variant="outlined" 
                            onChange={(event) => {setGenres([event.target.value, genres[1], genres[2]])}} 
                            value = {genres[0]}
                            />
                            <br></br>
                            <br></br>
                            <TextField id="outlined-basic7" label="Enter second genre category" 
                            variant="outlined" 
                            onChange={(event) => {setGenres([genres[0], event.target.value, genres[2] ])}} 
                            value = {genres[1]}
                            />
                            <br></br>
                            <br></br>
                            <TextField id="outlined-basic8" label="Enter third genre category" 
                            variant="outlined" 
                            onChange={(event) => {setGenres([genres[0], genres[1], event.target.value])}} 
                            value = {genres[2]}
                            />
                            
                        </div>
                        <Button variant="contained" endIcon={<SendIcon />} type="submit">Submit Changes</Button>

                    </form>
                </div>
            )}    


        </Box>
    )
}

export default UpdateGame;