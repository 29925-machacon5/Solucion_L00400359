function validar() {
  // Obtener los valores de los campos
  var correo = document.getElementById('txtEmail').value;
  var telefono = document.getElementById('txtTelefono').value;

  // Expresión regular para correo electrónico
  var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

  // === Validación de correo electrónico ===
  if (!expresion.test(correo)) {
    alert("El correo electrónico no es válido.");
    return false;
  }

  // === Validación de teléfono (10 dígitos numéricos) ===
  if (telefono.length != 10 || isNaN(telefono)) {
    alert("El teléfono debe contener exactamente 10 dígitos numéricos.");
    return false;
  }

  // Si todo es válido
  alert("Datos ingresados correctamente.");
  checkSubmit();
  return true;
}

function checkSubmit() {
  // Deshabilitar botón y cambiar mensaje
  var boton = document.getElementById("btnEnviar");
  boton.disabled = true;
  boton.value = "Enviando datos ........";

  // Enviar formulario
  boton.form.submit();
}

