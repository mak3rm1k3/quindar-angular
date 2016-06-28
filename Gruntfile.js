// Program: Gruntfile.js
// Purpose: aggregate and concatenate all JS and CSS into /dist, and aggregate all JS into app.js
// Author:  Ray Lai
// Updated: Jun 28, 2016
// License: MIT license
//
module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      // aggregate all JavaScript files into app.js
      js: {
        src: "app/app.js",
/**
        src: ["app/app.js", "app/scripts/*.js", "app/directives/*.js", "app/factories/*.js", "app/controllers/*.js",
              "app/models/*.js"],
**/
        dest: "dist/app/scripts/app.js",
      },
    },
    copy: {
      all: {
        // This copies all the html and css into the dist/ folder
        expand: true,
        cwd: "app/",
        src: ["**/*.html", "**/*.css"],
        dest: "dist/",
      },
    },
  });

  // Grunt dependencies for this project
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-copy");

  // Default Grunt tasks will run browserify and copy 
  grunt.registerTask("default", ["browserify", "copy"]);
};
