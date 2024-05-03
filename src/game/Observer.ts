import { TypeField } from "./Board"

export interface IObservable {
    attach(observer: IObserver): void
    detach(observer: IObserver): void
    notify(): void
}

export interface IObserver {
    update(field: TypeField): void
}

export class MoveObserver implements IObserver {
    public update(field: TypeField): void {
        console.log(JSON.stringify(field))
    }
}