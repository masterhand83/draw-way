import { GElement, GNode } from "../GElements";

export interface ISListener {
    listen(fn: (data: any | any[]) => void): void;
}

export class SListener {
    protected canvas: HTMLCanvasElement;
    protected canvasBound: ClientRect|DOMRect ;
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.canvasBound = this.canvas.getBoundingClientRect();
    }
    protected getMouseX(ev: MouseEvent){
        return ev.clientX - this.canvasBound.left;
    }
    protected getMouseY(ev: MouseEvent){
        return ev.clientY - this.canvasBound.top;
    }
    protected insideNode(ev: MouseEvent, node: GNode){
        const mouse = {x: this.getMouseX(ev), y: this.getMouseY(ev)};

    }
}

export class ClickListener extends SListener implements ISListener {
    constructor(canvas: HTMLCanvasElement, el: GElement){
        super(canvas);
    }
    listen(fn: (data: any) => void): void {
        throw new Error("Method not implemented.");
    }

}
