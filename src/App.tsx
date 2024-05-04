import { useEffect, useState } from 'react'
import { SmallBoardFactory } from './game/BoardFactory'
import { SmallBoard, TypeField } from './game/Board'
import { MoveObserver } from './game/Observer'
import { BoardMoveProxy } from './game/BoardProxy'
import { Caretaker } from './game/Memento'
import GameBoard from './components/GameBoard'
import BrickComponent from './components/BrickComponent'

function App() {
  const [field, setField] = useState<TypeField>(new SmallBoardFactory().CreateBoard().field)

  useEffect(() => {
    const smallBoard: SmallBoard = new SmallBoardFactory().CreateBoard()
    const caretaker = new Caretaker(smallBoard)

    console.log(smallBoard.printField())

    smallBoard.attach(new MoveObserver())

    const proxy = new BoardMoveProxy(smallBoard)

    caretaker.backup()
    proxy.move(3, 2)

    caretaker.backup()
    proxy.move(3, 1)
    
    console.log(smallBoard.printField())
    console.log(caretaker)

    caretaker.undo()
    caretaker.undo()
    console.log(smallBoard.printField())
  }, [])

  return (
    <>
      <h1>Barley Break!</h1>
      <GameBoard>
        {field.map(row => {
          return row.map(brick => <BrickComponent key={brick.value} brick={brick} />)
        })}
      </GameBoard>
    </>
  )
}

export default App
