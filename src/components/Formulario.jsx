import React, { useState } from "react";
import Alert from "./Alert.jsx";

function FormularioAgregarColaborador({ onAgregarColaborador }) {
	const [nuevoColaborador, setNuevoColaborador] = useState({
		nombre: "",
		correo: "",
		edad: "",
		cargo: "",
		telefono: "",
	});
	const [alerta, setAlerta] = useState(null);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setNuevoColaborador({
			...nuevoColaborador,
			[name]: value,
		});
	};

	const handleAgregarColaborador = () => {
		if (
			nuevoColaborador.nombre &&
			nuevoColaborador.correo &&
			nuevoColaborador.edad &&
			nuevoColaborador.cargo &&
			nuevoColaborador.telefono
		) {
			const nuevoColaboradorConId = {
				...nuevoColaborador,
				id: Date.now().toString(), // Genera una clave única basada en Date.now()
			};

			onAgregarColaborador(nuevoColaboradorConId);
			setNuevoColaborador({
				nombre: "",
				correo: "",
				edad: "",
				cargo: "",
				telefono: "",
			});
			// Mostrar una alerta de éxito
			setAlerta({
				mensaje: "El colaborador fue agregado exitosamente.",
				tipo: "success",
			});
		} else {
			// Mostrar una alerta de campos vacíos
			setAlerta({
				mensaje: "Por favor, complete todos los campos.",
				tipo: "error",
			});
		}
	};
	return (
		<div className="form-container">
			<h2>Agregar Colaborador</h2>
			<form>
				<div>
					<label>Nombre:</label>
					<input
						type="text"
						name="nombre"
						value={nuevoColaborador.nombre}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Correo:</label>
					<input
						type="text"
						name="correo"
						value={nuevoColaborador.correo}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Edad:</label>
					<input
						type="number"
						name="edad"
						value={nuevoColaborador.edad}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Cargo:</label>
					<input
						type="text"
						name="cargo"
						value={nuevoColaborador.cargo}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Teléfono:</label>
					<input
						type="text"
						name="telefono"
						value={nuevoColaborador.telefono}
						onChange={handleInputChange}
					/>
				</div>
				<button type="button" onClick={handleAgregarColaborador}>
					Agregar Colaborador
				</button>
				{alerta && (
					<Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />
				)}
			</form>
		</div>
	);
}

export default FormularioAgregarColaborador;
