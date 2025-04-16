const BASE_URL = "https://mock.apidog.com/m1/878633-860097-default";
const USER_ID = 1;

// 1. Obtener lista de eventos
fetch(`${BASE_URL}/events`)
  .then(res => res.json())
  .then(data => {
    console.log("Lista de eventos:");
    console.log(data);
  })
  .catch(err => console.error("Error al obtener eventos:", err));

// 2. Reservar plaza en evento (usuario 5 en evento 1)
fetch(`${BASE_URL}/events/1/reserve`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ userId: 5 })
})
  .then(res => res.json())
  .then(data => {
    console.log("Resultado de la reserva:");
    console.log(data);
  })
  .catch(err => console.error("Error al reservar:", err));

// 3. Obtener reservas del usuario (por ejemplo, usuario 5)
fetch(`${BASE_URL}/users/5/reservas`)
  .then(res => res.json())
  .then(data => {
    console.log("Reservas del usuario 5:");
    console.log(data);
  })
  .catch(err => console.error("Error al obtener reservas:", err));

// 4. Obtener lista de usuarios
fetch(`${BASE_URL}/users`)
  .then(res => res.json())
  .then(data => {
    console.log("Lista de usuarios:");
    console.log(data);
  })
  .catch(err => console.error("Error al obtener usuarios:", err));

// 5. Obtener usuario por ID
fetch(`${BASE_URL}/users/${USER_ID}`)
  .then(res => res.json())
  .then(data => {
    console.log("Usuario:");
    console.log(data);
  })
  .catch(err => console.error("Error al obtener el usuario:", err));

// 6. Crear nuevo usuario
fetch(`${BASE_URL}/users/new`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "nombre": "Manuel",
    "apellidos": "Guerra Cordón",
    "nombre_usuario": "manugc",
    "correo": "mguerracordon@gmail.com",
    "contrasena": "1234"
  })
})
  .then(res => res.json())
  .then(data => {
    console.log("Usuario creado:");
    console.log(data);
  })
  .catch(err => console.error("Error al crear el usuario:", err));
  
// 7. Editar usuario
fetch(`${BASE_URL}/users/edit/${USER_ID}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "nombre": "Manuel",
    "apellidos": "Guerra Modificado",
    "nombre_usuario": "manugcedit",
    "correo": "mguerracordon@gmail.com",
    "contrasena": "12345"
  })
})
  .then(res => res.json())
  .then(data => {
    console.log("Usuario modificado:");
    console.log(data);
  })
  .catch(err => console.error("Error al modificar el usuario:", err));

// 8. Eliminar usuario
fetch(`${BASE_URL}/users/delete/${USER_ID}`, {
  method: "DELETE"
})
  .then(res => res.json())
  .then(data => {
    console.log("Usuario modificado:");
    console.log(data);
  })
  .catch(err => console.error("Error al modificar el usuario:", err));