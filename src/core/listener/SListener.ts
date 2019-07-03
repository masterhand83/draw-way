import { GElement, GNode } from "../GElements";

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
        const dpr: number = window.devicePixelRatio || 1;
        this.dpr = dpr;
    }
    protected getMouseX(ev: MouseEvent){
        return ev.clientX - this.canvasBound.left;
    }
    protected getMouseY(ev: MouseEvent){
        return ev.clientY - this.canvasBound.top;
    }
    protected insideNode(ev: MouseEvent, node: GNode): boolean {
        const mouse = {
            x: this.getMouseX(ev),
            y: this.getMouseY(ev)
        };
        console.log("mouse: ",mouse,"node: ",node);
        let r = node.radius ;
        console.log("radius:",r);
        if (node.x - r < mouse.x && mouse.x < node.x +  r) {
            return true;
        }
        return false;
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


}
