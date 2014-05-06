module.exports = function(grunt) {

  // Load tasks provided by each plugin
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-jekyll");
  grunt.loadNpmTasks('grunt-contrib-connect');

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
    connect: {
      server: {
        options: {
          port: 8000,
          base: "_site",
        }
      }
    },
    jekyll: {
      server: {
        options: {
          src: 'src',
          dest: '_site',
          serve: true,
          server_port: 8001,
          auto: true,
        }
      },
      build: {
        options: {
          src: 'src',
          dest: '_site'
        }
      }
    },
    watch: {
      sass: {
        files: "src/**/*.scss",
        tasks: ["sass", "cssmin"],
        livereload: true,
      },
      jekyll: {
        files: [
          "src/**/*.md",
          "src/**/*.markdown",
          "src/**/*.css",
          "src/**/*.html"
        ],
        tasks: ["jekyll:build"],
      }
    }
  });

  grunt.registerTask("dev", ["connect", "watch"]);
  grunt.registerTask('default', ['sass','cssmin','jekyll:build']);
}
