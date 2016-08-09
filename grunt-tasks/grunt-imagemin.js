module.exports = function(grunt) {

	grunt.config('imagemin', {
		png: {
			options: {
				optimizationLevel: 5
			},
			files: [{
				expand: true,
				cwd: '<%= globalConfig.img_src %>',
				src: ['**/*.png'],
				dest: '<%= globalConfig.img_min %>',
				ext: '.png'
			}]
		},
		jpg: {
			options: {
				progressive: true
			},
			files: [{
				expand: true,
				cwd: '<%= globalConfig.img_src %>',
				src: ['**/*.jpg'],
				dest: '<%= globalConfig.img_min %>',
				ext: '.jpg'
			}]
		},
		jpeg: {
			options: {
				progressive: true
			},
			files: [{
				expand: true,
				cwd: '<%= globalConfig.img_src %>',
				src: ['**/*.jpeg'],
				dest: '<%= globalConfig.img_min %>',
				ext: '.jpeg'
			}]
		},
		gif: {
			options: {
				interlaced: false
			},
			files: [{
				expand: true,
				cwd: '<%= globalConfig.img_src %>',
				src: ['**/*.gif'],
				dest: '<%= globalConfig.img_min %>',
				ext: '.gif'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
};