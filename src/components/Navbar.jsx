import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<button className="btn btn-outline-secondary">Volver al inicio</button>
				</Link>
				<div className="ml-auto">
					<Link to="/AddContact">
						<button className="btn btn-success">Añadir un nuevo contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};