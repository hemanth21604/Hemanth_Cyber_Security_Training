let list=[{Category:'A'},{Category:'B'},{Category:'C'},
{Category:'C'},{Category:'E'},{Category:'A'},{Category:'G'},{Category:'E'}];

count = list.map(e => 
    {
        a=[]
        a['Category']=e.Category;

        return a;    
    });
    
console.log(count)
    
