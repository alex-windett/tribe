module.exports = function(grunt) {

	grunt.config('clean', {
		dist: [
			'<%= globalConfig.css %>/**/*',
			'<%= globalConfig.js_concat %>/**/*',
			'<%= globalConfig.js_min %>/**/*'
		]
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
};