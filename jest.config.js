// eslint-disable-next-line @typescript-eslint/no-var-requires
const os = require('os');

const isCI = process.env.CI === '1';

module.exports = {
    maxConcurrency: os.cpus().length,
    moduleFileExtensions: [
        'js',
        'json',
        'ts',
    ],
    reporters: isCI ? ['default', 'jest-junit'] : ['default'],
    rootDir: 'src',
    testEnvironment: 'node',
    testRegex: '/__tests__/.*test\\.ts$',
    testTimeout: 1000,
    transform: {
        '^.+\\.ts$': ['ts-jest', { compiler: 'ttypescript' }],
    },
};
