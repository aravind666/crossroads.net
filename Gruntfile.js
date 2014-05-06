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
                    src: ['src/clientside/sass/main.scss'],
                    dest: 'src/clientside/stylesheets/main.css'
                }
            ]
        }
    },
    cssmin: {
        minify: {
            expand: true,
            cwd: 'src/clientside/stylesheets/',
            src: ['*.css', '!*.min.css'],
            dest: 'src/clientside/stylesheets/min/',
            ext: '.min.css'
        }
    },
    jekyll: {
      server: {
        options: {
          src: 'src',
          dest: '_site',
          serve: true,
          server_port: 8000,
          auto: true
        }
      },
    },
  });

  grunt.registerTask('default', ['sass','cssmin', 'jekyll']);

}
