var n=['karthee','hemanth','shanthi','mani','srikanth','hemanth']


m=n.reduce( (a,b)  => {
    a[b]= a[b] ? a[b]+1 : 1;

    return a
},{})

console.log(m)
