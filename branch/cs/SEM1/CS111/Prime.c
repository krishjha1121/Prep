/* Prime.c - Drive: https://drive.google.com/open?id=1BqKGCQHpy3xuy32AjDdZDAcif1EA68Ro&usp=drive_copy */
#include <stdio.h>
#include <math.h>
int main(void){ int n=17, ok=1; for(int i=2;i<=sqrt(n);i++) if(n%i==0) ok=0; printf("%d is %sprime\n", n, ok?"":"not "); return 0; }
