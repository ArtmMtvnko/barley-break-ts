// import { MenuItem } from "./MenuItem";

// type Menu = MenuItem[]

// interface IBuilder {
//     menu: Menu
//     addItem(item: MenuItem): void
//     build(): Menu
// }

// export class MenuBuilder implements IBuilder {
//     public readonly menu: Menu = []

//     addItem(item: MenuItem): void {
//         this.menu.push(item)
//     }

//     build(): Menu {
//         const newMenu: Menu = this.menu
//         this.menu.length = 0
//         return newMenu
//     }
// }