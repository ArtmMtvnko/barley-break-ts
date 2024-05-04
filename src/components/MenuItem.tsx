import { FC, useContext } from "react"
import { ICommand } from "../utils/Command"
import Button from "./Button"
import { BoardContext, TypeBoardContext } from "../App"

type MenuItemProps = {
    command: ICommand
    children: string
}

const MenuItem: FC<MenuItemProps> = ({ command, children }) => {
    const context = useContext<TypeBoardContext>(BoardContext)

    return <Button onClick={() => command.execute(context)}>
        {children}
    </Button>
}

export default MenuItem