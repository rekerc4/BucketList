module.exports = function(config) {
    config.set({

      basePath: '', 

      frameworks: ['jasmine'],
  
      files: [
        'node_modules/angular/angular.js',
        'public/app/module.js', 
        'public/services/api.js',
        'public/components/search/search.js',
        'public/components/eventlist/event.js', 
        'public/components/bucketlist/bucket.js',  
        'spec/**/*.spec.js'
      ],

      reporters: ['dots'], 

      port: 9876,

      colors: true,

      logLevel: config.LOG_INFO,
  
      autoWatch: true,
  
      browsers: ['Chrome'],

      singleRun: true
    })
  }


     