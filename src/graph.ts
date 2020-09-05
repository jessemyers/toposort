export type Node = string;
export type Edge = [Node, Node];

export type NodeSet = Set<Node>;
export type EdgeMap = Map<Node, Set<Node>>;

export interface Graph {
    nodes: NodeSet;
    incoming: EdgeMap;
    outgoing: EdgeMap;
}

export function buildGraph(edges: Edge[]): Graph {
    const nodes = new Set(
        edges.flatMap(
            (edge) => edge,
        ),
    );

    const incoming: EdgeMap = new Map<Node, Set<Node>>();
    const outgoing: EdgeMap = new Map<Node, Set<Node>>();

    for (const node of nodes) {
        if (!incoming.has(node)) {
            incoming.set(node, new Set<Node>());
        }
        if (!outgoing.has(node)) {
            outgoing.set(node, new Set<Node>());
        }
    }

    for (const [fromNode, toNode] of edges) {
        const fromNodes = incoming.get(toNode);
        const toNodes = outgoing.get(fromNode);

        if (fromNodes) {
            fromNodes.add(fromNode);
        }
        if (toNodes) {
            toNodes.add(toNode);
        }
    }

    return {
        nodes,
        incoming,
        outgoing,
    };
}
