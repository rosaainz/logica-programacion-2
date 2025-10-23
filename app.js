document.getElementById('formTemp').addEventListener("submit", function(event) {
    event.preventDefault();

    const celsius = parseFloat(document.getElementById('celsius').value);
    const result = document.getElementById('result');

    if(isNaN(celsius)) {
        result.textContent = "Por favor ingresa un número válido.";
        result.style.color  = "red";
        return;
    }
});