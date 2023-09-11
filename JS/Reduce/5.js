var n=['hemanth','jeeva','kavin','shanmugam','santhosh']

m=n.reduce((acc,b) => acc= acc.length<b.length ? b:acc)

console.log(m)
