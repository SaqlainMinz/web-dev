//dice 1
var randomNumber1=Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
var randomImage1= "./images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

//dice 2
var randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber2);
var randomImage2 ="./images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImage2)

//winner
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="PLayer 1 win🚩"
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="PLayer 2 win🚩"
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw"
}