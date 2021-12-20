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

    const updateButtonText = clicked ? "Hide Update Form" : "Update game details"

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
            <Button variant="contained" onClick={() => {setClicked(!clicked)}}>{updateButtonText}</Button>
                {clicked && (
                    <div>
                        <form onSubmit={updateChanges}>
                            <div>
                                <h2>Enter Game ID</h2>
                                <label for="game-id">Game ID</label>
                                <br></br>
                                <input name="game-id" type="text" placeholder="Enter Game ID" 
                                onChange={(event) => {setSearchId(event.target.value)}} 
                                value = {searchId}
                                />
                            </div>
                            <div>
                                <label for="name">Name</label>
                                <br></br>
                                <input type="text" name="name" placeholder="Enter name" id="name" 
                                value={name} onChange={(event) => {setName(event.target.value)}}/>
                            </div>
                            <div>
                                <label for="img">Image Url</label>
                                <br></br>
                                <input type="text" name="img" placeholder="Enter image URL" id="img" 
                                value={img} onChange={(event) => {setImg(event.target.value)}}/>
                            </div>
                            <div>
                                <label for="cross platform">Cross Platform</label>
                                <br></br>
                                <input type="text" name="cross platform" placeholder="Enter true or false" id="cross_platform" 
                                value={crossPlatform} onChange={(event) => {setCrossPlatform(event.target.value)}}/>
                            </div>
                            <div>
                                <label for="price">Price</label>
                                <br></br>
                                <input type="text" name="price" placeholder="Enter price of game" id="price" 
                                value={price} onChange={(event) => {setPrice(event.target.value)}} />
                            </div>
                            <div>
                                <label for="genres">Genres</label>
                                <br></br>
                                <input type="text" name="genre1" placeholder="Enter first genre category" id="genre1" 
                                value={genres[0]} onChange={(event) => {setGenres([event.target.value, genres[1], genres[2]])}}/>
                                <br></br>
                                <input type="text" name="genre2" placeholder="Enter second genre category" id="genre2" 
                                value={genres[1]} onChange={(event) => {setGenres([genres[0], event.target.value, genres[2] ])}}/>
                                <br></br>
                                <input type="text" name="genre3" placeholder="Enter third genre category" id="genre3" 
                                value={genres[2]} onChange={(event) => {setGenres([genres[0], genres[1], event.target.value])}}/>
                            </div>
                            <Button variant="contained" endIcon={<SendIcon />} type="submit">Submit Changes</Button>

                        </form>
                    </div>
                )}    


        </Box>
    )
}

export default UpdateGame;