import { FC, ReactNode } from "react"
import Button from "./Button"
import { Board } from "../game/Board"
import { OngoingState } from "../game/State"
import { Tab } from "../utils/TabsEnum"

type WinMenuProps = {
    children: ReactNode
    className: string
    board: Board
    setTab: React.Dispatch<React.SetStateAction<Tab>>
}

const WinMenu: FC<WinMenuProps> = ({ children, className, board, setTab }) => {
    const exitHandler = () => {
        board.state = new OngoingState()
        setTab(Tab.MainMenu)
    }

    return <div className={className}>
        {children}
        <Button onClick={exitHandler}>Exit</Button>
    </div>
}

export default WinMenu