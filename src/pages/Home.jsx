import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import { useEffect, useState } from "react";
import useContactos from '../hooks/useContacts.js';
import { ContactCard } from "../components/ContactCard.jsx";



export const Home = () => {

	const { store } = useGlobalReducer()
	const { getContactos, deleteContacto } = useContactos();

	const [contactos, setContactos] = useState([])

	const obtenerContactos = async () => {
		const contactos = await getContactos()
		setContactos(contactos);
	}

	useEffect(() => {
		obtenerContactos();
	}, []);

	const handleDeleteClick = (id) => {
		deleteContacto(id);
	}

	return (
		contactos.map((contacto, key) => {
			return (
				<ContactCard contacto={contacto} key={key} onDelete={handleDeleteClick}/>
			)
		}))
}