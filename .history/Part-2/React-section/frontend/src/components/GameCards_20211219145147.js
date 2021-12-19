function GameCards ({eachGame}) {

    return (
        <div>
            <h1>{eachGame.name}</h1>
            <img className="imgs"src={eachGame.img} alt={eachGame.name} />
            <p>Cross Platform: {eachGame.cross_platform.toString()}</p>
            <p>Price: $ {eachGame.price}</p>
            <div>
                <p>Genre: </p>
                {eachGame.genres.map(eachGenre => {
                    return <li key={eachGenre}>{eachGenre}</li>
                })}

            </div>
            <p>ID: {eachGame._id}</p>

        </div>
    )
}

export default GameCards;