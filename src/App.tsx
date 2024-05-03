import { useEffect } from 'react'
import { SmallBoardFactory } from './game/BoardFactory'
import { SmallBoard } from './game/Board'
import { MoveObserver } from './game/Observer'

function App() {

  useEffect(() => {
    const smallBoard: SmallBoard = new SmallBoardFactory().CreateBoard()

    console.log(smallBoard)
    smallBoard.attach(new MoveObserver())
    smallBoard.move(1, 1, 2, 1)
    console.log(smallBoard)
  }, [])

  return (
    <>
      <h1>Barley Break!</h1>
    </>
  )
}

export default App
