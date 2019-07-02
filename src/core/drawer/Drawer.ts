import { GElement, GNode } from "../GElements";

/**
 * Configuracion general de el proyecto de dibujo.
 */
interface DConfig {
    background_color: string;
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
    textColor?: string;
    textFont?: string;
}
/**
 * Drawer es la clase base para todas las acciones de dibujo relacionados con HTMLCanvas.
 * No se recomienda modificar la clase.
 * @constructor
 * @param {HTMLCanvasElement} canvas - El elemento "Canvas" que se utiliza para el dibujado
 */
export class Drawer {
    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public config: DConfig;
    private readonly def_fillStyle = "#FFF";
    private readonly def_strokeStyle = "#000";
    private readonly def_textFont = "normal 17px sans-serif,Arial";

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.config = {
            background_color: '#FFFFFF',
            height: 2300,
            width: 1200,
        };
    }
    /**
     * Inicializa el lienzo de trabajo.
     */
    public inicializar(): void {
        this.canvas.height = this.config.height;
        this.canvas.width = this.config.width;
        this.ctx.fillStyle = this.config.background_color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
    }
    /**
     * Sirve para dibujar e interactual con el lienzo de trabajo sin necesidad
     * de configurar elementos extra.
     * @param fn la funcion para interactuar con el lienzo
     * @param config la configuracion inicial de la acción
     */
    public draw(fn: (context: CanvasRenderingContext2D) => void,
    config: AccionConfig) {
        this.setContext(config);
        this.ctx.beginPath();
        fn(this.ctx);
        this.ctx.closePath();
        if (config.fill) this.ctx.fill();
        if (config.stroke) this.ctx.stroke();
    }

    public restaurarPagina() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.inicializar();
    }
    public setConfig(newConfig: DConfig) {
        this.config = newConfig;
        this.restaurarPagina();
    }

    private setContext(config: AccionConfig): void {
        this.ctx.fillStyle = this.def_fillStyle;
        this.ctx.strokeStyle = this.def_strokeStyle;
        this.ctx.font = this.def_textFont;
        this.ctx.lineWidth = 1;
        this.ctx.lineCap = 'round';
        if (config.fillcolor) this.ctx.fillStyle = config.fillcolor;
        if (config.strokecolor) this.ctx.strokeStyle = config.strokecolor;
        if (config.textFont) this.ctx.font = config.textFont;
    }
}
