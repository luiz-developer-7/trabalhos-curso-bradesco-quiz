document.getElementById('q1').style.display = "none";
document.getElementById('q2').style.display = "none";
document.getElementById('q3').style.display = "none";
document.getElementById('q4').style.display = "none";
document.getElementById('q5').style.display = "none";



document.getElementById("btn-comecar").onclick = function() {start()};

function start() {
    document.getElementById('inicio').style.display = "none"; 
    document.getElementById('q1').style.display = "block"; 
}
