import GameCards from "./GameCards";


function Home ({gameData}) {

    const renderGameData = gameData.map(eachGame => {
        // console.log(eachGame._id);
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