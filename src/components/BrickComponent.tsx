import { FC, useContext } from "react";
import { Brick } from "../game/Brick";
import { BoardContext } from "../App";

type BrickProps = {
    brick: Brick,
    X: number,
    Y: number
}

const BrickComponent: FC<BrickProps> = ({ brick: { value }, X, Y }) => {
    const context = useContext(BoardContext)

    const clickHandler = () => {
        context!.board.move(X, Y)
        context?.setField([...context!.board.field])
    }

    return (
        <div className="brick" pos-x={X} pos-y={Y} onClick={clickHandler}>
            {value}
        </div>
    )
}

export default BrickComponent