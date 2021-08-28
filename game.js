score1 = 0;
score2 = 0;
player1 = localStorage.getItem("player1_name");
player2 = localStorage.getItem("player2_name");
function send()
{
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    anskey = parseInt(num1) * parseInt(num2);
    question = "<h4>" + num1 + "X" + num2 + "</h4>";
    answer = "<br>Answer : <input type='text' id='answer'>"
    check = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question + answer + check;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
qturn = "P1"
aturn = "P2"
function check()
{
    get_answer = document.getElementById("answer").value;
    console.log("Answer - " + get_answer);
    if(get_answer == anskey)
    {
        if(aturn == "P1")
        {
            score1 = score1 + 1;
            document.getElementById("P1 score").innerHTML = score1;
        }
        else
        {
            score2 = score2 + 1;
            document.getElementById("P2 score").innerHTML = score2;
        }
    }
    if(qturn == "P1")
    {
        qturn = "P2";
        document.getElementById("challenge_turn").innerHTML = "Question Turn - " + player2;
    }
    else
    {
        qturn = "P1";
        document.getElementById("challenge_turn").innerHTML = "Question Turn - " + player1;
    }
    if(aturn == "P1")
    {
        aturn = "P2";
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player2;
    }
    else
    {
        aturn = "P1";
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player1;
    }
}