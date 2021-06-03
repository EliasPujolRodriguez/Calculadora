const d = document; //se crea una constante para la delegación de eventos
export function calculadora(btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9,
    btnSuma, btnResta, btnMult, btnDiv, btnPunto, btnIgual
    , btnC, inputResultado, btnRaiz, btnPorcentaje) {

    const $btn0 = d.querySelector(btn0),
        $btn1 = d.querySelector(btn1),
        $btn2 = d.querySelector(btn2),
        $btn3 = d.querySelector(btn3),
        $btn4 = d.querySelector(btn4),
        $btn5 = d.querySelector(btn5),
        $btn6 = d.querySelector(btn6),
        $btn7 = d.querySelector(btn7),
        $btn8 = d.querySelector(btn8),
        $btn9 = d.querySelector(btn9),
        $btnPuntoDecimal = d.querySelector(btnPunto),
        $inputResultado = d.querySelector(inputResultado);

    let x, y, op //variable x : define el primer operando y = define el segundo operando y op: define las operaciones que se realizarán
    $btn0.innerHTML = 0
    $btn1.innerHTML = 1
    $btn2.innerHTML = 2
    $btn3.innerHTML = 3
    $btn4.innerHTML = 4
    $btn5.innerHTML = 5
    $btn6.innerHTML = 6
    $btn7.innerHTML = 7
    $btn8.innerHTML = 8
    $btn9.innerHTML = 9
    $btnPuntoDecimal.innerHTML = "."

    //declaramos los métodos que se usarán para la creación de la calculadora 
    const reset = () => {
        $inputResultado.value = ""
        x = 0;
        y = 0;
        op = "";
    }

    const operaciones = () => {
        let res = 0;
        switch (op) {
            case "suma":
                res = parseFloat(x) + parseFloat(y)
                reset();
                $inputResultado.value = res
                break;
            case "resta":
                res = parseFloat(x) - parseFloat(y);
                reset();
                $inputResultado.value = res
                break;
            case "multiplicacion":
                res = parseFloat(x) * parseFloat(y);
                reset();
                $inputResultado.value = res
                break;
            case "division":
                res = parseFloat(x) / parseFloat(y);
                reset();
                $inputResultado.value = res
                if (res === Infinity) {
                    console.error("No se puede dividir un número por 0");
                    alert("Error. No se puede dividir un número por 0")
                    reset();
                    $inputResultado.value = ""
                    console.clear()
                }
                break;
            case "raiz":
                res = parseFloat(Math.sqrt(x).toFixed(11))
                reset();
                $inputResultado.value = res
                break;
            case "porcentaje":
                res = parseFloat(x) / 100 
                reset();
                $inputResultado.value = res
                break;
        }
    }

    const limpiar = () => {
        $inputResultado.value = ""
    }

    //definimos el evento on click para cada uno de los botones de la calculadora ya que al hacer click se desencadenará el evento correspondiente
    d.addEventListener("click", e => {

        if (e.target.matches(btn0)) {
            $inputResultado.value = $inputResultado.value += $btn0.innerHTML
        }

        if (e.target.matches(btn1)) {
            $inputResultado.value = $inputResultado.value += $btn1.innerHTML
        }

        if (e.target.matches(btn2)) {
            $inputResultado.value = $inputResultado.value += $btn2.innerHTML
        }

        if (e.target.matches(btn3)) {
            $inputResultado.value = $inputResultado.value += $btn3.innerHTML
        }

        if (e.target.matches(btn4)) {
            $inputResultado.value = $inputResultado.value += $btn4.innerHTML
        }

        if (e.target.matches(btn5)) {
            $inputResultado.value = $inputResultado.value += $btn5.innerHTML
        }

        if (e.target.matches(btn6)) {
            $inputResultado.value = $inputResultado.value += $btn6.innerHTML
        }

        if (e.target.matches(btn7)) {
            $inputResultado.value = $inputResultado.value += $btn7.innerHTML
        }

        if (e.target.matches(btn8)) {
            $inputResultado.value = $inputResultado.value += $btn8.innerHTML
        }

        if (e.target.matches(btn9)) {
            $inputResultado.value = $inputResultado.value += $btn9.innerHTML
        }

        if (e.target.matches(btnPunto)) {
            $inputResultado.value = $inputResultado.value += $btnPuntoDecimal.innerHTML
            e.target.disabled = true; //se desactiva para evitar poner dos puntos decimales en una cifra ya que esto es inválido
        }

        if (e.target.matches(btnIgual)) {
            y = parseFloat($inputResultado.value)
            operaciones()
        }

        if (e.target.matches(btnC)) {
            reset();
        }


        if (e.target.matches(btnSuma)) {
            x = parseFloat($inputResultado.value)
            op = "suma";
            limpiar()
        }

        if (e.target.matches(btnResta)) {
            x = parseFloat($inputResultado.value)
            op = "resta"
            limpiar()
        }

        if (e.target.matches(btnMult)) {
            x = parseFloat($inputResultado.value)
            op = "multiplicacion"
            limpiar()
        }

        if (e.target.matches(btnDiv)) {
            x = parseFloat($inputResultado.value)
            op = "division"
            limpiar()
        }

        if (e.target.matches(btnRaiz)) {
            x = parseFloat($inputResultado.value)
            op = "raiz"
            limpiar()
        }

        if (e.target.matches(btnPorcentaje)) {
            x = parseFloat($inputResultado.value)
            op = "porcentaje"
            limpiar()
        }


    })

}


