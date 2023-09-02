const ar1=[3,4,7,1,5,7,4,2];

//Normal function

/*function fu1(e,i)
{
   console.log(e,i)
}
ar1.forEach(fu1)*/

//Arrow Function

/*ar1.forEach(e=>
    {
        console.log(e)
    })*/

//Anonmys Function

/*ar1.forEach(function(e)
{
    console.log(e)
})*/

//Anomys Function with passing Vraiables

/*p=function(e)
{
    console.log(e)
}
ar1.forEach(p)*/


//Arrow

/*b=ar1.map(e=>e*2)
{
    console.log(b)
}*/

//Anonmys Function passing variables

/*b=function(e)
{
    console.log(e*2+1);
}

ar1.map(b)*/

//Anonmys Function

/*a=ar1.map(function(e)
{
    return e*e
})
console.log(a)*/

//Normal Function


function fu1(e)
{
   return e*2
}
a=ar1.map(fu1)
console.log(a)









