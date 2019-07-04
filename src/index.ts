import { GridBuilder } from "./core/drawer/Builders";
import { IPath } from "./core/drawer/Path";
import { GNode } from "./core/GElements";
import { SListener, ClickListener } from "./core/listener/SListener";

const canvas: HTMLCanvasElement = document.querySelector('#canvas');
const grid: GridBuilder = new GridBuilder(canvas, 100);
const rosario: GNode[] = [
    new GNode(1, 1, "Cuatro Caminos"),
    new GNode(2, 2, "Panteones"),
    new GNode(2, 3, "Chabacano"),
    new GNode(4, 3, "Popotla"),
];
const listener = new ClickListener(canvas, rosario[1]);
listener.listen({data: "DUMMY DATA"}, (data) => {
    console.log(data);
});
const states: string[] = [
    'green',
    'orange',
    'grey',
];
const paths: IPath[] = [
    { nodes: rosario, linestates: states },
];
grid.insertPaths(paths);
grid.buildAndShow();

// const n = 1;
/*
TODO: REFINAR SISTEMA DE ZOOM
document.onkeypress = e => {
    const charCode = (typeof e.which == "number") ? e.which: e.keyCode;
    const code = String.fromCharCode(charCode)
    console.log("Character typed: " + String.fromCharCode(charCode));
    if ( code === 'a') {
        grid.moveCamera("left", 0.1);
    }
    if (code === 'd') {
        grid.moveCamera("right", 0.1);
    }
    if (code === 's'){
        grid.moveCamera("down", 0.1);
    }
    if (code === 'w') {
        grid.moveCamera("up", 0.1);
    }
    if (code === 'z') {
        console.log(grid.current_zoom)
        if (grid.current_zoom < 1.99) {
            zoomIn(2);
        }else {
            zoomOut(1, grid.current_zoom);
        }
        console.log(grid.current_zoom)
    }
}
function zoomIn(limit: number) {
    let current = 1;
    let id = setInterval(() => {
        if (current >= limit) {
            clearInterval(id);
        } else {
            grid.zoom(current);
            current += 0.01;

        }
    }, 5);
}
function zoomOut(limit: number, last: number) {
    console.log('out');
    let current = last;
    let id = setInterval(() => {
        if (current <= limit) {
            clearInterval(id);
        } else {
            grid.zoom(current);
            current -= 0.01;
        }
    }, 5);
} */
/*setInterval(() => {
    grid.moveCamera("up", 0.05);
    grid.zoom(n);
    n += 0.01
}, 100);*/
/*
 TODO: IMPLEMENTAR UN SISTEMA DE ZOOM BASADO EN TIEMPO
 let n = 1;
setInterval(() =>{

    grid.zoom(n);
    n += 0.01;
    console.log(n);
}, 40); */
