module.exports = function(grunt) {
  var path = require('path');

  // execution stats
  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    // path to task.js files, defaults to grunt dir
    configPath: path.join(process.cwd(), 'tasks'),
  })

  grunt.registerTask('default', ['shell:mongod', 'express', 'browserSync', 'watch'])
  grunt.registerTask('test', ['sass:prod', 'concurrent:test', 'merge-json', 'jade:test', 'open']);

};
