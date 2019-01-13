$(document).ready(function() {

    resetGame();

    $(".cards").on("click",function() {



        if (playerScore===0) {
            $("#status").fadeOut();
        }


        addScore($(this).attr("id"));

        if (playerScore === randomScore) {
            wins++;
            $("#status").html("You Win!");
            $("#status").fadeIn();
            resetGame();
        }
        else if (playerScore > randomScore) {
            losses++;
            $("#status").html("You Lose!");
            $("#status").fadeIn();
            resetGame();
        }
});
})


    var playerScore;
    var randomScore;
    var wins = 0;
    var losses = 0;

    var kingsCard = new Card();
    var sensCard = new Card();
    var jetsCard = new Card();
    var oilersCard = new Card();


    function Card (value) {
        this.value = value;
    }

    function addScore(Card) {
        switch(Card) {
            case "kings":
                playerScore += kingsCard.value;
                break;
            case "sens":
                playerScore += sensCard.value;
                break;
            case "jets":
                playerScore += jetsCard.value;
                break;
            case "oilers":
                playerScore += oilersCard.value;
                break;
        }

        $("#playerScore").html(playerScore);
    }

    function resetGame() {
        var powersArr = [];
        playerScore = 0;
        randomScore = Math.floor(Math.random() * 104) + 19;

        kingsCard.value = getRandomPower(powersArr);
        sensCard.value = getRandomPower(powersArr);
        jetsCard.value = getRandomPower(powersArr);
        oilersCard.value = getRandomPower(powersArr);
    

        $("#playerScore").html(playerScore);
        $("#randomScore").html(randomScore);
        $("#wins").html(wins);
        $("#losses").html(losses);

    }

    function getRandomPower(pa) {
        var power;

        do {
            power = Math.floor(Math.random() * 8)+1;
        } while(pa.includes(power));

        pa.push(power);

        return power;

    }

