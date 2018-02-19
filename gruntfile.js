module.exports = function(grunt) {

  grunt.initConfig({
      concat: {
          libs: {
              src: [
                  'node_modules/jquery/dist/jquery.js',
                  'node_modules/lodash/lodash.js',
                  'node_modules/backbone/backbone.js',
              ],
              dest: 'build/libs.js'
          },
          constructor: {
              src: [
                  'src/constructors/*.js'
              ],
              dest: 'build/constructor.js'
          },
          app: {
              src: [
                  'src/app.js'
              ],
              dest: 'build/app.js'
          }
      },

      sass: {
          dist: {
              options: {
                  style: 'compressed'
              },
              files: {
                  'css/style.css': 'css/style.scss'
              }
          }
      },
      jasmine: {
          src: ['src/constructors/*.js'],
          options: {
              vendor: [
                  'build/libs.js',
                  'lib/jasmine-jquery.js'
		      ],
              specs: 'spec/*[sS]pec.js',
              helpers: 'spec/*Helper.js'
          }
      },
      watch: {
          css: {
              files: ['css/*.scss'],
              tasks: ['sass'],
              options: {
                  spawn: false
              }
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['concat', 'sass', 'watch']);

};
