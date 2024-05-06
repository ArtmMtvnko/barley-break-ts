import { Board } from "./Board"

export interface IGameState {
    isWin(board: Board): boolean
}

export class OngoingState implements IGameState {
    public isWin(board: Board): boolean {
        const fieldWidth = board.field[0].length
        let isEnd = true

        for (let i = 0; i < board.field.length; i++) {
            for (let j = 0; j < fieldWidth; j++) {
                if (j + fieldWidth * i + 1 === fieldWidth**2) continue
                if (board.field[i][j].value !== j + fieldWidth * i + 1) {
                    isEnd = false
                }
            }
        }

        if (isEnd) {
            board.state = new EndGameState()
            console.log('from ongiong end state')
            return true
        }

        return false
    }
}

export class EndGameState implements IGameState {
    public isWin(board: Board): boolean {
        console.log(board.state)
        console.log('from end state')
        return true
    }
}