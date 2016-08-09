module.exports = function(grunt) {

	grunt.config('cssmin', {
		target: {
			files: [{
				expand: true,
				cwd: '<%= globalConfig.css %>',
				src: ['**/*.css'],
				dest: '<%= globalConfig.css_min %>',
				ext: '.css'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};