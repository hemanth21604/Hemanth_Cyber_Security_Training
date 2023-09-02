//Implement a function to check if a number is prime.

#include<stdio.h>

char* prime(int n)
{
  int i=1,j;

    for(j=2;j<=n/2;j++)
    {
        if(n%j == 0){
            i=0;
            break;
        }
    }
    if(i == 1)
    {
        printf("Prime Number");
    }
    else
    {
        printf("Not Prime Number");
    }
}
int main()
{
  int n;
  printf("Enter any number:");
  scanf("%d",&n);
  
  
    return 0;
}