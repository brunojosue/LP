const express = require('express');
const pool = require('../database');

function CardsWorkoutRouter() {
	const router = express();
	router.use(express.json({ limit: '100mb' }));
	router.use(express.urlencoded({ limit: '100mb', extended: true }));

	router.route('/').get(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const query = 'SELECT * FROM card_workout';
			connection.query(query, (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ tatus: 404, message: 'Cards workouts unsuccessfully found!', data: [] });
				res.status(200).send({ status: 200, message: 'Cards workouts successfully found!', data: results });
			});
		});
	});

	router.route('/').post(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
				id: null,
				card_idcard: req.body.card_idcard,
				workout_idworkout: req.body.workout_idworkout,
			};
			const query = 'INSERT INTO card_workout VALUES (?,?,?)';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'Card workout unsuccessfully created!', data: [] });
				res.status(200).send({ status: 201, message: 'Card workout successfully created!', data: results });
			});
		});
	});

	router.route('/:id').put(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
				card_idcard: req.body.card_idcard,
				workout_idworkout: req.body.workout_idworkout,
                id: req.params.id,
			};
			const query = 'UPDATE card_workout SET card_idcard = ?, workout_idworkout = ? WHERE id = ?';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'Card workout unsuccessfully updated!', data: [] }); 
				res.status(200).send({ status: 200, message: 'Card workout successfully updated!', data: results }); 
			});
		});
	});

	router.route('/:id').delete(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
				id: req.params.id,
			};
			const query = 'DELETE FROM card_workout WHERE id = ?';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'Card workout unsuccessfully deleted!', data: [] });
				res.status(200).send({ status: 200, message: 'Card workout successfully deleted!', data: results });
			});
		});
	});

	return router;
}

module.exports = CardsWorkoutRouter;
