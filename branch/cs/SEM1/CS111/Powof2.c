/* Powof2.c - Drive: https://drive.google.com/open?id=11iYFbZwQw7p9h8F1a39Q6BWbJY8wsnb7&usp=drive_copy */
#include <stdio.h>
int main(void){ int n=16; int ok = (n & (n-1))==0; printf("%d is %spower of two\n", n, ok?"":"not "); return 0; }
