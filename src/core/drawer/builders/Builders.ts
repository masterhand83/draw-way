import { Path, IPath } from "../Path";
import { Drawer } from "../Drawer";
import { EDrawer } from "../EDrawer";

export class GridBuilder{
    scale: number;
    private paths: Path[];
    private drawer: Drawer;
    private edrawer: EDrawer;
    constructor(canvas: HTMLCanvasElement, scale: number){
        this.drawer = new Drawer(canvas);
        this.edrawer = new EDrawer(this.drawer);
        this.paths = [];
        this.scale = scale;
    }
    insertPaths(ipaths: IPath[]){
        for (let i = 0; i < ipaths.length; i++) {
            const path = ipaths[i];
            path.nodes.map((node)=>{
                let n = node;
                n.x = n.x * this.scale;
                n.y = n.y * this.scale;
                return n;
            })
            this.paths.push(new Path(this.edrawer, path))
        }
    }
    build(){
        this.drawer.inicializar();
        console.log(this.paths);
        if (this.paths.length > 0) {
            for (const path of this.paths) {
                path.build({ stroke: true, fill: true },
                    { stroke: true, strokecolor: "#54C7FF" });
            }
        }
    }
}