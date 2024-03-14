import Circle from "./Circle"
import Cross from "./Cross"

const Square = ({position, value, take_turn}) => {
    const checkTurn=()=>{
        value == "EMPTY" && take_turn(position)
    }

    return(
        <div className="square" onClick={checkTurn}>
            {value == "CIRCLE" && <Circle/>}
            {value == "CROSS" && <Cross/>}

        </div>
    )
}
export default Square