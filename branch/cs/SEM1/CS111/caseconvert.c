/*
 * caseconvert.c
 * Drive: https://drive.google.com/open?id=1_nwuwTVlXzAv5nFtYRnpi9qta9dlokHr&usp=drive_copy
 */
#include <stdio.h>
#include <ctype.h>

int main(void){
    char s[] = "Hello World";
    for(int i=0; s[i]; i++) s[i] = toupper((unsigned char)s[i]);
    printf("%s\n", s);
    return 0;
}
