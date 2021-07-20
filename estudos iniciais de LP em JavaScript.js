
// IMPRESSÃO EM TELA

// palavra reservada "console"."log", abrir "(" e 
//  entre " inserir o texto ou operação logica que deverá ser mostrada em tela", fechar ")"
            //EX:
// console.log("Olá mundo");
// console.log("olá, Julio");



            // VARIÁVEIS mutaveis ou permanentes

//let variavel = "variavel";        //variável mutaveis,
            //pode ser alterada futuramente com operações tipo:
                //variavel = "variavelalterada"
//const variável = "variavel";      //variável constante, imutavel.
            //não pode ser alterada futuramente.

            // Apagar informação de variável  //null

//variavel = null;                  //variável será anulada



            // BOOLEANOS - sentenças true e false
                // camel case - forma de escrever sentenças com iniciais de palavras com letra maiuscula 
            //EX:    
//const ehMaiorDeIdade = false;

//console.log(ehMaiorDeIdade);


            //OPERADORES MATEMATICOS

            //EX:

//const resultado = 5 + 4
//console.log(resultado)

//const resultado = 5 + 4 * 3 - 8
//console.log(resultado)

//const resultado = 5 / 4
//console.log(resultado)

//const resultado = 5 / 4
//const resto = 5 % 4
//console.log(resto)

//let resultado = 5
//resultado = resultado + 5     //substituir o resultado pela operção aplicada a ele mesmo

//console.log(resultado)

// let resultado = 5
// resultado = resultado / 5    //substituir o resultado pela operção aplicada a ele mesmo

// console.log(resultado)

// let resultado = 5
// resultado += 5          //adcionar o resultado por ele mesmo 

// console.log(resultado)

// let resultado = 5
// resultado ++            //adcionar 1 ao resultado

// console.log(resultado)


// let resultado = 5
// resultado --            //subtrair 1 ao resultado

// console.log(resultado)


            //OBJETOS           //conjuntos de variaveis agrupadas 

// const pessoa = {
//     nome: "José",
//     idade: 30,
//     ehMaiorDeIdade: true,
//     altura: 1.73
// };

// console.log(pessoa.ehMaiorDeIdade);


      //CONDICIONAIS IF , ELSE (2 RAMIFICAÇÕES) ------ IF, ELSE IF, ELSE (3 OU MAIS RAMIFICAÇÕES)

// const pessoa = {
//     nome: "José",
//     idade: 19,
//     ehMaiorDeIdade: true,
//     altura: 1.73
// };

// if (pessoa.idade >= 18) {
//     console.log("E maior de idade.")
// }

// const pessoa = {
//     nome: "José",
//     idade: 19,
//     ehMaiorDeIdade: true,
//     altura: 1.73
// };

// if (19 >= 18) {
//     console.log("E maior de idade.")
// }

// const pessoa = {
//     nome: "José",
//     idade: 18,
//     ehMaiorDeIdade: true,
//     altura: 1.73
// };

// if (pessoa.idade >= 18) {
//     console.log("E maior de idade.")
// } else {
//   console.log("é menor de idade.")
// }

// const pessoa = {
//     nome: "José",
//     idade: 18,
//     ehMaiorDeIdade: true,
//     altura: 1.73
// };

// if (pessoa.idade <= 18) {
//     console.log("entrou no if")
// } else {
//   console.log("entrou no else")
// }

//       //OPERADORES DE COMPARAÇÃO

// >=
// <=
// <
// >
// ==     //igualdade de conteudo
// !=     //diferença de conteudo
// ===    //igualdade de conteudo e tipo
// !==    //diferença de conteudo e tipo
// &&     // E (BOOLEANO)
// ||     // OU (BOOLEANO)
// !      // NEGAÇÃO DO VALOR BOOLEANO

// const pessoa = {
//     nome: "José",
//     idade: 19,
//     ehMaiorDeIdade: true,
//     altura: 1.73
// };

// if (pessoa.idade < 18) {
//     console.log("A pessoa é menor de idade");
// } else if (pessoa.idade < 60) {
//   console.log("A possoa é adulta");
// } else {
//   console.log("A pessoa é idosa");
// }



//      //CONCATENANDO STRINGS E STRING TEMPLATE

        //OPÇÃO 1

// const pessoa = {
//     nome: "José",
//     idade: 9,
//     ehMaiorDeIdade: true,
//     altura: 1.73
// };

// if (pessoa.idade < 18) {
//     console.log(pessoa.nome +" é menor de idade");
// } else if (pessoa.idade < 60) {
//   console.log(pessoa.nome +" é adulta");
// } else {
//   console.log(pessoa.nome +" é idosa");
// }
        //OPÇÃO 2

// const pessoa = {
//     nome: "José",
//     idade: 9,
//     ehMaiorDeIdade: true,
//     altura: 1.73
// };

// let texto = pessoa.nome + " tem " + pessoa.idade;
// console.log(texto);

// if (pessoa.idade < 18) {
//     console.log(pessoa.nome +" é menor de idade");
// } else if (pessoa.idade < 60) {
//   console.log(pessoa.nome +" é adulta");
// } else {
//   console.log(pessoa.nome +" é idosa");
// }

      //OPÇÃO 3     STRING TEMPLATE

// const pessoa = {
//     nome: "José",
//     idade: 75,
//     ehMaiorDeIdade: true,
//     altura: 1.73
// };

// let texto = pessoa.nome + " tem " + pessoa.idade;
// console.log(texto);

// if (pessoa.idade < 18) {
//     console.log(`${pessoa.nome} é menor de idade`);
// } else if (pessoa.idade < 60) {
//   console.log(`${pessoa.nome} é adulto`);
// } else {
//   console.log(`${pessoa.nome} é um idoso de ${pessoa.idade} anos.`);
// }



      // OPERADORES LOGICOS (exercícios)


//OBJETIVO DO PROGRAMA, LIMITAR ACESSO A UM BRINQUEDO POR LIMITE DE IDADE E ALTURA
 
    // idade mínima = 12
    // altura mínima = 1.4

// MINHA RESOLUÇÃO

// const pessoa = {
//   nome: "Júlio" ,
//   idade: 12,
//   altura: 1.40
// };

// let idadeMinima = 12
// let alturaMinima = 1.40

    //  OU...

// if (pessoa.idade < idadeMinima) {
//   console.log(`${pessoa.nome} tem idade inferior a permitida`);
//   } else if (pessoa.altura < alturaMinima) {
//     console.log(`${pessoa.altura} tem altura inferior a permitida`);
//   }else {
//       console.log(`${pessoa.nome} tem idade e altura permitidas`);
//     }

    //   OU...

// if (pessoa.idade >= idadeMinima && pessoa.altura >= alturaMinima) {
//   console.log (`${pessoa.nome} tem idade e altura minima permitidas.`);
//   } 
//    else if (pessoa.idade < idadeMinima && pessoa.altura < alturaMinima) {
//     console.log(`${pessoa.nome} não tem nem idade nem altura minima permitidas.`);
//   }
//    else if (pessoa.idade < idadeMinima) {
//     console.log(`${pessoa.nome} não tem idade permitida.`);
//   } 
//    else if (pessoa.altura < alturaMinima) {
//     console.log(`${pessoa.nome} não tem altura permitida.`);
//   }
//   else {
//     console.log("resultado impossivel");
//   }

    //USANDO STRINGS BOOLEANAS

// const pessoa = {
//   nome: "Júlio" ,
//   idade: 12,
//   altura: 1.40,
//   temPassaporte: false 
// };
//     //  OU

// // if (pessoa.temPassaporte) {
// //   console.log("pode viajar");  
// // } else {
// //   console.log("Não pode viajar");
// // }

//     //  OU
    
// if (!pessoa.temPassaporte) {
//   console.log("BARRADO")
// }



      // ARRAYS OU VETORES = um conjuntos de variáveis ordenados



//OPÇÕES:

// 1 (RUIM)

// const listaDeCompras = "Arroz", "batata", "maça", "pera"; 

// // 2 (RUIM)

// const item1 = "arroz";
// const item2 = "batata";
// const item3 = "maça";
// const item4 = "pera";

// // 3 (BOA) (ARRAYS) indice de Array = n-1

// const listaDeCompras = ["Arroz", "Batata", "Maça"];

// console.log(listaDeCompras[0]);
// console.log(listaDeCompras[1]);
// console.log(listaDeCompras[2]);

      // LOOPS  

        // WHILE (enquanto)

// const listaDeCompras = ["Arroz", "batata", "maça"]; 

// let indice = 0;
// console.log(listaDeCompras[indice]);

// while (true) {
//   console.log("estou em loop infinito");
// }

// const listaDeCompras = ["Arroz", "batata", "maça"]; 
// let numero = 0

// while (numero <= 100) {
//   console.log(numero);
//   numero++;
// }

// const listaDeCompras = ["Arroz", "batata", "maça"]; 
// let indice = 0;
// while (indice <= 2) {
//   console.log(listaDeCompras[indice]);
//   indice++;
// }

// const listaDeCompras = ["Arroz", "batata", "maça"]; 
// let indice = 0;
// while (indice < listaDeCompras.length) {
//   console.log(listaDeCompras[indice]);
//   indice++;
// }

        // FOR (para)   

// const listaDeCompras = ["Arroz", "batata", "Banana"]; 

// for (let indice = 0; indice < listaDeCompras.length; indice++) {
//   console.log(listaDeCompras[indice]);
// }

        // OUTRO TIPO DE FOR

// const listaDeCompras = ["Arroz", "feijão", "Banana"];

// for (let item of listaDeCompras) {
//   console.log(item);
// }



      // FUNÇOES


// function imprimirOlaNaTela (){
//   console.log("Olá");
//   }

// imprimirOlaNaTela();
// console.log("oi");
// imprimirOlaNaTela();


// function CumprimentarPessoa(nome) {
//   console.log("Olá, " + nome);
// }

// CumprimentarPessoa("José");



      //EXERCÍCIO FINAL


// Que dia da semana será daqui a x dias?
// OBS: Hoje é Domingo

// function diaDaSemana(dias) {
//   const resto = dias % 7;

//   if (resto == 0) {
//     console.log("Domingo");
//   }else if (resto == 1) {
//     console.log("Segunda");
//   }else if (resto == 2) {
//     console.log("Terça");
//   }else if (resto == 3) {
//     console.log("Quarta");
//   }else if (resto == 4) {
//     console.log("Quinta");
//   }else if (resto == 5) {
//     console.log("Sexta");
//   }else if (resto == 6) {
//     console.log("Sábado")  
//   }
// }

// diaDaSemana(369);


      // EXERCÍCIO

// Tabuáda dos 9

// const TabuadaDosNove = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ];

// for (let indice = 0; indice < TabuadaDosNove.length; indice++) {
//   console.log(TabuadaDosNove[indice] + " x 9 = " + 9 * + TabuadaDosNove[indice]);
// }

      // EXERCÍCIO DE CONVERÇÃO DE PORTUGOL PARA JAVASCRIPT

      // Const cestaDeFrutas [["pera", 100],["jaca", 200],["maçã", 900],["uva", 89]];

      // console.log(cestaDeFrutas [0][1]);
      
      // IMPRESSÃO EM TELA
      
      // palavra reservada "console"."log", abrir "(" e 
      //  entre " inserir o texto ou operação logica que deverá ser mostrada em tela", fechar ")"
                  //EX:
      // console.log("Olá mundo");
      // console.log("olá, Julio");
      
      
      
                  // VARIÁVEIS mutaveis ou permanentes
      
      //let variavel = "variavel";        //variável mutaveis,
                  //pode ser alterada futuramente com operações tipo:
                      //variavel = "variavelalterada"
      //const variável = "variavel";      //variável constante, imutavel.
                  //não pode ser alterada futuramente.
      
                  // Apagar informação de variável  //null
      
      //variavel = null;                  //variável será anulada
      
      
      
                  // BOOLEANOS - sentenças true e false
                      // camel case - forma de escrever sentenças com iniciais de palavras com letra maiuscula 
                  //EX:    
      //const ehMaiorDeIdade = false;
      
      //console.log(ehMaiorDeIdade);
      
      
                  //OPERADORES MATEMATICOS
      
                  //EX:
      
      //const resultado = 5 + 4
      //console.log(resultado)
      
      //const resultado = 5 + 4 * 3 - 8
      //console.log(resultado)
      
      //const resultado = 5 / 4
      //console.log(resultado)
      
      //const resultado = 5 / 4
      //const resto = 5 % 4
      //console.log(resto)
      
      //let resultado = 5
      //resultado = resultado + 5     //substituir o resultado pela operção aplicada a ele mesmo
      
      //console.log(resultado)
      
      // let resultado = 5
      // resultado = resultado / 5    //substituir o resultado pela operção aplicada a ele mesmo
      
      // console.log(resultado)
      
      // let resultado = 5
      // resultado += 5          //adcionar o resultado por ele mesmo 
      
      // console.log(resultado)
      
      // let resultado = 5
      // resultado ++            //adcionar 1 ao resultado
      
      // console.log(resultado)
      
      
      // let resultado = 5
      // resultado --            //subtrair 1 ao resultado
      
      // console.log(resultado)
      
      
                  //OBJETOS           //conjuntos de variaveis agrupadas 
      
      // const pessoa = {
      //     nome: "José",
      //     idade: 30,
      //     ehMaiorDeIdade: true,
      //     altura: 1.73
      // };
      
      // console.log(pessoa.ehMaiorDeIdade);
      
      
            //CONDICIONAIS IF , ELSE (2 RAMIFICAÇÕES) ------ IF, ELSE IF, ELSE (3 OU MAIS RAMIFICAÇÕES)
      
      // const pessoa = {
      //     nome: "José",
      //     idade: 19,
      //     ehMaiorDeIdade: true,
      //     altura: 1.73
      // };
      
      // if (pessoa.idade >= 18) {
      //     console.log("E maior de idade.")
      // }
      
      // const pessoa = {
      //     nome: "José",
      //     idade: 19,
      //     ehMaiorDeIdade: true,
      //     altura: 1.73
      // };
      
      // if (19 >= 18) {
      //     console.log("E maior de idade.")
      // }
      
      // const pessoa = {
      //     nome: "José",
      //     idade: 18,
      //     ehMaiorDeIdade: true,
      //     altura: 1.73
      // };
      
      // if (pessoa.idade >= 18) {
      //     console.log("E maior de idade.")
      // } else {
      //   console.log("é menor de idade.")
      // }
      
      // const pessoa = {
      //     nome: "José",
      //     idade: 18,
      //     ehMaiorDeIdade: true,
      //     altura: 1.73
      // };
      
      // if (pessoa.idade <= 18) {
      //     console.log("entrou no if")
      // } else {
      //   console.log("entrou no else")
      // }
      
      //       //OPERADORES DE COMPARAÇÃO
      
      // >=
      // <=
      // <
      // >
      // ==     //igualdade de conteudo
      // !=     //diferença de conteudo
      // ===    //igualdade de conteudo e tipo
      // !==    //diferença de conteudo e tipo
      // &&     // E (BOOLEANO)
      // ||     // OU (BOOLEANO)
      // !      // NEGAÇÃO DO VALOR BOOLEANO
      
      // const pessoa = {
      //     nome: "José",
      //     idade: 19,
      //     ehMaiorDeIdade: true,
      //     altura: 1.73
      // };
      
      // if (pessoa.idade < 18) {
      //     console.log("A pessoa é menor de idade");
      // } else if (pessoa.idade < 60) {
      //   console.log("A possoa é adulta");
      // } else {
      //   console.log("A pessoa é idosa");
      // }
      
      
      
      //      //CONCATENANDO STRINGS E STRING TEMPLATE
      
              //OPÇÃO 1
      
      // const pessoa = {
      //     nome: "José",
      //     idade: 9,
      //     ehMaiorDeIdade: true,
      //     altura: 1.73
      // };
      
      // if (pessoa.idade < 18) {
      //     console.log(pessoa.nome +" é menor de idade");
      // } else if (pessoa.idade < 60) {
      //   console.log(pessoa.nome +" é adulta");
      // } else {
      //   console.log(pessoa.nome +" é idosa");
      // }
              //OPÇÃO 2
      
      // const pessoa = {
      //     nome: "José",
      //     idade: 9,
      //     ehMaiorDeIdade: true,
      //     altura: 1.73
      // };
      
      // let texto = pessoa.nome + " tem " + pessoa.idade;
      // console.log(texto);
      
      // if (pessoa.idade < 18) {
      //     console.log(pessoa.nome +" é menor de idade");
      // } else if (pessoa.idade < 60) {
      //   console.log(pessoa.nome +" é adulta");
      // } else {
      //   console.log(pessoa.nome +" é idosa");
      // }
      
            //OPÇÃO 3     STRING TEMPLATE
      
      // const pessoa = {
      //     nome: "José",
      //     idade: 75,
      //     ehMaiorDeIdade: true,
      //     altura: 1.73
      // };
      
      // let texto = pessoa.nome + " tem " + pessoa.idade;
      // console.log(texto);
      
      // if (pessoa.idade < 18) {
      //     console.log(`${pessoa.nome} é menor de idade`);
      // } else if (pessoa.idade < 60) {
      //   console.log(`${pessoa.nome} é adulto`);
      // } else {
      //   console.log(`${pessoa.nome} é um idoso de ${pessoa.idade} anos.`);
      // }
      
      
      
            // OPERADORES LOGICOS (exercícios)
      
      
      //OBJETIVO DO PROGRAMA, LIMITAR ACESSO A UM BRINQUEDO POR LIMITE DE IDADE E ALTURA
       
          // idade mínima = 12
          // altura mínima = 1.4
      
      // MINHA RESOLUÇÃO
      
      // const pessoa = {
      //   nome: "Júlio" ,
      //   idade: 12,
      //   altura: 1.40
      // };
      
      // let idadeMinima = 12
      // let alturaMinima = 1.40
      
          //  OU...
      
      // if (pessoa.idade < idadeMinima) {
      //   console.log(`${pessoa.nome} tem idade inferior a permitida`);
      //   } else if (pessoa.altura < alturaMinima) {
      //     console.log(`${pessoa.altura} tem altura inferior a permitida`);
      //   }else {
      //       console.log(`${pessoa.nome} tem idade e altura permitidas`);
      //     }
      
          //   OU...
      
      // if (pessoa.idade >= idadeMinima && pessoa.altura >= alturaMinima) {
      //   console.log (`${pessoa.nome} tem idade e altura minima permitidas.`);
      //   } 
      //    else if (pessoa.idade < idadeMinima && pessoa.altura < alturaMinima) {
      //     console.log(`${pessoa.nome} não tem nem idade nem altura minima permitidas.`);
      //   }
      //    else if (pessoa.idade < idadeMinima) {
      //     console.log(`${pessoa.nome} não tem idade permitida.`);
      //   } 
      //    else if (pessoa.altura < alturaMinima) {
      //     console.log(`${pessoa.nome} não tem altura permitida.`);
      //   }
      //   else {
      //     console.log("resultado impossivel");
      //   }
      
          //USANDO STRINGS BOOLEANAS
      
      // const pessoa = {
      //   nome: "Júlio" ,
      //   idade: 12,
      //   altura: 1.40,
      //   temPassaporte: false 
      // };
      //     //  OU
      
      // // if (pessoa.temPassaporte) {
      // //   console.log("pode viajar");  
      // // } else {
      // //   console.log("Não pode viajar");
      // // }
      
      //     //  OU
          
      // if (!pessoa.temPassaporte) {
      //   console.log("BARRADO")
      // }
      
      
      
            // ARRAYS OU VETORES = um conjuntos de variáveis ordenados
      
      
      
      //OPÇÕES:
      
      // 1 (RUIM)
      
      // const listaDeCompras = "Arroz", "batata", "maça", "pera"; 
      
      // // 2 (RUIM)
      
      // const item1 = "arroz";
      // const item2 = "batata";
      // const item3 = "maça";
      // const item4 = "pera";
      
      // // 3 (BOA) (ARRAYS) indice de Array = n-1
      
      // const listaDeCompras = ["Arroz", "Batata", "Maça"];
      
      // console.log(listaDeCompras[0]);
      // console.log(listaDeCompras[1]);
      // console.log(listaDeCompras[2]);
      
            // LOOPS  
      
              // WHILE (enquanto)
      
      // const listaDeCompras = ["Arroz", "batata", "maça"]; 
      
      // let indice = 0;
      // console.log(listaDeCompras[indice]);
      
      // while (true) {
      //   console.log("estou em loop infinito");
      // }
      
      // const listaDeCompras = ["Arroz", "batata", "maça"]; 
      // let numero = 0
      
      // while (numero <= 100) {
      //   console.log(numero);
      //   numero++;
      // }
      
      // const listaDeCompras = ["Arroz", "batata", "maça"]; 
      // let indice = 0;
      // while (indice <= 2) {
      //   console.log(listaDeCompras[indice]);
      //   indice++;
      // }
      
      // const listaDeCompras = ["Arroz", "batata", "maça"]; 
      // let indice = 0;
      // while (indice < listaDeCompras.length) {
      //   console.log(listaDeCompras[indice]);
      //   indice++;
      // }
      
              // FOR (para)   
      
      // const listaDeCompras = ["Arroz", "batata", "Banana"]; 
      
      // for (let indice = 0; indice < listaDeCompras.length; indice++) {
      //   console.log(listaDeCompras[indice]);
      // }
      
              // OUTRO TIPO DE FOR
      
      // const listaDeCompras = ["Arroz", "feijão", "Banana"];
      
      // for (let item of listaDeCompras) {
      //   console.log(item);
      // }
      
      
      
            // FUNÇOES
      
      
      // function imprimirOlaNaTela (){
      //   console.log("Olá");
      //   }
      
      // imprimirOlaNaTela();
      // console.log("oi");
      // imprimirOlaNaTela();
      
      
      // function CumprimentarPessoa(nome) {
      //   console.log("Olá, " + nome);
      // }
      
      // CumprimentarPessoa("José");
      
      
      
            //EXERCÍCIO FINAL
      
      
      // Que dia da semana será daqui a x dias?
      // OBS: Hoje é Domingo
      
      // function diaDaSemana(dias) {
      //   const resto = dias % 7;
      
      //   if (resto == 0) {
      //     console.log("Domingo");
      //   }else if (resto == 1) {
      //     console.log("Segunda");
      //   }else if (resto == 2) {
      //     console.log("Terça");
      //   }else if (resto == 3) {
      //     console.log("Quarta");
      //   }else if (resto == 4) {
      //     console.log("Quinta");
      //   }else if (resto == 5) {
      //     console.log("Sexta");
      //   }else if (resto == 6) {
      //     console.log("Sábado")  
      //   }
      // }
      
      // diaDaSemana(369);
      
      
            // EXERCÍCIO
      
      // Tabuáda dos 9
      
      // const TabuadaDosNove = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ];
      
      // for (let indice = 0; indice < TabuadaDosNove.length; indice++) {
      //   console.log(TabuadaDosNove[indice] + " x 9 = " + 9 * + TabuadaDosNove[indice]);
      // }
      
            // EXERCÍCIO DE CONVERÇÃO DE PORTUGOL PARA JAVASCRIPT
      
            

      