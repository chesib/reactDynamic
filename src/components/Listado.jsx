import React from "react";
import Table from "react-bootstrap/Table";
const ListadoColaboradores = ({ datos }) => {
	console.log(datos);
	return (
		<div>
			<h3>Listado de Colaboradores</h3>
			<Table striped bordered hover variant="light" className="table">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Correo</th>
						<th>Edad</th>
						<th>Cargo</th>
						<th>Teléfono</th>
					</tr>
				</thead>
				<tbody>
					{datos.map((colaborador) => (
						<tr key={colaborador.id}>
							<td>{colaborador.nombre}</td>
							<td>{colaborador.correo}</td>
							<td>{colaborador.edad}</td>
							<td>{colaborador.cargo}</td>
							<td>{colaborador.telefono}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default ListadoColaboradores;
