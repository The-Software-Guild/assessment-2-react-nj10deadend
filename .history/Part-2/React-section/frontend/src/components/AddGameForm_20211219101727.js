import {useState} from 'react';

function AddGameForm () {

    const [clicked, setClicked] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    return (
        <div>
            <form>
                <div>
                    <label for="name">Name</label>
                    <input type="text" name="name" placeholder="Enter name" id="name" />
                </div>
                <div>
                    <label for="img">Image Url</label>
                    <input type="text" name="img" placeholder="Enter image URL" id="img" />
                </div>
                <div>
                    <label for="cross platform">Cross Platform</label>
                    <input type="text" name="cross platform" placeholder="Enter true if game is cross platform or false if not" id="cross_platform" />
                </div>
                <div>
                    <label for="price">Price</label>
                    <input type="text" name="price" placeholder="Enter price of game" id="price" />
                </div>
                <div>
                    <label for="genres">Genres</label>
                    <input type="text" name="genres" placeholder="Enter first genre category" id="genre1" />
                    <input type="text" name="genres" placeholder="Enter second genre category" id="genre2" />
                    <input type="text" name="genres" placeholder="Enter third genre category" id="genre3" />

                </div>
                <input type="submit" value="Submit"/>

            </form>

        </div>
    )
}

export default AddGameForm;