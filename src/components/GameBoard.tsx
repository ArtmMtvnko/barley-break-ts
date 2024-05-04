import { FC, ReactNode } from "react"

type BoardProps = {
    children: ReactNode
}

const GameBoard: FC<BoardProps> = ({ children }) => {
    return (
        <div className="board">
            {children}
        </div>
    )
}

export default GameBoard