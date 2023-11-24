// Tables Function with ForLoop :->


function table(tableno){
    for (let table = tableno; table<=tableno*10; table=table + tableno) {
    console.log(table);
    };
};
table(3);

    



// Tables Function with WhileLoop :->
 /*
function table(tableno){
    let table= tableno;
    while(table<=tableno*10){
        console.log(table);
        table += tableno;
    };
};
table(2)
// */


// Tables Function with DoWhileLoop :->
/*
function table(tableno){
    let table = tableno;
    do{
        console.log(table);
        table+=tableno;
    }while(table<= tableno*10);
};
table(10);
*/

const array =[2, 3,-5, -6, 5, 3, 8, 9];

const firstnegetive = (num)=>{
return num=8 ;
};
let negative= array.indexOf(firstnegetive);
console.log(negative);