// Example of a typical configuration
module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        // require('karma-firefox-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('karma-sonarqube-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client:{
        clearContext: false
      },
      coverageIstanbulReporter: {
        reports: ['html', 'lcov', 'lcovonly',],
        fixWebpackSourcePaths: true
      },
      coverageReporter: {
        // specify a common output directory
        dir: 'build/reports/coverage',
        reporters: [
          // reporters not supporting the `file` property
          { type: 'html', subdir: 'report-html' },
          { type: 'lcov', subdir: 'report-lcov' },
          // reporters supporting the `file` property, use `subdir` to directly
          // output them in the `dir` directory
          { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
          { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
          { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
          { type: 'text', subdir: '.', file: 'text.txt' },
          { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
        ]
      },
      sonarqubeReporter: {
        basePath: 'src/app',
        outputFolder: 'reports',
        filePattern: '**/*spec.ts',
        encoding: 'utf-8',
        legacyMode: false,
        reportName: (metadata) => {
          return metadata.concat('xml').join('.');
        }
      },
      angularCli: {
        environment: 'dev'
      },
      reporters: ['progress', 'kjhtml', 'sonarqube'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false
    });
  };