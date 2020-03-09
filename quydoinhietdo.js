function quydoi() {
    let celcius = document.getElementById("celcius").value;
    let fahrenheit = Number(celcius)*9/5+32
    document.getElementById("fahrenheit").innerHTML = fahrenheit.toFixed(2);
}