import { createContext, useState } from 'react'
import { MidBoardFactory } from './game/BoardFactory'
import { Board, TypeField } from './game/Board'
import { BoardMoveProxy } from './game/BoardProxy'
import { Caretaker } from './game/Memento'
import GameBoard from './components/GameBoard'
import BrickComponent from './components/BrickComponent'
import Button from './components/Button'
import MainMenu from './components/MainMenu'
import MenuItem from './components/MenuItem'
import { NewGameCommand, NewLargeBoardCommand, NewMidBoardCommand, NewSmallBoardCommand, ResumeGameCommand, RulesCommand } from './utils/Command'
import { Tab } from './utils/TabsEnum'
import './style.css'
import Rules from './components/Rules'
import Game from './components/Game'
import WinMenu from './components/WinMenu'

export type TypeBoardContext = {
  boardProxy: BoardMoveProxy
  caretaker: Caretaker
  setField: React.Dispatch<React.SetStateAction<TypeField>>
  setBoard: React.Dispatch<React.SetStateAction<Board>>
  setCaretaker: React.Dispatch<React.SetStateAction<Caretaker>>
  setBoardProxy: React.Dispatch<React.SetStateAction<BoardMoveProxy>>
} | undefined

export const BoardContext = createContext<TypeBoardContext>(undefined)

function App() {
  const [tab, setTab] = useState<Tab>(Tab.MainMenu)
  const [board, setBoard] = useState<Board>(new MidBoardFactory().createBoard())
  const [field, setField] = useState<TypeField>(board.field)
  const [boardProxy, setBoardProxy] = useState<BoardMoveProxy>(new BoardMoveProxy(board))
  const [caretaker, setCaretaker] = useState<Caretaker>(new Caretaker(board))

  const undoHandler = () => {
    caretaker.undo()
    setField([...board.field])
    setBoardProxy(new BoardMoveProxy(board))
  }

  return (
    <Game>
      <BoardContext.Provider value={{ 
        boardProxy,
        caretaker,
        setField,
        setBoard,
        setCaretaker,
        setBoardProxy
      }}>
        <MainMenu className={tab === Tab.MainMenu ? 'menu active' : 'menu'}>
          <h1>Barley Break!</h1>
          <MenuItem action={() => setTab(Tab.Difficulty)} command={new NewGameCommand()}>New Game</MenuItem>
          <MenuItem action={() => setTab(Tab.GameBoard)} command={new ResumeGameCommand()}>Continue</MenuItem>
          <MenuItem action={() => setTab(Tab.Rules)} command={new RulesCommand()}>Rules</MenuItem>
        </MainMenu>

        <MainMenu className={tab === Tab.Difficulty ? 'difficulty active' : 'difficulty'}>
          <MenuItem action={() => setTab(Tab.GameBoard)} command={new NewSmallBoardCommand()}>Small</MenuItem>
          <MenuItem action={() => setTab(Tab.GameBoard)} command={new NewMidBoardCommand()}>Middle</MenuItem>
          <MenuItem action={() => setTab(Tab.GameBoard)} command={new NewLargeBoardCommand()}>Large</MenuItem>
        </MainMenu>

        <GameBoard className={tab === Tab.GameBoard ? 'board active' : 'board'}>
          {field.map((row, y) => {
            return row.map((brick, x) => 
              <BrickComponent key={brick.value} brick={brick} X={x} Y={y}/>
            )
          })}
          <Button onClick={undoHandler}>Undo</Button>
          <Button onClick={() => setTab(Tab.MainMenu)}>Exit</Button>
        </GameBoard>

        <Rules setTab={setTab} className={tab === Tab.Rules ? 'rules active' : 'rules'}></Rules>
      </BoardContext.Provider>

      <WinMenu 
        className={board.isDone && tab === Tab.GameBoard ? 'congratulation active' : 'congratulation'}
        board={board}
        setTab={setTab}>
        <h1>Congratulation. You win!</h1>
      </WinMenu>
    </Game>
  )
}

export default App
