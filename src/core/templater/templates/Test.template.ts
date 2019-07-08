import { Estacion } from "../models/Estacion";
import { Linea } from "../models/Linea";
import { ITemplate } from "./ITemplate";

export class TestTemplate implements ITemplate {
    public lineas: Linea[];
    constructor(){
        const lineaAzul = new Linea("Azul",
        [
            new Estacion("A1", 1, 1, "CC"),
            new Estacion("A2", 3, 1, "Panteones"),
            new Estacion("A3", 4, 2, "Tacuba"),
            new Estacion("A4", 6, 2, "New Vegas")
        ],
        [
            "red",
            "orange",
            "orange"
        ]);
        const lineaRoja = new Linea("Azul",
            [
                new Estacion("R1", 1, 3, "Joss"),
                new Estacion("R2", 3, 3, "RetroVision"),
                new Estacion("R3", 4, 2, "Tacuba"),
                new Estacion("R4", 5, 1, "Blue Moon")
            ],
            [
                "red",
                "green",
                "green"
            ]);
        this.lineas = [lineaAzul, lineaRoja];
    }
}
