import { FC, MouseEventHandler } from "react";

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>
    children: string
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
    const styles = {
        margin: 10,
        padding: 10
    }

    return <button onClick={onClick} style={styles}>{children}</button>
}

export default Button