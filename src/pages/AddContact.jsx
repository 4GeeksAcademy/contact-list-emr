import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useContactos from "../hooks/useContacts.js";

export const AddContact = () => {
  const { addContacto, editarContacto, getContactos } = useContactos();
  const { id } = useParams();
  const navigate = useNavigate();

  const [contacto, setContacto] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    img: "",
  });


  useEffect(() => {
    if (id) {
      const obtenerContactos = async () => {
        const contactos = await getContactos();
        const contactoEncontrado = contactos.find((contacto) => contacto.id == id);
        if (contactoEncontrado) setContacto(contactoEncontrado);
      };
      obtenerContactos();

    }
  }, [id]);

  const handleChange = (e) => {
    setContacto({
      ...contacto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editarContacto(contacto, id);
    } else {
      addContacto(contacto);
    }
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={contacto.name}
            onChange={handleChange}
            placeholder="Nombre completo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={contacto.email}
            onChange={handleChange}
            placeholder="Introduce email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={contacto.phone}
            onChange={handleChange}
            placeholder="Introduce teléfono"
          />
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={contacto.address}
            onChange={handleChange}
            placeholder="Introduce dirección"
          />
        </div>

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary mt-3">
            {id ? "Editar contacto" : "Añadir contacto"}
          </button>
        </div>
      </form>

      <Link to="/">
        <button className="btn btn-secondary mt-3">Volver a contactos</button>
      </Link>
    </div>
  );
};
