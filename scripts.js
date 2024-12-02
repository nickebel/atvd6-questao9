let menoresdeidades = 0;

for (let i = 1; i <= 10; i++) {

    let idade = parseInt(prompt('Digite a idade da ' + i + ' pessoa:'));
    if (idade <= 18) {
       menoresdeidades++;
    }
}


alert('O numero de pessoas menores de idade é: ' + menoresdeidades);
