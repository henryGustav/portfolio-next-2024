const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^swiper/css$': '<rootDir>/__mocks__/swiperCss.js',
  },
  transformIgnorePatterns: ['/node_modules/(?!swiper|ssr-window|dom7)'],
}

module.exports = createJestConfig(customJestConfig)