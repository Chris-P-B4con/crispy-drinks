import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  setupFiles: ['jest-canvas-mock'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./testing/setupTests.ts'],
  restoreMocks: true,
  resetMocks: true,
  transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
};

export default config;
