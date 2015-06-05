module.exports = {
  options: {
				sourceMap: true,
			},
			js: {
				files: {
					'public/scripts/all.min.js': [
					'app/scripts/*.js',
					'app/scripts/**/*.js',
					
					]
				}
			}
};