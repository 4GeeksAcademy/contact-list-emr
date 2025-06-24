import useGlobalReducer from "./useGlobalReducer";

export default function useContactos() {
    const { dispatch } = useGlobalReducer();

    const getContactos = async () => {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/ericamoratilla/contacts");
        const data = await response.json();

        return data.contacts;
    };


    //POSTEO

    const addContacto = async (nuevoContacto) => {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/ericamoratilla/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: nuevoContacto.name,
                email: nuevoContacto.email,
                agenda_slug: "ericamoratilla",
                address: nuevoContacto.address,
                phone: nuevoContacto.phone,
                img: nuevoContacto.img,
            })
        });

        const data = await response.json();
        console.log("Contacto creado:", data);

        return data;
    }

    // MODIFICO
    const editarContacto = async (contactoActualizado) => {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/ericamoratilla/contacts/${contactoActualizado.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: contactoActualizado.name,
                email: contactoActualizado.email,
                address: contactoActualizado.address,
                phone: contactoActualizado.phone, 
                agenda_slug: "ericamoratilla",
                img: contactoActualizado.img,
            })
        });

        const data = await response.json();
        console.log("Contacto actualizado:", data);
        return data;
    }

    // BORRO
    const deleteContacto = async (id) => { 
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/ericamoratilla/contacts/${id}`, {
            method: "DELETE"
        });
        return response
    };

    return { getContactos, addContacto, editarContacto, deleteContacto };
}