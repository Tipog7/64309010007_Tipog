let Table = 
[
    {
        "employeeID": "10001",
        "fullname": "นางสาวชนิสา ไกรรอด",
        "department": "ไอที",
        "rank": "System Engineer",
        "salary": 42000,
        "bonus": "S"
    },
    {
        "employeeID": "10002",
        "fullname": "นายวศพล สิริอนันต์",
        "department": "ไอที",
        "rank": "System Engineer",
        "salary": 13000,
        "bonus": "A"
    },
    {
        "employeeID": "10003",
        "fullname": "นางจิราพร อินทรประเสริฐ",
        "department": "ฝ่ายบุคคล",
        "rank": "HR",
        "salary": 9000,
        "bonus": "C"
    },
    {
        "employeeID": "10004",
        "fullname": "นางสาวพิมพา กาญจนมาศ",
        "department": "ฝ่ายบุคคล",
        "rank": "HR",
        "salary": 21000,
        "bonus": "B"
    },
    {
        "employeeID": "10005",
        "fullname": "นายจิรโชติ วัฒนโกศล",
        "department": "ฝ่ายบุคคล",
        "rank": "HR",
        "salary": 22000,
        "bonus": "A"
    },
    {
        "employeeID": "10006",
        "fullname": "นายธัชพล ขจรเกียรติสกุล",
        "department": "การเงิน",
        "rank": "Account",
        "salary": 12000,
        "bonus": "S"
    },
    {
        "employeeID": "10007",
        "fullname": "นายธนวิทย์ สุวรรณโชติ",
        "department": "การเงิน",
        "rank": "Account",
        "salary": 14000,
        "bonus": "A"
    },
    {
        "employeeID": "10008",
        "fullname": "นางพัชรียา สําราญทรัพย",
        "department": "การเงิน",
        "rank": "Account",
        "salary": 50000,
        "bonus": "C"
    },
    {
        "employeeID": "10009",
        "fullname": "นางสาวขวัญชนก ธาดาวรวงศ์",
        "department": "ไอที",
        "rank": "System Engineer",
        "salary": 16000,
        "bonus": "A"
    }
]

let level = [
{
    "level": "S",
    "Bonus": 1.4
},
{
    "level": "A",
    "Bonus": 1.2
},
{
    "level": "B",
    "Bonus": 1.0
},
{
    "level": "C",
    "Bonus": 0.8
}]

employee1=(Math.ceil(Table[0].salary * level[0].Bonus *12))
employee2=(Math.ceil(Table[1].salary * level[1].Bonus *12))
employee3=(Math.ceil(Table[2].salary * level[3].Bonus *12))
employee4=(Math.ceil(Table[3].salary * level[2].Bonus *12))
employee5=(Math.ceil(Table[4].salary * level[1].Bonus *12))
employee6=(Math.ceil(Table[5].salary * level[0].Bonus *12))
employee7=(Math.ceil(Table[6].salary * level[1].Bonus *12))
employee8=(Math.ceil(Table[7].salary * level[3].Bonus *12))
employee9=(Math.ceil(Table[8].salary * level[1].Bonus *12))

Total = [employee1,employee2,employee3,employee4,employee5,employee6,employee7,employee8,employee9]

if (Total<200000){
    console.log(Table.fullname)

}
