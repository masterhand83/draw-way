import { Estacion } from "./Estacion";

export class Riel {
    public id: string;
    public inicio: Estacion;
    public final: Estacion;
    public color: string;
    constructor(inicio: Estacion, final: Estacion, color: string) {
        this.inicio = inicio;
        this.final = final;
        this.color = color ? color : "#00000";
    }
}
