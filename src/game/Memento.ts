import { Board, TypeField } from "./Board"

export interface IMemento {
    readonly state: string
}

export class FieldMemento implements IMemento {
    public readonly state: string

    constructor(state: TypeField) {
        this.state = JSON.stringify(state)
    }
}

export class Caretaker {
    private mementos: IMemento[] = []
    private originator: Board

    constructor(originator: Board) {
        this.originator = originator
    }

    public backup(): void {
        console.log(this.mementos)
        if (this.mementos.length < 10) {
            this.mementos.push(this.originator.save())
        } else {
            this.mementos.shift()
            this.mementos.push(this.originator.save())
        }
    }

    public undo(): void {
        // debugger
        if (this.mementos.length === 0) throw new Error('Stack of backups is empty')

        const lastMemento = this.mementos.pop()
        this.originator.restore(lastMemento!)
    }
}