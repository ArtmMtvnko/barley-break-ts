import { useEffect } from 'react'
import { MidBoardFactory, SmallBoardFactory } from './game/BoardFactory'
import { MidBoard, SmallBoard } from './game/Board'

function App() {

  useEffect(() => {
    const smallBoard: SmallBoard = new SmallBoardFactory().CreateBoard()
    const midBoard: MidBoard = new MidBoardFactory().CreateBoard()

    console.log(smallBoard)
    console.log(midBoard)
  }, [])

  return (
    <>
      <h1>Barley Break!</h1>
    </>
  )
}

export default App
