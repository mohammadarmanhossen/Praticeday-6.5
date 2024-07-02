
//40-49=C, 50-59=B, 60-69=A-, 70-79=A, 80-100=A+//


var restult=40;

if(restult<40){
    console.log("Failled");
}
else if(restult>=40 && restult<50){
    console.log("Ggrade:C")
}
else if(restult>=50 && restult<60){
    console.log("Ggrade:B")
}
else if(restult>=60 && restult<70){
    console.log("Ggrade:A-")
}
else if(restult>=70 && restult<80){
    console.log("Ggrade:A")
}
else if(restult>=80 && restult<=100){
    console.log("Ggrade:A+")
}
else{
    console.log("Invailde Number");
}
