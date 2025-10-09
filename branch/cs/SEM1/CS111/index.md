<div align="center">

<div align="center" style="color:orange; margin-top: 10px;">

## 🖥️ CS111 — Introduction to Programming Lab

</div>

<div align="center" style="margin-top: 5px; color:white;">

- The Programming Lab (CS111) provides hands-on experience in coding, helping students implement algorithms, develop programs, and strengthen computational thinking through practical exercises.

</div>

<div align="center" style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">

  <img src="https://img.shields.io/badge/Lab-CS111-6366F1?style=for-the-badge&labelColor=312E81" alt="Lab Badge" />
  <img src="https://img.shields.io/badge/Language-C-00599C?style=for-the-badge&labelColor=004482&logo=c" alt="Language Badge" />
  <img src="https://img.shields.io/badge/Programs-39-10B981?style=for-the-badge&labelColor=065F46" alt="Programs Badge" />

</div>

_Basic C programming exercises for beginners_

</div>

---

<div align="center">
<p>Click any program below to view the complete source code</p>
</div>

### 🎯 Basic Operations

<details>
<summary><b>1. add.c</b> · Addition of Two Numbers</summary>

```c
#include <stdio.h>

int main(void) {
    int a = 2, b = 3;
    printf("%d + %d = %d\n", a, b, a + b);
    return 0;
}
```

</details>

<details>
<summary><b>32. sum.c</b> · Sum of Two Numbers</summary>

```c
#include <stdio.h>

int main(void) {
    int a = 1, b = 2;
    printf("Sum: %d\n", a + b);
    return 0;
}
```

</details>

<details>
<summary><b>24. mul.c</b> · Multiplication</summary>

```c
#include <stdio.h>

int main(void) {
    int a = 6, b = 7;
    printf("%d * %d = %d\n", a, b, a * b);
    return 0;
}
```

</details>

<details>
<summary><b>17. division.c</b> · Division Operation</summary>

```c
#include <stdio.h>

int main(void) {
    double a = 10.0, b = 3.0;
    printf("%.2f / %.2f = %.2f\n", a, b, a / b);
    return 0;
}
```

</details>

<details>
<summary><b>14. dif1.c</b> · Difference Method 1</summary>

```c
#include <stdio.h>

int main(void) {
    int a = 10, b = 3;
    int diff = a - b;
    printf("Difference: %d\n", diff);
    return 0;
}
```

</details>

<details>
<summary><b>15. dif2.c</b> · Difference Method 2 (Absolute)</summary>

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int a = 5, b = 12;
    int diff = abs(a - b);
    printf("Absolute difference: %d\n", diff);
    return 0;
}
```

</details>

<details>
<summary><b>20. hello.c</b> · Hello World</summary>

```c
#include <stdio.h>

int main(void) {
    printf("Hello, world!\n");
    return 0;
}
```

</details>

<br/>

### 📐 Geometric Calculations

<details>
<summary><b>2. areac.c</b> · Area of Circle</summary>

```c
#include <stdio.h>

int main(void) {
    double r = 1.5;
    printf("Area of circle (r=%.2f): %.4f\n", r, 3.14159 * r * r);
    return 0;
}
```

</details>

<details>
<summary><b>3. areaR.c</b> · Area of Rectangle</summary>

```c
#include <stdio.h>

int main(void) {
    double length = 5.0, width = 3.0;
    double area = length * width;
    printf("Area of rectangle: %.2f\n", area);
    return 0;
}
```

</details>

<details>
<summary><b>4. areaRec.c</b> · Area of Rectangle (User Input)</summary>

```c
#include <stdio.h>

int main(void) {
    double length, width;
    printf("Enter length: ");
    scanf("%lf", &length);
    printf("Enter width: ");
    scanf("%lf", &width);
    printf("Area: %.2f\n", length * width);
    return 0;
}
```

</details>

<details>
<summary><b>23. milage.c</b> · Compute Mileage</summary>

```c
#include <stdio.h>

int main(void) {
    double distance = 150.0, fuel = 10.0;
    printf("Mileage: %.2f km/l\n", distance / fuel);
    return 0;
}
```

</details>

<br/>

### 🧮 Calculators

<details>
<summary><b>6. Calc.c</b> · Simple Calculator</summary>

```c
#include <stdio.h>

int main(void) {
    double a, b;
    char op;
    printf("Enter operation (a op b): ");
    scanf("%lf %c %lf", &a, &op, &b);

    switch(op) {
        case '+': printf("%.2f\n", a + b); break;
        case '-': printf("%.2f\n", a - b); break;
        case '*': printf("%.2f\n", a * b); break;
        case '/': printf("%.2f\n", a / b); break;
        default: printf("Invalid operator\n");
    }
    return 0;
}
```

</details>

<details>
<summary><b>7. Calculator.c</b> · Enhanced Calculator</summary>

```c
#include <stdio.h>

int main(void) {
    double num1, num2, result;
    char operator;

    printf("Enter first number: ");
    scanf("%lf", &num1);
    printf("Enter operator (+, -, *, /): ");
    scanf(" %c", &operator);
    printf("Enter second number: ");
    scanf("%lf", &num2);

    switch(operator) {
        case '+':
            result = num1 + num2;
            printf("%.2f + %.2f = %.2f\n", num1, num2, result);
            break;
        case '-':
            result = num1 - num2;
            printf("%.2f - %.2f = %.2f\n", num1, num2, result);
            break;
        case '*':
            result = num1 * num2;
            printf("%.2f * %.2f = %.2f\n", num1, num2, result);
            break;
        case '/':
            if(num2 != 0) {
                result = num1 / num2;
                printf("%.2f / %.2f = %.2f\n", num1, num2, result);
            } else {
                printf("Error: Division by zero\n");
            }
            break;
        default:
            printf("Invalid operator\n");
    }
    return 0;
}
```

</details>

<br/>

### 🔢 Number Operations

<details>
<summary><b>16. DigitSum.c</b> · Sum of Digits</summary>

```c
#include <stdio.h>

int main(void) {
    int n = 12345, sum = 0;
    while(n) {
        sum += n % 10;
        n /= 10;
    }
    printf("Digit sum: %d\n", sum);
    return 0;
}
```

</details>

<details>
<summary><b>12. DecToBin.c</b> · Decimal to Binary Conversion</summary>

```c
#include <stdio.h>

void dec_to_bin(unsigned n) {
    if(n > 1) dec_to_bin(n / 2);
    printf("%u", n % 2);
}

int main(void) {
    unsigned n = 13;
    printf("%u in binary: ", n);
    dec_to_bin(n);
    printf("\n");
    return 0;
}
```

</details>

<details>
<summary><b>5. bitOE.c</b> · Check Odd or Even (Bitwise)</summary>

```c
#include <stdio.h>

int main(void) {
    int n = 7;
    if(n & 1)
        printf("%d is odd\n", n);
    else
        printf("%d is even\n", n);
    return 0;
}
```

</details>

<details>
<summary><b>26. Powof2.c</b> · Check Power of Two</summary>

```c
#include <stdio.h>

int main(void) {
    int n = 16;
    int ok = (n > 0) && ((n & (n - 1)) == 0);
    printf("%d is %spower of two\n", n, ok ? "" : "not ");
    return 0;
}
```

</details>

<details>
<summary><b>18. FibboSeries.c</b> · Fibonacci Series</summary>

```c
#include <stdio.h>

int main(void) {
    int n = 10, a = 0, b = 1, next;

    printf("Fibonacci Series: %d %d ", a, b);
    for(int i = 2; i < n; i++) {
        next = a + b;
        printf("%d ", next);
        a = b;
        b = next;
    }
    printf("\n");
    return 0;
}
```

</details>

<details>
<summary><b>27. Prime.c</b> · Check Prime Number</summary>

```c
#include <stdio.h>
#include <math.h>

int main(void) {
    int n = 17, ok = 1;
    if(n <= 1) ok = 0;
    else {
        for(int i = 2; i <= sqrt(n); i++)
            if(n % i == 0) {
                ok = 0;
                break;
            }
    }
    printf("%d is %sprime\n", n, ok ? "" : "not ");
    return 0;
}
```

</details>

<details>
<summary><b>11. Dcprime.c</b> · Check Prime (Optimized)</summary>

```c
#include <stdio.h>

int main(void) {
    int n = 29, isPrime = 1;

    if(n <= 1) isPrime = 0;
    else if(n == 2) isPrime = 1;
    else if(n % 2 == 0) isPrime = 0;
    else {
        for(int i = 3; i * i <= n; i += 2) {
            if(n % i == 0) {
                isPrime = 0;
                break;
            }
        }
    }

    printf("%d is %sprime\n", n, isPrime ? "" : "not ");
    return 0;
}
```

</details>

<details>
<summary><b>28. Primenum.c</b> · Print Prime Numbers</summary>

```c
#include <stdio.h>
#include <math.h>

int main(void) {
    int limit = 20;
    printf("Prime numbers up to %d: ", limit);

    for(int n = 2; n <= limit; n++) {
        int ok = 1;
        for(int i = 2; i <= sqrt(n); i++)
            if(n % i == 0) {
                ok = 0;
                break;
            }
        if(ok) printf("%d ", n);
    }
    printf("\n");
    return 0;
}
```

</details>

<br/>

### 📝 String Operations

<details>
<summary><b>29. Reverse.c</b> · Reverse a String</summary>

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char s[] = "hello";
    printf("Original: %s\n", s);
    printf("Reversed: ");
    for(int i = strlen(s) - 1; i >= 0; i--)
        putchar(s[i]);
    putchar('\n');
    return 0;
}
```

</details>

<details>
<summary><b>8. caseconvert.c</b> · Convert to Uppercase</summary>

```c
#include <stdio.h>
#include <ctype.h>

int main(void) {
    char s[] = "Hello World";
    for(int i = 0; s[i]; i++)
        s[i] = toupper((unsigned char)s[i]);
    printf("%s\n", s);
    return 0;
}
```

</details>

<details>
<summary><b>9. caseconvert1.c</b> · Convert to Lowercase</summary>

```c
#include <stdio.h>
#include <ctype.h>

int main(void) {
    char s[] = "HELLO WORLD";
    for(int i = 0; s[i]; i++)
        s[i] = tolower((unsigned char)s[i]);
    printf("%s\n", s);
    return 0;
}
```

</details>

<details>
<summary><b>10. caseconvert2.c</b> · Toggle Case</summary>

```c
#include <stdio.h>
#include <ctype.h>

int main(void) {
    char s[] = "HeLLo WoRLd";
    for(int i = 0; s[i]; i++) {
        if(isupper(s[i]))
            s[i] = tolower(s[i]);
        else if(islower(s[i]))
            s[i] = toupper(s[i]);
    }
    printf("%s\n", s);
    return 0;
}
```

</details>

<details>
<summary><b>31. StrLen.c</b> · String Length</summary>

```c
#include <stdio.h>

int main(void) {
    char str[] = "Hello World";
    int len = 0;

    while(str[len] != '\0')
        len++;

    printf("Length of '%s': %d\n", str, len);
    return 0;
}
```

</details>

<details>
<summary><b>25. Palindrome.c</b> · Check Palindrome</summary>

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char str[] = "madam";
    int len = strlen(str);
    int isPalindrome = 1;

    for(int i = 0; i < len / 2; i++) {
        if(str[i] != str[len - 1 - i]) {
            isPalindrome = 0;
            break;
        }
    }

    printf("%s is %sa palindrome\n", str, isPalindrome ? "" : "not ");
    return 0;
}
```

</details>

<br/>

### 🔄 Comparison & Swap

<details>
<summary><b>21. Largest2.c</b> · Largest of Two Numbers</summary>

```c
#include <stdio.h>

int main(void) {
    int a = 10, b = 20;
    int largest = (a > b) ? a : b;
    printf("Largest: %d\n", largest);
    return 0;
}
```

</details>

<details>
<summary><b>22. Largest3.c</b> · Largest of Three Numbers</summary>

```c
#include <stdio.h>

int main(void) {
    int a = 10, b = 25, c = 15;
    int largest = a;

    if(b > largest) largest = b;
    if(c > largest) largest = c;

    printf("Largest: %d\n", largest);
    return 0;
}
```

</details>

<details>
<summary><b>33. swap1.c</b> · Swap Using Temp Variable</summary>

```c
#include <stdio.h>

int main(void) {
    int a = 5, b = 10, temp;

    printf("Before swap: a = %d, b = %d\n", a, b);
    temp = a;
    a = b;
    b = temp;
    printf("After swap: a = %d, b = %d\n", a, b);

    return 0;
}
```

</details>

<details>
<summary><b>34. Swap2.c</b> · Swap Without Temp Variable</summary>

```c
#include <stdio.h>

int main(void) {
    int a = 5, b = 10;

    printf("Before swap: a = %d, b = %d\n", a, b);
    a = a + b;
    b = a - b;
    a = a - b;
    printf("After swap: a = %d, b = %d\n", a, b);

    return 0;
}
```

</details>

<br/>

### 🍬 Practice Problems

<details>
<summary><b>36. SweetDistribute.c</b> · Distribute Sweets</summary>

```c
#include <stdio.h>

int main(void) {
    int sweets = 10, kids = 3;
    printf("Each gets %d sweets\n", sweets / kids);
    return 0;
}
```

</details>

<details>
<summary><b>35. sweet.c</b> · Sweet Distribution (Detailed)</summary>

```c
#include <stdio.h>

int main(void) {
    int sweets = 20, kids = 4;
    printf("Total sweets: %d\n", sweets);
    printf("Number of kids: %d\n", kids);
    printf("Each kid gets: %d sweets\n", sweets / kids);
    printf("Remaining: %d sweets\n", sweets % kids);
    return 0;
}
```

</details>

<details>
<summary><b>37. sweets.c</b> · Sweets Calculation</summary>

```c
#include <stdio.h>

int main(void) {
    int total = 15, eaten = 3, remaining;
    remaining = total - eaten;
    printf("Total sweets: %d\n", total);
    printf("Eaten: %d\n", eaten);
    printf("Remaining: %d\n", remaining);
    return 0;
}
```

</details>

<br/>

### 🔧 Miscellaneous

<details>
<summary><b>19. header_files.c</b> · Header Files Example</summary>

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

int main(void) {
    printf("Header files example\n");
    printf("Using stdio.h for input/output\n");
    printf("Using stdlib.h for utilities\n");
    printf("Using string.h for string operations\n");
    printf("Using math.h for mathematical functions\n");
    return 0;
}
```

</details>

<details>
<summary><b>13. des.c</b> · Descriptive Example</summary>

```c
#include <stdio.h>

int main(void) {
    printf("This is a descriptive program example\n");
    printf("It demonstrates basic C syntax\n");
    return 0;
}
```

</details>

<details>
<summary><b>30. s.c</b> · Simple Program</summary>

```c
#include <stdio.h>

int main(void) {
    printf("Simple test program\n");
    return 0;
}
```

</details>

<details>
<summary><b>38. test.c</b> · Test Program</summary>

```c
#include <stdio.h>

int main(void) {
    printf("This is a test program\n");
    printf("Testing basic C operations\n");
    return 0;
}
```

</details>

<details>
<summary><b>39. wsemi.c</b> · Semicolon Example</summary>

```c
#include <stdio.h>

int main(void) {
    int x = 5;
    int y = 10;
    int sum = x + y;
    printf("Sum of %d and %d is %d\n", x, y, sum);
    return 0;
}
```

</details>

---

<div align="center" style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 10px;">
  <a href="https://github.com/RAJ8664/CS-101" target="_blank">Extra Lab Codes</a>
  <span>|</span>
  <a href="https://github.com/RAJ8664/C" target="_blank">Advance C</a>
  <span>|</span>
  <a href="../" target="_blank">← Back to SEM1</a>
</div>
