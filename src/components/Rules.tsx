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
                Take couple of simple rules next: <br />
                    1. To move square you must write its coordinate in console field. <br />
                    Coordinates starts from 0. If you want to move square write down its coordinates as follow: <br />
                    x y <br />
                    For example, you have next board: <br />
                     1  5 12  4 <br />
                    13  2 15  0 <br />
                     3 11 10  6 <br />
                     8  7  9 14 <br />
                    To move \'15\' write \'2 1\' in field (without \'\') <br />
                    <b>2. To Exit enter \'q\' in the field (without \'\')</b> <br />
                    <b>3. To Undo move - enter \'z\' in the field (without \'\')</b> <br />
        </div>
        <Button onClick={() => setTab(Tab.MainMenu)} >Exit</Button>
    </div>
}

export default Rules