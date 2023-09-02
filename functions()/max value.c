//Write a function that finds the maximum value in a list of numbers.

#include<stdio.h>

int large(int n1,int n2,int n3)
{
    if(n1>n2 && n1>n3)
    {
        printf("the maximum number is %d",n1);
    }
    else if(n2>n3)
    {
        printf("The maximum number is %d",n2);
    }
    else
    {
        printf("The maximum number is %d",n3);
    }
}

int main()

{
    int n1,n2,n3;
    printf("Enter three number");
    scanf("%d %d %d",&n1,&n2,&n3); 
    large(n1,n2,n3);

   return 0;

}


