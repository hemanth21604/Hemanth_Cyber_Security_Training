var n = [
    { category: 'A', cost: 10 },
    { category: 'B', cost: 40 },
    { category: 'A', cost: 30 },
    { category: 'B', cost: 12 },
    { category: 'c', cost: 26 }
  ];

total=n.reduce((acc,e) => {
    var {category,cost}=e

    if(!acc[category])
         acc[category]=cost;
    else
        acc[category]+=cost;

    
    return acc
        
},{})

console.log(total)

