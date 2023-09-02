s=[1,2,3,4]
d=s.reduce((a,b)=>a+b)


stu=[{'Name':'Hemanth' ,'age':19},{'Name':'Kiruba' ,'age':22},{'Name':'Shanmugam' ,'age':52},{'Name':'kavin' ,'age':63}]
d=stu.map(e=>e.sal=e.age*1000)


f = stu.map(e=>{
    a={}
    a.Name='Mr.'+e.Name
    a.age=e.age
    a.sal=e.age+500
    return a
})
f.forEach(e=>console.log(e))

