import { FC } from "react";
import { Brick } from "../game/Brick";

type BrickProps = {
    brick: Brick
}

const BrickComponent: FC<BrickProps> = ({ brick: { value } }) => {
    return (
        <div>
            {value}
        </div>
    )
}

export default BrickComponent