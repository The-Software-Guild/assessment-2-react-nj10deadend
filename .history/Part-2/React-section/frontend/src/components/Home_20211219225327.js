import GameCards from "./GameCards";


function Home ({gameData}) {

    const renderGameData = gameData.map(eachGame => {
        return (
            <GameCards key={eachGame._id} eachGame={eachGame} />
        )
    })
    return (
        <div>
            {renderGameData}

        </div>
    )
}

export default Home;