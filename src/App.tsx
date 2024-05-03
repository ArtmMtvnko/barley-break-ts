import { useEffect } from 'react'
import { SmallBoardFactory } from './game/BoardFactory'
import { SmallBoard } from './game/Board'
import { MoveObserver } from './game/Observer'
import { BoardMoveProxy } from './game/BoardProxy'

function App() {

  useEffect(() => {
    const smallBoard: SmallBoard = new SmallBoardFactory().CreateBoard()

    console.log(smallBoard)
    smallBoard.attach(new MoveObserver())

    const proxy = new BoardMoveProxy(smallBoard)
    proxy.move(3, 2)
    console.log(smallBoard)
  }, [])

  return (
    <>
      <h1>Barley Break!</h1>
    </>
  )
}

export default App
