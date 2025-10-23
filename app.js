document.getElementById('formTemp').addEventListener("submit", function(event) {
    event.preventDefault();

    const celsius = parseFloat(document.getElementById('celsius').value);
    const result = document.getElementById('result');

    if(isNaN(celsius)) {
        result.textContent = "Por favor ingresa un número válido.";
        result.style.color  = "red";
        return;
    }

    const kelvin = celsius + 273.15;
    const farenheit = (celsius * 9/5) + 32;

    result.style.color = "black";
    result.innerHTML = `
        <p>${celsius.toFixed(2)} °C son:</p>
        <ul>
            <li>${kelvin.toFixed(2)} K</li>
            <li>${farenheit.toFixed(2)} °F</li>
        </ul>
    `;
});