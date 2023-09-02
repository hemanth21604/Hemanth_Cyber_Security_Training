//Write a function that takes two integers as input and returns their sum.

#include<stdio.h>
int sum(int a ,int b)
{
    return a+b;
}
int main()
{
   int a,b;
   printf("Enter First Number:");
   scanf("%d",&a);
   printf("Enter Second Number:");
   scanf("%d",&b);

   printf("Sum %d",sum(a,b));


    return 0;

}