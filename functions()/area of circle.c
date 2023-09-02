//Write a function to calculate the area of a circle given its radius.

#include<stdio.h>
float area(int a)
{
    float pi=3.14;
    
    return (pi*a*a);
}

int main()
{
    int r;
    printf("Enter the Radius Value:");
    scanf("%d",&r);
    
    printf("The Area of Circle is:%f",area(r));

    return 0;
}