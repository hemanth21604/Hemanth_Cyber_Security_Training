var n=[
    {name:'pant',price:2000},
    {name:'T-shirt',price:750},
    {name:'Bracelite',price:900},
    {name:'Shoes',price:700},
    {name:'Watches',price:200},
    {name:'Drawyers',price:300}
]

m=n.reduce((a,b)=> a+b.price,0)

console.log(m)
