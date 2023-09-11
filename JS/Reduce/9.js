var n=[
    {name:'hemanth',salary:75000},
    {name:'tamil',salary:50000},
    {name:'mani',salary:60000},
    {name:'karthee',salary:55000}
]

sal=n.reduce((a,b) => a+b.salary,0)

console.log(sal)
