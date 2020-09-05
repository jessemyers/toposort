import { Node, Graph } from './graph';

/* Topological sort using Kahn's algorithm
 */
export function toposort({ incoming, outgoing }: Graph): Node[] {
    const sorted: Node[] = [];
    const candidates = new Set<Node>();

    // initialize candidate set with all nodes with no incoming edges
    for (const [node, edges] of incoming) {
        if (edges.size === 0) {
            candidates.add(node);
        }
    }

    while (candidates.size) {
        for (const fromNode of candidates) {
            candidates.delete(fromNode);

            // add to output list
            sorted.push(fromNode);

            // eliminate its outbound edges
            const toNodes = outgoing.get(fromNode) || [];
            for (const toNode of toNodes) {
                const edges = incoming.get(toNode);

                if (edges) {
                    edges.delete(fromNode);

                    if (edges.size === 0) {
                        candidates.add(toNode);
                    }
                }
            }
        }
    }

    return sorted;
}
