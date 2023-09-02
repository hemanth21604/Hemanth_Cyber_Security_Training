//Implement a function that reverses a given list.

#include<stdio.h>
int rev(int a[],int l)
{
    int i;
 printf("Reversed Array:\n");
 for(i=l-1;i>=0;i--)
 {
    printf("%d\n",a[i]);
 }
}



int main()
{
  int n;
  printf("Enter the Size of Array:");
  scanf("%d",&n);

  int a[n],i;
  for(i=0;i<n;i++)
  {
  printf("Enter the Element %d:",i+1);
  scanf("%d",&a[i]);
  }
  rev(a,n);

    return 0;
}