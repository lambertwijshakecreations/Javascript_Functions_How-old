const leefTijd = function(number){
if(number >= 18){
    console.log("true");
} else {
console.log("false");
}
};

const howOld = function(number){
    leefTijd();
    let age = number;
    if(number >= 18){
    return "hallo daar";
} 
    return "Hey kiddo";
};

howOld(18);

