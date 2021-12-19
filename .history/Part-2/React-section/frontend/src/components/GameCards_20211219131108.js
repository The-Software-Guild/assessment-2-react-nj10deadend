function GameCards ({eachGame}) {
    return (
        <div>
            <h1>{eachGame.name}</h1>
            <img className="imgs"src={eachGame.img} alt={eachGame.name} />
            <p>Cross Platform: {eachGame.cross_platform}</p>
            <p>Price: $ {eachGame.price}</p>
            <div>
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