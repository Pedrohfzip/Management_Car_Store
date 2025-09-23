import React, { useState } from 'react';
// Importe a função de criação de carro da sua API, se existir
import { createCar } from '../../providers/carsProvider';

const initialState = {
	name: '',
	transmission_type: '',
	fuel_type: '',
	color: '',
	license_plate: '',
	doors: '',
	mileage: '',
	image_url: '',
};

function CreateCar() {
	const [form, setForm] = useState(initialState);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState('');
	const [preview, setPreview] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const url = URL.createObjectURL(file);
			setPreview(url);
			setForm((prev) => ({ ...prev, image_url: url }));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setSuccess(false);
		try {
		  await createCar(form);
		  setSuccess(true);
		  setForm(initialState);
		  setPreview('');
		} catch (err) {
		  setError('Erro ao cadastrar carro.');
		}
	};

	return (
		<div style={{ maxWidth: 480, margin: '0 auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', padding: 32 }}>
			<h2 style={{ textAlign: 'center', color: '#2575fc', marginBottom: 24 }}>Cadastrar Carro</h2>
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: 18 }}>
					<label style={{ fontWeight: 500 }}>Imagem do Carro</label>
					<input
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						style={{ display: 'block', marginTop: 8 }}
					/>
					{preview && (
						<img src={preview} alt="Preview" style={{ width: '100%', marginTop: 10, borderRadius: 8, objectFit: 'cover', maxHeight: 180 }} />
					)}
				</div>
				<div style={{ marginBottom: 18 }}>
					<label style={{ fontWeight: 500 }}>Nome</label>
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
						required
						style={inputStyle}
					/>
				</div>
				<div style={{ marginBottom: 18 }}>
					<label style={{ fontWeight: 500 }}>Tipo de Câmbio</label>
					<select
						name="transmission_type"
						value={form.transmission_type}
						onChange={handleChange}
						required
						style={inputStyle}
					>
						<option value="">Selecione</option>
						<option value="Manual">Manual</option>
						<option value="Automático">Automático</option>
						<option value="CVT">CVT</option>
					</select>
				</div>
				<div style={{ marginBottom: 18 }}>
					<label style={{ fontWeight: 500 }}>Tipo de Combustível</label>
					<select
						name="fuel_type"
						value={form.fuel_type}
						onChange={handleChange}
						required
						style={inputStyle}
					>
						<option value="">Selecione</option>
						<option value="Gasolina">Gasolina</option>
						<option value="Álcool">Álcool</option>
						<option value="Diesel">Diesel</option>
						<option value="Flex">Flex</option>
						<option value="Elétrico">Elétrico</option>
					</select>
				</div>
				<div style={{ marginBottom: 18 }}>
					<label style={{ fontWeight: 500 }}>Cor</label>
					<input
						type="text"
						name="color"
						value={form.color}
						onChange={handleChange}
						required
						style={inputStyle}
					/>
				</div>
				<div style={{ marginBottom: 18 }}>
					<label style={{ fontWeight: 500 }}>Placa</label>
					<input
						type="text"
						name="license_plate"
						value={form.license_plate}
						onChange={handleChange}
						required
						style={inputStyle}
					/>
				</div>
				<div style={{ marginBottom: 18 }}>
					<label style={{ fontWeight: 500 }}>Quantidade de Portas</label>
					<input
						type="number"
						name="doors"
						value={form.doors}
						onChange={handleChange}
						min={2}
						max={6}
						required
						style={inputStyle}
					/>
				</div>
				<div style={{ marginBottom: 24 }}>
					<label style={{ fontWeight: 500 }}>Quilometragem</label>
					<input
						type="number"
						name="mileage"
						value={form.mileage}
						onChange={handleChange}
						min={0}
						required
						style={inputStyle}
					/>
				</div>
				<button
					type="submit"
					style={{
						width: '100%',
						padding: '12px',
						borderRadius: 10,
						border: 'none',
						background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
						color: '#fff',
						fontWeight: 'bold',
						fontSize: 17,
						cursor: 'pointer',
						marginBottom: 8,
						boxShadow: '0 2px 8px rgba(106,17,203,0.10)'
					}}
				>
					Cadastrar
				</button>
				{success && <div style={{ color: 'green', marginTop: 8 }}>Carro cadastrado com sucesso!</div>}
				{error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
			</form>
		</div>
	);
}

const inputStyle = {
	width: '100%',
	padding: '10px',
	borderRadius: '8px',
	border: '1.5px solid #6a11cb',
	fontSize: 16,
	marginTop: 4,
	background: '#f9f9f9',
	outline: 'none',
	transition: 'border 0.2s',
};

export default CreateCar;
