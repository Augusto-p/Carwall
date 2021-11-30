function Send() {
    nombre = document.getElementsByName('name')[0].value
    correo = document.getElementsByName('mail')[0].value
    asunto = document.getElementsByName('asunto')[0].value
    msg = document.getElementsByName('msg')[0].value

    texto = `De: ${nombre} (${correo})  Asunto: ${asunto}    Mensage: ${msg}`
    Email.send({
        SecureToken: "",
        To: 'carwallcontacto@gmail.com',
        From: "carwallcontacto@gmail.com",
        Subject: "Contacto De CarWall",
        Body: texto
    }).then(alert("Mensage enviado con exito"));
}

