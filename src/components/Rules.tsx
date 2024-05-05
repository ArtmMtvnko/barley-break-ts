import { FC } from "react"
import Button from "./Button"
import { Tab } from "../utils/TabsEnum"

type RulesProps = {
    setTab: React.Dispatch<React.SetStateAction<Tab>>
    className?: string
}

const Rules: FC<RulesProps> = ({ setTab, className }) => {
    const styles = {
        maxWidth: 1000,
        minWidth: 300,
        fontSize: 20
    }

    return <div className={className} style={styles}>
        <div>
                <b>Wellcome to the Barley Break!</b> <br />
                Main goal: set all bricks (squares) in ascending order ending with empty brick. <br />
                In other words, your board should look like this pattern: <br />
                <pre>
                    | 1  2  3  4 | <br />
                    | 5  6  7  8 | <br />
                    | 9 10 11 12 | <br />
                    |13 14 15  0 | <br />
                </pre>
                <b>MAIN POINTS:</b> <br />
                1. To move brick click on it. <br />
                2. If empty sell will be near, brick on which you click will be replaced with empty one. <br />
                3. Press 'Undo' if you want to rollback your last move. (maximum 10 rollbacks) <br />
                4. Game automaticly saving so you can resume game at last point at any time 
                you want by click on 'continue' in main menu. <br />
                5. There are 3 levels of difficulty which represents size of board: 4x4, 5x5, 6x6. <br />
                <p><b>Good Luck!</b></p>
        </div>
        <Button onClick={() => setTab(Tab.MainMenu)} >Exit</Button>
    </div>
}

export default Rules