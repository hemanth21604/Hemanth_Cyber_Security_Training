//Write a function that converts Celsius to Fahrenheit.

#include<stdio.h>

float cel(float n)
{

    return n*9/5+32;
    
}

int main()
{
   float c,fah;
   printf("Enter The Celsius Value:");
   scanf("%f",&c);

    printf("The Fahrenheit Value:%f",cel(c));

    return 0;
}