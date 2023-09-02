//Create a function to find the average of a list of numbers.

#include<stdio.h>

float avg(int a[],int n)
{
    float s=0,avg=0;
    int j;
    for(j=0;j<n;j++)
    {
    s=s+a[j];
    }
    avg=s/n;
   return avg;

}
int main()
{
    
    int i,n;
   
    printf("Enter Size:");
    scanf("%d",&n);
    int a[n];
    printf("Enter Elements:");
    for(i=0;i<n;i++)
    {
      scanf("%d",&a[i]);
    }
    printf("The Average Value:%f",avg(a,n));
    return 0;
}