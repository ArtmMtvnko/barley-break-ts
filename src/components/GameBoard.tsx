import { FC, ReactNode, useContext } from "react"
import { BoardContext, TypeBoardContext } from "../App"

type BoardProps = {
    children: ReactNode
    className?: string
}

const GameBoard: FC<BoardProps> = ({ children, className }) => {
    const context = useContext<TypeBoardContext>(BoardContext)
    const fieldSize: number = context!.boardProxy.field.length

    const styles = {
        gridTemplateRows: `repeat(${fieldSize}, 100px)`,
        gridTemplateColumns: `repeat(${fieldSize}, 100px)`,
    }

    return (
        <div className={className} style={styles}>
            {children}
        </div>
    )
}

export default GameBoard