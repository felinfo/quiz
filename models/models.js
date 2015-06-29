var path = requiere ('path');

//Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite:
var sequelize = new Sequelize(null, null, null,
	{dialect: "sqlite", storage: "quiz.sqlite"})
	);

// Importar la definicion de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

export.Quiz = Quiz; // exportar definición de tabla Quiz

// sequelize.sync() crea e inicializa tabla de preguntas en BD
sequelize.sync().sucess(function() {
	// sucess(..) ejecuta el manejador una vez creada la tabla
	Quiz.count().sucess(function(count) {
		if(count === 0) { // la tabla de inicializa solo si está vacía
			Quiz.create({ pregunta: 'Capital de Italia',
						  respuesta: 'Roma'

			})
			.sucess(function(){console.log('Base de datos inicializada')})
		};
	});
});
