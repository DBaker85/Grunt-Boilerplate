module.exports = {
	
	js:{
		files: ['app/scripts/**/*.js','app/scripts/*.js'],
		tasks: 'uglify'
	},
	sass:{
		files:'app/sass/**/*.scss',
		tasks: 'sass:prod'
	},
	server:{
		options:{
			spawn: false,
			reload: true,
		},
		files: ['app.js','Gruntfile.js','tasks/*.js'],
		tasks: 'express:dev'
	},
		
}