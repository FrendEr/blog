module.exports = function(grunt) {  
  
    grunt.initConfig({  
        pkg: grunt.file.readJSON('package.json'),  
        uglify: {  
            build: {  
                src: 'js/<%= pkg.name %>.js',  
                dest: 'js/<%= pkg.name %>.min.js'  
            }  
        },
        cssmin: {
            build: {
                src: 'css/styles.css',
                dest: 'css/styles.min.css'
            }
        }

    });  
  
    //grunt.loadNpmTasks('grunt-contrib-uglify');  
    grunt.loadNpmTasks('grunt-contrib-cssmin');  
  
    grunt.registerTask('default', ['cssmin']);  
  
};  