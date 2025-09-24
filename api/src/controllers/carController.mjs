import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const db = require('../../models/index.js');


const carController = {
	create: async (req, res) => {
		try {
			const { name, transmission_type, fuel_type, color, license_plate, doors, mileage } = req.body;
			let image_url = null;
			if (req.file) {
				// Caminho relativo para servir a imagem
				image_url = `/uploads/${req.file.filename}`;
			}
			const newCar = await db.Car.create({
				name,
				transmission_type,
				fuel_type,
				color,
				license_plate,
				doors,
				mileage,
				image_url
			});
			res.status(201).json(newCar);
		} catch (error) {
			res.status(500).json({ message: 'Erro ao criar carro', error: error.message });
		}
	},

	getAll: async (req, res) => {
		try {
			const cars = await db.Car.findAll();
			res.status(200).json(cars);
		} catch (error) {
			res.status(500).json({ message: 'Erro ao buscar carros', error: error.message });
		}
	}
};

export { carController };
