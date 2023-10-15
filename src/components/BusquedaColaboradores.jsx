import React, { useState } from "react";

function BusquedaColaboradores({ colaboradores, onResultadoBusqueda }) {
	const [terminoBusqueda, setTerminoBusqueda] = useState("");

	const handleBusqueda = (e) => {
		const busqueda = e.target.value;
		setTerminoBusqueda(busqueda);

		const resultados = colaboradores.filter((colaborador) => {
			const { nombre, correo, edad, cargo, telefono } = colaborador;
			const termino = busqueda.toLowerCase();

			return (
				nombre.toLowerCase().includes(termino) ||
				correo.toLowerCase().includes(termino) ||
				edad.includes(termino) ||
				cargo.toLowerCase().includes(termino) ||
				telefono.includes(termino)
			);
		});

		onResultadoBusqueda(resultados);
	};

	return (
		<div className="busqueda">
			<h1>Buscar Colaboradores</h1>
			<input
				className=""
				type="text"
				placeholder="Buscar colaborador..."
				value={terminoBusqueda}
				onChange={handleBusqueda}
			/>
		</div>
	);
}

export default BusquedaColaboradores;
