require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const PORT = process.env.PORT;
const models = require('./models/models')
const app = express();
const cors = require('cors')
const router = require('./routes/index');

app.use(cors())
app.use(express.json())

app.use('/api', router)
const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => console.log(`Сервер запущен на порту: ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start()
