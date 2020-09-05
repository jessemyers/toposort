import { buildGraph, Edge } from '../graph';
import { toposort } from '../toposort';

describe('toposrt', () => {
    it('sorts a graph', () => {
        const edges: Edge[] = [
            ['one', 'two'],
            ['two', 'three'],
            ['two', 'four'],
            ['three', 'four'],
        ];

        const graph = buildGraph(edges);
        const sorted = toposort(graph);

        expect(sorted).toMatchSnapshot();
    });
});
