
const students=[
    {
        name:"mithun",
        marks:90
    },
    
    {
        name:"prabir",
        marks:75
    },
    
    {
        name:"Alka",
        marks:92
    },
    
    {
        name:"Shivam",
        marks:70
    },
    
    {
        name:"Farman",
        marks:99
    },
    
];
var student1,student2;

function filterMark(students){
    //filtering who has got more than 90
     student1=students.filter(student=>student.marks>90)
    //filtering who has got less than 90
     student2=students.filter(student=>student.marks<90)
}
function checkOutResult(candidate){
for(var i=0;i<students.length;i++){
   var temp=students[i];
    if(temp.name===candidate&&temp.marks<=90){
    console.log("sorry",candidate,"you have not cleared the exam");
    return
   }
}
for(var i=0;i<students.length;i++){
    var temp=students[i];
     if(temp.name===candidate&&temp.marks>90) {
    console.log("congratulations ,",candidate,"you have cleared the exam");
return
   }
}
    {console.log("Invalid candidate please enter valid name");
   
}

}




filterMark(students)
checkOutResult("prabier")
