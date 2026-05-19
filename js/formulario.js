
// funcion para capturar los datos del formulario y enviarlo en una alerta
function capturaDatos(){
    // seleccionando las entradas de datos
    // getElementById / querySelector
    let input_firstname  = document.getElementById("firstName");
    let input_lastname  = document.getElementById("lastName");
    let input_email  = document.getElementById("email");
    let input_message  = document.querySelector("textarea[name='message']"); //buscando por atributo

    //seleccionado los radio y checkbox
    //seleccionamos el radio seleccionado por el usuario
    let input_querytype = document.querySelector("input[name='queryType']:checked");
    let input_consent = document.getElementById("consent").checked;

    // accediendo al valor de cada entrada de dato (.value) 
    Swal.fire({
        title: "<strong>Gracias por contactarnos!</strong>",
        icon: "success",
        html: `
            <p><strong>Nombre Completo:</strong> ${input_firstname.value} ${input_lastname.value}</p>
            <p><strong>Correo:</strong> ${input_email.value}</p>
            <p><strong>Mensaje:</strong> ${input_message.value}</p>
            <p><strong>Tipo:</strong> ${input_querytype.value}</p>
            <p><strong>Consentimiento:</strong> ${input_consent}</p>
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Great!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!"
    });
}