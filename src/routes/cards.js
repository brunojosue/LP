const express = require('express');
const pool = require('../database');

function CardsRouter() {
	const router = express();
	router.use(express.json({ limit: '100mb' }));
	router.use(express.urlencoded({ limit: '100mb', extended: true }));

	router.route('/').get(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const query = 'SELECT * FROM card';
			connection.query(query, (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ tatus: 404, message: 'Cards unsuccessfully found!', data: [] });
				res.status(200).send({ status: 200, message: 'Cards successfully found!', data: results });
			});
		});
	});

	router.route('/').post(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
				idcard: null,
				value: req.body.value,
				description: req.body.description,
                imagepath: null,
                deck_iddeck: req.body.deck_iddeck,
			};
			const query = 'INSERT INTO card VALUES (?,?,?,?,?)';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'Card unsuccessfully created!', data: [] });
				res.status(200).send({ status: 201, message: 'Card successfully created!', data: results });
			});
		});
	});

	router.route('/:id').put(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
				value: req.body.value,
				description: req.body.description,
                imagepath: null,
                deck_iddeck: req.body.deck_iddeck,
                idcard: req.params.id,
			};
			const query = 'UPDATE card SET value = ?, description = ?, imagepath = ?, deck_iddeck = ? WHERE idcard = ?';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'Card unsuccessfully updated!', data: [] }); 
				res.status(200).send({ status: 200, message: 'Card successfully updated!', data: results }); 
			});
		});
	});

	router.route('/:id').delete(async (req, res, next) => {
		pool.getConnection(function (error, connection) {
			if (error) console.error(error);
			const data = {
				idcard: req.params.id,
			};
			const query = 'DELETE FROM card WHERE idcard = ?';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'Card unsuccessfully deleted!', data: [] });
				res.status(200).send({ status: 200, message: 'Card successfully deleted!', data: results });
			});
		});
	});

	return router;
}

module.exports = CardsRouter;
