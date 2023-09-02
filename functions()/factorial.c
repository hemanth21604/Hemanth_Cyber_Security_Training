//Create a function that calculates the factorial of a given integer.

#include<stdio.h>

int fact(int a)
{
    int i,n=1;
   for(i=1;i<=a;i++)
   {
    n=n*i;
   }
    
    return n;
}

int main()

{

   int n;

   printf("Enter any number:");

   scanf("%d",&n);
 
   printf("%d",fact(n));

   return 0;

}