function uniqueCharacterCheck(username){
    var set=new Set(username)
    if(set.size===username.length){
        console.log("The input string contain unique character");
    }
    else console.log(("The input string conatain duplicate string"));
}
uniqueCharacterCheck("Rohit")