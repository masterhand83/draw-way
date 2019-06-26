import { Drawer} from "./core/drawer/Drawer";
import { GNode, GLine } from "./core/drawer/GElements";
import { EDrawer } from "./core/drawer/EDrawer";
import { Path, IPath } from "./core/drawer/Path";
import { GridBuilder } from "./core/drawer/builders/Builders";
let canvas : HTMLCanvasElement = document.querySelector('#canvas');
let grid: GridBuilder = new GridBuilder(canvas,100);
let nodes: GNode[] = [
    new GNode(1, 1),
    new GNode(1, 2),
    new GNode(2, 3),
    new GNode(3, 5),
    new GNode(5, 5),
    new GNode(5, 6),
    new GNode(7, 6),
    new GNode(8, 7),
    new GNode(10, 7)
]
let nodes2: GNode[] = [
    new GNode(2, 1),
    new GNode(3, 1),
    new GNode(4, 2),
    new GNode(5, 3),
    new GNode(5, 5),
    new GNode(7, 4),
    new GNode(8, 3),
    new GNode(9, 3),
    new GNode(9, 2)
]
let states: string[] = []
let states2: string[] = []
let paths: IPath[] = [
    { nodes, linestates: states },
    {nodes: nodes2, linestates: states2}
]
grid.insertPaths(paths);

grid.build();

/* let drawer: Drawer = new Drawer(canvas);
let nodes: GNode[] = [
    new GNode(100,100),
    new GNode(200, 100),
    new GNode(300, 200),
    new GNode(300, 300),
    new GNode(400, 400),
    new GNode(500, 400),
    new GNode(600, 300),
    new GNode(700, 300),
    new GNode(700, 200)
]
let states: string[] = [
    "#FF0000","#FF0044","#FF0044","#FF0044",
    "#54C7FF","#FF0044","#54C7FF","#4556AA"
]
let camino: IPath = {
    nodes,
    linestates: states
}
let paths: IPath[] = [
    {nodes, linestates: states}
]
let edrawer: EDrawer = new EDrawer(drawer);
let path: Path = new Path(edrawer,camino);
drawer.inicializar();
path.build({stroke:true,fill: true},{stroke: true, strokecolor: "#54C7FF"}); */