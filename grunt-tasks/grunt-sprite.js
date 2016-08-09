module.exports = function(grunt) {

	grunt.config('sprite', {

		icon: {
			src: ['<%= globalConfig.img_sprites %>/icn/*.{png,jpg,gif}'],
			dest: '<%= globalConfig.img_sprites %>/sprite-icn.png',
			destCss: '<%= globalConfig.scss %>/sprites/_sprites-icn.scss',
			padding: 10,
			cssVarMap: function (sprite) {
				sprite.name = 'icn-' + sprite.name;
			},
			cssSelector: function (item) {
				item.name = '.icn-' + item.name;
			},
			'engineOpts': {
				'imagemagick': true
			},
			cssFormat: 'scss',
			cssSpritesheetName: 'icon',
			imgPath: '<%= globalConfig.base %>/<%= globalConfig.img_sprites %>/sprite-icn.png?v=<%= globalConfig.timestamp %>'
		}
	});

	grunt.loadNpmTasks('grunt-spritesmith');
};
