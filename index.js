let name = "Adi";
let rollNo = 101;
let course = "MERN";
let marks1 = 85;
let marks2 = 76;
let marks3 = 90;
let choice = 4;
let total = marks1 + marks2 + marks3
let percent = total / 300 * 100
switch(choice){
    case 1 :
        console.log(name,rollNo,course);
        break;
    case 2 :
        console.log("total:",total,"percent",percent);
        break;
    case 3 :
        if (marks1 >= 33 && marks2 >= 33 && marks3 >=33){
            console.log("pass");
        } else {
            console.log("fail");
        }
        break;    
    case 4 :
        if (percent>=90){
            console.log("A+");
        } else if (percent >= 75){
            console.log("A");
        }else if (percent>=60){
            console.log("B");
        }else if (percent >= 33){
            console.log("pass");
        }else {
            console.log("fail");
        }
        break;
        
    case 5 :
        if (percent >= 80 && marks1 >= 33 && marks2 >= 33 && marks3 >=33){
            console.log("Scholarship Approved");
        }else {
            console.log("Scholarship Not Approved");
        }
        break;
    default :
        console.log("invalid choice");
        break;
    }    