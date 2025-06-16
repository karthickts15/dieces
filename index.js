// This part belongs to dice one

var randomnum = Math.floor(Math.random()*6 +1);

var randomImage = "images/dice"+randomnum+".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImage);

// This part belongs to dice 2

var randomnum2 = Math.floor(Math.random()*6 +1);

var randomImage2 = "images/dice"+randomnum2+".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImage2);


if( randomnum > randomnum2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins"
}
else if( randomnum2 > randomnum ){
    document.querySelector("h1").innerHTML= "😎Player 2 Wins"
}
else if ( randomnum === randomnum2){
        document.querySelector("h1").innerHTML= "Draw📍"
}