import { Estacion } from "./models/Estacion";
import { Drawer } from "./core/drawer/Drawer";
import { GNode, GLine } from "./core/drawer/GElements";
import { EDrawer } from "./core/drawer/EDrawer";
let canvas : HTMLCanvasElement = document.querySelector('#canvas');
let drawer: Drawer = new Drawer(canvas);
let line: GLine= new GLine(50,50,200,200);
let node1: GNode = new GNode(50,50);
let node2: GNode = new GNode(200, 200);
let edrawer: EDrawer = new EDrawer(drawer);
drawer.inicializar();
edrawer.drawElement(
    line,
    { fill: false, stroke: true, fillcolor: '#F00', strokecolor: '#F00' }
);
edrawer.drawElement(
    node1,
    {stroke:true,fill:true}
)
edrawer.drawElement(
    node2,
    { stroke: true, fill: true }
)