import React from 'react';


class Saludo extends React.Component {

	render() {
		return(
			<p>Hola {this.props.nombre}! Esperamos que tengas una excelente navegación.</p>
		);
	}

}

export default Saludo;