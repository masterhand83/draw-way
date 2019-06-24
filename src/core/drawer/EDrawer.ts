import { Drawer, AccionConfig } from "./Drawer";
import { GElement, GNode, GLine } from "./GElements";

export class EDrawer {
    drawer: Drawer;
    constructor(drawer:Drawer){
        this.drawer = drawer;
    }
    drawElement(element: GElement, config: AccionConfig){
        if (element instanceof GNode) {
            this.drawNode(element, config);
        }
        if (element instanceof GLine) {
            this.drawLine(element, config);
        }
    }

    private drawNode(node: GNode, config: AccionConfig){
        this.drawer.draw((ctx:CanvasRenderingContext2D) =>{
            ctx.arc(node.x,node.y,node.radius,0,Math.PI * 2);
        },config);
    }

    private drawLine(line: GLine, config:AccionConfig){
        if(line.color != "") config.strokecolor = line.color;
        this.drawer.draw((ctx:CanvasRenderingContext2D) =>{
            ctx.lineWidth = line.grosor;
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(line.x1, line.y1);
        },config);
    }
}