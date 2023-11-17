require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const PORT = process.env.PORT;
const models = require('./models/models')
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	res.status(200).json({message: 'Working!'})
})
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
