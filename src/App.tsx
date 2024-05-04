import { createContext, useEffect, useState } from 'react'
import { MidBoardFactory, SmallBoardFactory } from './game/BoardFactory'
import { Board, SmallBoard, TypeField } from './game/Board'
import { MoveObserver } from './game/Observer'
import { BoardMoveProxy } from './game/BoardProxy'
import { Caretaker } from './game/Memento'
import GameBoard from './components/GameBoard'
import BrickComponent from './components/BrickComponent'
import Button from './components/Button'
import './style.css'

export type TypeBoardContext = {
  board: BoardMoveProxy
  caretaker: Caretaker
  setField: React.Dispatch<React.SetStateAction<TypeField>>
} | undefined

export const BoardContext = createContext<TypeBoardContext>(undefined)

function App() {
  const [board] = useState<Board>(new MidBoardFactory().CreateBoard())
  const [field, setField] = useState<TypeField>(board.field)

  useEffect(() => {
    board.attach(new MoveObserver()) // !!!!!!!
    // const smallBoard: SmallBoard = new SmallBoardFactory().CreateBoard()
    // const caretaker = new Caretaker(smallBoard)

    // console.log(smallBoard.printField())

    // smallBoard.attach(new MoveObserver())

    // const proxy = new BoardMoveProxy(smallBoard)

    // caretaker.backup()
    // proxy.move(3, 2)

    // caretaker.backup()
    // proxy.move(3, 1)
    
    // console.log(smallBoard.printField())
    // console.log(caretaker)

    // caretaker.undo()
    // caretaker.undo()
    // console.log(smallBoard.printField())
  }, [])

  return (
    <>
      <h1>Barley Break!</h1>

      <BoardContext.Provider value={{ 
          board: new BoardMoveProxy(board),
          caretaker: new Caretaker(board),
          setField
      }}>
        <GameBoard>
          {field.map((row, y) => {
            return row.map((brick, x) => 
              <BrickComponent key={brick.value} brick={brick} X={x} Y={y}/>
            )
          })}
        </GameBoard>
        <Button>undo</Button>
        <Button>exit</Button>
      </BoardContext.Provider>


    </>
  )
}

export default App
