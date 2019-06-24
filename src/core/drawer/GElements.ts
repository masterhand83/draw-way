export interface GElement {
    x: number;
    y: number;
}
export class GNode implements GElement {
    x: number;
    y: number;
    radius: number;
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
        this.radius = 15;
    }
}
export class GLine implements GElement {
    x: number;
    y: number;
    x1: number;
    y1: number;
    grosor: number;
    color?: string;
    constructor(x: number, y: number, x1: number, y1: number) {
        this.x = x;
        this.y = y;
        this.x1 = x1;
        this.y1 = y1;
        this.grosor = 19;
        this.color = ""
    }
}
