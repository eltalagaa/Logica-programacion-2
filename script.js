function solicitarTemperatura() {
    let celsius;

    do {
        // Solicitar temperatura en grados Celsius y convertir a número
        let inputCelsius = prompt("Ingrese grados Celsius:");
        celsius = parseFloat(inputCelsius);

        // Verificar si la entrada es un número
        if (isNaN(celsius)) {
            alert("Ingrese un valor numérico.");
        }
    } while (isNaN(celsius));

    // Realizar conversiones
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    // Mostrar resultados por consola
    console.log(`Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}`);
    console.log(`Temperatura en Kelvin: ${kelvin.toFixed(2)}`);

   
}

solicitarTemperatura();
