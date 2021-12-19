import {useState} from 'react';
import axios from 'axios';

function UpdateGame () {
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [crossPlatform, setCrossPlatform] = useState("");
    const [price, setPrice] = useState("");
    const [genres, setGenres] = useState(["", "", ""]);

    const [clicked, setClicked] = useState(false);
    const [searchId, setSearchId] = useState("");

    const updateButtonText = clicked ? "Update game details" : "Hide Update Form"
    return (
        <div>
            <button onClick={() => {setClicked(!clicked)}}>{updateButtonText}</button>
                {clicked && (
                    <div>
                        <h1>Enter Game ID</h1>
                        <form onSubmit={onSearch}>
                            <input type="text" placeholder="Search for game by id..." 
                            onChange={(event) => {setSearchId(event.target.value)}} 
                            value = {searchId}
                            />
                            <input type="submit" value="Submit" />
                        </form>

                        <form onSubmit={onSubmit}>
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
                            <input type="submit" value="Submit"/>

                        </form>
                    </div>
                )}    


        </div>
    )
}

export default UpdateGame;