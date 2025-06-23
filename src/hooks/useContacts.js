import useGlobalReducer from "./useGlobalReducer";

export default function useContactos() {
    const { dispatch } = useGlobalReducer();

    const getContactos = async () => {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/ericamoratilla/contacts");
        const data = await response.json();

        dispatch({
            type: "actualizar_contactos",
            payload: { arrayDeContactos: data.contacts || [] }
        });

        console.log("Contactos cargados:", data.contacts);
    };

    //POSTEO

    const addContacto = async (nuevoContacto) => {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/ericamoratilla", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                full_name: nuevoContacto.full_name,
                email: nuevoContacto.email,
                agenda_slug: "ericamoratilla",
                address: nuevoContacto.address,
                phone: nuevoContacto.phone
            })
        });

        const data = await response.json();
        console.log("Contacto creado:", data);

        getContactos();
    }

    // MODIFICO
    const editarContacto = async (contactoActualizado) => {
        const response = await fetch(`https://playground.4geeks.com/contact/contactos/${contactoActualizado.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                full_name: contactoActualizado.full_name,
                email: contactoActualizado.email,
                address: contactoActualizado.address,
                phone: contactoActualizado.phone,  // Corregido: estaba usando address
                agenda_slug: "ericamoratilla"
            })
        });

        const data = await response.json();
        console.log("Contacto actualizado:", data);
        getContactos();
    }

    // BORRO
    const deleteContacto = async (id) => {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/ericamoratilla/contacts/${id}`, {
            method: "DELETE"
        });

        const data = await response.json();
        console.log(`Contacto con ID ${id} eliminado:`, data);
        getContactos();
    };

    return { getContactos, addContacto, editarContacto, deleteContacto };
}