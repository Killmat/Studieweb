var express    = require('express');
var fs         = require('fs');
var marked     = require('marked');


var apiRouter = express.Router();

// serve the markdown files at '/' + the name of the file without it's extension.
markdownFolder = './markdown/';

apiRouter.get('/:markdown_file_noext', function(req, res) {
		fs.readdir(markdownFolder, function(err, markdown) {
			if (err) throw err;
			markdown.forEach(function(file) {
			fs.readFile(markdownFolder + file, 'utf8', function(err, file_content) {
				if (err) throw err;
				fileNoExtension = file.slice(0, file.indexOf('.'));

				if (req.params.markdown_file_noext == fileNoExtension) {
					res.json({ 
						'title': fileNoExtension,
						'markdown': marked(file_content)
					});
				};
			});
		});
	});
});


module.exports = apiRouter;

