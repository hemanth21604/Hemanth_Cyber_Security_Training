//Implement a function that checks if a list is sorted in ascending order.

#include<stdio.h>
int main()
{
    int i,j;
    int a[10]={7,6,9,2,5,1};

    for(i=0;i<strlen(a[10]);i++)
    {
        int min=a[i],temp;
          for(j=i+1;j<strlen(a[i]);j++)
          {
            if(min>a[j])
            {
                min=a[j];
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
          }
    }
for(i)
}