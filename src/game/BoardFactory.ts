import { Board, SmallBoard, MidBoard, LargeBoard } from "./Board";

interface IBoardFactory {
    createBoard(): Board
    createFromSaved(): Board
}

export class SmallBoardFactory implements IBoardFactory {
    createBoard(): Board {
        return new SmallBoard()
    }

    createFromSaved() :Board {
        const board = new SmallBoard()

        const savedData = localStorage.getItem('field')

        if (savedData === null)
            return new SmallBoard()
        
        board.field = JSON.parse(savedData).field

        return board
    }
}

export class MidBoardFactory implements IBoardFactory {
    createBoard(): Board {
        return new MidBoard()
    }

    createFromSaved() :Board {
        const board = new MidBoard()

        const savedData = localStorage.getItem('field')

        if (savedData === null)
            return new MidBoard()
        
        board.field = JSON.parse(savedData).field

        return board
    }
}

export class LargeBoardFactory implements IBoardFactory {
    createBoard(): Board {
        return new LargeBoard()
    }

    createFromSaved() :Board {
        const board = new LargeBoard()

        const savedData = localStorage.getItem('field')

        if (savedData === null)
            return new LargeBoard()
        
        board.field = JSON.parse(savedData).field

        return board
    }
}