module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/tests/*.test.jsx',
      'src/tests/*.test.js'
    ],
    preprocessors: {
      'src/tests/*.test.jsx': ['babel'],
      'src/tests/*.test.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};
