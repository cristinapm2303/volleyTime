const BASE_URL = "https://mock.apidog.com/m1/878633-860097-default";

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


  //4. Eliminar evento
fetch(`${BASE_URL}/events/4`), {
    method: "DELETE"
  }
    .then(res => res.json())
    .then(data => {
      console.log("Evento eliminado:");
      console.log(data);
    })
    .catch(err => console.error("Error al eliminar evento:", err));
  
    //5. Eliminar reserva
fetch(`${BASE_URL}/events/5/reservas/3`), {
      method: "DELETE"
    }
      .then(res => res.json())
      .then(data => {
        console.log("Reserva eliminada:");
        console.log(data);
      })
      .catch(err => console.error("Error al eliminar reserva:", err));
    