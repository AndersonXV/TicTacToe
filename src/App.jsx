import { useState } from "react"
import Square from "./Square"

const CIRCLE = 'CIRCLE'
const CROSS = 'CROSS'
const EMPTY = 'EMPTY'

const App = () =>{
  const[state, setState] = useState({
    player : CIRCLE,
    positions : [
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY
    ]
})

const takeTurn = (pos) =>{
  let positions =[...state.positions]
  positions[pos] = state.player

  setState({
    player : state.player==CIRCLE? CROSS : CIRCLE,
    positions
})
   

}

return(
  <div className="grid">
    <Square position={0} value ={state.positions[0]} take_turn ={takeTurn}/> 
    <Square position={1} value ={state.positions[1]} take_turn ={takeTurn}/>
    <Square position={2} value ={state.positions[2]} take_turn ={takeTurn}/>
    <Square position={3} value ={state.positions[3]} take_turn ={takeTurn}/>
    <Square position={4} value ={state.positions[4]} take_turn ={takeTurn}/>
    <Square position={5} value ={state.positions[5]} take_turn ={takeTurn}/>
    <Square position={6} value ={state.positions[6]} take_turn ={takeTurn}/>
    <Square position={7} value ={state.positions[7]} take_turn ={takeTurn}/>
    <Square position={8} value ={state.positions[8]} take_turn ={takeTurn}/>
  </div>  
)
}
export default App