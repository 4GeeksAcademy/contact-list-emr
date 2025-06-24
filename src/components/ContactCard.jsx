
import { Link } from 'react-router-dom';

export const ContactCard = ({contacto, onDelete}) => (
    <div className="card mb-3 shadow-sm">
					<div className="row g-0 align-items-center">
						<div className="col-md-2 text-center p-2">
							<img
								src={contacto.img}
								className="img-tarjeta"
								alt="Dr. Zoidberg"
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{contacto.name}</h5>
								<div className="location d-flex align-items-center mb-1">
									<i className="fas fa-map-marker-alt me-2"></i>
									<p className="card-text mb-0">{contacto.address}</p>
								</div>
								<div className="phone d-flex align-items-center mb-1">
									<i className="fas fa-mobile-alt me-2"></i>
									<p className="card-text mb-0">{contacto.phone}</p>
								</div>
								<div className="email d-flex align-items-center mb-1">
									<i className="fas fa-envelope me-2"></i>
									<p className="card-text mb-0">{contacto.email}</p>
								</div>
								<Link to={`/addContact/${contacto.id}`} className="btn btn-warning mt-2">
									<i className="fas fa-edit"></i> Editar
								</Link>
								<button onClick={() => onDelete(contacto.id)}>
									Elimina Contacto
								</button>
							</div>
						</div>
					</div>
				</div>
)

