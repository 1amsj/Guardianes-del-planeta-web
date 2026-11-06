async function handleDemoRequest(event) {
    event.preventDefault(); // Evita que la página recargue

    const form = event.target;
    const btn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('demo-success');

    // Cambia el texto del botón mientras envía
    btn.disabled = true;
    btn.innerText = 'ENVIANDO...';

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Oculta el formulario y muestra el mensaje de éxito
            form.classList.add('hidden');
            successMsg.classList.remove('hidden');
        } else {
            alert('Hubo un problema al enviar la solicitud. Inténtalo de nuevo.');
            btn.disabled = false;
            btn.innerText = '🚀 ENVIAR SOLICITUD DE DEMO';
        }
    } catch (error) {
        alert('Error de conexión. Inténtalo más tarde.');
        btn.disabled = false;
        btn.innerText = '🚀 ENVIAR SOLICITUD DE DEMO';
    }
}