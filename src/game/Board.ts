import { Brick } from "./Brick"
import { IObservable, IObserver } from "./Observer"
import { FieldMemento, IMemento } from "./Memento"
import { IGameState, OngoingState } from "./State"

interface IBoardPrototype {
    clone(): string
}

export type TypeField = Brick[][]

export abstract class Board implements IBoardPrototype, IObservable {
    public abstract field: TypeField
    public state: IGameState = new OngoingState()
    protected observers: IObserver[] = []

    public get isDone(): boolean {
        return this.state.isWin(this)
    }

    public printField(): void {
        let output = ''

        for (const row of this.field) {
            for (const brick of row) {
                output += `${brick.value} `
            }
            output += '\n'
        }

        console.log(output)
    }

    public clone(): string {
        return JSON.stringify(this)
    }

    public attach(observer: IObserver): void {
        this.observers.push(observer)
    }

    public detach(observer: IObserver): void {
        const indexToRemove: number = this.observers.findIndex(obs => obs === observer)
        this.observers.splice(indexToRemove, 1)
    }

    public notify(): void {
        this.observers.forEach(obs => obs.update(this))
    }
    
    public move(fromX: number, fromY: number): void {
        let tempBrick: Brick

        if (this.field[fromY + 1] !== undefined) {
            if (this.field[fromY + 1][fromX]?.value === 0) {
                tempBrick = this.field[fromY + 1][fromX]
                this.field[fromY + 1][fromX] = this.field[fromY][fromX]
                this.field[fromY][fromX] = tempBrick

                this.notify()
            }
        }

        if (this.field[fromY - 1] !== undefined) {
            if (this.field[fromY - 1][fromX]?.value === 0) {
                tempBrick = this.field[fromY - 1][fromX]
                this.field[fromY - 1][fromX] = this.field[fromY][fromX]
                this.field[fromY][fromX] = tempBrick

                this.notify()
            }
        }

        if (this.field[fromY][fromX + 1]?.value === 0) {
            tempBrick = this.field[fromY][fromX + 1]
            this.field[fromY][fromX + 1] = this.field[fromY][fromX]
            this.field[fromY][fromX] = tempBrick
            this.notify()
        }

        if (this.field[fromY][fromX - 1]?.value === 0) {
            tempBrick = this.field[fromY][fromX - 1]
            this.field[fromY][fromX - 1] = this.field[fromY][fromX]
            this.field[fromY][fromX] = tempBrick
            this.notify()
        }
    }

    public save(): IMemento {
        return new FieldMemento(this.field)
    }

    public restore(memento: IMemento): void {
        this.field = JSON.parse(memento.state)
        this.notify()
    }
}

export class SmallBoard extends Board {
    public field: TypeField

    constructor() {
        super()

        const nums: number[] = generateSequence(16)

        this.field = [
            [new Brick(nums[0]), new Brick(nums[1]), new Brick(nums[2]), new Brick(nums[3])],
            [new Brick(nums[4]), new Brick(nums[5]), new Brick(nums[6]), new Brick(nums[7])],
            [new Brick(nums[8]), new Brick(nums[9]), new Brick(nums[10]), new Brick(nums[11])],
            [new Brick(nums[12]), new Brick(nums[13]), new Brick(nums[14]), new Brick(nums[15])]
        ]
    }
}

export class MidBoard extends Board {
    public field: TypeField

    constructor() {
        super()

        const nums: number[] = generateSequence(25)

        this.field = [
            [new Brick(nums[0]), new Brick(nums[1]), new Brick(nums[2]), new Brick(nums[3]), new Brick(nums[4])],
            [new Brick(nums[5]), new Brick(nums[6]), new Brick(nums[7]), new Brick(nums[8]), new Brick(nums[9])],
            [new Brick(nums[10]), new Brick(nums[11]), new Brick(nums[12]), new Brick(nums[13]), new Brick(nums[14])],
            [new Brick(nums[15]), new Brick(nums[16]), new Brick(nums[17]), new Brick(nums[18]), new Brick(nums[19])],
            [new Brick(nums[20]), new Brick(nums[21]), new Brick(nums[22]), new Brick(nums[23]), new Brick(nums[24])]
        ]
    }
}

export class LargeBoard extends Board {
    public field: TypeField

    constructor() {
        super()

        const nums: number[] = generateSequence(36)
        
        this.field = [
            [new Brick(nums[0]), new Brick(nums[1]), new Brick(nums[2]), new Brick(nums[3]), new Brick(nums[4]), new Brick(nums[5])],
            [new Brick(nums[6]), new Brick(nums[7]), new Brick(nums[8]), new Brick(nums[9]), new Brick(nums[10]), new Brick(nums[11])],
            [new Brick(nums[12]), new Brick(nums[13]), new Brick(nums[14]), new Brick(nums[15]), new Brick(nums[16]), new Brick(nums[17])],
            [new Brick(nums[18]), new Brick(nums[19]), new Brick(nums[20]), new Brick(nums[21]), new Brick(nums[22]), new Brick(nums[23])],
            [new Brick(nums[24]), new Brick(nums[25]), new Brick(nums[26]), new Brick(nums[27]), new Brick(nums[28]), new Brick(nums[29])],
            [new Brick(nums[30]), new Brick(nums[31]), new Brick(nums[32]), new Brick(nums[33]), new Brick(nums[34]), new Brick(nums[35])],
        ]
    }
}

function generateSequence(range: number): number[] {
    const nums: number[] = []

    for (let i = 0; i < range; i++) {
        nums[i] = i;
    }

    for (let i = nums.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    return nums
}