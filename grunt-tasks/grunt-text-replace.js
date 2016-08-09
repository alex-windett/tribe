module.exports = function(grunt) {

	grunt.config('replace', {
		images: {
			src: ['<%= globalConfig.css_min %>/*.css'],
			// dest: '<%= globalConfig.css %>'
			overwrite: true,
			replacements: [{
				from: '/img/src/',//<%= globalConfig.img_src %>/',
				to: '/img/min/',//'<%= globalConfig.img_min %>/'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-text-replace');
};