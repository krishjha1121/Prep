/*
 * DigitSum.c
 * Drive: https://drive.google.com/open?id=1hnxLaiCH59n_9e0Z2fWo-YYkSUUTS9sK&usp=drive_copy
 */
#include <stdio.h>

int main(void){
    int n=12345, sum=0;
    while(n){ sum += n%10; n/=10; }
    printf("Digit sum: %d\n", sum);
    return 0;
}
