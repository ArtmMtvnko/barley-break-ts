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
        this.mementos.push(this.originator.save())
    }

    public undo(): void {
        if (!this.mementos.length) throw new Error('Stack of backups is empty')

        const lastMemento = this.mementos.pop()
        this.originator.restore(lastMemento!)
    }
}