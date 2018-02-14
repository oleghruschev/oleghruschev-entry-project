module.exports = function(grunt) {

  grunt.initConfig({
      concat: {
          libs: {
              src: [
                  'node_modules/backbone/backbone.js',
                  'node_modules/jquery/dist/jquery.js',
                  'node_modules/lodash/lodash.js'
              ],
              dest: 'build/libs.js'
          },
          constructor: {
              src: [
                  //
              ],
              dest: 'build/constructor.js'
          },
          app: {
              src: [
                  //
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

  grunt.registerTask('default', ['concat', 'sass', 'watch']);

};

