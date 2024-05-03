import { Board, SmallBoard, MidBoard, LargeBoard } from "./Board";

interface IBoardFactory {
    CreateBoard(): Board
}

export class SmallBoardFactory implements IBoardFactory {
    CreateBoard(): Board {
        return new SmallBoard()
    }
}

export class MidBoardFactory implements IBoardFactory {
    CreateBoard(): Board {
        return new MidBoard()
    }
}

export class LargeBoardFactory implements IBoardFactory {
    CreateBoard(): Board {
        return new LargeBoard()
    }
}