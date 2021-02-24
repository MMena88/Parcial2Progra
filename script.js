function sum() {
    var n1 = document.getElementById("number1").value
    var n2 = document.getElementById("number2").value

    var number1 = parseInt(n1)
    var number2 = parseInt(n2)
    var result = number1 + number2

    var resultElement = document.getElementById("result")
    resultElement.innerText = "sum result: " + result
}



