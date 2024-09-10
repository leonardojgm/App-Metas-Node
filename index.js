// olá, mundo!
const mensagem = "olá, mundo!";

{
    const mensagem = "olá eu"

    console.log(mensagem);
}

console.log(mensagem);

// arrays, objetos
let meta = {
    value: 'ler um livro por mês',
    address: 2,
    checked: true,
    log: (info) => {
        console.log(info);
    }
}

meta.value = "não é mais ler um livro";
meta.log(meta.value);

// functions // arrow function
const criarMeta = () => {}

//function criarMeta () {}