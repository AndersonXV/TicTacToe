const Winner = ({value, reset_game}) => {
    const resetTheGame = () =>{
        reset_game()
    }
    return(
        <div className= "winner">
            <h1>{value} is the winner</h1>
            <button onClick={resetTheGame}>Reset Game</button>
        </div>
    )
}
export default Winner