function check(username){
    let usernameList=["Raj","Rahul","Rinku","Rakesh","Aman","Rajdeep","Arav"]
    if(usernameList.includes(username)){
        console.log("yes,",username,"is a valid user");
    }
    else {
        console.log(username,"is not valid user");
    }

}
check("Raj")
check("Raju")