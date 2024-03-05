
function calcu () {

    const nombre = document.getElementById("nombre");

    var bw1 = document.getElementById("bw1").value;
    var bl1 = document.getElementById("bl1").value;
    var bh1 = document.getElementById("bh1").value;
    var pw1 = document.getElementById("pw1").value;
    var pl1 = document.getElementById("pl1").value;
    var ph1 = document.getElementById("ph1").value;

    
    var option1 = (parseInt(bw1/pw1)*parseInt(bl1/pl1)*parseInt(bh1/ph1));
    var option2 = (parseInt(bw1/pl1)*parseInt(bl1/pw1)*parseInt(bh1/ph1));
    var option3 = (parseInt(bw1/ph1)*parseInt(bl1/pl1)*parseInt(bh1/pw1));
    var option4 = (parseInt(bw1/pl1)*parseInt(bl1/ph1)*parseInt(bh1/pw1));
    var option5 = (parseInt(bw1/pw1)*parseInt(bl1/ph1)*parseInt(bh1/pl1));
    var option6 = (parseInt(bw1/ph1)*parseInt(bl1/pw1)*parseInt(bh1/pl1));


    console.log("Vr option 1 = " + option1);
    console.log("Vr option 2 = " + option2);
    console.log("Vr option 3 = " + option3);
    console.log("Vr option 4 = " + option4);
    console.log("Vr option 5 = " + option5);
    console.log("Vr option 6 = " + option6); 

    var bestOptionv = (Math.max(option1, option2, option3, option4, option5, option6))

    if(bestOptionv === option1){
        bestOption = option1
    } else if (bestOptionv === option2){
        bestOption = "option2"
    } else if (bestOptionv === option3){
        bestOption = "option3"
    } else if (bestOptionv === option4){
        bestOption = "option4"
    } else if (bestOptionv === option5){
        bestOption = "option5"
    } else if (bestOptionv === option6){
        bestOption = "option6"
    }




    console.log("The Highest value is: "+ bestOptionv + ", is the " + bestOption);

    document.getElementById("resultado").innerHTML = ("The best option allows you to fill the box with: " + bestOptionv + " units of products.");






}
