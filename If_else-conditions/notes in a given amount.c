#include<stdio.h>
void main()
{
    int amount;
    int  nt2000=0,nt500=0,nt200=0,nt100=0,nt50=0,nt20=0,nt10=0,nt5=0,nt2=0,nt1=0;
    printf("Enter Amount");
    scanf("%d",&amount);
    printf("The total Amount is %d",amount);
    if(amount >= 2000)
    {
        nt2000 = amount/2000;
        amount -= nt500*2000;
    }
   else if(amount >= 500)
    {
        nt500 = amount/500;
        amount -= nt500*500;
    }
   else if(amount >= 200)
    {
        nt200 = amount/200;
        amount -= nt200*200;
    }
   else  if(amount >= 100)
    {
        nt100 = amount/100;
        amount -= nt100*100;
    }
   else if(amount >= 50)
    {
        nt50 = amount/50;
        amount -= nt50*50;
    }
   else if(amount >= 20)
    {
        nt20 = amount/20;
        amount -= nt20*20;
    }
   else if(amount >= 10)
    {
        nt10 = amount/10;
        amount -= nt10*10;
    }
   else if(amount >= 5)
    {
        nt5 = amount/5;
        amount -= nt5*5;
    }
   else if(amount >= 2)
    {
        nt2 = amount/2;
        amount -= nt2*2;
    }
   else if(amount >= 1)
    {
        nt1 = amount;
    }
    printf("\nThe total notes of 2000 are %d",nt2000);
    printf("\nThe total notes of 500 are %d",nt500);
    printf("\nThe total notes of 200 are %d",nt200);
    printf("\nThe total notes of 100 are %d",nt100);
    printf("\nThe total notes of 50 are %d",nt50);
    printf("\nThe total notes of 20 are %d",nt20);
    printf("\nThe total notes of 10 are %d",nt10);
    printf("\nThe total notes of 5  are %d",nt5);
    printf("\nThe total notes of 1 are %d",nt1);
}