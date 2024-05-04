import { MenuItem } from "./MenuItem";

type Menu = MenuItem[]

interface IBuilder {
    addItem(): void
    build(): Menu
}

export class MenuBuilder implements IBuilder {
    
}