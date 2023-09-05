n = 5;
a=[n];
a.forEach(e=>
    {
        fact=1;
        for(i=2;i<=e;i++)
        {
            fact=fact*i;
        }
        console.log(fact);
    })
