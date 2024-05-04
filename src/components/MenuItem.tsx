import { FC, useContext } from "react"
import { ICommand } from "../utils/Command"
import Button from "./Button"
import { BoardContext, TypeBoardContext } from "../App"

type MenuItemProps = {
    command: ICommand
    children: string
    action: () => void 
}

const MenuItem: FC<MenuItemProps> = ({ command, children, action }) => {
    const context = useContext<TypeBoardContext>(BoardContext)

    const clickHandler = () => {
        action()
        command.execute(context)
    }

    return <Button onClick={clickHandler}>
        {children}
    </Button>
}

export default MenuItem