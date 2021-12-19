import GameCards from "./GameCards";


function Home ({gameData}) {

    const renderGameData = gameData.map(eachGame => {
        return (
            <GameCards  eachGame={eachGame} />
        )
    })
    return (
        <div>
            {renderGameData}

        </div>
    )
}

export default Home;