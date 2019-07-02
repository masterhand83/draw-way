import { GridBuilder } from "./core/drawer/Builders";
import { IPath } from "./core/drawer/Path";
import { GNode } from "./core/GElements";

const canvas: HTMLCanvasElement = document.querySelector('#canvas');
const grid: GridBuilder = new GridBuilder(canvas, 100);
const rosario: GNode[] = [
    new GNode(1, 1, "Cuatro Caminos"),
    new GNode(2, 2, "Panteones"),
    new GNode(2, 3, "Chabacano"),
];

const states: string[] = [
    'green',
    'orange',
];
const paths: IPath[] = [
    { nodes: rosario, linestates: states },
];
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
