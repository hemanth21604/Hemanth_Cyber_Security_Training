#include<stdio.h>
int main()
{
    int a, b, c, small;
    printf("Enter three numbers : ");
    scanf("%d%d%d", &a, &b, &c);
    if(a<b && a<c)
        small = a;
    else if(b<a && b<c)
        small = b;
    else
        small = c;
    printf("\nSmallest number is: %d", small);

    return 0;
}