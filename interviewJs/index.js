const users =[
{
    id:1,
    name:"Ajay",
    isAcrive:true,
    age:20
},
{
    id:2,
    name:"Sanjay",
    isactive:false,
    age:19
},
{
    id:3,
    name:"Kuldeep",
    isActive:true,
    age:24,
},
{
    id:4,
    name:"Sandeep",
    isActive:false,
    age:33
}
]

const names = []
for(i=0; i<users.length; i++){
    names.push(i);
}
console.log(names);