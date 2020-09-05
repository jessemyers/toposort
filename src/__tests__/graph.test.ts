import { buildGraph, Edge } from '../graph';

describe('graph', () => {
    it('builds a graph', () => {
        const edges: Edge[] = [
            ['one', 'two'],
            ['two', 'three'],
            ['two', 'four'],
            ['three', 'four'],
        ];

        const graph = buildGraph(edges);
        expect(graph).toMatchSnapshot();
    });
});
