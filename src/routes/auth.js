const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../database');
const { connectionException, queryException } = require('../exceptions/database');
const { inputException } = require('../exceptions/input');
const verifyJWT = require('../middlewares/jwt');

function AuthRouter() {
	const router = express();
	router.use(express.json({ limit: '100mb' }));
	router.use(express.urlencoded({ limit: '100mb', extended: true }));

<<<<<<< HEAD
	router.route('/sign-up').post(
		body('name').trim().notEmpty().withMessage('Name cannot be empty!'),
		body('email').trim().notEmpty().withMessage('Email cannot be empty!').bail().normalizeEmail().isEmail().withMessage('You must provide a valid email address!'),
		body('password').trim().notEmpty().withMessage('Password cannot be empty!').bail().isLength({ min: 6, max: 18 }).withMessage('Password must be at least 8 characters and max 18 characters long!'),
		body('phone').trim().notEmpty().withMessage('Phone number cannot be empty!').bail().isLength({ min: 9, max: 9 }).withMessage('Phone number must be at least 8 numbers long!'),
		async (req, res, next) => {
			const errors = validationResult(req);
			if (!errors.isEmpty()) return next(new inputException(errors.array()));
			pool.getConnection(async (error, connection) => {
				if (error) return next(new connectionException());
				const data = {
					name: req.body.name,
					email: req.body.email,
					password: await bcrypt.hash(req.body.password, 10),
					phoneNumber: req.body.phone,
				};
				const query1 = 'SELECT * FROM user WHERE email = ?';
				connection.query(query1, Object.values({ email:req.body.email }), (error, results) => {
					if (error) return next(new queryException(error));
					if (results && results.length) return res.status(200).send({ status: 400, auth: false, path: req.originalUrl, message: 'Email address already registered!', data: [] });
					const query2 = 'INSERT INTO user (name,email,password,phoneNumber) VALUES (?,?,?,?)';
					connection.query(query2, Object.values(data), (error, results) => {
						connection.release();
						if (error) return next(new queryException(error));
						if (results && results.affectedRows === 0) return res.status(200).send({ status: 400, auth: false, path: req.originalUrl, message: 'Unsuccessfully signed up!', data: [] });
						const token = jwt.sign({ id: results.insertId, email: data.email, role: 'User' }, 'DWDM-LP-FLG@2122', { algorithm: 'HS256' }, { expiresIn: 5400000 });
						return res.cookie('token', token, { maxAge: 5400000, expires: new Date(Date.now() + 5400000), httpOnly: true }).status(200).send({ status: 200, auth: true, path: req.originalUrl, message: 'Successfully signed up!', data: token });
					});
				});
=======
	router.route('/sign-up').post(async (req, res, next) => {
		pool.getConnection(async (error, connection) => {
			if (error) console.error(error);
            const data = {
				name: req.body.name,
				email: req.body.email,
				password: await bcrypt.hash(req.body.password, 10),
				phone_number: req.body.phone,
			};
			const query = 'INSERT INTO users (name,email,password,phone_number) VALUES (?,?,?,?)';
			connection.query(query, Object.values(data), async (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (results && !results.length) res.status(200).send({ status: 400, auth: false, message: 'Unsuccessfully signed up!', data: [] });
                const token = await jwt.sign({ email: data.email }, 'FLG-LP@2122', { algorithm: 'HS256' }, { expiresIn: 1800000 })
				res.cookie('token', token, {maxAge: 1800000, expires: new Date(Date.now() + 1800000), httpOnly: true})
                .status(200).send({ status: 200, auth: true, message: 'Successfully signed up!', data: results });
>>>>>>> parent of 766633f (35)
			});
		});

<<<<<<< HEAD
	router.route('/sign-in').post(
		body('email').trim().notEmpty().withMessage('Email cannot be empty!').bail().normalizeEmail().isEmail().withMessage('You must provide a valid email address!'),
		body('password').trim().notEmpty().withMessage('Password cannot be empty!').bail().isLength({ min: 6, max: 18 }).withMessage('Password must be at least 8 characters and max 18 characters long!'),
		async (req, res, next) => {
			pool.getConnection(async (error, connection) => {
				if (error) return next(new connectionException());
				const data = {
					email: req.body.email,
					password: req.body.password,
				};
				const query = 'SELECT * FROM user WHERE email = ?';
				connection.query(query, Object.values(data), async (error, results) => {
					connection.release();
					if (error) return next(new queryException(error));
					if (results && !results.length) return res.status(200).send({ status: 400, auth: false, path: req.originalUrl, message: 'Email address not registered!', data: [] });
					const match = await bcrypt.compare(data.password, results[0].password);
					if(!match) return res.status(200).send({ status: 400, auth: false, path: req.originalUrl, message: 'Email or password are wrong!', data: [] });
					const token = jwt.sign({ id: results[0].iduser, email: data.email, role: results[0].role }, 'DWDM-LP-FLG@2122', { algorithm: 'HS256' }, { expiresIn: 5400000 });
					return res.cookie('token', token, { maxAge: 5400000, expires: new Date(Date.now() + 5400000), httpOnly: true }).status(200).send({ status: 200, auth: true, path: req.originalUrl, message: 'Successfully signed in!', data: token });
				});
			});
		});

	router.route('/sign-out').get(verifyJWT, async (req, res, next) => {
        return res.clearCookie('token').status(200).send({ status: 200, auth: false, message: 'Successfully signed out!', data: [] })
	});

	router.route('/signed').get(verifyJWT, async (req, res, next) => {
		return res.status(200).send({ status: 200, auth: true, message: 'User is currently authenticated!', data: [] })
=======
	router.route('/sign-in').post(async (req, res, next) => {
		pool.getConnection(async (error, connection) => {
			if (error) console.error(error);
			const data = {
				email: req.body.email,
				password: req.body.password,
			};
			const query = 'SELECT * FROM users WHERE email = ?';
			connection.query(query, Object.values(data), async (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (results && !results.length) res.status(200).send({ status: 400, auth: false, message: 'Unsuccessfully signed in!', data: [] });
                const match = await bcrypt.compare(data.password, results.password);
                console.log(match);
                if(!match) res.status(200).send({ status: 400, auth: false, message: 'Email or password are wrong!', data: [] });
                const token = await jwt.sign({ email: data.email }, 'FLG-LP@2122', { algorithm: 'HS256' }, { expiresIn: 1800000 })
				res.cookie('token', token, {maxAge: 1800000, expires: new Date(Date.now() + 1800000), httpOnly: true})
                .status(200).send({ status: 200, auth: true, message: 'Successfully signed in!', data: results });
			});
		});
	});

	router.route('/sign-out').get(async (req, res, next) => {
        res.clearCookie('token').status(200).send({ status: 200, auth: false, message: ''})
	});

	router.route('/signed').get(async (req, res, next) => {
		pool.getConnection((error, connection) => {
			if (error) console.error(error);
			const data = {
				idusers: req.params.id,
			};
			const query = 'DELETE FROM users WHERE idusers = ?';
			connection.query(query, Object.values(data), (error, results) => {
				connection.release();
				if (error) console.error(error);
				if (!results) res.status(200).send({ status: 400, message: 'User unsuccessfully deleted!', data: [] });
				res.status(200).send({ status: 200, message: 'User successfully deleted!', data: results });
			});
		});
>>>>>>> parent of 766633f (35)
	});

	return router;
}

module.exports = AuthRouter;
