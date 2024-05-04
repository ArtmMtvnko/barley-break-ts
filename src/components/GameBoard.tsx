import { FC, ReactNode, useContext } from "react"
import { BoardContext, TypeBoardContext } from "../App"

type BoardProps = {
    children: ReactNode
}

const GameBoard: FC<BoardProps> = ({ children }) => {
    const context = useContext<TypeBoardContext>(BoardContext)
    const fieldSize: number = context!.board.field.length

    const styles = {
        gridTemplateRows: `repeat(${fieldSize}, 100px)`,
        gridTemplateColumns: `repeat(${fieldSize}, 100px)`,
    }

    return (
        <div className="board" style={styles}>
            {children}
        </div>
    )
}

export default GameBoard