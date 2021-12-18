function GameCards ({eachGame}) {

    // function renderGenres () {
    //     if (eachGame.genre[0]) {
            
    //     }
    // }

    // function renderGenres () {
    //     let genres = eachGame.genres.map(eachGenre => {
    //         return (
    //             <li>{eachGenre}</li>
    //         )
    //     })
    // }

    function renderGenres () {
        if (eachGame.genre[2]) {
            return (
                <ul>
                    <li>{eachGame.genre[0]}</li>
                    <li>{eachGame.genre[1]}</li>
                    <li>{eachGame.genre[2]}</li>
                </ul>
            )
        } else {
            return (
            <ul>
                <li>{eachGame.genre[0]}</li>
                <li>{eachGame.genre[1]}</li>
            </ul>
            )
        }
    }
    return (
        <div>
            <h1>{eachGame.name}</h1>
            <img src={eachGame.img} alt={eachGame.name} />
            <p>{eachGame.cross_platform}</p>
            <p>{eachGame.price}</p>
            <div>
                {/* {renderGenres} */}
                <p>Genre: </p>
                <ul>
                    <li>{eachGame.genre[0]}</li>
                    <li>{eachGame.genre[1]}</li>

                </ul>
            </div>

        </div>
    )
}

export default GameCards;