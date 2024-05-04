import { FC } from "react";

type ButtonProps = {
    children: string
}

const Button: FC<ButtonProps> = ({ children }) => {
    const styles = {
        margin: 10,
        padding: 10
    }

    return <button style={styles}>{children}</button>
}

export default Button