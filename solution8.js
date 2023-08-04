const currentDate=new Date(2023,7,4)
const eventDate=new Date(2023,7,9)
let days=Math.abs((eventDate.getTime()-currentDate.getTime())/(1000*24*60*60))
console.log("remaining days is ",days);