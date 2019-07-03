import { Drawer } from "./Drawer";
import { EDrawer } from "./EDrawer";
import { IPath, Path } from "./Path";
import { GNode } from "../GElements";

export class GridBuilder {
    public scale: number;
    private paths: Path[];
    private drawer: Drawer;
    private edrawer: EDrawer;

    constructor(canvas: HTMLCanvasElement, grid_scale: number) {
        this.drawer = new Drawer(canvas);
        this.edrawer = new EDrawer(this.drawer);
        this.paths = [];
        this.scale = grid_scale;
    }

    public insertPaths(ipaths: IPath[]) {
        this.paths = [];
        for (let i = 0; i < ipaths.length; i++) {
            const path = ipaths[i];
            path.nodes.map((node) => {
                const n = node;
                n.x = n.x * this.scale;
                n.y = n.y * this.scale;
                return n;
            });
            this.paths.push(new Path(this.edrawer, path));
        }
    }

    public buildAndShow() {
        this.drawer.inicializar(1);
        this.build();
    }
    public zoom(scale: number){
        this.drawer.restaurarPagina(scale);
        this.build();
    }
    public moveCamera(dir: string,force: number){
            let ipaths: IPath[] = [];
            for (let i = 0; i < this.paths.length; i++) {
                const path: IPath = {
                    linestates: this.paths[i].lineStates,
                    nodes: this.paths[i].nodes,
                }
                path.nodes.map((node) =>{
                    return this.recalculatePos(node, force, dir);
                });
                ipaths.push(path);
            }
            this.insertPaths(ipaths);
            this.buildAndShow();

    }
    private build() {
        if (this.paths.length > 0) {
            for (const path of this.paths) {
                path.build({ stroke: true, fill: true, textColor: "red" },
                    { stroke: true, strokecolor: "#54C7FF" });
            }
        }
    }
    private normalizePosition(pos: number): number {
        return pos/this.scale;
    }
    private recalculatePos(node:GNode, force: number, dir: string): GNode{
        let n = node;
        if (dir === "left") {
            n.x = this.normalizePosition(n.x) + force;
            n.y = this.normalizePosition(n.y);
        } else if (dir === "right"){
            n.x = this.normalizePosition(n.x) - force;
            n.y = this.normalizePosition(n.y);
        } else if (dir === "up"){
            n.x = this.normalizePosition(n.x) ;
            n.y = this.normalizePosition(n.y) + force;
        } else if (dir === "down"){
            n.x = this.normalizePosition(n.x);
            n.y = this.normalizePosition(n.y) - force;
        }
        return n;
    }
}
