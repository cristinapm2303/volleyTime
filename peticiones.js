
const BASE_URL = "https://mock.apidog.com/m1/878633-860097-default";
const USER_ID = 1;

async function runAll() {
  try {

    //USUARIOS
    // 1. Obtener lista de usuarios
    let res = await fetch(`${BASE_URL}/users`);
    let data = await res.json();
    console.log("Lista de usuarios:");
    console.log(data);

    // 2. Obtener usuario por ID
    res = await fetch(`${BASE_URL}/users/${USER_ID}`);
    data = await res.json();
    console.log("Usuario:");
    console.log(data);

    // 3. Crear nuevo usuario
    res = await fetch(`${BASE_URL}/users/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: "Manuel",
        apellidos: "Guerra Cordón",
        nombre_usuario: "manugc",
        correo: "mguerracordon@gmail.com",
        contrasena: "1234"
      })
    });
    data = await res.json();
    console.log("Usuario creado:");
    console.log(data);

    // 4. Editar usuario
    res = await fetch(`${BASE_URL}/users/edit/${USER_ID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: "Manuel",
        apellidos: "Guerra Modificado",
        nombre_usuario: "manugcedit",
        correo: "mguerracordon@gmail.com",
        contrasena: "12345"
      })
    });
    data = await res.json();
    console.log("Usuario modificado:");
    console.log(data);

    // 5. Eliminar usuario
    res = await fetch(`${BASE_URL}/users/delete/${USER_ID}`, {
      method: "DELETE"
    });
    data = await res.json();
    console.log("Usuario eliminado:");
    console.log(data);


    //EVENTOS
    // 6. Obtener lista de eventos
    res = await fetch(`${BASE_URL}/events`);
    data = await res.json();
    console.log("Lista de eventos:");
    console.log(data);

    // 7. Crear nuevo evento
    res = await fetch(`${BASE_URL}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fecha: "2025-05-05",
        hora: "17:00",
        lugar: "Playa de la Malagueta",
        plazasMaximas: 8,
        apuntados: [],
        suplentes: []
      })
    });
    data = await res.json();
    console.log("Evento creado:");
    console.log(data);

    // 8. Editar un evento existente (por ejemplo evento con id = 3)
    res = await fetch(`${BASE_URL}/events/3`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fecha: "2025-05-06",
        hora: "18:30",
        lugar: "Playa del Palo",
        plazasMaximas: 10,
        apuntados: [1, 2],
        suplentes: [3]
      })
    });
    data = await res.json();
    console.log("Evento 3 modificado:");
    console.log(data);

    // 9. Eliminar un evento (por ejemplo evento con id = 4)
    res = await fetch(`${BASE_URL}/events/4`, {
      method: "DELETE"
    });
    data = await res.json();
    console.log("Evento 4 eliminado:");
    console.log(data);


    //RESERVAS
    // 10. Obtener reservas de un usuario
    // Obtener reservas del usuario desde los eventos
    fetch(`${BASE_URL}/reservas/${USER_ID}`)
      .then(res => res.json())
      .then(data => {
        console.log(`Reservas del usuario ${USER_ID}:`);
        console.log(data);
      })
      .catch(err => console.error("Error al obtener reservas:", err));


    // 11. Reservar plaza en un evento (usuario 1 en evento 1)
    res = await fetch(`${BASE_URL}/events/1/reserve`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: USER_ID })
    });
    data = await res.json();
    console.log(`Reserva evento 1 por usuario ${USER_ID}:`);
    console.log(data);

    // 12. Eliminar reserva de un usuario en un evento
    res = await fetch(
      `${BASE_URL}/events/1/reservas/${USER_ID}`,
      { method: "DELETE" }
    );
    data = await res.json();
    console.log(`Reserva de usuario ${USER_ID} en evento 1 eliminada:`);
    console.log(data);

  } catch (err) {
    console.error("Error en la secuencia de peticiones:", err);
  }
}

runAll();
