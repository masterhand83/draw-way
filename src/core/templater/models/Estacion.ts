import { GNode } from "../../GElements";
export interface IEstacionPars {
    x: number;
    y: number;
    name: number;
    id: number;
}
export class Estacion {
    public id: any;
    public element: GNode;
    public name: string;
    constructor(id: string, x: number, y: number, name: string) {
        this.id = id;
        this.name = name;
        this.element = new GNode(x, y, this.name);
    }

}
