n=['lamborghini','ferrari','bmw','jaguar','bmw','ferrari','audi','lamborgini','jaguar']

var a=[]

n.forEach(e => {
    if(!a.includes(e))
        a.push(e)
})

console.log(a)

