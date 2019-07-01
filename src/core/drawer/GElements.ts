export interface GElement {
    x: number;
    y: number;
}
export class GText implements GElement {
    x: number;
    y:number;
    text: string;
    constructor(x: number, y: number, text: string){
        this.x = x;
        this.y = y;
        this.text = text;
    }
}
export class GNode implements GElement {
    x: number;
    y: number;
    radius: number;
    name: string;
    constructor(x:number, y:number, name?: string) {
        this.x = x;
        this.y = y;
        this.radius = 15;
        if(name != ''){
            this.name = name
        }else{
            this.name = ".";
        };
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
