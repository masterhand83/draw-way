import { Drawer } from "./Drawer";
import { EDrawer } from "./EDrawer";
import { IPath, Path } from "./Path";

export class GridBuilder {
    public scale: number;
    private paths: Path[];
    private drawer: Drawer;
    private edrawer: EDrawer;

    constructor(canvas: HTMLCanvasElement, scale: number) {
        this.drawer = new Drawer(canvas);
        this.edrawer = new EDrawer(this.drawer);
        this.paths = [];
        this.scale = scale;
    }

    public insertPaths(ipaths: IPath[]) {
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

    public build() {
        this.drawer.inicializar();
        if (this.paths.length > 0) {
            for (const path of this.paths) {
                path.build({ stroke: true, fill: true, textColor: "red" },
                    { stroke: true, strokecolor: "#54C7FF" });
            }
        }
    }
}
