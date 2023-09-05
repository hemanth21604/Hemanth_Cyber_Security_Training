str=['top','nursesrun','mom'];
c=[];
str.forEach((e)=> {
    
          if(e==e.split('').reverse().join(''))
          {
            c.push("Palindrome")
          }
          else{
            c.push("Not Palindrome")
          }
     
});

console.log(c)