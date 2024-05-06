import { FC, ReactNode } from "react"

type GameProps = {
    children: ReactNode
}

const Game: FC<GameProps> = ({ children }) => {
    return <div>
        {children}
    </div>
}

export default Game