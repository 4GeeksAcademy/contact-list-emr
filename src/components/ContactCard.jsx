
import { Link } from 'react-router-dom';

export const ContactCard = ({ contacto, onDelete }) => (
	<div className="card mb-3 shadow-sm">
		<div className="row g-0 align-items-center">
			<div className="col-md-2 text-center p-2">
				<img
					src="https://static.wikia.nocookie.net/lossimpson/images/1/17/Zoidberg.png/revision/latest/scale-to-width-down/250?cb=20120817130736&path-prefix=es"
					className="img-tarjeta"
					alt="Imagen"
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
					<div className="d-flex justify-content-end gap-2 mt-3">
					<Link to={`/addContact/${contacto.id}`} className="btn btn-warning mt-2">
						<i className="fas fa-edit"></i> Editar
					</Link>
					<button onClick={() => {
						if (window.confirm(`¿Deseas eliminar a ${contacto.name}?`))
							onDelete(contacto.id);
					}
						}
					className='btn btn-danger mt-2'
					>
					<i className='fas fa-trash'></i> Eliminar
				</button>
				</div>
			</div>
		</div>
	</div>
	</div >
)

