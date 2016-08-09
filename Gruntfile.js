module.exports = function (grunt) {

	var globalConfig = {
		project		: './',
		assets		: '<%= globalConfig.project %>/assets',

		css			: '<%= globalConfig.assets %>/css/src',
		css_min		: '<%= globalConfig.assets %>/css/min',
		scss		: '<%= globalConfig.assets %>/scss',
		scss_sprites: '<%= globalConfig.scss %>/sprites',
		img			: '<%= globalConfig.assets %>/img',

		img_src 	: '<%= globalConfig.img %>/src',
		img_sprites : '<%= globalConfig.img %>/sprites',

		js			: '<%= globalConfig.assets %>/js',
		js_src		: '<%= globalConfig.js %>/src',
		js_concat	: '<%= globalConfig.js %>/concat',
		js_min		: '<%= globalConfig.js %>/min'
	};

	grunt.initConfig({
		pkg          : grunt.file.readJSON('package.json'),
		globalConfig : globalConfig
	});

	// Load tasks
	grunt.loadTasks('grunt-tasks');
	grunt.loadNpmTasks('grunt-newer');

	// Register tasks
	grunt.registerTask('common1', [
		'sprite',
		'sass_globbing'
	]);
	grunt.registerTask('common2', [
		'concat',
		'uglify'
	]);
	grunt.registerTask('default', [
		'common1',
		'compass:dist',
		'common2',
		'newer:cssmin',
		'newer:imagemin',
		'replace:images'
	]);
	grunt.registerTask('dev', [
		'common1',
		'compass:dev',
		'common2',
		'watch'
	]);
};
