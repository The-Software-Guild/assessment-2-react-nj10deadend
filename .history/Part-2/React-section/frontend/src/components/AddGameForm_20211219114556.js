import {useState, useEffect} from 'react';

function AddGameForm () {

    const [clicked, setClicked] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [crossPlatform, setCrossPlatform] = useState(false);
    const [price, setPrice] = useState(0);
    const [genres, setGenres] = useState(["", "", ""]);

    // const [formData, setFormData] = useState(
    //     {
    //         name: "",
    //         img: "",
    //         cross_platform: false,
    //         price: 0,
    //         genres: ["", "", ""]
    //     }
    // );

    const buttonText = clicked ? "Hide Submission Form" : "Click to Submit a New Game"

    function postRequest() {
        axios.post('/allGames', {
            name: name,
            img: img,
            cross_platform: crossPlatform,
            price: price,
            genres: genres
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    function onSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        postRequest();

    }


    return (
        <div>
            <button onClick={() => {setClicked(!clicked)}}>{buttonText}</button>
            {clicked && (
                <form>
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
                        <input type="text" name="genres" placeholder="Enter first genre category" id="genre1" 
                        value={genres[0]} onChange={(event) => {setGenres(event.target.value)}}/>
                        <br></br>
                        <input type="text" name="genres" placeholder="Enter second genre category" id="genre2" 
                        value={genres[1]} onChange={(event) => {setGenres(event.target.value)}}/>
                        <br></br>
                        <input type="text" name="genres" placeholder="Enter third genre category" id="genre3" 
                        value={genres[2]} onChange={(event) => {setGenres(event.target.value)}}/>
                    </div>
                    <input type="submit" value="Submit"/>

                </form>
            )}


        </div>
    )
}

export default AddGameForm;