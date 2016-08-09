module.exports = function(grunt) {

	grunt.config('uglify', {
		options: {
			mangle: true
		},
		vendor: {
			files: {
				'<%= globalConfig.js_min %>/vendor.js': ['<%= globalConfig.js_concat %>/vendor.js']
			}
		},
		all: {
			files: [{
				expand: true,
				cwd: '<%= globalConfig.js_concat %>/',
				src: ['*.js', '**/*.js'],
				dest: '<%= globalConfig.js_min %>/',
				ext: '.js',
				extDot: 'last'
			}],
		},
		pages: {
			files: [{
				expand: true,
				cwd: '<%= globalConfig.js_src %>/pages/',
				src: ['*.js', '**/*.js'],
				dest: '<%= globalConfig.js_min %>/pages/',
				ext: '.js',
				extDot: 'last'
			}],
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};