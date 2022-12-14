//Esconde todas as perguntas da tela iniciar, só mostrando o titulo do quiz e o botão de iniciar
document.getElementById('q1').style.display = "none";
document.getElementById('q2').style.display = "none";
document.getElementById('q3').style.display = "none";
document.getElementById('q4').style.display = "none";
document.getElementById('q5').style.display = "none";
//Esconde o placar de pontuacao
document.getElementById('pontuacao').style.display = "none";

document.getElementById('proximo').style.display = "none";

document.getElementById('verificacaoresposta').style.display = "none";

document.getElementById('contadorperguntas').style.display = "none";

document.getElementById('mensagemfinal').style.display = "none";

var contadorperguntas = 0;

var score = 0;

var cliques = 0;

var cliquesproximo = 0;

//Array com as respostas da pergunta 1
var resposta1 = ["765 Gols","1006 Gols","1195 Gols","972 Gols"]
const gabarito1 = "765 Gols";

//Array com as respostas da pergunta 2
var resposta2 = ["1990","1994","1998","2002"]
const gabarito2 = "1994";

//Array com as respostas da pergunta 3
var resposta3 = ["10","6","7","9"]
const gabarito3 = "10";

//Array com as respostas da pergunta 4
var resposta4 = ["35km/h","44km/h","60km/h","50km/h"]
const gabarito4 = "44km/h";

//Array com as respostas da pergunta 5
var resposta5 = ["1920","1958","1946","1922"]
const gabarito5 = "1920";

//Array para embaralhar a ordem das perguntas
var ordemperguntas = [1,2,3,4,5]

//Chama a função para embaralhar as perguntas
shuffle(ordemperguntas);

//Chama a função de embaralhar as respostas
shuffle(resposta1);

shuffle(resposta2);

shuffle(resposta3);

shuffle(resposta4);

shuffle(resposta5);

//Quando o usuário apertar o botão próximo soma 1 a variavel cliques proximo
document.getElementById("proximo").onclick = function() {next()};

function next()
{
    cliquesproximo = cliquesproximo+1;
    console.log(cliquesproximo);
    //Zera as tentativas que o usuário tentou na resposta anterior
    cliques = 0;
    //Esconde todas as perguntas ao clicar em próximo, antes de exibir a próxima
    document.getElementById('q1').style.display = "none";
    document.getElementById('q2').style.display = "none";
    document.getElementById('q3').style.display = "none";
    document.getElementById('q4').style.display = "none";
    document.getElementById('q5').style.display = "none";
    //Zera o estilo do verificador da resposta (se está certa ou errada)
    document.getElementById("verificacaoresposta").innerHTML = "A resposta está: ";
    document.getElementById("verificacaoresposta").style.backgroundColor = "black";

    
    
  
    //Caso tenha clicado 1x no botão próximo (Exibe a 2 pergunta sorteada)---
    if(cliquesproximo===1)
    {   console.log("clk1");
        document.getElementById("contadorperguntas").innerHTML = "Pergunta 2 de 5";
        if(ordemperguntas[1]===1)
        {
        document.getElementById('q1').style.display = "block";
        } 
        if(ordemperguntas[1]===2)
        {
        document.getElementById('q2').style.display = "block";
        } 
        if(ordemperguntas[1]===3)
        {
        document.getElementById('q3').style.display = "block";
        } 
        if(ordemperguntas[1]===4)
        {
        document.getElementById('q4').style.display = "block";
        } 
        if(ordemperguntas[1]===5)
        {
        document.getElementById('q5').style.display = "block";
        } 
    }
    //Caso tenha clicado 2x no botão próximo (Exibe a 3 pergunta sorteada)-------
    if(cliquesproximo===2)
    {   console.log("clk2");
        document.getElementById("contadorperguntas").innerHTML = "Pergunta 3 de 5";
        if(ordemperguntas[2]===1)
        {
        document.getElementById('q1').style.display = "block";
        } 
        if(ordemperguntas[2]===2)
        {
        document.getElementById('q2').style.display = "block";
        } 
        if(ordemperguntas[2]===3)
        {
        document.getElementById('q3').style.display = "block";
        } 
        if(ordemperguntas[2]===4)
        {
        document.getElementById('q4').style.display = "block";
        } 
        if(ordemperguntas[2]===5)
        {
        document.getElementById('q5').style.display = "block";
        } 
    }
    //Caso tenha clicado 3x no botão próximo (Exibe a 4 pergunta sorteada)----
    if(cliquesproximo===3)
    {   console.log("clk3");
        document.getElementById("contadorperguntas").innerHTML = "Pergunta 4 de 5";
        if(ordemperguntas[3]===1)
        {
        document.getElementById('q1').style.display = "block";
        } 
        if(ordemperguntas[3]===2)
        {
        document.getElementById('q2').style.display = "block";
        } 
        if(ordemperguntas[3]===3)
        {
        document.getElementById('q3').style.display = "block";
        } 
        if(ordemperguntas[3]===4)
        {
        document.getElementById('q4').style.display = "block";
        } 
        if(ordemperguntas[3]===5)
        {
        document.getElementById('q5').style.display = "block";
        } 
    }
    //Caso tenha clicado 4x no botão próximo (Exibe a 5 pergunta sorteada)----
    if(cliquesproximo===4)
    {   console.log("clk4");
        document.getElementById("contadorperguntas").innerHTML = "Pergunta 5 de 5";
        if(ordemperguntas[4]===1)
        {
        document.getElementById('q1').style.display = "block";
        } 
        if(ordemperguntas[4]===2)
        {
        document.getElementById('q2').style.display = "block";
        } 
        if(ordemperguntas[4]===3)
        {
        document.getElementById('q3').style.display = "block";
        } 
        if(ordemperguntas[4]===4)
        {
        document.getElementById('q4').style.display = "block";
        } 
        if(ordemperguntas[4]===5)
        {
        document.getElementById('q5').style.display = "block";
        } 
    }

    //Caso tenha clicado 5x no botão próximo
    //Esconde tudo e só mostra o score e a mensagem final
    if(cliquesproximo===5)
    {
    document.getElementById('q1').style.display = "none";
    document.getElementById('q2').style.display = "none";
    document.getElementById('q3').style.display = "none";
    document.getElementById('q4').style.display = "none";
    document.getElementById('q5').style.display = "none";
    document.getElementById('pontuacao').style.display = "block";
    document.getElementById('mensagemfinal').style.display = "block";
    document.getElementById('proximo').style.display = "none";
    document.getElementById('verificacaoresposta').style.display = "none";
    document.getElementById('contadorperguntas').style.display = "none";

    }
}
//--------------------------------------------------------------------------

//Quando o usuário apertar o botão comecar aparece uma pergunta ------------
document.getElementById("btn-comecar").onclick = function() {start()};

function start() {
    //Esconde o início e mostra o placar
    document.getElementById('inicio').style.display = "none";
    document.getElementById('pontuacao').style.display = "block"; 
    //Mostra o painel que verifica se a resposta está certa ou errada
    document.getElementById('verificacaoresposta').style.display = "block";
    //Mostra o botão de ir para a próxima pergunta
    document.getElementById('proximo').style.display = "block";

//---------------------------------------------------------------------------
    

    //Coloca as respostas embaralhadas nos respectivos botões 
    document.getElementById("r1").innerHTML = resposta1[0];
    document.getElementById("r2").innerHTML = resposta1[1];
    document.getElementById("r3").innerHTML = resposta1[2];
    document.getElementById("r4").innerHTML = resposta1[3];

    document.getElementById("r5").innerHTML = resposta2[0];
    document.getElementById("r6").innerHTML = resposta2[1];
    document.getElementById("r7").innerHTML = resposta2[2];
    document.getElementById("r8").innerHTML = resposta2[3];

    document.getElementById("r9").innerHTML = resposta3[0];
    document.getElementById("r10").innerHTML = resposta3[1];
    document.getElementById("r11").innerHTML = resposta3[2];
    document.getElementById("r12").innerHTML = resposta3[3];

    document.getElementById("r13").innerHTML = resposta4[0];
    document.getElementById("r14").innerHTML = resposta4[1];
    document.getElementById("r15").innerHTML = resposta4[2];
    document.getElementById("r16").innerHTML = resposta4[3];

    document.getElementById("r17").innerHTML = resposta5[0];
    document.getElementById("r18").innerHTML = resposta5[1];
    document.getElementById("r19").innerHTML = resposta5[2];
    document.getElementById("r20").innerHTML = resposta5[3];

    //-------------------------------------------------------------------
    
    //Se a contagem de cliques do botão próximo for igual a 0, ele põe a primeira
    //pergunta sorteada (dentro do array) para aparecer
    //Ou seja, a primeira vez que o arquivo é carregado e o usuário clica em começar
    if(cliquesproximo===0)
    {   console.log("clk0");
        document.getElementById('contadorperguntas').style.display = "block";
        document.getElementById("contadorperguntas").innerHTML = "Pergunta 1 de 5";
        if(ordemperguntas[0]===1)
        {
        document.getElementById('q1').style.display = "block";
        } 
        if(ordemperguntas[0]===2)
        {
        document.getElementById('q2').style.display = "block";
        } 
        if(ordemperguntas[0]===3)
        {
        document.getElementById('q3').style.display = "block";
        } 
        if(ordemperguntas[0]===4)
        {
        document.getElementById('q4').style.display = "block";
        } 
        if(ordemperguntas[0]===5)
        {
        document.getElementById('q5').style.display = "block";
        } 
        
    }
}





// Função de embaralhar os Arrays ------------------------------
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
//-------------------------------------------------------------


  

// Localiza Onde em cada Array está a resposta correta --------
let index1 = resposta1.indexOf(gabarito1);
console.log(index1);

let index2 = resposta2.indexOf(gabarito2);
console.log(index2);

let index3 = resposta3.indexOf(gabarito3);
console.log(index3);

let index4 = resposta4.indexOf(gabarito4);
console.log(index4);

let index5 = resposta5.indexOf(gabarito5);
console.log(index5);

//--------------------------------------------------------------


//Essa função retorna a classe do botão que foi apertado que vai de 0 a 3
//Classe referente aos 4 botões de resposta 
function reply_click(clicked_class)
{
    console.log(clicked_class);

    //Transforma o valor da classe clicada em um número para poder ser comparado
    numerobotao = Number(clicked_class);
    
    //Confere se quem está sendo exibido é a pergunta 1 -------------------------
    if(q1.style.display === "block")
    {   
        //Confere se o botão clicado é igual onde está a resposta no array index
        if(numerobotao===index1)
        {   //Caso positivo mostra que a resposta está correta
            console.log("resposta correta");
            document.getElementById("verificacaoresposta").innerHTML = "A resposta está: Certa";
            document.getElementById("verificacaoresposta").style.backgroundColor = "green";
            
            //Dá 5 pontos caso a pessoa acerte a pergunta de primeira
            //Caso ela erre, não ganha nenhum ponto
            //Os cliques são zerados toda vez que muda a pergunta
            if(cliques===0)
            {
                score=score+5;
                cliques = cliques +1;
                document.getElementById("pontuacao").innerHTML = score;
                
            }
  
        }
        else
        {   //Caso negativo mostra que a resposta está errada
            console.log("Resposta Errada")
            document.getElementById("verificacaoresposta").innerHTML = "A resposta está: Errada";
            document.getElementById("verificacaoresposta").style.backgroundColor = "red";
            document.getElementById("pontuacao").innerHTML = score;
            cliques=cliques+1;
            
        }
    }
    //Fim da conferência se é a pergunta 1 que está sendo exibida------------------------------



    //Confere se quem está sendo exibido é a pergunta 2 ---------------------------------------
    if(q2.style.display === "block")
    {   
        //Confere se o botão clicado é igual onde está a resposta no array index
        if(numerobotao===index2)
        {   //Caso positivo mostra que a resposta está correta
            console.log("resposta correta");
            document.getElementById("verificacaoresposta").innerHTML = "A resposta está: Certa";
            document.getElementById("verificacaoresposta").style.backgroundColor = "green";
            
            //Dá 5 pontos caso a pessoa acerte a pergunta de primeira
            //Caso ela erre, não ganha nenhum ponto
            //Os cliques são zerados toda vez que muda a pergunta
            if(cliques===0)
            {
                score=score+5;
                cliques = cliques +1;
                document.getElementById("pontuacao").innerHTML = score;
                
            }
  
        }
        else
        {   //Caso negativo mostra que a resposta está errada
            console.log("Resposta Errada")
            document.getElementById("verificacaoresposta").innerHTML = "A resposta está: Errada";
            document.getElementById("verificacaoresposta").style.backgroundColor = "red";
            document.getElementById("pontuacao").innerHTML = score;
            cliques=cliques+1;
            
        }
    }
    //Fim da conferência se é a pergunta 2 que está sendo exibida------------------------------


    //Confere se quem está sendo exibido é a pergunta 3 ---------------------------------------
    if(q3.style.display === "block")
    {   
        //Confere se o botão clicado é igual onde está a resposta no array index
        if(numerobotao===index3)
        {   //Caso positivo mostra que a resposta está correta
            console.log("resposta correta");
            document.getElementById("verificacaoresposta").innerHTML = "A resposta está: Certa";
            document.getElementById("verificacaoresposta").style.backgroundColor = "green";
            
            //Dá 5 pontos caso a pessoa acerte a pergunta de primeira
            //Caso ela erre, não ganha nenhum ponto
            //Os cliques são zerados toda vez que muda a pergunta
            if(cliques===0)
            {
                score=score+5;
                cliques = cliques +1;
                document.getElementById("pontuacao").innerHTML = score;
                
            }
  
        }
        else
        {   //Caso negativo mostra que a resposta está errada
            console.log("Resposta Errada")
            document.getElementById("verificacaoresposta").innerHTML = "A resposta está: Errada";
            document.getElementById("verificacaoresposta").style.backgroundColor = "red";
            document.getElementById("pontuacao").innerHTML = score;
            cliques=cliques+1;
            
        }
    }
    //Fim da conferência se é a pergunta 3 que está sendo exibida------------------------------


    //Confere se quem está sendo exibido é a pergunta 4 ---------------------------------------
    if(q4.style.display === "block")
    {   
        //Confere se o botão clicado é igual onde está a resposta no array index
        if(numerobotao===index4)
        {   //Caso positivo mostra que a resposta está correta
            console.log("resposta correta");
            document.getElementById("verificacaoresposta").innerHTML = "A resposta está: Certa";
            document.getElementById("verificacaoresposta").style.backgroundColor = "green";
            
            //Dá 5 pontos caso a pessoa acerte a pergunta de primeira
            //Caso ela erre, não ganha nenhum ponto
            //Os cliques são zerados toda vez que muda a pergunta
            if(cliques===0)
            {
                score=score+5;
                cliques = cliques +1;
                document.getElementById("pontuacao").innerHTML = score;
                
            }
  
        }
        else
        {   //Caso negativo mostra que a resposta está errada
            console.log("Resposta Errada")
            document.getElementById("verificacaoresposta").innerHTML = "A resposta está: Errada";
            document.getElementById("verificacaoresposta").style.backgroundColor = "red";
            document.getElementById("pontuacao").innerHTML = score;
            cliques=cliques+1;
            
        }
    }
    //Fim da conferência se é a pergunta 4 que está sendo exibida------------------------------


    //Confere se quem está sendo exibido é a pergunta 5 ---------------------------------------
    if(q5.style.display === "block")
    {   
        //Confere se o botão clicado é igual onde está a resposta no array index
        if(numerobotao===index5)
        {   //Caso positivo mostra que a resposta está correta
            console.log("resposta correta");
            document.getElementById("verificacaoresposta").innerHTML = "A resposta está: Certa";
            document.getElementById("verificacaoresposta").style.backgroundColor = "green";
            
            //Dá 5 pontos caso a pessoa acerte a pergunta de primeira
            //Caso ela erre, não ganha nenhum ponto
            //Os cliques são zerados toda vez que muda a pergunta
            if(cliques===0)
            {
                score=score+5;
                cliques = cliques +1;
                document.getElementById("pontuacao").innerHTML = score;
                
            }
  
        }
        else
        {   //Caso negativo mostra que a resposta está errada
            console.log("Resposta Errada")
            document.getElementById("verificacaoresposta").innerHTML = "A resposta está: Errada";
            document.getElementById("verificacaoresposta").style.backgroundColor = "red";
            document.getElementById("pontuacao").innerHTML = score;
            cliques=cliques+1;
            
        }
    }
    //Fim da conferência se é a pergunta 5 que está sendo exibida------------------------------
}





