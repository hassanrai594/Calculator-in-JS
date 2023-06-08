const input = document.querySelector('.calculator-input');
const btns = document.querySelectorAll('.btn');

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector('.equal-btn').click();
    }
});

btns.forEach(function(btn) {
    btn.addEventListener('click', (e) => {
        const value = e.currentTarget.innerText;
        const operation = e.currentTarget.classList;
        // const myArray = ["one", "two", "three", "four", "five"];
        // let result1 = value.some(i => myArray.includes(i))
        // console.log(result1);
        // const arr = [];
        // arr.push(value);
        // console.log(arr);
        input.value += value;

        if (operation.contains('clear-btn')) {
            input.value = "";
        }
        if (operation.contains('equal-btn')) {
            let operator = input.value.toString();
            console.log(operator);
            if (operator.includes('+') == true) {
                //plus
                let a = input.value.split('+');
                let a1 = a[0];
                a1 = Number(a1);
                let a2 = a[1];
                a2 = a2.split('=');
                a2 = a2[0];
                a2 = Number(a2);
                let sum = a1 + a2;
                if (isNaN(sum) === true) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Please Enter a Number',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    input.value = "";
                } else {
                    input.value = sum;
                }

            } else if (operator.includes('x') == true) {
                // multiply
                let b = input.value.split('x');
                let b1 = b[0];
                b1 = Number(b1);
                let b2 = b[1];
                b2 = b2.split('=');
                b2 = b2[0];
                b2 = Number(b2);
                let multiply = b1 * b2;
                if (isNaN(multiply) === true) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Please Enter a Number',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    input.value = "";
                } else {
                    input.value = multiply;
                }

            } else if (operator.includes('*') == true) {
                // multiply
                let b = input.value.split('*');
                let b1 = b[0];
                b1 = Number(b1);
                let b2 = b[1];
                b2 = b2.split('=');
                b2 = b2[0];
                b2 = Number(b2);
                let multiply = b1 * b2;
                if (isNaN(multiply) === true) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Please Enter a Number',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    input.value = "";
                } else {
                    input.value = multiply;
                }

            } else if (operator.includes('/') == true) {
                // divide
                let b = input.value.split('/');
                let b1 = b[0];
                b1 = Number(b1);
                let b2 = b[1];
                b2 = b2.split('=');
                b2 = b2[0];
                b2 = Number(b2);
                let divide = b1 / b2;
                if (isNaN(divide) === true) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Please Enter a Number',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    input.value = "";
                } else {
                    input.value = divide;
                }


            } else if (operator.includes('-') == true) {
                // subtract
                let b = input.value.split('-');
                let b1 = b[0];
                b1 = Number(b1);
                let b2 = b[1];
                b2 = b2.split('=');
                b2 = b2[0];
                b2 = Number(b2);
                let subtract = b1 - b2;
                if (isNaN(subtract) === true) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Please Enter a Number',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    input.value = "";
                } else {
                    input.value = subtract;
                }


            } else if (operator.includes('%') == true) {
                // modulus
                let b = input.value.split('%');
                let b1 = b[0];
                b1 = Number(b1);
                let b2 = b[1];
                b2 = b2.split('=');
                b2 = b2[0];
                b2 = Number(b2);
                let modulus = b1 % b2;
                if (isNaN(modulus) === true) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Please Enter a Number',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    input.value = "";
                } else {
                    input.value = modulus;
                }
            }
        }
    })
});