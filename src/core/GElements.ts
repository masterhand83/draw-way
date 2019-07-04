export interface GElement {
    x: number;
    y: number;
}
export class GText implements GElement {
    public x: number;
    public y: number;
    public text: string;
    constructor(x: number, y: number, text: string) {
        this.x = x;
        this.y = y;
        this.text = text;
    }
}
export class GNode implements GElement {
    public x: number;
    public y: number;
    public radius: number;
    public name: string;
    constructor(x: number, y: number, name?: string) {
        this.x = x;
        this.y = y;
        this.radius = 16;
        if (name !== "") {
            this.name = name;
        } else {
            this.name = ".";
        }
    }
}
export class GLine implements GElement {
    public x: number;
    public y: number;
    public x1: number;
    public y1: number;
    public grosor: number;
    public color?: string;
    constructor(x: number, y: number, x1: number, y1: number) {
        this.x = x;
        this.y = y;
        this.x1 = x1;
        this.y1 = y1;
        this.grosor = 20;
        this.color = "";
    }
}
