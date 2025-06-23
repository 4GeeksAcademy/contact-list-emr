import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import useContactos from "../hooks/useContacts";

export const EditContent = () => {
  const { id } = useParams();
  const { store } = useGlobalReducer();
  const { editarContacto } = useContactos();

  const [contacto, setContacto] = useState({
    id: "",
    full_name: "",
    email: "",
    phone: "",
    address: "",
    img: ""
  });

  // Contactos fijos
  const contactosFijos = [
    {
      full_name: "Dr. Zoidberg",
      email: "drzoidberg@futurama.fut",
      phone: "34 666 666 666",
      address: "Futurama"
    },
    {
      full_name: "Bender",
      email: "bending@futurama.fut",
      phone: "34 666 666 666",
      address: "Futurama"
    },
    {
      full_name: "Homer Simpson",
      email: "homero@simpson.com",
      phone: "34 666 666 666",
      address: "Springfield"
    }
  ];

  const subirContactosFijos = async () => {
    try {
      const response = await fetch("https://playground.4geeks.com/contact/agendas/ericamoratilla/contacts");
      const data = await response.json();
      const existentes = data.contacts || [];

      for (const contacto of contactosFijos) {
        const yaExiste = existentes.some(
          c => c.full_name === contacto.full_name || c.email === contacto.email
        );

        if (!yaExiste) {
          await fetch("https://playground.4geeks.com/contact/agendas/ericamoratilla/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...contacto, agenda_slug: "ericamoratilla" })
          });
        }
      }
    } catch (error) {
      console.error("Error al subir contactos fijos:", error);
    }
  };


  useEffect(() => {
    subirContactosFijos();
  }, []);


  useEffect(() => {
    const contactoAPI = store.contactos.find(c => c.id === Number(id));

    if (contactoAPI) {
      setContacto({
        id: contactoEncontrado.id,
        full_name: contactoEncontrado.full_name,
        email: contactoEncontrado.email,
        phone: contactoEncontrado.phone,
        address: contactoEncontrado.address,
        img: contactoEncontrado.img || ""
      });
    }
  }, [id, store.contactos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContacto({
      ...contacto,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    editarContacto({
      id: contacto.id,
      full_name: contacto.full_name,
      email: contacto.email,
      phone: contacto.phone,
      address: contacto.address,
      agenda_slug: "ericamoratilla"
    });

    alert(`Has editado a: ${contacto.full_name}`);
  };

  return (
    <div className="container py-4">
      <h1>Editar Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            name="full_name"
            value={contacto.full_name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={contacto.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label>Teléfono</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={contacto.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label>Dirección</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={contacto.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label>URL de la Imagen</label>
          <input
            type="url"
            className="form-control"
            name="img"
            value={contacto.img}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-end gap-2 mt-3">
          <Link to="/" className="btn btn-secondary">
            Cancelar
          </Link>
          <button type="submit" className="btn btn-primary">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};