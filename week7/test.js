let Table = 
[
    {
        "employeeID": "10001",
        "FullName": "นางสาวชนิสา ไกรรอด",
        "department": "ไอที",
        "rank": "System Engineer",
        "Salary": 42000,
        "bonus": "S"
    },
    {
        "employeeID": "10002",
        "FullName": "นายวศพล สิริอนันต์",
        "department": "ไอที",
        "rank": "System Engineer",
        "Salary": 13000,
        "bonus": "A"
    },
    {
        "employeeID": "10003",
        "FullName": "นางจิราพร อินทรประเสริฐ",
        "department": "ฝ่ายบุคคล",
        "rank": "HR",
        "Salary": 9000,
        "bonus": "C"
    },
    {
        "employeeID": "10004",
        "FullName": "นางสาวพิมพา กาญจนมาศ",
        "department": "ฝ่ายบุคคล",
        "rank": "HR",
        "Salary": 21000,
        "bonus": "B"
    },
    {
        "employeeID": "10005",
        "FullName": "นายจิรโชติ วัฒนโกศล",
        "department": "ฝ่ายบุคคล",
        "rank": "HR",
        "Salary": 22000,
        "bonus": "A"
    },
    {
        "employeeID": "10006",
        "FullName": "นายธัชพล ขจรเกียรติสกุล",
        "department": "การเงิน",
        "rank": "Account",
        "Salary": 12000,
        "bonus": "S"
    },
    {
        "employeeID": "10007",
        "FullName": "นายธนวิทย์ สุวรรณโชติ",
        "department": "การเงิน",
        "rank": "Account",
        "Salary": 14000,
        "bonus": "A"
    },
    {
        "employeeID": "10008",
        "FullName": "นางพัชรียา สําราญทรัพย์",
        "department": "การเงิน",
        "rank": "Account",
        "Salary": 50000,
        "bonus": "C"
    },
    {
        "employeeID": "10009",
        "FullName": "นางสาวขวัญชนก ธาดาวรวงศ์",
        "department": "ไอที",
        "rank": "System Engineer",
        "Salary": 16000,
        "bonus": "A"
    }
]

let sum01 = 0 // โบนัสพนักงาน
let sum02 = 0 // โบนัสที่ต้องจ่ายทั้งหมด
let sum03 = 0 // เก็บค่าผลรวมเงินเดือนพนักงาน 12 เดือน
let sum04 = 0 // รายได้สุทธิต่อปี
let sum05 = 0 // ร่ายจ่ายต่อปี
let sum06 = 0 // ภาษีที่ต้องจ่าย
let sum07 = 0

for(i=0;i<Table.length;i++){
    if(Table[i].bonus== "S"){
        sum01 = Table[i].Salary*1.6;
        sum02 += sum01;
    }else if(Table[i].bonus == "A"){
        sum01 = Table[i].Salary*1.3;
        sum02 += sum01;
    }else if(Table[i].bonus== "B"){
        sum01 = Table[i].Salary*1.0;
        sum02 += sum01;
    }else if(Table[i].bonus == "C"){
        sum01 = Table[i].Salary*0.8;
        sum02 += sum01;
    }
    sum03 = Table[i].Salary*12;
    sum04 = sum03+sum02
    sum05 += sum04;
    
    if(sum04<200000){
    }else if(sum04>200000&&sum04<500000){
        sum06 = sum04*0.07;
        sum07 += sum06;
    }else if(sum04>500000&&sum04<1000000){
        sum06 = sum04*0.20;
        sum07 += sum06;
    }else if(sum04>1000000){
        sum06 = sum04*0.30;
        sum07 += sum06;
    }
    console.log(Table[i].FullName,"มีรายได้สุทธิต่อปี =",sum04,"บาท","ต้องจ่ายภาษี",sum06,"บาท","ได้โบนัส",sum01);
    
}
console.log('----------------------------------------------------------')
console.log("ภาษีที่ต้องจ่าย เฉพาะพนักงานแผนกไอที")
for(i=0;i<Table.length;i++){
    if(Table[i].department=="ไอที"){
        console.log(Table[i].FullName,"ภาษีที่ต้องจ่าย",sum06);
    }
} 

console.log('----------------------------------------------------------')
console.log("ผลประเมิน S")

for(i=0;i<Table.length;i++){
    if(Table[i].bonus=="S"){
        console.log(Table[i].FullName,"ผลประเมิน",Table[i].bonus);
    }
}   

console.log('----------------------------------------------------------')
console.log("บริษัทต้องจ่ายภาษีทั้งหมด :",sum07)
console.log('----------------------------------------------------------')
console.log("โบนัสที่ต้องให้พนักงานทั้งหมด :",sum02)
console.log('----------------------------------------------------------')
console.log("รายจ่ายต่อปีของบริษัท :",sum05)
console.log('----------------------------------------------------------')
