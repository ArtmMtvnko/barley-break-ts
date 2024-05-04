import { FC, MouseEventHandler } from "react";

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>
    children: string
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
    const styles = {
        margin: 10,
        padding: 10,
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: '1px solid black'
    }

    return <button onClick={onClick} style={styles}>{children}</button>
}

export default Button