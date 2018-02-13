module.exports = function(grunt) {
 
  grunt.initConfig({
      concat: {
        src: [
            'libs.js'
            'constructor.js'
            'app.js'
        ]
      }
  })
};

grunt.loadNpmTasks('grunt-contrib-concat');
