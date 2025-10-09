# CS111 — (Subject folder)

Purpose

This folder holds CS111 resources: lecture notes, lab files, sample code, and PYQs.

How to add files

- Add PDFs and code. For code, prefer a `code/` subfolder (e.g., `code/examples/`).
- Use descriptive filenames like `CS111_Mid_2024.pdf` or `CS111_Lab1.zip`.

Naming conventions

- `CS111_Type_Year.pdf` for exam papers/notes.

Indexing & linking

- Keep an index here inside the README. If you want links added to the SEM1 index page, I can add them.

Permissions

- Avoid uploading copyrighted or sensitive content without permission.

---


Code examples (click a filename to expand and view the source):

> Tip: use the Drive links at the bottom to fetch originals. Local stubs include the original Drive URL in a header comment.

<!-- Collapsible code blocks for files present in this folder -->

<details>
<summary><strong>add.c</strong> — simple add example</summary>

[Original on Drive](https://drive.google.com/open?id=1frC0FcPdoVwbrsjM-Mkb2EBAMG54Y7Dt&usp=drive_copy)

```c
/*
 * Source: add.c
 * Original Drive link: https://drive.google.com/open?id=1frC0FcPdoVwbrsjM-Mkb2EBAMG54Y7Dt&usp=drive_copy
 * Minimal stub
 */
#include <stdio.h>

int main(void) {
	int a = 2, b = 3;
	printf("%d + %d = %d\n", a, b, a + b);
	return 0;
}
```

</details>

<details>
<summary><strong>areac.c</strong> — area of circle</summary>

[Original on Drive](https://drive.google.com/open?id=1j-V9I9SP7FPkpox8NRoDCTymFOKISjP3&usp=drive_copy)

```c
/*
 * areac.c
 * Drive: https://drive.google.com/open?id=1j-V9I9SP7FPkpox8NRoDCTymFOKISjP3&usp=drive_copy
 */
#include <stdio.h>

int main(void){
	double r = 1.5;
	printf("Area of circle (r=%.2f): %.4f\n", r, 3.14159 * r * r);
	return 0;
}
```

</details>

<details>
<summary><strong>caseconvert.c</strong> — string case conversion</summary>

[Original on Drive](https://drive.google.com/open?id=1_nwuwTVlXzAv5nFtYRnpi9qta9dlokHr&usp=drive_copy)

```c
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
```

</details>

<details>
<summary><strong>DecToBin.c</strong> — decimal to binary (recursive)</summary>

[Original on Drive](https://drive.google.com/open?id=1-E3Imz6dMC9bDv8YEWi1XxrFmVXtibNH&usp=drive_copy)

```c
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
```

</details>

<details>
<summary><strong>DigitSum.c</strong> — sum digits of an integer</summary>

[Original on Drive](https://drive.google.com/open?id=1hnxLaiCH59n_9e0Z2fWo-YYkSUUTS9sK&usp=drive_copy)

```c
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
```

</details>

<details>
<summary><strong>Powof2.c</strong> — check power of two</summary>

[Original on Drive](https://drive.google.com/open?id=11iYFbZwQw7p9h8F1a39Q6BWbJY8wsnb7&usp=drive_copy)

```c
/* Powof2.c - Drive: https://drive.google.com/open?id=11iYFbZwQw7p9h8F1a39Q6BWbJY8wsnb7&usp=drive_copy */
#include <stdio.h>
int main(void){ int n=16; int ok = (n & (n-1))==0; printf("%d is %spower of two\n", n, ok?"":"not "); return 0; }
```

</details>

<details>
<summary><strong>Prime.c</strong> — primality test example</summary>

[Original on Drive](https://drive.google.com/open?id=1BqKGCQHpy3xuy32AjDdZDAcif1EA68Ro&usp=drive_copy)

```c
/* Prime.c - Drive: https://drive.google.com/open?id=1BqKGCQHpy3xuy32AjDdZDAcif1EA68Ro&usp=drive_copy */
#include <stdio.h>
#include <math.h>
int main(void){ int n=17, ok=1; for(int i=2;i<=sqrt(n);i++) if(n%i==0) ok=0; printf("%d is %sprime\n", n, ok?"":"not "); return 0; }
```

</details>

<details>
<summary><strong>Primenum.c</strong> — list primes to a limit</summary>

[Original on Drive](https://drive.google.com/open?id=1XQa4NKOK-XEJ-lQe_XPk3KjNgx7lz_pM&usp=drive_copy)

```c
/* Primenum.c - Drive: https://drive.google.com/open?id=1XQa4NKOK-XEJ-lQe_XPk3KjNgx7lz_pM&usp=drive_copy */
#include <stdio.h>
#include <math.h>
int main(void){ int limit=20; for(int n=2;n<=limit;n++){ int ok=1; for(int i=2;i<=sqrt(n);i++) if(n%i==0){ ok=0; break; } if(ok) printf("%d ", n);} printf("\n"); return 0; }
```

</details>

<details>
<summary><strong>Reverse.c</strong> — reverse a string</summary>

[Original on Drive](https://drive.google.com/open?id=1YTc7OXpf3EEVsEmOHuyi_JMT7j2MmiRN&usp=drive_copy)

```c
/* Reverse.c - Drive: https://drive.google.com/open?id=1YTc7OXpf3EEVsEmOHuyi_JMT7j2MmiRN&usp=drive_copy */
#include <stdio.h>
#include <string.h>
int main(void){ char s[]="hello"; for(int i=strlen(s)-1;i>=0;i--) putchar(s[i]); putchar('\n'); return 0; }
```

</details>

<details>
<summary><strong>SweetDistribute.c</strong> — distribute sweets example</summary>

[Original on Drive](https://drive.google.com/open?id=1Dly_KZUjS2V4bKboGjFomWLI1SR8DWaR&usp=drive_copy)

```c
/* SweetDistribute.c - Drive: https://drive.google.com/open?id=1Dly_KZUjS2V4bKboGjFomWLI1SR8DWaR&usp=drive_copy */
#include <stdio.h>
int main(void){ int sweets=10, kids=3; printf("Each gets %d\n", sweets/kids); return 0; }
```

</details>

<details>
<summary><strong>hello.c</strong> — hello world</summary>

[Original on Drive](https://drive.google.com/open?id=1GGChWuK3ePvEF8F8DhAJSIehPUFP76wP&usp=drive_copy)

```c
/*
 * hello.c
 * Drive: https://drive.google.com/open?id=1GGChWuK3ePvEF8F8DhAJSIehPUFP76wP&usp=drive_copy
 */
#include <stdio.h>

int main(void){ printf("Hello, world!\n"); return 0; }
```

</details>

<details>
<summary><strong>milage.c</strong> — compute mileage</summary>

[Original on Drive](https://drive.google.com/open?id=1U1JBsL0N38P5zu0Ct0rTEs2DaNvtLKlm&usp=drive_copy)

```c
/* milage.c - Drive: https://drive.google.com/open?id=1U1JBsL0N38P5zu0Ct0rTEs2DaNvtLKlm&usp=drive_copy */
#include <stdio.h>
int main(void){ double d=150,f=10; printf("Mileage: %.2f km/l\n", d/f); return 0; }
```

</details>

<details>
<summary><strong>sum.c</strong> — sum two numbers</summary>

[Original on Drive](https://drive.google.com/open?id=1WwgBstHnZlmmKadZQDOuQCItxG9KWepo&usp=drive_copy)

```c
/* sum.c - Drive: https://drive.google.com/open?id=1WwgBstHnZlmmKadZQDOuQCItxG9KWepo&usp=drive_copy */
#include <stdio.h>
int main(void){ int a=1,b=2; printf("Sum: %d\n", a+b); return 0; }
```

</details>

<details>
<summary><strong>header files.c</strong> — header files example (filename contains a space)</summary>

[Original on Drive](https://drive.google.com/open?id=1RnzGMy09nwSYaNt6lXJjqkoibetOsvzQ&usp=drive_copy)

```c
/*
 * header files.c
 * Drive: https://drive.google.com/open?id=1RnzGMy09nwSYaNt6lXJjqkoibetOsvzQ&usp=drive_copy
 * Note: Filename contains space to match original; consider renaming to header_files.c
 */
#include <stdio.h>

int main(void){
	printf("Header files example\n");
	return 0;
}
```

</details>

---

All files (Drive links and local status)

| # | File | Drive link | Local |
|---|------|------------|:-----:|
| 1 | add.c | https://drive.google.com/open?id=1frC0FcPdoVwbrsjM-Mkb2EBAMG54Y7Dt&usp=drive_copy | ✅ |
| 2 | areac.c | https://drive.google.com/open?id=1j-V9I9SP7FPkpox8NRoDCTymFOKISjP3&usp=drive_copy | ✅ |
| 3 | areaR.c | https://drive.google.com/open?id=1I50qtV9OVNRXnuuUQPt2kZkJfEB-DvZA&usp=drive_copy | ❌ |
| 4 | areaRec.c | https://drive.google.com/open?id=1Q4eZSMGMelnuX-kxiSCZ3IOEn3hwUEQW&usp=drive_copy | ❌ |
| 5 | bitOE.c | https://drive.google.com/open?id=1naI533BVewrk8IYloTLB4bUblEczYhgb&usp=drive_copy | ❌ |
| 6 | Calc.c | https://drive.google.com/open?id=14YRXlx0HNmJSZZYRG3qvRM8_Q76DltCd&usp=drive_copy | ❌ |
| 7 | Calculator.c | https://drive.google.com/open?id=1KM07q4gbv3PeUJNT_SwhjiIXow_kMpIv&usp=drive_copy | ❌ |
| 8 | caseconvert.c | https://drive.google.com/open?id=1_nwuwTVlXzAv5nFtYRnpi9qta9dlokHr&usp=drive_copy | ✅ |
| 9 | caseconvert1.c | https://drive.google.com/open?id=108FMhm6xtoAq8BVGCExxHVi13RINpFrR&usp=drive_copy | ❌ |
| 10 | caseconvert2.c | https://drive.google.com/open?id=110dfmKyOI70vWIPu049Q_XJWSQR3M7ZE&usp=drive_copy | ❌ |
| 11 | Dcprime.c | https://drive.google.com/open?id=1gbzhiOu3TaCBMmYdJNly4Wk44u3YKFr3&usp=drive_copy | ❌ |
| 12 | DecToBin.c | https://drive.google.com/open?id=1-E3Imz6dMC9bDv8YEWi1XxrFmVXtibNH&usp=drive_copy | ✅ |
| 13 | des.c | https://drive.google.com/open?id=1fTkaYXx3yF6Rju_5P8ixSX509KpSRIPl&usp=drive_copy | ❌ |
| 14 | dif1.c | https://drive.google.com/open?id=1wT2jcnRXErEv_LjIgxOaSAPkWeXq0mRR&usp=drive_copy | ❌ |
| 15 | dif2.c | https://drive.google.com/open?id=1JqrljSYOjSFZj7NmuHLIqb2FxtGYdAIf&usp=drive_copy | ❌ |
| 16 | DigitSum.c | https://drive.google.com/open?id=1hnxLaiCH59n_9e0Z2fWo-YYkSUUTS9sK&usp=drive_copy | ✅ |
| 17 | division.c | https://drive.google.com/open?id=1vcjWjYtyECaZlfDpK2KS1wNYzPSQMHFb&usp=drive_copy | ❌ |
| 18 | FibboSeries.c | https://drive.google.com/open?id=1PS9lyJyHeMfnyx6_7pT4vdXJgdiRRhTk&usp=drive_copy | ❌ |
| 19 | header_files.c | https://drive.google.com/open?id=1RnzGMy09nwSYaNt6lXJjqkoibetOsvzQ&usp=drive_copy | ✅ (space in filename) |
| 20 | hello.c | https://drive.google.com/open?id=1GGChWuK3ePvEF8F8DhAJSIehPUFP76wP&usp=drive_copy | ✅ |
| 21 | Largest2.c | https://drive.google.com/open?id=1tbbBczoX9mUCr2cQFA0cqPJHmPMZ62Lf&usp=drive_copy | ❌ |
| 22 | Largest3.c | https://drive.google.com/open?id=1A3JURCSWjNuX15dexGhWr-3m5lwNPetJ&usp=drive_copy | ❌ |
| 23 | milage.c | https://drive.google.com/open?id=1U1JBsL0N38P5zu0Ct0rTEs2DaNvtLKlm&usp=drive_copy | ✅ |
| 24 | mul.c | https://drive.google.com/open?id=17EQ_2U4KKUpwvQoz2T3DDoaJMLWKjqY7&usp=drive_copy | ❌ |
| 25 | Palindrome.c | https://drive.google.com/open?id=12tpSrbgFeM289ubHDtM575zhBvDnXjL-&usp=drive_copy | ❌ |
| 26 | Powof2.c | https://drive.google.com/open?id=11iYFbZwQw7p9h8F1a39Q6BWbJY8wsnb7&usp=drive_copy | ✅ |
| 27 | Prime.c | https://drive.google.com/open?id=1BqKGCQHpy3xuy32AjDdZDAcif1EA68Ro&usp=drive_copy | ✅ |
| 28 | Primenum.c | https://drive.google.com/open?id=1XQa4NKOK-XEJ-lQe_XPk3KjNgx7lz_pM&usp=drive_copy | ✅ |
| 29 | Reverse.c | https://drive.google.com/open?id=1YTc7OXpf3EEVsEmOHuyi_JMT7j2MmiRN&usp=drive_copy | ✅ |
| 30 | s.c | https://drive.google.com/open?id=1mnFEet-UBmVk9n0Crsc0Xq_7I8GqP_lw&usp=drive_copy | ❌ |
| 31 | StrLen.c | https://drive.google.com/open?id=1x0cI6zUWxkGvAshp9BYDQ9vW--oTjI06&usp=drive_copy | ❌ |
| 32 | sum.c | https://drive.google.com/open?id=1WwgBstHnZlmmKadZQDOuQCItxG9KWepo&usp=drive_copy | ✅ |
| 33 | swap1.c | https://drive.google.com/open?id=1R7-ZbocgZ39bS6wQ99QkMEt8S9FkU1Y-&usp=drive_copy | ❌ |
| 34 | Swap2.c | https://drive.google.com/open?id=1Rsr53HDmHo9kW5UBfni8hpubSpSTxh5f&usp=drive_copy | ❌ |
| 35 | sweet.c | https://drive.google.com/open?id=1iflTbHUHQHI7OBphcB-IazatxZ-A0odD&usp=drive_copy | ❌ |
| 36 | SweetDistribute.c | https://drive.google.com/open?id=1Dly_KZUjS2V4bKboGjFomWLI1SR8DWaR&usp=drive_copy | ✅ |
| 37 | sweets.c | https://drive.google.com/open?id=1XX33GhRnzgzrXcbh06QEYsdgUlz0B6NA&usp=drive_copy | ❌ |
| 38 | test.c | https://drive.google.com/open?id=1ZI6w9RbHWLcndxsXdJp6ml8oD3lJ5YG6&usp=drive_copy | ❌ |
| 39 | wsemi.c | https://drive.google.com/open?id=1QyN62Rs7bCl4KBF_XQMmQh5NaM37Kz5X&usp=drive_copy | ❌ |

If you want me to embed the code for the missing files, I can either:

- download and embed them if you place the files here in the repo, or
- leave their Drive links ready and create collapsible placeholders that link to Drive (I can do that now).

