// GET /quizes/author
exports.author = function(req, res){
	res.render('quizes/author', {autor: 'Felipe Martínez Domene'});
};
