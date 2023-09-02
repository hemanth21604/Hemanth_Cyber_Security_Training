//Create a function to check if a string is a palindrome.

#include <stdio.h>
  int palin(char str[])
  {
   int s = 0;
   int e = strlen(str) - 1;
    while (e > s) 
    {
        if (str[s++] != str[e--]) {
            printf("%s is not a palindrome\n", str);
            return 0;
        }
    }
  
    printf("%s is a palindrome\n", str);
}
int main()
{
    char str[100];
    printf("Enter any string:");
    gets(str);
    palin(str);
    return 0;
}
  

   