function generateOtp(){
    let otp=""
    for(var i=0;i<4;i++){
        otp+=Math.floor(Math.random()*10)
    }
    console.log("4 digit otp is ",otp);
}
generateOtp()