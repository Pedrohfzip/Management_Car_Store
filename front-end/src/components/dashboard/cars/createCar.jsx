import React, { useState } from 'react';
import { createCar } from '../../../providers/carsProvider';
import styles from '../../../styles/CreateCar.module.css';


const initialState = {
  name: '',
  transmission_type: '',
  fuel_type: '',
  color: '',
  license_plate: '',
  doors: '',
  mileage: '',
};

function CreateCar() {
	const [form, setForm] = useState(initialState);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState('');
	const [preview, setPreview] = useState('');
	const [imageFile, setImageFile] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};


	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImageFile(file);
			setPreview(URL.createObjectURL(file));
		}
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		if (!imageFile) {
			setError('Selecione uma imagem.');
			return;
		}
		const formData = new FormData();
		Object.entries(form).forEach(([key, value]) => {
			formData.append(key, value);
		});
		formData.append('image', imageFile);
		try {
			await createCar(formData);
			setSuccess(true);
			setForm(initialState);
			setImageFile(null);
			setPreview('');
		} catch (err) {
			setError('Erro ao cadastrar carro.');
		}
	};


	  return (
	    <div className={styles.container}>
	      <h2 className={styles.title}>Cadastrar Carro</h2>
	      <form onSubmit={handleSubmit}>
	        <div className={styles.formGroup}>
	          <label className={styles.label}>Imagem do Carro</label>
	          <input
	            type="file"
	            accept="image/*"
	            onChange={handleImageChange}
	            style={{ display: 'block', marginTop: 8 }}
	          />
	          {preview && (
	            <img src={preview} alt="Preview" className={styles.imagePreview} />
	          )}
	        </div>
	        <div className={styles.formGroup}>
	          <label className={styles.label}>Nome</label>
	          <input
	            type="text"
	            name="name"
	            value={form.name}
	            onChange={handleChange}
	            required
	            className={styles.input}
	          />
	        </div>
	        <div className={styles.formGroup}>
	          <label className={styles.label}>Tipo de Câmbio</label>
	          <select
	            name="transmission_type"
	            value={form.transmission_type}
	            onChange={handleChange}
	            required
	            className={styles.select}
	          >
	            <option value="">Selecione</option>
	            <option value="Manual">Manual</option>
	            <option value="Automático">Automático</option>
	            <option value="CVT">CVT</option>
	          </select>
	        </div>
	        <div className={styles.formGroup}>
	          <label className={styles.label}>Tipo de Combustível</label>
	          <select
	            name="fuel_type"
	            value={form.fuel_type}
	            onChange={handleChange}
	            required
	            className={styles.select}
	          >
	            <option value="">Selecione</option>
	            <option value="Gasolina">Gasolina</option>
	            <option value="Álcool">Álcool</option>
	            <option value="Diesel">Diesel</option>
	            <option value="Flex">Flex</option>
	            <option value="Elétrico">Elétrico</option>
	          </select>
	        </div>
	        <div className={styles.formGroup}>
	          <label className={styles.label}>Cor</label>
	          <input
	            type="text"
	            name="color"
	            value={form.color}
	            onChange={handleChange}
	            required
	            className={styles.input}
	          />
	        </div>
	        <div className={styles.formGroup}>
	          <label className={styles.label}>Placa</label>
	          <input
	            type="text"
	            name="license_plate"
	            value={form.license_plate}
	            onChange={handleChange}
	            required
	            className={styles.input}
	          />
	        </div>
	        <div className={styles.formGroup}>
	          <label className={styles.label}>Quantidade de Portas</label>
	          <input
	            type="number"
	            name="doors"
	            value={form.doors}
	            onChange={handleChange}
	            min={2}
	            max={6}
	            required
	            className={styles.input}
	          />
	        </div>
	        <div className={styles.formGroup}>
	          <label className={styles.label}>Quilometragem</label>
	          <input
	            type="number"
	            name="mileage"
	            value={form.mileage}
	            onChange={handleChange}
	            min={0}
	            required
	            className={styles.input}
	          />
	        </div>
	        <button
	          type="submit"
	          className={styles.button}
	        >
	          Cadastrar
	        </button>
	        {success && <div className={styles.success}>Carro cadastrado com sucesso!</div>}
	        {error && <div className={styles.error}>{error}</div>}
	      </form>
	    </div>
	  );
}



export default CreateCar;
