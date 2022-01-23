const express = require('express');
const pool = require('../database');

function HistoryRouter() {
	const router = express();
	router.use(express.json({ limit: '100mb' }));
	router.use(express.urlencoded({ limit: '100mb', extended: true }));

	router.route('/').get(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const query = 'SELECT * FROM history';
			connection.query(query, (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ tatus: 404, message: 'History unsuccessfully found!', data: [] });
				res.status(200).send({ status: 200, message: 'History successfully found!', data: results });
			});
		});
	});

	router.route('/').post(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
				workout_idworkout: req.body.workout_idworkout,
                users_idusers: req.body.users_idusers,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
				breakTime: req.body.breakTime,
			};
			const query = 'INSERT INTO history VALUES (?,?,?,?,?)';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'History unsuccessfully created!', data: [] });
				res.status(200).send({ status: 201, message: 'History successfully created!', data: results });
			});
		});
	});

	router.route('/:id_workout/:id_user').put(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
               /* exercice_idExercice: req.body.exercice_idexercice,
				workout_idworkout: req.body.workout_idworkout,*/
				startDate: req.body.startDate,
                endDate: req.body.endDate,
                breakTime: req.body.breakTime,
                workout_idworkout: req.params.id_workout,
                users_idusers: req.params.id_user,
			};
			const query = 'UPDATE history SET startDate = ?, endDate = ?, breakTime = ? WHERE workout_idworkout = ? AND users_idusers = ?';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'History unsuccessfully updated!', data: [] }); 
				res.status(200).send({ status: 200, message: 'History successfully updated!', data: results }); 
			});
		});
	});

	router.route('/:id_workout/:id_user').delete(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
				workout_idworkout: req.params.id_workout,
                users_idusers: req.params.id_user,
			};
			const query = 'DELETE FROM history WHERE workout_idworkout = ? AND users_idusers = ?';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'History unsuccessfully deleted!', data: [] });
				res.status(200).send({ status: 200, message: 'History successfully deleted!', data: results });
			});
		});
	});

	return router;
}

module.exports = HistoryRouter;
