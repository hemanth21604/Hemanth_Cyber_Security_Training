//checks if a given number is even or odd.

#include<stdio.h>

int oddeve(int a)
{
   
   if(a%2==0)
   {
    printf("Even");
   }
   else
   {
    printf("Odd");
   } 
}

int main()

{

   int n;

   printf("Enter any number:");

   scanf("%d",&n);
 
   oddeve(n);

   return 0;

}


