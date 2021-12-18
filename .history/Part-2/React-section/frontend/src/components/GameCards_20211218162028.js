function GameCards ({eachGame}) {

    // function renderGenres () {
    //     if (eachGame.genre[0]) {
            
    //     }
    // }

    function renderGenres () {
        let genres = eachGame.genres.map(eachGenre => {
            return (
                <li>{eachGenre}</li>
            )
        })
    }
    return (
        <div>
            <h1>{eachGame.name}</h1>
            <img src={eachGame.img} alt={eachGame.name} />
            <p>{eachGame.cross_platform}</p>
            <p>{eachGame.price}</p>
            <div>
                <p>Genre: </p>
                <ul>
                    {renderGenres}
                </ul>
            </div>

        </div>
    )
}

export default GameCards;