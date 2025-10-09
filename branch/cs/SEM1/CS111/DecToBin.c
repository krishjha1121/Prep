/*
 * DecToBin.c
 * Drive: https://drive.google.com/open?id=1-E3Imz6dMC9bDv8YEWi1XxrFmVXtibNH&usp=drive_copy
 */
#include <stdio.h>

void dec_to_bin(unsigned n){
    if(n>1) dec_to_bin(n/2);
    printf("%u", n%2);
}

int main(void){
    unsigned n=13;
    printf("%u in binary: ", n); dec_to_bin(n); printf("\n");
    return 0;
}
