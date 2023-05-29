var get_word, word, charAt1, length_divided_2;
var question_turn = "player1";
var answer_turn = "player2";
player1_score = 0;
player2_score = 0;
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML = player1_name + ":  ";
document.getElementById("player2_name").innerHTML = player2_name + ":  ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;


document.getElementById("player_question").innerHTML = "Turno para preguntar : " + player1_name;
document.getElementById("player_answer").innerHTML = " Turno para responder : " + player2_name;



function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("palabra en minuscula = " + word);

    charAt1 = word.charAt(0);
    console.log("palabra en chart = " + charAt1);

    length_divided_2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(length_divided_2);
    console.log(charAt2);

    ultima = word.length - 1;
    charAt3 = word.charAt(ultima);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, " 😝 ");
    remove_charAt2 = remove_charAt1.replace(charAt2, " 😜 ");
    remove_charAt3 = remove_charAt2.replace(charAt3, " 🤪 ");
    console.log(remove_charAt3);


    question_word = "<h4 id='word_display'> " + remove_charAt3 + "</h4>";
    row = question_word;

    document.getElementById("output").innerHTML = row;

}

function comprobar() {
    get_answer = document.getElementById("respuesta").value;
    answer = get_answer.toLowerCase();
    console.log("respuesta con minisculas " + answer)

    if (answer == word) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score

        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score


        }

    }
    if (question_turn == "player1") {
        question_turn = "player2";
        answer_turn = "player1";
        document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player2_name;
        document.getElementById("player_answer").innerHTML = "turno para responder - " + player1_name
    } else {
        question_turn = "player1";
        answer_turn = "player2";
        document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name;
        document.getElementById("player_answer").innerHTML = "turno para responder - " + player2_name

    }
    document.getElementById("output").innerHTML="";
}

function salir(){
window.location.replace("index.html");


}
