import { GridBuilder } from "./core/drawer/Builders";
import { IPath } from "./core/drawer/Path";
import { GNode } from "./core/GElements";

const canvas: HTMLCanvasElement = document.querySelector('#canvas');
const grid: GridBuilder = new GridBuilder(canvas, 100);
const rosario: GNode[] = [
    new GNode(1, 1, "Cuatro Caminos"),
    new GNode(2, 2, "Panteones"),
    new GNode(2, 3, "Chabacano"),
    new GNode(4, 2, "Popotla")
];

const states: string[] = [
    'green',
    'orange',
    'grey'
];
const paths: IPath[] = [
    { nodes: rosario, linestates: states },
];
grid.insertPaths(paths);

grid.buildAndShow();

let n = 1;
/* setInterval(() => {
    grid.moveCamera("down", 0.05);
    grid.zoom(n);
    n += 0.01
}, 100); */
/*
 TODO: IMPLEMENTAR UN SISTEMA DE ZOOM BASADO EN TIEMPO
 let n = 1;
setInterval(() =>{

    grid.zoom(n);
    n += 0.01;
    console.log(n);
}, 40); */
