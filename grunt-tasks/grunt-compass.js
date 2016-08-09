module.exports = function(grunt) {

	grunt.config('compass', {
		dist: {
			options: {
				config: 'config.rb',
				outputStyle: 'compressed',
				noLineComments: true
			}
		},
		dev: {
			options: {
				config: 'config.rb',
				outputStyle: 'expanded',
				noLineComments: false,
				sourcemap: false
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-compass');
};