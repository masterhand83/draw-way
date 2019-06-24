import { GElement, GNode } from "./GElements";

/**
 * Configuracion general de el proyecto de dibujo.
 */
interface DConfig {
    background_color: string
    width: number;
    height: number;
}
/**
 * configuracion de las opciones de cada accion
 */
export interface AccionConfig {
    stroke?: boolean;
    fill?: boolean;
    fillcolor?: string;
    strokecolor?: string;
    isPath?: boolean;
}
/**
 * Drawer es la clase base para todas las acciones de dibujo relacionados con HTMLCanvas.
 * No se recomienda modificar la clase.
 * @constructor
 * @param {HTMLCanvasElement} canvas - El elemento "Canvas" que se utiliza para el dibujado
 */
export class Drawer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    config: DConfig;
    private readonly def_fillStyle = "#FFF";
    private readonly def_strokeStyle = "#000";
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = <HTMLCanvasElement>canvas;
        this.ctx = this.canvas.getContext('2d');
        this.config = {
            background_color: '#FFFFFF',
            width: 1200,
            height: 2300
        };
    }
    /**
     * Inicializa el lienzo de trabajo.
     */
    inicializar() : void {
        this.canvas.height = this.config.height;
        this.canvas.width = this.config.width;
        this.ctx.fillStyle = this.config.background_color;
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.save();
    }
    /**
     * Sirve para dibujar e interactual con el lienzo de trabajo sin necesidad
     * de configurar elementos extra.
     * @param fn la funcion para interactuar con el lienzo
     * @param config la configuracion inicial de la acción
     */
    draw(fn:(context: CanvasRenderingContext2D) => void, config: AccionConfig){
        this.ctx.fillStyle = this.def_fillStyle;
        this.ctx.strokeStyle = this.def_strokeStyle;
        this.ctx.lineWidth = 1;
        if (config.fillcolor) this.ctx.fillStyle = config.fillcolor;
        if (config.strokecolor) this.ctx.strokeStyle = config.strokecolor;

        this.ctx.beginPath();

        fn(this.ctx);

        this.ctx.closePath();

        if (config.fill) this.ctx.fill();
        if (config.stroke) this.ctx.stroke();
    }
    restaurarPagina(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.inicializar();
    }
    setConfig(newConfig:DConfig){
        this.config = newConfig;
        this.restaurarPagina();
    }
}