//Create a function to count the number of vowels in a string.

#include<stdio.h>

int vow(char st[])
{
  int i,vo=0;
  for(i=0;i<strlen(st);i++)
{
    char l=st[i];
    if(l=='a'||l=='e'||l=='i'||l=='o'||l=='u'||l=='A'||l=='E'||l=='I'||l=='O'||l=='U')
        vo++;
}
  return vo;
}
   
int main()
{
    char str[100];
    
printf("Enter the String:");
scanf("%s",&str);

   printf("Number of Vowels in string: %d",vow(str));
    return 0;
}