/* Primenum.c - Drive: https://drive.google.com/open?id=1XQa4NKOK-XEJ-lQe_XPk3KjNgx7lz_pM&usp=drive_copy */
#include <stdio.h>
#include <math.h>
int main(void){ int limit=20; for(int n=2;n<=limit;n++){ int ok=1; for(int i=2;i<=sqrt(n);i++) if(n%i==0){ ok=0; break; } if(ok) printf("%d ", n);} printf("\n"); return 0; }
