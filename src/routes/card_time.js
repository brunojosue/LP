const express = require('express');
const pool = require('../database');

function CardTimeRouter() {
	const router = express();
	router.use(express.json({ limit: '100mb' }));
	router.use(express.urlencoded({ limit: '100mb', extended: true }));

	router.route('/').get(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const query = 'SELECT * FROM card_time';
			connection.query(query, (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ tatus: 404, message: 'Card time unsuccessfully found!', data: [] });
				res.status(200).send({ status: 200, message: 'Card time successfully found!', data: results });
			});
		});
	});

	router.route('/').post(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
				card_idcard: req.body.card_idcard,
                history_workout_idworkout: req.body.history_workout_idworkout,
                history_users_idusers: req.body.history_users_idusers,
                timePerCard: req.body.timePerCard
			};
			const query = 'INSERT INTO card_time VALUES (?,?,?,?)';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'Card time unsuccessfully created!', data: [] });
				res.status(200).send({ status: 201, message: 'Card time successfully created!', data: results });
			});
		});
	});

	router.route('/:id_card/:id_workout/:id_user').put(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
               /* exercice_idExercice: req.body.exercice_idexercice,
				workout_idworkout: req.body.workout_idworkout,*/
				timePerCard: req.body.timePerCard,
                card_idcard: req.params.id_card,
                history_workout_idworkout: req.params.id_workout,
                history_users_idusers: req.params.id_user,
			};
			const query = 'UPDATE card_time SET timePerCard = ? WHERE card_idcard = ? AND history_workout_idworkout = ? AND history_users_idusers = ?';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'Card time unsuccessfully updated!', data: [] }); 
				res.status(200).send({ status: 200, message: 'Card time successfully updated!', data: results }); 
			});
		});
	});

	router.route('/:id_card/:id_workout/:id_user').delete(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
                card_idcard: req.params.id_card,
				history_workout_idworkout: req.params.id_workout,
                history_users_idusers: req.params.id_user,
			};
			const query = 'DELETE FROM card_time WHERE card_idcard = ? AND history_workout_idworkout = ? AND history_users_idusers = ?';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'Card time unsuccessfully deleted!', data: [] });
				res.status(200).send({ status: 200, message: 'Card time successfully deleted!', data: results });
			});
		});
	});

	return router;
}

module.exports = CardTimeRouter;
