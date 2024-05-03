import { Board } from "./Board"

export interface IObservable {
    attach(observer: IObserver): void
    detach(observer: IObserver): void
    notify(): void
}

export interface IObserver {
    update(board: Board): void
}

export class MoveObserver implements IObserver {
    public update(board: Board): void {
        localStorage.setItem('field', board.clone())
    }
}