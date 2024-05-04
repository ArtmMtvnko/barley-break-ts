import { TypeBoardContext } from "../App"
import { Board } from "../game/Board"
import { MidBoardFactory } from "../game/BoardFactory"
import { BoardMoveProxy } from "../game/BoardProxy"
import { Caretaker } from "../game/Memento"
import { MoveObserver } from "../game/Observer"

export interface ICommand {
    execute(context: TypeBoardContext): void
}

export class NewGameCommand implements ICommand {
    public execute(context: TypeBoardContext): void {
        const board: Board = new MidBoardFactory().CreateBoard()
        board.attach(new MoveObserver())
        const proxy = new BoardMoveProxy(board)
        const caretaker = new Caretaker(board)

        context!.setBoard(board)
        context!.setCaretaker(caretaker)
        context!.setBoardProxy(proxy)
        context!.setField([...board.field])
    }
}

// export class ResumeGameCommand implements ICommand {
//     public execute(context: TypeBoardContext): void {
//         const board: Board = new MidBoardFactory().CreateBoard()
//         board.attach(new MoveObserver())
//         const caretaker = new Caretaker(board)

//         console.log(board.printField())

//         context!.setBoard(board)
//         context!.setCaretaker(caretaker)
//         context!.setField([...board.field])
//     }
// }

export class RulesCommand implements ICommand {
    execute(): void {
        
    }
}