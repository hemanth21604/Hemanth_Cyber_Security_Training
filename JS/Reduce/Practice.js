a=[4,8,3,2,1,6];
/*b=a.reduce((a,sum)=>
{
    console.log('a:',a)
    console.log('sum:',sum)

    return a*sum
},1)
console.log(b)*/

/*total=a.filter(e=>e%2==0).reduce((a,b)=>a+b)
console.log('Total of even Numbers:',total)*/


users=[{'uid':1,'Name':'Hemanth','Age':20,'Gender':'Male','Salary':200000},
{'uid':2,'Name':'Jeeva','Age':22,'Gender':'Male','Salary':27960},
{'uid':3,'Name':'Shanmugam','Age':23,'Gender':'Male','Salary':450000},
{'uid':4,'Name':'Kiruba','Age':26,'Gender':'Male','Salary':890000},
{'uid':5,'Name':'Sandy','Age':28,'Gender':'female','Salary':670000}]

/*let users={'uid':1,'Name':'Hemanth','Age':20,'Gender':'Male','Salary':200000};

function myfun({uid,Name,Age,Gender,Salary})
{
    console.log(uid)
    console.log(Name)
    console.log(Age)
    console.log(Gender)
    console.log(Salary)
}
myfun(users)*/

a=users.filter(e=>e.Gender=='female').reduce((a,{Salary})=>a+Salary,0)

console.log(a)