import { GLine, GNode, GText } from "../GElements";
import { AccionConfig } from "./Drawer";
import { EDrawer } from "./EDrawer";
export interface IPath {
    nodes: GNode[];
    linestates: string[];
}
export class Path {
    public nodes: GNode[];
    public lineStates: string[];
    private edrawer: EDrawer;
    private lines: GLine[];
    constructor(edrawer: EDrawer, path?: IPath) {
        this.edrawer = edrawer;
        this.lines = [];
        if (path) {
            this.nodes = path.nodes;
            this.lineStates = path.linestates;
        }
    }

    public insertNodes(nodes: GNode[]) {
        this.nodes = nodes;
    }

    public insertStates(states: string[]) {
        this.lineStates = states;
    }

    public build(nodeConfig: AccionConfig, lineConfig: AccionConfig) {
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            if (i + 1 < this.nodes.length) {
                const line = this.LineBetweenNodes(node, this.nodes[i + 1]);

                if (this.lineStates.length === this.nodes.length - 1) {
                    line.color = this.lineStates[i];
                }
                this.lines.push(line);
                this.edrawer.drawElement(line, lineConfig);
            }
            this.drawNode(node, nodeConfig);
        }
    }

    private drawNode(node: GNode, config: AccionConfig) {
        const textX = node.x - node.radius;
        const texY = node.y - 10 - node.radius;
        this.edrawer.drawElement(node, config);
        if (node.name) {
            this.edrawer.drawElement(new GText(textX, texY, node.name), null);
        }
    }

    private LineBetweenNodes(node1: GNode, node2: GNode): GLine {
        return (new GLine(
            node1.x,
            node1.y,
            node2.x,
            node2.y,
        ));
    }
}
