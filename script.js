// ==========================================================================
// ACESSIBILIDADE + INTERATIVIDADE
// Arquivo: script.js
// ==========================================================================

// ===============================
// BOTÃO DE INVERSÃO DE CORES
// ===============================

const btnContrast = document.getElementById("btn-contrast");

btnContrast.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


// ===============================
// BOTÃO DE SIMULAÇÃO / CALCULADORA
// ===============================

const btnInteragir = document.getElementById("btn-interagir");
const mensagem = document.getElementById("mensagem-interativa");

btnInteragir.addEventListener("click", () => {

    // Solicita os dados ao usuário
    let litros = prompt("Digite quantos litros de água sua plantação usa por dia:");

    // Verifica se o usuário digitou algo válido
    if (litros === null || litros === "" || isNaN(litros)) {
        alert("Digite um número válido.");
        return;
    }

    litros = Number(litros);

    // Economia de 40%
    let economia = litros * 0.40;
    let restante = litros - economia;

    // Exibe o resultado
    mensagem.classList.remove("hidden-text");

    mensagem.innerHTML = `
        💧 Consumo atual: <strong>${litros} litros</strong><br>
        🌱 Economia possível: <strong>${economia.toFixed(2)} litros</strong><br>
        ✅ Novo consumo estimado: <strong>${restante.toFixed(2)} litros</strong>
    `;
});
