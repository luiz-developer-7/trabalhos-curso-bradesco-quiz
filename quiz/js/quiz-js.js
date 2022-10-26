//Esconde todas as perguntas ta tela iniciar, só mostrando o titulo do quiz e o botão de iniciar
document.getElementById('q1').style.display = "none";
document.getElementById('q2').style.display = "none";
document.getElementById('q3').style.display = "none";
document.getElementById('q4').style.display = "none";
document.getElementById('q5').style.display = "none";
//Esconde o placar de pontuacao
document.getElementById('pontuacao').style.display = "none";

//Array com as respostas da pergunta 1
var resposta1 = ["765 Gols","1006 Gols","1195 Gols","972 Gols"]

//Chama a função de embaralhar as respostas
shuffle(resposta1);

//Quando o usuário apertar o botão comecar aparece um pergunta
document.getElementById("btn-comecar").onclick = function() {start()};

function start() {
    document.getElementById('inicio').style.display = "none";
    document.getElementById('pontuacao').style.display = "block"; 
    document.getElementById('q1').style.display = "block";
    //Coloca as respostas embaralhadas nos respectivos botões 
    document.getElementById("r1").innerHTML = resposta1[0];
    document.getElementById("r2").innerHTML = resposta1[1];
    document.getElementById("r3").innerHTML = resposta1[2];
    document.getElementById("r4").innerHTML = resposta1[3];
}




// Função de embaralhar o Array
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
  
