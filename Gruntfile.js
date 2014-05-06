module.exports = function(grunt) {

  // Load tasks provided by each plugin
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-jekyll");

   // Project configuration
  grunt.initConfig({
      sass: {
          dist: {
              files: [
                  {
                      src: ['clientside/sass/main.scss'],
                      dest: 'clientside/stylesheets/main.css'
                  }
              ]
          }
      },
      cssmin: {
          minify: {
              expand: true,
              cwd: 'clientside/stylesheets/',
              src: ['*.css', '!*.min.css'],
              dest: 'clientside/stylesheets/min/',
              ext: '.min.css'
          }
      },
      jekyll: {
        server: {
          dest: '_site',
          serve: true,
          server_port: 8000,
          auto: true
			},
      dev: {
        dest: '_site'
      }
		},
		watch: { // for development run 'grunt watch'
			jekyll: {
				files: ['templates/*.html'],
				tasks: ['jekyll:dev']
			}
    }
  });

  grunt.registerTask('default', ['sass','cssmin', 'jekyll:server']);

}
