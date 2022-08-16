// Agregamos un timeout para que diera tiempo a los usuarios a reproducir el audio
setTimeout(() => {
    document.getElementById('audio').play();
    // Pedimos nombre al usuario
    alert(`¡Para ingresar a este juego tenés que ingresar tu nombre!`);
    let name = prompt('¿Cuál es tu nombre?');

    // Consigna del juego
    alert(`*CONSIGNA* El objetivo de este juego es llegar a los 1000 Puntos, lo que vas a tener que hacer ${name} es elegir un número entre el 0 y el 1000, la computadora va a elegir otro número random, si tu número mas el número de la computadora es MAYOR a 1000 Puntos perderán el juego, en el caso que no pierdan, la computadora y ${name} se verán obligados a tener que ingresar otro número, los cuales van a ser sumados al resultado de la suma anterior hasta llegar o pasar los 1000 Puntos.
¡Que comience el juego! 🔊`);

    // Meta del juego
    let goal = 0;

    // Números asigados por el participante y por la máquina
    let number = prompt('Ingresá tu número');
    let computer = Math.floor(Math.random() * 600);
    
    // Mientras que la meta y el resultado sea menor a 1000 se ejecuta
    while(goal < 1000 || result < 1000) {
        // Suma de los números elegidos
        let goal = parseInt(number) + parseInt(computer);

        // Validación de la suma
        if(goal < 1000) {
            alert(`La suma de su número y de la computadora es de: ${goal} Puntos.
Por favor ingresá un número más.`);

            number = prompt('Ingresá otro número');
            computer = Math.floor(Math.random() * 600);
        } else {
            alert(`La suma de su número y de la computadora es de: ${goal} Puntos... 


¡Perdieron! 🔪💢`);
            document.body.style.backgroundColor = "red";
            document.body.style.transition = "all .2s linear";
            // Cortamos el búcle
            break;
        }

        // Resultado total de la suma
        let result = parseInt(goal) + parseInt(number) + parseInt(computer);

        // Si el resultado es menor a 1000 ejecuta lo siguiente
        if(result < 1000) {
            alert(`La suma de su número y de la computadora es de: ${result} Puntos.
Por favor ingresá un número más.`);

            number = prompt('Ingresá otro número');
            computer = Math.floor(Math.random() * 600);
        } else {
            alert(`La suma de su número y de la computadora es de: ${result} Puntos... 


¡Perdieron! 🔪💢`);
            document.body.style.backgroundColor = "red";
            document.body.style.transition = "all .2s linear";
            break;
        }

        // Resultado total de la suma en el caso de que todavía no haya perdido
        result = parseInt(result) + parseInt(number) + parseInt(computer);

        if(result < 1000) {
            alert(`La suma de su número y de la computadora es de: ${result} Puntos.
Por favor ingresá un número más.`);

            number = prompt('Ingresá otro número');
            computer = Math.floor(Math.random() * 3333);
        } else {
            alert(`La suma de su número y de la computadora es de: ${result} Puntos... 


¡Perdieron! 🔪💢`);
            document.body.style.backgroundColor = "red";
            document.body.style.transition = "all .2s linear";
            break;
        }
    }

    // Resultado de 1000 en el caso x que haya acertado, que es prácticamente imposible..
    if(result == 1000) {
        alert('¡Existe una muy mínima probabilidad de hayas sobrevivido, tuviste suerte...!');
    }
}, 5000);