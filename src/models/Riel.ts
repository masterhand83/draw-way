import { Estacion } from "./Estacion";

export class Riel {
    inicio: Estacion;
    final: Estacion;
    crowd: number;
    constructor(inicio: Estacion, final: Estacion, crowd?: number) {
        this.inicio = inicio;
        this.final = final;
        this.crowd = crowd ? crowd: 0;
    }
}