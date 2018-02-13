module.exports = function(grunt) {
+ 
+  grunt.initConfig({
+      concat: {
+          main: {
+              src: [
+                  'node_modules/backbone/backbone.js',
+                  'node_modules/jquery/dist/jquery.js',
+                  'node_modules/lodash/lodash.js'
+              ],
+              dest: 'build/scripts.js'
+          }
+
+      },
+      concat: {
+          main: {
+              src: [
+                  //
+              ],
+              dest: 'build/constructor.js'
+          }
+
+
+      },
+      concat: {
+          main: {
+              src: [
+                  //
+              ],
+              dest: 'build/app.js'
+          }
+      },
+
+      sass: {
+          dist: {
+              options: {
+                  style: 'compressed'
+              },
+              files: {
+                  'css/style.css': 'css/style.scss'
+              }
+          }
+      }
+
+      watch: {
+          css: {
+              files: ['css/*.scss'],
+              tasks: ['sass'],
+              options: {
+                  spawn: false,
+              }
+          }
+      }
+  })
+};
+
+grunt.loadNpmTasks('grunt-contrib-concat');
+grunt.loadNpmTasks('grunt-contrib-sass');
+grunt.loadNpmTasks('grunt-contrib-watch');

+grunt.registerTask('default', ['concat', 'sass', 'watch']);
