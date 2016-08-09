module.exports = function (grunt) {

	grunt.config('sass_globbing', {
		sccs_includes: {
			files  : {
				'<%= globalConfig.scss_sprites %>/__sprites.scss': '<%= globalConfig.scss_sprites %>/*.scss'
			},
			options: {
				useSingleQuotes: false
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass-globbing');
};
