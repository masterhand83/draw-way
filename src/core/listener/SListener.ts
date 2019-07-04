import { GElement, GNode } from "../GElements";
import { Drawer } from "../drawer/Drawer";
import { rejects } from "assert";

export interface ISListener {
    listen(data: any, fn: (data: any | any[]) => void): void;
}

export class SListener {
    protected canvas: HTMLCanvasElement;
    protected canvasBound: ClientRect|DOMRect ;
    protected dpr: number;
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.canvasBound = this.canvas.getBoundingClientRect();
        this.dpr = window.devicePixelRatio || 1;
    }

}

export class ClickListener extends SListener implements ISListener {
    public element: GElement;
    constructor(canvas: HTMLCanvasElement, element: GElement){
        super(canvas);
        this.element = element;
    }
    public listen(data: any, fn: (data: any) => void): void {
        this.canvas.addEventListener("click", (ev: MouseEvent) => {
            if (this.element instanceof GNode) {
                if (this.insideNode(ev, this.element)) {
                    fn(data);
                }
            }
        });
    }
    protected getMouseX(ev: MouseEvent) {
        return ev.clientX - this.canvasBound.left;
    }
    protected getMouseY(ev: MouseEvent) {
        return ev.clientY - this.canvasBound.top;
    }
    protected insideNode(ev: MouseEvent, node: GNode): boolean {
        const mouse = {
            x: this.getMouseX(ev) / this.dpr,
            y: this.getMouseY(ev) / this.dpr,
        };
        const r = node.radius;
        const x = mouse.x - node.x;
        const y = mouse.y - node.y;
        const isInsideCircle = Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(r, 2);
        if (isInsideCircle) return true;
        return false;
    }

}
