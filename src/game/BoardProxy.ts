import { Board, TypeField } from "./Board";

export class BoardMoveProxy extends Board {
    public field: TypeField;
    public board: Board

    constructor(board: Board) {
        super()
        this.board = board
        this.field = board.field
    }

    public move(fromX: number, fromY: number): void {
        if (this.state.isWin(this)) {
            return
        }

        if (this.field[fromY + 1] === undefined) {
            if (this.field[fromY - 1][fromX]?.value !== 0 &&
                this.field[fromY][fromX + 1]?.value !== 0 &&
                this.field[fromY][fromX - 1]?.value !== 0
            ) {
                console.log('PROXY: Move cannot be done.')
                return
            }
        } else if (this.field[fromY - 1] === undefined) {
            if (this.field[fromY + 1][fromX]?.value !== 0 &&
                this.field[fromY][fromX + 1]?.value !== 0 &&
                this.field[fromY][fromX - 1]?.value !== 0
            ) {
                console.log('PROXY: Move cannot be done.')
                return
            }
        } else if (this.field[fromY + 1][fromX]?.value !== 0 &&
            this.field[fromY - 1][fromX]?.value !== 0 &&
            this.field[fromY][fromX + 1]?.value !== 0 &&
            this.field[fromY][fromX - 1]?.value !== 0
        ) {
            console.log('PROXY: Move cannot be done.')
            return
        }

        this.board.move(fromX, fromY)
    }
}