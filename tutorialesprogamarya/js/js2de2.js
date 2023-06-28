function mostrarMayor() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    if (num1 > num2) {
        alert('El manor es ' + num1);
    } else {
        alert('El manor es ' + num2);
    }
}