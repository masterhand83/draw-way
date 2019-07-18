import { GridBuilder } from "../drawer/Builders";
import { ITemplate } from "./templates/ITemplate";

export class Templater {
    private canvas: HTMLCanvasElement;
    private grid: GridBuilder;
    private template: ITemplate;
    constructor(template: ITemplate) {
        this.canvas = document
                        .getElementById('metropoli-canvas') as HTMLCanvasElement;
        this.grid = new GridBuilder(this.canvas, 100);
        this.template = template;
        this.processTemplate();
        this.grid.buildAndShow();
    }
    private processTemplate(){
        const paths = this.template.lineas
                        .map((linea) => linea.path);
        this.grid.insertPaths(paths);
    }
}
