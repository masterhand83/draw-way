import { GNode, GLine } from "./GElements";
import { EDrawer } from "./EDrawer";
import { AccionConfig } from "./Drawer";

export class PathDrawer{
    nodes: GNode[];
    edrawer: EDrawer;
    node_conf: AccionConfig;
    lineStates: string[];
    constructor(edrawer: EDrawer){
        this.edrawer = edrawer;
    }
    insertNodes(nodes: GNode[]){
        this.nodes = nodes
    }
    insertStates(states: string[]){
        this.lineStates = states;
    }
    buildPath(nodeConfig: AccionConfig, lineConfig: AccionConfig){
        for (let i = 0; i < this.nodes.length; i++) {
            let node = this.nodes[i];
            if (i + 1 < this.nodes.length) {
                let line = this.LineBetweenNodes(node, this.nodes[i + 1]);

                if(this.lineStates.length == this.nodes.length - 1)
                    line.color = this.lineStates[i];

                this.edrawer.drawElement(line, lineConfig)
            }
            this.edrawer.drawElement(node, nodeConfig);
        }
    }
    private createNode(node: GNode) {
        this.edrawer.drawElement(node,{})
    }
    private LineBetweenNodes(node1: GNode, node2: GNode): GLine{
        return (new GLine(
            node1.x,
            node1.y,
            node2.x,
            node2.y
        ))
    }
}