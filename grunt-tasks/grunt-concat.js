module.exports = function(grunt) {

	grunt.config('concat', {
		dist: {
			files: {
				'assets/js/concat/vendor.js': [
					'<%= globalConfig.bower %>/fastclick/lib/fastclick.js',
					'<%= globalConfig.bower %>/foundation-sites/js/foundation.util.triggers.js',
					'<%= globalConfig.bower %>/foundation-sites/js/foundation.util.mediaQuery.js',
					'<%= globalConfig.bower %>/jquery-hoverIntent/jquery.hoverIntent.js',
					'<%= globalConfig.bower %>/jqueryrotate/jQueryRotate.js',
					'<%= globalConfig.bower %>/slick-carousel/slick/slick.min.js',
					'<%= globalConfig.bower %>/jquery-touchswipe/jquery.touchSwipe.min.js'
				],
				'<%= globalConfig.js_concat %>/app.js': [
					'<%= globalConfig.js_src %>/functions/*.js',
					'<%= globalConfig.js_src %>/doc-ready.js'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};
