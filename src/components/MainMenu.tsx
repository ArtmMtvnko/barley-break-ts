import { FC, ReactNode } from "react"

type MainMenuProps = {
    children: ReactNode
    className?: string
}

const MainMenu: FC<MainMenuProps> = ({ children, className }) => {
    return <div className={className}>
        {children}
    </div>
}

export default MainMenu