import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import useContactos from '../hooks/useContacts.js';



export const Home = () => {

	const { store } = useGlobalReducer()
	const { getContactos} = useContactos();

	useEffect(() => {
		getContactos();
	},[]);

	return (
		<div className="container py-4">
			<div className="card mb-3 shadow-sm">
				<div className="row g-0 align-items-center">
					<div className="col-md-2 text-center p-2">
						<img
							src="https://i.pinimg.com/736x/66/d8/ab/66d8ab7274a4793c0edafb0cc99fc060.jpg"
							className="img-tarjeta"
							alt="Dr. Zoidberg"
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Dr. Zoidberg</h5>
							<div className="location d-flex align-items-center mb-1">
								<i className="fas fa-map-marker-alt me-2"></i>
								<p className="card-text mb-0">Futurama</p>
							</div>
							<div className="phone d-flex align-items-center mb-1">
								<i className="fas fa-mobile-alt me-2"></i>
								<p className="card-text mb-0">34 666 666 666</p>
							</div>
							<div className="email d-flex align-items-center mb-1">
								<i className="fas fa-envelope me-2"></i>
								<p className="card-text mb-0">drzoidberg@futurama.fut</p>
							</div>
							<Link to={`/editContent/1`} className="btn btn-warning mt-2">
								<i className="fas fa-edit"></i> Editar
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="card mb-3 shadow-sm">
				<div className="row g-0 align-items-center">
					<div className="col-md-2 text-center p-2">
						<img
							src="https://avatars.githubusercontent.com/u/10504143?v=4"
							className="img-tarjeta"
							alt="Bender"
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Bender</h5>
							<div className="location d-flex align-items-center mb-1">
								<i className="fas fa-map-marker-alt me-2"></i>
								<p className="card-text mb-0">Futurama</p>
							</div>
							<div className="phone d-flex align-items-center mb-1">
								<i className="fas fa-mobile-alt me-2"></i>
								<p className="card-text mb-0">34 666 666 666</p>
							</div>
							<div className="email d-flex align-items-center mb-1">
								<i className="fas fa-envelope me-2"></i>
								<p className="card-text mb-0">bending@futurama.fut</p>
							</div>
							<Link to={`/editContent/2`} className="btn btn-warning mt-2">
								<i className="fas fa-edit"></i> Editar
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="card mb-3 shadow-sm">
				<div className="row g-0 align-items-center">
					<div className="col-md-2 text-center p-2">
						<img
							src="https://i.pinimg.com/736x/cc/5c/39/cc5c39083aecc2c223c821d5f97bba15.jpg"
							className="img-tarjeta"
							alt="Homer"
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Homer Simpson</h5>
							<div className="location d-flex align-items-center mb-1">
								<i className="fas fa-map-marker-alt me-2"></i>
								<p className="card-text mb-0">Springfield</p>
							</div>
							<div className="phone d-flex align-items-center mb-1">
								<i className="fas fa-mobile-alt me-2"></i>
								<p className="card-text mb-0">34 666 666 666</p>
							</div>
							<div className="email d-flex align-items-center mb-1">
								<i className="fas fa-envelope me-2"></i>
								<p className="card-text mb-0">homero@simpson.com</p>
							</div>
							<Link to={`/editContent/3`} className="btn btn-warning mt-2">
								<i className="fas fa-edit"></i> Editar
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>








	);
}; 