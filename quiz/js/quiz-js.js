//Esconde todas as perguntas ta tela iniciar, só mostrando o titulo do quiz e o botão de iniciar
document.getElementById('q1').style.display = "none";
document.getElementById('q2').style.display = "none";
document.getElementById('q3').style.display = "none";
document.getElementById('q4').style.display = "none";
document.getElementById('q5').style.display = "none";
//Esconde o placar de pontuacao
document.getElementById('pontuacao').style.display = "none";

document.getElementById('proximo').style.display = "none";

document.getElementById('verificacaoresposta').style.display = "none";

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
var resposta5 = ["3 Títulos","4 Títulos","5 Títulos","6 Títulos"]
const gabarito5 = "5 Títulos";

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
    document.getElementById('q1').style.display = "none";
    document.getElementById('q2').style.display = "none";
    document.getElementById('q3').style.display = "none";
    document.getElementById('q4').style.display = "none";
    document.getElementById('q5').style.display = "none";
    
  

    if(cliquesproximo===1)
    {   console.log("clk1");
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

    if(cliquesproximo===2)
    {   console.log("clk2");
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
}
//--------------------------------------------------------------------------

//Quando o usuário apertar o botão comecar aparece uma pergunta
document.getElementById("btn-comecar").onclick = function() {start()};

function start() {
    //Esconde o início e mostra o placar
    document.getElementById('inicio').style.display = "none";
    document.getElementById('pontuacao').style.display = "block"; 
    //Mostra o painel que verifica se a resposta está certa ou errada
    document.getElementById('verificacaoresposta').style.display = "block";
    //Mostra o botão de ir para a próxima pergunta
    document.getElementById('proximo').style.display = "block";

    

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

    //------------------------------------------------------
    
   
    if(cliquesproximo===0)
    {   console.log("clk0");
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





// Função de embaralhar o Array ------------------------------
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
function reply_click(clicked_class)
{
    console.log(clicked_class);

    //Transforma o valor da classe clicada em um número para poder ser comparado
    numerobotao = Number(clicked_class);
    
    //Confere se quem está sendo exibido é a pergunta 1
    if(q1.style.display === "block")
    {   
        //Confere se o botão clicado é igual onde está a resposta no array index
        if(numerobotao===index1)
        {   //Caso positivo mostra que a resposta está correta
            console.log("resposta correta");
            document.getElementById("verificacaoresposta").innerHTML = "A resposta está: Certa";
            document.getElementById("verificacaoresposta").style.backgroundColor = "green";
            
            //Dá 5 pontos caso a pessoa acerte de primeira
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
}





