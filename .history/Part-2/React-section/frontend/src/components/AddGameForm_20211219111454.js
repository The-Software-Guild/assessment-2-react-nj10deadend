import {useState} from 'react';

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


    return (
        <div>
            <button onClick={() => {setClicked(!clicked)}}>{buttonText}</button>
            {clicked && (
                <form>
                    <div>
                        <label for="name">Name</label>
                        <br></br>
                        <input type="text" name="name" placeholder="Enter name" id="name" 
                        value={formData.name} onChange={}/>
                    </div>
                    <div>
                        <label for="img">Image Url</label>
                        <br></br>
                        <input type="text" name="img" placeholder="Enter image URL" id="img" 
                        value={formData.img}/>
                    </div>
                    <div>
                        <label for="cross platform">Cross Platform</label>
                        <br></br>
                        <input type="text" name="cross platform" placeholder="Enter true or false" id="cross_platform" 
                        value={formData.cross_platform}/>
                    </div>
                    <div>
                        <label for="price">Price</label>
                        <br></br>
                        <input type="text" name="price" placeholder="Enter price of game" id="price" 
                        value={formData.price} />
                    </div>
                    <div>
                        <label for="genres">Genres</label>
                        <br></br>
                        <input type="text" name="genres" placeholder="Enter first genre category" id="genre1" 
                        value={formData.genres[0]} />
                        <br></br>
                        <input type="text" name="genres" placeholder="Enter second genre category" id="genre2" 
                        value={formData.genres[1]} />
                        <br></br>
                        <input type="text" name="genres" placeholder="Enter third genre category" id="genre3" 
                        value={formData.genres[2]} />
                    </div>
                    <input type="submit" value="Submit"/>

                </form>
            )}


        </div>
    )
}

export default AddGameForm;