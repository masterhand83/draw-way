import { Path, IPath } from "../../drawer/Path";
import { Estacion } from "./Estacion";
import { Riel } from "./Riel";
import { GNode } from "../../GElements";

export class Linea {
    private nombre: string;
    private estaciones: Estacion[];
    private rieles: Riel[];
    private elemento: IPath;
    private estados: string[];
    private mainColor: string;
    constructor(nombre: string, estaciones: Estacion[], estados: string[] | string) {
        this.estaciones = estaciones;
        this.nombre = nombre;
        if (estados instanceof Array) {
            this.estados = estados as string[];
        } else {
            this.mainColor = estados as string;
        }
        this.procesarEstaciones();
        this.crearPath();
    }
    public get path(): IPath {
        return this.elemento;
    }
    private procesarEstaciones() {
        this.rieles = [];
        for (let i = 0; i < this.estaciones.length; i++) {
            const estacion = this.estaciones[i];
            if (i + 1 < this.estaciones.length) {
                const state = this.estados ? this.estados[i]: this.mainColor;
                const nextEstacion = this.estaciones[i + 1];
                const riel = new Riel(estacion, nextEstacion, state);
                this.rieles.push(riel);
            }
        }
    }
    private crearPath() {
        const estates: string[] = this.rieles.map((riel) => riel.color);
        const nodes: GNode[] = this.estaciones
                                .map((estacion) => estacion.element);
        this.elemento = {linestates: estates, nodes};
    }
}
