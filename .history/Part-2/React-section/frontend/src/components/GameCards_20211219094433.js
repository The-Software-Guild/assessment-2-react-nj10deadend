function GameCards ({eachGame}) {

    // function renderGenres () {
    //     if (eachGame.genre[2]) {
    //         return (
    //             <ul>
    //                 <li>{eachGame.genre[0]}</li>
    //                 <li>{eachGame.genre[1]}</li>
    //                 <li>{eachGame.genre[2]}</li>
    //             </ul>
    //         )
    //     } else {
    //         return (
    //         <ul>
    //             <li>{eachGame.genre[0]}</li>
    //             <li>{eachGame.genre[1]}</li>
    //         </ul>
    //         )
    //     }
    // }
    return (
        <div>
            <h1>{eachGame.name}</h1>
            <img className="imgs"src={eachGame.img} alt={eachGame.name} />
            <p>Cross Platform: {eachGame.cross_platform}</p>
            <p>Price: $ {eachGame.price}</p>
            <div>
                {/* {renderGenres} */}
                <p>Genre: </p>

                <li>{eachGame.genres[0]}</li>
                <li>{eachGame.genres[1]}</li>
                <li>{eachGame.genres[2]}</li>

            </div>
            <p>ID: {eachGame._id}</p>

        </div>
    )
}

export default GameCards;