//Run Using Browser.

Pin = "1234"; 

for (let i = 1; i <= 4; i++) 
{
     Guess = prompt(`Attempt ${i}: Enter a 4-digit PIN:`);

  if (Guess === Pin)
   {
    console.log("That was correct!");
    break; 
  } 
  else
   {
    console.log("Wrong");
    if (i === 4) 
    {
      console.log("You have used all your attempts.");
    }
  }
}
