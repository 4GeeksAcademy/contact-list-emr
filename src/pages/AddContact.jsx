// Import necessary components from react-router-dom and other parts of the application.
import { Link, Navigate, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useState } from "react";

export const AddContact = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  const [nombre, setNombre] = useState ("");
  const [email, setEmail] = useState ("");
  const [telefono, setTelefono] = useState ("");
  const [direccion, setDireccion] = useState ("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoContacto = {
      nombre,
      email,
      telefono,
      direccion,
      img:"https://avatars.githubusercontent.com/u/10504143?v=4"
    };

    console.log("Nuevo contacto creado:", nuevoContacto);

    const nuevosContactos= [...store.contactos, nuevoContacto];

    console.log("Todos los contactos (incluyendo el nuevo;", nuevosContactos)

    dispatch({
      type:"actualizar_contactos",
      payload:{
        arrayDeContactos: nuevosContactos
      }
    });

    console.log("Store actualizado:", {
      ...store,
      contactos: nuevosContactos
    });

  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre completo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
             value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduce email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Teléfono</label>
          <input
            type="phone"
            className="form-control"
            id="phone"
             value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Introduce teléfono"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Dirección</label>
          <input
            type="address"
            className="form-control"
            id="address"
             value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            placeholder="Introduce dirección"
          />
        </div>

        <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary mt-3">Añadir contacto</button>
        </div>
      </form>

      <Link to="/">
        <button className="btn btn-primary mt-3">Volver a contactos</button>
      </Link>
    </div>
  );
};
