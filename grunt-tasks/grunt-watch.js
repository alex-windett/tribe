module.exports = function(grunt) {

	grunt.config('watch', {
		sass: {
			files: [ '<%= globalConfig.scss %>/**/*.scss' ],
			tasks: ['compass:dev']
		},
		js: {
			files: [
				'<%= globalConfig.js_src %>/**/*.js'
			],
			tasks: ['concat', 'uglify']
		},
		livereload: {
			options: {
				livereload: 35769
			},
			files: ['**/*.html', '**/*.php', '<%= globalConfig.js_src %>/**/*', '<%= globalConfig.css %>/**/*','img/**/*.{png,jpg,jpeg,gif,webp,svg}']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};