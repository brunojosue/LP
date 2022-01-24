const express = require('express');
const pool = require('../database');

function ExerciseWorkoutRouter() {
	const router = express();
	router.use(express.json({ limit: '100mb' }));
	router.use(express.urlencoded({ limit: '100mb', extended: true }));

	router.route('/').get(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const query = 'SELECT * FROM exercice_has_workout';
			connection.query(query, (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ tatus: 404, message: 'Exercise workouts unsuccessfully found!', data: [] });
				res.status(200).send({ status: 200, message: 'Exercise workouts successfully found!', data: results });
			});
		});
	});

	router.route('/').post(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
				exercice_idExercice: req.body.exercice_idExercice,
				workout_idworkout: req.body.workout_idworkout,
				Nipe: req.body.Nipe,
			};
			const query = 'INSERT INTO exercice_has_workout VALUES (?,?,?)';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'Exercise workout unsuccessfully created!', data: [] });
				res.status(200).send({ status: 201, message: 'Exercise workout successfully created!', data: results });
			});
		});
	});

	router.route('/:id_exercise/:id_workout').put(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
               /* exercice_idExercice: req.body.exercice_idexercice,
				workout_idworkout: req.body.workout_idworkout,*/
				Nipe: req.body.Nipe,
                exercice_idExercice: req.params.id_exercise,
                workout_idworkout: req.params.id_workout,
			};
			const query = 'UPDATE exercice_has_workout SET Nipe = ? WHERE exercice_idExercice = ? AND workout_idworkout = ?';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'Exercise workout unsuccessfully updated!', data: [] }); 
				res.status(200).send({ status: 200, message: 'Exercise workout successfully updated!', data: results }); 
			});
		});
	});

	router.route('/:id_exercise/:id_workout').delete(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
				exercice_idExercice: req.params.id_exercise,
                workout_idworkout: req.params.id_workout,
			};
			const query = 'DELETE FROM exercice_has_workout WHERE exercice_idExercice = ? AND workout_idworkout = ?';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'Exercise workout unsuccessfully deleted!', data: [] });
				res.status(200).send({ status: 200, message: 'Exercise workout successfully deleted!', data: results });
			});
		});
	});

	return router;
}

module.exports = ExerciseWorkoutRouter;
