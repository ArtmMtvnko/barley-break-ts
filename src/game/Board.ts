import { Brick } from "./Brick"
import { IObservable, IObserver } from "./Observer"
import { FieldMemento, IMemento } from "./Memento"

interface IBoardPrototype {
    clone(): string
}

export type TypeField = Brick[][]

export abstract class Board implements IBoardPrototype, IObservable {
    public abstract field: TypeField
    protected observers: IObserver[] = []

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

        if (this.field[fromY + 1][fromX]?.value === 0) {
            tempBrick = this.field[fromY + 1][fromX]
            this.field[fromY + 1][fromX] = this.field[fromY][fromX]
            this.field[fromY][fromX] = tempBrick
        }
        if (this.field[fromY - 1][fromX]?.value === 0) {
            tempBrick = this.field[fromY - 1][fromX]
            this.field[fromY - 1][fromX] = this.field[fromY][fromX]
            this.field[fromY][fromX] = tempBrick
        }
        if (this.field[fromY][fromX + 1]?.value === 0) {
            tempBrick = this.field[fromY][fromX + 1]
            this.field[fromY][fromX + 1] = this.field[fromY][fromX]
            this.field[fromY][fromX] = tempBrick
        }
        if (this.field[fromY][fromX - 1]?.value === 0) {
            tempBrick = this.field[fromY][fromX - 1]
            this.field[fromY][fromX - 1] = this.field[fromY][fromX]
            this.field[fromY][fromX] = tempBrick
        }

        this.notify()
    }

    public save(): IMemento {
        return new FieldMemento(this.field)
    }

    public restore(memento: IMemento): void {
        this.field = JSON.parse(memento.state)
    }
}

export class SmallBoard extends Board {
    public field: TypeField

    constructor() {
        super()
        this.field = [
            [new Brick(1), new Brick(2), new Brick(3), new Brick(4)],
            [new Brick(5), new Brick(6), new Brick(7), new Brick(8)],
            [new Brick(9), new Brick(10), new Brick(11), new Brick(12)],
            [new Brick(13), new Brick(14), new Brick(15), new Brick(0)]
        ]
    }
}

export class MidBoard extends Board {
    public field: TypeField

    constructor() {
        super()
        this.field = [
            [new Brick(1), new Brick(2), new Brick(3), new Brick(4), new Brick(5)],
            [new Brick(6), new Brick(7), new Brick(8), new Brick(9), new Brick(10)],
            [new Brick(11), new Brick(12), new Brick(13), new Brick(14), new Brick(15)],
            [new Brick(16), new Brick(17), new Brick(18), new Brick(19), new Brick(20)],
            [new Brick(21), new Brick(22), new Brick(23), new Brick(24), new Brick(0)]
        ]
    }
}

export class LargeBoard extends Board {
    public field: TypeField

    constructor() {
        super()
        this.field = [
            [new Brick(1), new Brick(2), new Brick(3), new Brick(4), new Brick(5), new Brick(6)],
            [new Brick(7), new Brick(8), new Brick(9), new Brick(10), new Brick(11), new Brick(12)],
            [new Brick(13), new Brick(14), new Brick(15), new Brick(16), new Brick(17), new Brick(18)],
            [new Brick(19), new Brick(20), new Brick(21), new Brick(22), new Brick(23), new Brick(24)],
            [new Brick(25), new Brick(26), new Brick(27), new Brick(28), new Brick(29), new Brick(30)],
            [new Brick(31), new Brick(32), new Brick(33), new Brick(34), new Brick(35), new Brick(0)],
        ]
    }
}