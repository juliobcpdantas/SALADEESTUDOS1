// Projeto controle financeiro em Node.js

// Declaração de variáveis e exibição no console

//
const RECEITA = {
    JULIO: 5000.00,
    JESSICA: 5000.00,
    EXTRA_JULIO: 0,
    EXTRA_JESSICA: 0,
};
let RECEITA_TOTAL = (RECEITA.JULIO + RECEITA.JESSICA + RECEITA.EXTRA_JULIO + RECEITA.EXTRA_JESSICA);

console.log("   RECEITA MÊS________________");
console.log(`       RECEITA JULIO: ${RECEITA.JULIO}.`);
console.log(`       RECEITA JESSICA: ${RECEITA.JESSICA}.`);
console.log(`       EXTRA JULIO: ${RECEITA.EXTRA_JULIO}.`);
console.log(`       EXTRA JESSICA: ${RECEITA.EXTRA_JESSICA}.`);
console.log("_______________________________");
console.log(`   RECEITA MÊS: ${RECEITA_TOTAL}.`);
console.log("");
//

//
const OUTRAS_RECEITAS = {
    APORTE_TERCEIROS: "",
    RECEITAS_VARIÁVEIS: "",
    EMPRESTIMO: "",       
};

let OUTRAS_RECEITAS_TOTAL = (OUTRAS_RECEITAS.APORTE_TERCEIROS + OUTRAS_RECEITAS.RECEITAS_VARIÁVEIS + OUTRAS_RECEITAS.EMPRESTIMO);

console.log("   OUTRAS RECEITAS____________");
console.log(`       APORTE DE TERCEIROS: ${OUTRAS_RECEITAS.APORTE_TERCEIROS}.`);
console.log(`       RECEITAS VARIÁVEIS: ${OUTRAS_RECEITAS.RECEITAS_VARIÁVEIS}.`);
console.log(`       EMPRESTIMO: ${OUTRAS_RECEITAS.EMPRESTIMO}.`);
console.log("______________________________");
console.log(`   OUTRAS RECEITAS: ${OUTRAS_RECEITAS_TOTAL}.`);
console.log("");

//

let ATIVO_TOTAL = (RECEITA_TOTAL + OUTRAS_RECEITAS_TOTAL);
console.log(`ATIVO TOTAL: ${ATIVO_TOTAL}.`);
console.log("__________________________________________________");
console.log("");

//

const CUSTO_MORADIA = {
    ALUGUEL: "",
    CONDOMÍNIO: "",
    ENERGIA: "",
    INTERNET: "",
    GÁS: ""
};

let CUSTO_MORADIA_TOTAL = (CUSTO_MORADIA.ALUGUEL + CUSTO_MORADIA.CONDOMÍNIO + CUSTO_MORADIA.ENERGIA + CUSTO_MORADIA.INTERNET + CUSTO_MORADIA.GÁS);

console.log("   CUSTO MORADIA______________");
console.log(`       ALUGUEL: ${CUSTO_MORADIA.ALUGUEL}.`);
console.log(`       CONDOMÍNIO: ${CUSTO_MORADIA.CONDOMÍNIO}.`);
console.log(`       ENERGIA: ${CUSTO_MORADIA.ENERGIA}.`);
console.log(`       INTERNET: ${CUSTO_MORADIA.INTERNET}.`);
console.log(`       GÁS: ${CUSTO_MORADIA.GÁS}.+`);
console.log("______________________________");
console.log(`   CUSTO MORADIA: ${CUSTO_MORADIA_TOTAL}.`);
console.log("");
//

//
const CUSTO_ALIMENTAÇÃO = {
    FEIRA_MÊS: "",
    OUTROS: ""  
};

let CUSTO_ALIMENTAÇÃO_TOTAL = (CUSTO_ALIMENTAÇÃO.FEIRA_MÊS + CUSTO_ALIMENTAÇÃO.OUTROS);

console.log("   CUSTO ALIMENTAÇÃO__________");
console.log(`       FEIRA DO MÊS: ${CUSTO_ALIMENTAÇÃO.FEIRA_MÊS}.`);
console.log(`       OUTROS: ${CUSTO_ALIMENTAÇÃO.OUTROS}.`);
console.log("______________________________");
console.log(`   CUSTO ALIMENTAÇÃO: ${CUSTO_ALIMENTAÇÃO_TOTAL}.`);
console.log("");
//
const CUSTO_MOTO = {
    FINANCIAMENTO_MOTO: "",
    SEGURO_MOTO: "",
    IPVA_LICENC_MOTO: "",
    COMBUSTÍVEL_MOTO: ""
};

let CUSTO_MOTO_TOTAL = (CUSTO_MOTO.FINANCIAMENTO_MOTO + CUSTO_MOTO.SEGURO_MOTO + CUSTO_MOTO.IPVA_LICENC_MOTO + CUSTO_MOTO.COMBUSTÍVEL_MOTO);

console.log("   CUSTO MOTO_________________");
console.log(`       FINANCIAMENTO MOTO: ${CUSTO_MOTO.FINANCIAMENTO_MOTO}.`);
console.log(`       SEGURO MOTO: ${CUSTO_MOTO.SEGURO_MOTO}.`);
console.log(`       IPVA LICENCIAMENTO MOTO: ${CUSTO_MOTO.IPVA_LICENC_MOTO}.`);
console.log(`       COMBUSTÍVEL MOTO: ${CUSTO_MOTO.COMBUSTÍVEL_MOTO}.`);
console.log("______________________________");
console.log(`   CUSTO MOTO: ${CUSTO_MOTO_TOTAL}.`);
console.log("");
//

//
const DESPESAS_SERVIÇOS = {
    FACULDADE_JESSICA: "",
    STREAMING: "",
    ACADEMIA: "",
};

let DESPESAS_SERVIÇOS_TOTAL = (DESPESAS_SERVIÇOS.FACULDADE_JESSICA + DESPESAS_SERVIÇOS.STREAMING + DESPESAS_SERVIÇOS.ACADEMIA);

console.log("   DESPESAS SERVIÇOS__________");
console.log(`       FACULDADE JESSICA: ${DESPESAS_SERVIÇOS.FACULDADE_JESSICA}.`);
console.log(`       STREAMING: ${DESPESAS_SERVIÇOS.STREAMING}.`);
console.log(`       ACADEMIA: ${DESPESAS_SERVIÇOS.ACADEMIA}.`);
console.log("______________________________");
console.log(`   DESPESAS SERVIÇOS: ${DESPESAS_SERVIÇOS_TOTAL}.`);
console.log("");
//

//
const DESPESAS_CARTÕES = {
    NUBANK_JULIO: 1500.00,
    SANTANDER_JULIO: 0,
    INTER_JULIO: 1500.35,
    MAGALU_JULIO: 0,
    CARREFOUR_JULIO: 0,
    NUBANK_JESSICA: 0,
    C6BANK_JESSICA: 0,
    CARREFOUR_JESSICA: 0,
    RIACHUELLO_JESSICA: 500.50,
};

let DESPESAS_CARTÕES_TOTAL = (DESPESAS_CARTÕES.NUBANK_JULIO + DESPESAS_CARTÕES.SANTANDER_JULIO + DESPESAS_CARTÕES.INTER_JULIO 
    + DESPESAS_CARTÕES.MAGALU_JULIO + DESPESAS_CARTÕES.CARREFOUR_JULIO + DESPESAS_CARTÕES.NUBANK_JESSICA + DESPESAS_CARTÕES.C6BANK_JESSICA 
    + DESPESAS_CARTÕES.CARREFOUR_JESSICA + DESPESAS_CARTÕES.RIACHUELLO_JESSICA);

console.log("   DESPESAS CARTÕES__________"); 
console.log(`       NUBANK JULIO: ${DESPESAS_CARTÕES.NUBANK_JULIO}.`);
console.log(`       SANTANDER JULIO: ${DESPESAS_CARTÕES.SANTANDER_JULIO}.`);
console.log(`       INTER JULIO: ${DESPESAS_CARTÕES.INTER_JULIO}.`);
console.log(`       MAGALU_JULIO: ${DESPESAS_CARTÕES.MAGALU_JULIO}.`);
console.log(`       CARREFOUR JULIO: ${DESPESAS_CARTÕES.CARREFOUR_JULIO}.`);
console.log(`       NUBANK JESSICA: ${DESPESAS_CARTÕES.NUBANK_JESSICA}.`);
console.log(`       C6 BANK JESSICA: ${DESPESAS_CARTÕES.C6BANK_JESSICA}.`);
console.log(`       CARREFOUR JESSICA: ${DESPESAS_CARTÕES.CARREFOUR_JESSICA}.`);
console.log(`       RIACHUELLO JESSICA: ${DESPESAS_CARTÕES.RIACHUELLO_JESSICA}.`);
console.log("______________________________");
console.log(`   DESPESAS CARTÕES: ${DESPESAS_CARTÕES_TOTAL}.`);
console.log("");
//

//
const OUTRAS_DESPESAS = {
    PROVISÕES: "",
    OUTRAS: "",
    EMPRESTIMO: ""
};

let OUTRAS_DESPESAS_TOTAL = (OUTRAS_DESPESAS.PROVISÕES + OUTRAS_DESPESAS.OUTRAS + OUTRAS_DESPESAS.EMPRESTIMO);

console.log("   OUTRAS DESPESAS____________");
console.log(`       PROVISÕES: ${OUTRAS_DESPESAS.PROVISÕES}.`);
console.log(`       OUTRAS: ${OUTRAS_DESPESAS.OUTRAS}.`);
console.log(`       EMPRESTIMO: ${OUTRAS_DESPESAS.EMPRESTIMO}.`);
console.log("______________________________");
console.log(`   OUTRAS DESPESAS: ${OUTRAS_DESPESAS_TOTAL}.`);
console.log("");
//

console.log(`       C6 BANK JESSICA: ${DESPESAS_CARTÕES.C6BANK_JESSICA}.`);
console.log(`       CARREFOUR JESSICA: ${DESPESAS_CARTÕES.CARREFOUR_JESSICA}.`);
console.log(`       RIACHUELLO JESSICA: ${DESPESAS_CARTÕES.RIACHUELLO_JESSICA}.`);
console.log("______________________________");
console.log(`   DESPESAS CARTÕES: ${DESPESAS_CARTÕES_TOTAL}.`);
console.log("");
//

let PASSIVO_TOTAL = (CUSTO_MORADIA_TOTAL + CUSTO_ALIMENTAÇÃO_TOTAL + CUSTO_MOTO_TOTAL + DESPESAS_SERVIÇOS_TOTAL + DESPESAS_CARTÕES_TOTAL + OUTRAS_DESPESAS_TOTAL);
console.log(`PASSIVO TOTAL: ${PASSIVO_TOTAL}.`);
console.log("__________________________________________________");
console.log("");

//

let RESULTADO_MÊS = (ATIVO_TOTAL - PASSIVO_TOTAL);
console.log(`RESULTADO DO MÊS: ${RESULTADO_MÊS}.`);
console.log("__________________________________________________");
console.log("");

//  PROXIMA ETAPA DO PROJETO, CONSEGUIR CRIAR UMA TABELA COM MESES SEQUENCIAIS QUE REGISTREM OS RESULTADOS INDIVIDUAIS
//  DE TODAS ESTAS VARIAVEIS. 