var n=[
    {
        name:'Tiger',
        type:'Wild_Animal'
    },
    {
        name:'Pigeon',
        type:'Birds'
    },
    {
        name:'Elephant',
        type:'Wild_Animal'
    },
    {
        name:'Cat',
        type:'Domestic_Animal'
    },
    
    {
        name:'Eagle',
        type:'Birds'
    } ,
    {
    	name:'Dog',
        type:'Domestic_Animal'
    }
]

a=[]
b=[]

n.forEach(e => {
    if(e.type == 'Wild_Animal')
        a.push(e.name)
    else
        b.push(e.name)
})

var c=[]
c.birds=b
c.animals=a

console.log(c)
