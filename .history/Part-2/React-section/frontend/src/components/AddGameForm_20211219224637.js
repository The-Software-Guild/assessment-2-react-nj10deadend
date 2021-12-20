import {useState, useEffect} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';


function AddGameForm ({setGameData}) {

    const [clicked, setClicked] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [crossPlatform, setCrossPlatform] = useState("");
    const [price, setPrice] = useState("");
    const [genres, setGenres] = useState(["", "", ""]);
    const buttonText = clicked ? "Hide Submission Form" : "Click to Submit a New Game"

    function postRequest() {
        return axios.post('http://localhost:8080/allGames', {
            name: name, 
            img: img, 
            cross_platform: crossPlatform, 
            price: price, 
            genres: genres
        })
        .then(function (response) {
            console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return null;
        });
    }

    async function onSubmit(event) {
        event.preventDefault();
        setName("");
        setImg("");
        setCrossPlatform("");
        setPrice("");
        setGenres(["", "", ""]);
        const newGame = await postRequest();
        // console.log(newGame);
        setGameData((oldInfo)=> {
            // console.log(oldInfo)
            return [...oldInfo, newGame]
        })
    }

    return (
        <div>
            <Button variant="contained" onClick={() => {setClicked(!clicked)}}>{buttonText}</Button>
            {clicked && (
                <form onSubmit={onSubmit}>
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
                <Button variant="contained" endIcon={<SendIcon />} type="submit">Submit new Game</Button>

            </form>
                // <form onSubmit={onSubmit}>
                //     <div>
                //         <label for="name">Name</label>
                //         <br></br>
                //         <input type="text" name="name" placeholder="Enter name" id="name" 
                //         value={name} onChange={(event) => {setName(event.target.value)}}/>
                //     </div>
                //     <div>
                //         <label for="img">Image Url</label>
                //         <br></br>
                //         <input type="text" name="img" placeholder="Enter image URL" id="img" 
                //         value={img} onChange={(event) => {setImg(event.target.value)}}/>
                //     </div>
                //     <div>
                //         <label for="cross platform">Cross Platform</label>
                //         <br></br>
                //         <input type="text" name="cross platform" placeholder="Enter true or false" id="cross_platform" 
                //         value={crossPlatform} onChange={(event) => {setCrossPlatform(event.target.value)}}/>
                //     </div>
                //     <div>
                //         <label for="price">Price</label>
                //         <br></br>
                //         <input type="text" name="price" placeholder="Enter price of game" id="price" 
                //         value={price} onChange={(event) => {setPrice(event.target.value)}} />
                //     </div>
                //     <div>
                //         <label for="genres">Genres</label>
                //         <br></br>
                //         <input type="text" name="genre1" placeholder="Enter first genre category" id="genre1" 
                //         value={genres[0]} onChange={(event) => {setGenres([event.target.value, genres[1], genres[2]])}}/>
                //         <br></br>
                //         <input type="text" name="genre2" placeholder="Enter second genre category" id="genre2" 
                //         value={genres[1]} onChange={(event) => {setGenres([genres[0], event.target.value, genres[2] ])}}/>
                //         <br></br>
                //         <input type="text" name="genre3" placeholder="Enter third genre category" id="genre3" 
                //         value={genres[2]} onChange={(event) => {setGenres([genres[0], genres[1], event.target.value])}}/>
                //     </div>
                //     {/* <Button variant="contained" type="submit">Submit new Game</Button> */}
                    // <Button variant="contained" endIcon={<SendIcon />} type="submit">Submit new Game</Button>


                // </form>
            )}


        </div>
    )
}

export default AddGameForm;