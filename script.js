// ==========================================================================
// ACESSIBILIDADE + CALCULADORA
// ==========================================================================


// ===============================
// MODO ESCURO
// ===============================

const btnContrast = document.getElementById("btn-contrast");

btnContrast.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});



// ===============================
// CALCULADORA DE ECONOMIA
// ===============================

const btnInteragir = document.getElementById("btn-interagir");

const mensagem = document.getElementById("mensagem-interativa");


btnInteragir.addEventListener("click", () => {

    let litros = prompt("Digite quantos litros de água são usados por dia:");

    if (litros === "" || litros === null || isNaN(litros)) {

        alert("Digite um número válido.");
        return;
    }

    litros = Number(litros);

    let economia = litros * 0.40;

    let restante = litros - economia;

    mensagem.classList.add("show-text");

    mensagem.innerHTML = `
        💧 Consumo atual: <strong>${litros} litros</strong><br>
        🌱 Economia estimada: <strong>${economia.toFixed(2)} litros</strong><br>
        ✅ Novo consumo: <strong>${restante.toFixed(2)} litros</strong>
    `;
});
