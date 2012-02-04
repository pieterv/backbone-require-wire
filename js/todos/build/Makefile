build:
	@echo 'Optimizing...'
	@rm -r ../build
	@mkdir ../build
	@node ../../_libs/rjs/r.js -o build.json
install:
	@echo 'Installing...'
	@echo 'Note: Node.js and NPM need to be installed for this to work'
	sudo npm install -g uglify-js
	#sudo npm install -g requirejs