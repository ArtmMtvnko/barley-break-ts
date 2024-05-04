import { FC, ReactNode } from "react"

type MainMenuProps = {
    children: ReactNode
}

const MainMenu: FC<MainMenuProps> = ({ children }) => {
    return <>{children}</>
}

export default MainMenu