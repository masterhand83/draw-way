import { Drawer} from "./core/drawer/Drawer";
import { GNode, GLine } from "./core/drawer/GElements";
import { EDrawer } from "./core/drawer/EDrawer";
import { PathDrawer } from "./core/drawer/PathDrawer";
let canvas : HTMLCanvasElement = document.querySelector('#canvas');
let drawer: Drawer = new Drawer(canvas);
let line: GLine= new GLine(100,40,50,20);
let nodes: GNode[] = [
    new GNode(100,100),
    new GNode(200,100),
    new GNode(300,200),
    new GNode(300,300),
    new GNode(400, 400),
    new GNode(500,400),
    new GNode(600,300)
]
let states: string[] = [
    "#FF0000",
    "#FF0044",
    "#FF0044",
    "#FF0044",
    "#54C7FF",
    "#FF0044",
]
let edrawer: EDrawer = new EDrawer(drawer);
let pdrawer: PathDrawer = new PathDrawer(edrawer);
pdrawer.insertNodes(nodes);
pdrawer.insertStates(states);
drawer.inicializar();
pdrawer.buildPath({stroke:true,fill: true},{stroke: true, strokecolor: "#54C7FF"});