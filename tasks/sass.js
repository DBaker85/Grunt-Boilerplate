module.exports = {
	
		prod: {                            
			options: {
				outputStyle: 'compressed',
				sourceMap: true
			},
			files: {                         
				'public/css/main.css': 'app/sass/main.scss'      

			}
		},

		testStyles: {                            
			options: {
				outputStyle: 'expanded',
				sourceMap: true
			},
			files: {                         
				'app/test/styles/test.css': 'app/sass/test.scss'      

			}
		},
	
}