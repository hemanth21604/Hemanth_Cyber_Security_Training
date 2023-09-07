str=['Radar','Nursesrun','Civic','Racecar','Hemu'];
c=[];
str.filter((e)=> {
    e=e.toLowerCase();
          if(e==e.split('').reverse().join(''))
          {
            c.push(e)
          }
     
});

console.log(c);